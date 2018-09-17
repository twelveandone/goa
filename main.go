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
)

func main() {

	app := spa()

	c := iris.TOML("./etc/app.tml")
	appConf := parseConfig(c.Other)

	// 初始化 orm 连接
	db, err := datasource.Init(&appConf.SqlConf)
	if err != nil {
		app.Logger().Fatalf("db init error: %v", err)
		return
	}
	iris.RegisterOnInterrupt(func() {
		db.Close()
	})

	// ---- web 业务部分 ----

	userRepo := repo.NewUserRepo(db)
	userService := service.NewUserService(userRepo)

	sessionManager := sessions.New(sessions.Config{
		Cookie:       "sessioncookiename",
		Expires:      12 * time.Hour,
		AllowReclaim: true,
	})

	user := mvc.New(app.Party("/user"))

	user.Register(
		userService,
		sessionManager.Start,
	)
	user.Handle(new(web.UserController))

	//app.Get("/", func(ctx iris.Context) {
	//	// Check if user is authenticated
	//	if auth, _ := sessionManager.Start(ctx).GetBoolean("authenticated"); !auth {
	//		ctx.StatusCode(iris.StatusForbidden)
	//		return
	//	}
	//	ctx.View("index.html")
	//})
	//
	//app.Get("/info", func(ctx iris.Context) {
	//	ctx.JSON(appConf.AppInfo)
	//})

	//app.Get("/login", func(ctx iris.Context) {
	//	session := sessionManager.Start(ctx)
	//
	//	// Authentication goes here
	//	// ... todo
	//
	//	// Set user as authenticated
	//	session.Set("authenticated", true)
	//
	//})

	//app.Get("/logout", func(ctx iris.Context) {
	//	session := sessionManager.Start(ctx)
	//
	//	session.Set("authenticated", false)
	//})

	app.Run(iris.Addr(":9090"), iris.WithConfiguration(c))
}

// 初始化app
func spa() *iris.Application {
	app := iris.New()
	// 设置日志级别
	app.Logger().SetLevel("info")
	// 注册视图
	app.RegisterView(iris.HTML("./public", ".html").Reload(true))
	//assetHandler := app.StaticHandler("./public", false, false)
	//app.SPA(assetHandler)
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
