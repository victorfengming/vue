(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110450a9","chunk-2d0bd9e0"],{"2d80":function(e,t,a){"use strict";a.r(t),a.d(t,"getUserRouter",(function(){return u}));var n=a("017a"),r=a("2b0e");function u(){return Object(n["default"])({url:r["default"].prototype.$PUBLIC_PATH+"data/asyncRouterDemo",method:"get",responseType:"text"})}},"2fc9":function(e,t,a){"use strict";a.r(t);var n=a("5530"),r=a("1da1"),u=(a("b0c0"),a("a434"),a("96cf"),a("2b0e")),o=a("a18c"),c=a("464b"),s=a("4360"),d=a("2902"),i=a("1231"),f=a("c26d"),l=a("2d80"),h=a("e992"),p=a("f8fb"),g={path:"*",name:"404",redirect:"/NoFound404",meta:{title:"404",icon:"fab fa-studiovinari",isHidden:!0}};function m(e){if(null!=e.name){document.title=e.meta.title+u["default"].prototype.$title,c["default"].start();for(var t=0;t<d["default"].length;t++)if(d["default"][t].path===e.path)return;var a=[];null===JSON.parse(window.sessionStorage.getItem("tagView"))?window.sessionStorage.setItem("tagView","[]"):a=JSON.parse(window.sessionStorage.getItem("tagView")),0===s["default"].getters.getTagView.length&&0!==a.length?(Object(i["setTagView"])(a),s["default"].commit("SET_KEEPALIVE_LIST",a)):Object(i["addTagView"])(e),Object(f["setBreadcrumbs"])(e.matched,e.query),b(e)}}function b(e){if(e.matched&&e.matched.length>2)for(var t=0;t<e.matched.length;t++){var a=e.matched[t];"Layout"===a.components.default.name&&(e.matched.splice(t,1),b(e))}}o["default"].beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a,r){var u,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(m(t),u=sessionStorage.getItem("access_token"),!u){e.next=19;break}if("/login"===t.path&&r({path:"/"}),!s["default"].getters.getRoutes.length){e.next=8;break}r(),e.next=17;break;case 8:return e.next=10,Object(l["getUserRouter"])();case 10:c=e.sent,i=Object(h["handleJsonRouterToAsyncRouter"])(c.data),i.push(g),p["default"][0].children=i,s["default"].commit("SET_ROLES",p["default"]),o["default"].addRoutes(p["default"]),r(Object(n["a"])(Object(n["a"])({},t),{},{replace:!0}));case 17:e.next=20;break;case 19:d["default"].some((function(e){return e.path===t.path}))?r():r({path:"/logon"});case 20:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()),o["default"].afterEach((function(){c["default"].stop(),c["default"].stop()})),t["default"]=o["default"]}}]);