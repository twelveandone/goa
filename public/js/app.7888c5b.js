(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t,n){e.exports=n("LzkT")},"A0++":function(e,t,n){"use strict";var a=n("TOJS"),i=n.n(a);i.a},Hl11:function(e,t,n){},LzkT:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("oRQL"),n("0UuB"),n("Hl11"),n("fm0S");var a=n("Kw5r"),i=n("0ed0"),r=n("6E/o"),o=n("cFFF"),s=n("IEC1"),u=n("zxLP"),c=n("RIeW"),d=n("Rqni"),p=n("MqH6"),l=n("8wy3"),m=n("zmdN"),f=n("SC7v"),A=n("FzGJ"),h=n("UrUt"),b=n("EYBb"),Q=n("HlXa"),g=n("UG+o"),T=n("uNnR"),v=n("kci6"),w=n("fUOT"),y=n("lUGP"),P=n("xWPs"),C=n("23sU"),S=n("wIFj"),j=n("lBN4"),U=n("k/Uo"),F=n("74EC"),G=n("Cfpk"),O=n("A9jH"),I=n("CVJq"),N=n("XYut"),x=n("eelU"),R=n("UlvI"),q=n("PVu0"),L=n("aqAY"),k=n("U/xP"),V=n("xgT5"),E=n("YqlJ"),M=n("Ztd7"),z=n("ezih"),B=n("U/5N"),D=n("S/Rk"),H=n("IG5u"),J=n("iV8l"),Y=n("dkar"),K=n("ZYCo"),Z=n("OggR"),W=n("3CNK"),_=n("MFSH"),X=n("bduK"),$=n("WTFv"),ee=n("nlhR"),te=n("YYYh"),ne=n("lOO/"),ae=n("FSbK"),ie=n("Ezub"),re=n("Z4Cl"),oe=n("dB3m"),se=n("N8Xa"),ue=n("qaCD"),ce=n("8uvW");a["a"].use(r["a"],{config:{},i18n:i["a"],components:{QLayout:o["a"],QLayoutHeader:s["a"],QLayoutDrawer:u["a"],QLayoutFooter:c["a"],QPageContainer:d["a"],QPage:p["a"],QToolbar:l["a"],QToolbarTitle:m["a"],QBtn:f["a"],QBtnGroup:A["a"],QIcon:h["a"],QList:b["a"],QListHeader:Q["a"],QItem:g["a"],QItemMain:T["a"],QItemSeparator:v["a"],QItemSide:w["a"],QItemTile:y["a"],QTabs:P["a"],QTab:C["a"],QTabPane:S["a"],QRouteTab:j["a"],QScrollArea:U["a"],QAlert:F["a"],QBtnToggle:G["a"],QTooltip:O["a"],QModal:I["a"],QInput:N["a"],QField:x["a"],QCheckbox:R["a"],QDatetime:q["a"],QFab:L["a"],QFabAction:k["a"],QTable:V["a"],QTh:E["a"],QTr:M["a"],QTd:z["a"],QTableColumns:B["a"],QChip:D["a"],QInnerLoading:H["a"],QSpinnerGears:J["a"],QCard:Y["a"],QCardTitle:K["a"],QCardMain:Z["a"],QCardMedia:W["a"],QCardSeparator:_["a"],QCardActions:X["a"],QSelect:$["a"],QBtnDropdown:ee["a"],QSearch:te["a"],QSlider:ne["a"]},directives:{Ripple:ae["a"]},plugins:{Notify:ie["a"],Dialog:re["a"],Cookies:oe["a"],SessionStorage:se["a"],Loading:ue["a"],AppFullscreen:ce["a"]}});var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},pe=[];de._withStripped=!0;var le={name:"App"},me=le,fe=(n("A0++"),n("KHd+")),Ae=Object(fe["a"])(me,de,pe,!1,null,null,null);Ae.options.__file="App.vue";var he=Ae.exports,be=(n("9VmF"),n("jE9Z")),Qe=n("vDqi"),ge=n.n(Qe),Te=ge.a.create({}),ve=function(e){var t=e.Vue;t.prototype.$axios=Te,Te.interceptors.request.use(function(e){return e})},we=[{path:"/",component:function(){return n.e(3).then(n.bind(null,"3q1n"))},redirect:"/main",children:[{path:"/main",component:function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,"bM+y"))},meta:{title:"我的工时"}},{path:"/setting",component:function(){return n.e(5).then(n.bind(null,"2rDx"))},meta:{title:"应用设置"}},{path:"/admin",component:function(){return n.e(6).then(n.bind(null,"URd+"))},redirect:"/admin/users",children:[{path:"users",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"3O+g"))}},{path:"joblogs",component:function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,"zf1y"))}},{path:"organs",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"xiw0"))}},{path:"pros",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"Z7Vp"))}},{path:"types",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"FRUu"))}}],meta:{title:"系统管理",needAdmin:!0}}]}];we.push({path:"/403",component:function(){return n.e(12).then(n.bind(null,"OF2P"))}}),we.push({path:"*",component:function(){return n.e(13).then(n.bind(null,"5R6h"))}});var ye=we;a["a"].use(be["a"]);var Pe="isAdmin",Ce=function(){var e=new be["a"]({scrollBehavior:function(){return{y:0}},routes:ye,mode:"hash",base:""});return e.beforeEach(function(e,t,n){e.path.startsWith("/admin")?se["a"].has(Pe)?n():Te.get("/user/me").then(function(e){var t=e.data;t.hasOwnProperty("success")?(console.warn("get user error: %s",t.msg),n({path:"/403",replace:!0})):t.isAdmin?(se["a"].set(Pe,!0),n()):n({path:"/403",replace:!0})}).catch(function(e){console.error("get user error: %o",e),n({path:"/403",replace:!0})}):n()}),e},Se=function(){var e="function"===typeof Ce?Ce({}):Ce,t={el:"#q-app",router:e,render:function(e){return e(he)}};return{app:t,router:e}},je=(n("dRSK"),n("VRzm"),n("25dN"),n("lNvr")),Ue=n.n(je),Fe=function(e){e.app,e.router,e.Vue;Object.is("production","development")&&Re()},Ge=[{id:1,user:{id:1,organ:{id:1,name:"研发部",desc:"负责研发工作"},name:"admin",password:"c4ca4238a0b923820dcc509a6f75849b",displayName:"Alex",enabled:!1,isAdmin:!0,createAt:"2018-09-25 09:40:13",updateAt:"2018-09-25 09:40:13"},project:{id:1,name:"学校管理系统",status:2,desc:"正在进行中 第一个版本已发布",createAt:"2018-09-19 17:59:50",updateAt:"2018-09-19 18:00:45"},type:{id:4,name:"code",alias:"编码",desc:"写代码",createAt:"2018-09-19 17:55:50",updateAt:"2018-09-19 17:55:50"},title:"写代码",content:"详细地写代码",progress:.3,startTime:"2018-09-19T13:56:50+08:00",endTime:"2018-09-19T17:56:50+08:00",createAt:"2018-09-26 09:58:51",updateAt:"2018-09-26 09:58:51"},{id:3,user:{id:1,organ:{id:1,name:"研发部",desc:"负责研发工作"},name:"admin",password:"c4ca4238a0b923820dcc509a6f75849b",displayName:"Alex",enabled:!1,isAdmin:!0,createAt:"2018-09-25 09:40:13",updateAt:"2018-09-25 09:40:13"},project:{id:4,name:"救援应急云平台",status:0,desc:"正在进行中 第一个版本已发布",createAt:"2018-09-19 18:01:18",updateAt:"2018-09-19 18:01:18"},type:{id:5,name:"design",alias:"设计",desc:"UI设计等",createAt:"2018-09-19 17:56:17",updateAt:"2018-09-19 17:56:17"},title:"页面设计",content:"详细地设计页面",progress:.8,startTime:"2018-09-26T09:00:00+08:00",endTime:"2018-09-26T11:20:00+08:00",createAt:"2018-09-26 10:50:35",updateAt:"2018-09-26 10:50:35"}],Oe=[{id:1,name:"研发部",desc:"负责研发工作"},{id:3,name:"数据部",desc:"负责数据生产工作"},{id:4,name:"高层管理",desc:"负责公司管理与决策工作"}],Ie=[{id:1,organ:{id:0,name:"研发部"},name:"admin",password:"c4ca4238a0b923820dcc509a6f75849b",displayName:"Alex",enabled:!1,isAdmin:!0,createAt:"2018-09-25 09:40:13",updateAt:"2018-09-25 09:40:13"},{id:2,organ:{id:0,name:"研发部"},name:"user",password:"c4ca4238a0b923820dcc509a6f75849b",displayName:"User",enabled:!1,isAdmin:!1,createAt:"2018-09-25 09:40:13",updateAt:"2018-09-25 09:40:13"}],Ne=[{id:4,name:"code",alias:"编码",desc:"写代码",createAt:"2018-09-19 17:55:50",updateAt:"2018-09-19 17:55:50"},{id:5,name:"design",alias:"设计",desc:"UI设计等",createAt:"2018-09-19 17:56:17",updateAt:"2018-09-19 17:56:17"},{id:6,name:"meeting",alias:"开会",desc:"开会",createAt:"2018-09-28 17:38:38",updateAt:"2018-09-28 17:38:38"},{id:7,name:"画图",alias:"画图",desc:"",createAt:"2018-09-28 17:38:52",updateAt:"2018-09-28 17:38:52"},{id:8,name:"请假",alias:"请假",desc:"请假",createAt:"2018-09-28 17:38:59",updateAt:"2018-09-28 17:38:59"},{id:9,name:"文档建设",alias:"文档建设",desc:"文档建设",createAt:"2018-09-28 17:39:06",updateAt:"2018-09-28 17:39:06"},{id:11,name:"测试",alias:"测试",desc:"测试",createAt:"2018-09-28 17:40:37",updateAt:"2018-09-28 17:40:37"},{id:12,name:"学习",alias:"学习",desc:"学习",createAt:"2018-09-28 17:43:43",updateAt:"2018-09-28 17:43:43"},{id:13,name:"培训",alias:"培训",desc:"培训",createAt:"2018-09-28 17:43:50",updateAt:"2018-09-28 17:43:50"},{id:14,name:"调研",alias:"调研",desc:"调研",createAt:"2018-09-28 17:43:56",updateAt:"2018-09-28 17:43:56"},{id:15,name:"维护",alias:"维护",desc:"维护",createAt:"2018-09-28 17:44:30",updateAt:"2018-09-28 17:44:30"},{id:16,name:"数据处理",alias:"数据处理",desc:"数据处理",createAt:"2018-09-28 17:44:38",updateAt:"2018-09-28 17:44:38"},{id:17,name:"模型贴图",alias:"模型贴图",desc:"模型贴图",createAt:"2018-09-28 17:44:53",updateAt:"2018-09-28 17:44:53"},{id:18,name:"三维建模",alias:"三维建模",desc:"三维建模",createAt:"2018-09-28 17:45:02",updateAt:"2018-09-28 17:45:02"},{id:19,name:"功能配置",alias:"功能配置",desc:"功能配置",createAt:"2018-09-28 17:45:13",updateAt:"2018-09-28 17:45:13"},{id:20,name:"sale",alias:"售前服务/技术支持/质量管理",desc:"售前服务/技术支持/质量管理",createAt:"2018-09-28 17:45:26",updateAt:"2018-09-28 17:45:26"},{id:21,name:"other",alias:"其他",desc:"",createAt:"2018-09-28 17:45:35",updateAt:"2018-09-28 17:45:35"}],xe=[{id:1,name:"学校管理系统",status:2,desc:"正在进行中 第一个版本已发布",createAt:"2018-09-19 17:59:50",updateAt:"2018-09-19 18:00:45"},{id:4,name:"救援应急云平台",status:0,desc:"正在进行中 第一个版本已发布",createAt:"2018-09-19 18:01:18",updateAt:"2018-09-19 18:01:18"}];function Re(){var e=new Ue.a(Te);e.onGet("/user/alter").reply(function(e){return new Promise(function(t,n){e.params.oldPwd!=Ie[0].id&&t([200,{success:!1,msg:"密码错误"}]),setTimeout(function(){t([200,Ie[0]])},3e3)})}),e.onGet("/user/me").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ie[0]])},2e3)})}),e.onGet("/rest/jobs").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ge])},1500)})}),e.onPost("/rest/job").reply(function(e){var t=e.data,n=JSON.parse(t);return n.id=Math.floor(1e3*Math.random()),n.type=Ne.find(function(e){return e.id===n.type.id}),n.project=xe.find(function(e){return e.id===n.project.id}),n.startEditNow=!1,Ge.push(n),new Promise(function(e,t){setTimeout(function(){e([200,n])},2e3)})}),e.onDelete("/rest/job/1").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,"true"])},1e3)})}),e.onGet("/rest/job/me").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ge])},1500)})}),e.onGet("/rest/users").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ie])},1e3)})}),e.onPost("/rest/settings").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ie[0]])},1e3)})}),e.onDelete("rest/settings/2").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ie[1]])},1e3)})}),e.onGet("/rest/organs").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Oe])},1e3)})}),e.onGet("/rest/pros").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,xe])},1e3)})}),e.onGet("/rest/types").reply(function(e){return new Promise(function(e,t){setTimeout(function(){e([200,Ne])},1e3)})})}n("91GP");var qe=n("MVZn"),Le=n.n(qe),ke={timeout:2500,position:"top"},Ve={warning:function(e,t){var n=Le()({type:"warning",message:e},ke);void 0!==t&&Object.assign(n,t),ie["a"].create(n)},negative:function(e,t){var n=Le()({type:"negative",message:e},ke);void 0!==t&&Object.assign(n,t),ie["a"].create(n)},positive:function(e,t){var n=Le()({type:"positive",message:e},ke);void 0!==t&&Object.assign(n,t),ie["a"].create(n)},info:function(e,t){var n=Le()({type:"info",message:e},ke);void 0!==t&&Object.assign(n,t),ie["a"].create(n)}},Ee=function(e){e.app,e.router;var t=e.Vue;t.prototype.$alert=Ve},Me=Se(),ze=Me.app,Be=Me.router;[ve,Fe,Ee].forEach(function(e){e({app:ze,router:Be,Vue:a["a"],ssrContext:null})}),new a["a"](ze)},TOJS:function(e,t,n){},fm0S:function(e,t,n){}},[[0,15,14]]]);