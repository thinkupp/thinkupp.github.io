(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vuetify-message"],{7093:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vuetify-layout",[n("v-subheader",[e._v("基本应用")]),n("v-btn",{on:{click:function(t){e.$message.timeout(-1).success("success")}}},[e._v("success")]),n("v-btn",{on:{click:function(t){return e.$message.info("info")}}},[e._v("info")]),n("v-btn",{on:{click:function(t){return e.$message.warning("warning")}}},[e._v("warning")]),n("v-btn",{on:{click:function(t){return e.$message.error("error")}}},[e._v("error")]),n("v-btn",{on:{click:function(t){return e.$message.show("show")}}},[e._v("show")]),n("v-subheader",[e._v("自定义方向")]),n("v-btn",{on:{click:function(t){e.$message.topLeft().info("topLeft")}}},[e._v("上左")]),n("v-btn",{on:{click:function(t){e.$message.top().info("top")}}},[e._v("上中")]),n("v-btn",{on:{click:function(t){e.$message.topRight().info("topRight")}}},[e._v("上右")]),n("v-btn",{on:{click:function(t){e.$message.bottomLeft().info("bottomLeft")}}},[e._v("下左")]),n("v-btn",{on:{click:function(t){e.$message.bottom().info("bottom")}}},[e._v("下中")]),n("v-btn",{on:{click:function(t){e.$message.bottomRight().info("bottomRight")}}},[e._v("下右")]),n("v-subheader",[e._v("过渡效果")]),n("v-btn",{on:{click:function(t){e.$message.transition().success("随机过渡效果")}}},[e._v("随机过渡效果")]),n("v-subheader",[e._v("函数式配置")]),n("v-btn",{on:{click:function(t){e.$message.topLeft().color("#12d6cd").show("函数式配置背景色")}}},[e._v("自定义背景色")]),n("v-btn",{on:{click:function(t){e.$message.offsetTop(200*Math.random()).success("随机间距")}}},[e._v("随机间距")]),n("v-subheader",[e._v("通过传参配置")]),n("v-btn",{on:{click:function(t){return e.$message({color:"#12d6cd",message:"传参配置背景"})}}},[e._v("自定义背景色")]),n("v-btn",{on:{click:function(t){e.$message({offsetTop:200*Math.random(),message:"随机间距"})}}},[e._v("随机间距")]),n("v-subheader",[e._v("关闭按钮相关")]),n("v-btn",{on:{click:function(t){e.$message.bottomRight().closeButtonContent("A_A").timeout(-1).info("设置关闭按钮文案")}}},[e._v("设置关闭按钮文本")]),n("v-btn",{on:{click:function(t){e.$message.bottomLeft().closeButtonContent("").shaped().info("隐藏关闭按钮")}}},[e._v("传空字符串隐藏关闭按钮")]),n("v-subheader",[e._v("VNode")]),n("v-btn",{on:{click:e.handleVNodeMessage}},[e._v("Message使用VNode")]),n("v-btn",{on:{click:e.handleVNodeCloaseButton}},[e._v("关闭按钮使用VNode")]),n("v-subheader",[e._v("参数缓存")]),n("v-btn",{on:{click:e.handleCustom}},[e._v("参数缓存")]),n("v-subheader",[e._v("控制")]),n("v-btn",{on:{click:e.handleClose}},[e._v("关闭创建的消息条")]),n("v-btn",{on:{click:e.handleAgain}},[e._v("创建一个相同的消息条")]),n("v-btn",{on:{click:function(t){return e.$message.closeAll()}}},[e._v("关闭全部")])],1)},s=[],c=n("d4ec");function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var u=n("262e"),r=n("2caf"),v=n("9ab4"),l=n("1b40"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center",staticStyle:{cursor:"pointer"},on:{click:e.toIndex}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:e.toIndex}},[e._v("返回首页")])],1),n("v-main",[n("v-container",[e._t("default")],2)],1)],1)},m=[],b=function(e){Object(u["a"])(n,e);var t=Object(r["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return a(n,[{key:"toIndex",value:function(){this.$service.toIndex()}}]),n}(l["b"]);b=Object(v["a"])([l["a"]],b);var d=b,h=d,g=n("2877"),_=Object(g["a"])(h,f,m,!1,null,null,null),k=_.exports,p=function(e){Object(u["a"])(n,e);var t=Object(r["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return a(n,[{key:"handleVNodeMessage",value:function(){this.$message.success(this.$createElement("div","Message使用VNode"))}},{key:"handleVNodeCloaseButton",value:function(){this.$message.closeButtonContent(this.$createElement("div","VNode Close")).success("关闭按钮使用VNode")}},{key:"handleCustom",value:function(){var e=this;this.$message.topRight().height("1000px").centered().save("custom_bar"),this.$message.read("custom_bar").success("abc"),this.$nextTick((function(){e.$message.read("custom_bar").info("cde")}))}},{key:"handleClose",value:function(){var e=this.$message.top().success("这个消息条将在1秒钟后通过close方法关闭");setTimeout((function(){e.close()}),1e3)}},{key:"handleAgain",value:function(){var e=this.$message.top().timeout(-1).closeButtonContent("^-^").info("消息条关闭1秒后将会通过again方法创建一个相同的消息条");setTimeout((function(){e.close(),setTimeout((function(){e.again()}),1e3)}),2e3)}}]),n}(l["b"]);p=Object(v["a"])([Object(l["a"])({components:{VuetifyLayout:k}})],p);var $=p,y=$,w=Object(g["a"])(y,o,s,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=vuetify-message.14eebad0.js.map