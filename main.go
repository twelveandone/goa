package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"github.com/kataras/iris/sessions"
	"goa/goa/core"
	"goa/goa/datasource"
	"goa/goa/repo"
	"goa/goa/service"
	"goa/goa/web"
	"log"
	"time"
	"fmt"
	"goa/goa/model"
	"flag"
	"strconv"
)

func main() {

	app := newApp()
	// 解析配置
	c := iris.TOML("./etc/app.tml")
	appConf := parseConfig(c.Other)
	// 初始化数据库连接
	db, err := datasource.Init(&appConf.SqlConf)
	if err != nil {
		app.Logger().Fatalf("db init error: %v", err)
		return
	}
	iris.RegisterOnInterrupt(func() {
		db.Close()
	})

	// ---- 初始化 session ----
	sessionManager := sessions.New(sessions.Config{
		Cookie:       "njzykjgoa",
		Expires:      12 * time.Hour,
		AllowReclaim: true,
	})

	//app.Use(securityMiddleware)

	// ---- 依赖注入 ----
	userService := service.NewUserService(repo.NewUserRepo(db))
	jobLogService := service.NewJobLogService(repo.NewJobLogRepo(db))
	proService := service.NewProService(repo.NewProjectRepo(db))
	organService := service.NewOrganService(repo.NewOrganRepo(db))
	typeService := service.NewJobTypeService(repo.NewJobTypeRepo(db))

	user := mvc.New(app.Party("/user"))
	user.Register(
		userService,
		sessionManager.Start,
	).Handle(new(web.UserController))

	admin := mvc.New(app.Party("/rest"))
	admin.Register(
		userService,
		jobLogService,
		proService,
		organService,
		typeService,
		sessionManager.Start,
	).Handle(new(web.RestController))

	// 首页
	app.Get("/", func(ctx iris.Context) {
		if !core.IsLoggedIn(sessionManager.Start(ctx)) {
			ctx.Redirect("/login")
			return
		}
		ctx.ViewData("Title", "首页")
		ctx.View("index.html")
	})

	//登录页
	app.Get("/login", func(ctx iris.Context) {
		if core.IsLoggedIn(sessionManager.Start(ctx)) {
			url := ctx.URLParam("url")
			if url != "" {
				ctx.Redirect(url)
			} else {
				ctx.Redirect("/")
			}
			return
		}
		ctx.View("login.html")
	})

	// 登录验证
	app.Post("/signin", func(ctx iris.Context) {
		s := sessionManager.Start(ctx)
		var (
			username    = ctx.FormValue("username")
			password    = ctx.FormValue("password")
			redirectUrl = ctx.FormValue("url")
		)
		u, ok := userService.GetByUsername(username)
		if !ok {
			ctx.JSON(iris.Map{"success": false, "msg": "用户不存在"})
			return
		}
		// 验证密码
		valid := model.Md5Password(password) == u.Password
		if !valid {
			ctx.JSON(iris.Map{"success": false, "msg": "密码不正确"})
			return
		}
		s.Set(core.UserId, u.ID)
		s.Set(core.AUTHENTICATED, true)
		s.Set(core.IsAdmin, u.IsAdmin)
		if redirectUrl != "" {
			ctx.JSON(iris.Map{"success": true, "url": redirectUrl})
			return
		}
		ctx.JSON(iris.Map{"success": true})
	})

	//登出
	app.Get("/logout", func(ctx iris.Context) {
		session := sessionManager.Start(ctx)
		session.Set(core.AUTHENTICATED, false)
		session.Destroy()
		ctx.Redirect("/login")
	})

	// 应用描述信息
	app.Get("/info", func(ctx iris.Context) {
		ctx.JSON(appConf.AppInfo)
	})

	port := flag.Int("p", 8080, "http listen port")
	flag.Parse()
	app.Run(iris.Addr(":"+strconv.Itoa(*port)), iris.WithConfiguration(c))
}

// todo
func securityMiddleware(ctx iris.Context) {

	fmt.Println(ctx.Path())
	fmt.Println(ctx.RequestPath(true))
	ctx.Next()
}

// 初始化app
func newApp() *iris.Application {
	app := iris.New()
	// 设置日志
	app.Logger().Prefix = []byte("[goa]")
	app.Logger().SetLevel("info")
	// 注册视图
	app.RegisterView(iris.HTML("./public", ".html").Reload(true))
	app.StaticWeb("/", "./public")
	//assetHandler := app.StaticHandler("./public", false, false)
	//app.SPA(assetHandler)
	app.Logger().Info("app is ready")
	return app
}

// 解析应用配置
func parseConfig(conf map[string]interface{}) core.AppConf {
	sqlConfMap, ok := conf["sqlConf"].(map[string]interface{})
	if ok != true {
		log.Fatal("sql config error")
	}
	infoConfMap, ok := conf["appInfo"].(map[string]interface{})
	if ok != true {
		log.Fatal(" app config error")
	}
	return core.AppConf{core.SqlConf{sqlConfMap["DriverName"].(string), sqlConfMap["DbUrl"].(string),
		sqlConfMap["ShowSql"].(bool), sqlConfMap["LogLevel"].(int64)}, core.AppInfo{infoConfMap["Name"].(string),
		infoConfMap["Desc"].(string), infoConfMap["Author"].(string)}}

}
