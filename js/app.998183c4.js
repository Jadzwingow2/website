(function(e){function t(t){for(var n,a,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2b838b77"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e),i=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[e]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"81d2":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container"},[r("md-app",{attrs:{"md-mode":"fixed"}},[r("md-app-toolbar",{staticClass:"md-dense md-primary",attrs:{"md-elevation":"1"}},[r("h3",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v("Jadźwingów 2")]),r("md-button",{attrs:{to:"/"}},[e._v("Grupa dyskusyjna")]),r("md-button",{attrs:{to:"/join"}},[e._v("Dołącz do grupy dyskusyjnej")]),r("md-switch",{model:{value:e.enableNotification,callback:function(t){e.enableNotification=t},expression:"enableNotification"}},[e._v("Powiadamiaj mnie o waznych sprawach")])],1),r("md-app-content",[r("router-view")],1)],1)],1)},i=[],a=r("d225"),c=r("b0b4"),u=r("308d"),s=r("6bb5"),l=r("4e2b"),f=r("9ab4"),p=r("2fe1"),d=(r("51de"),r("e094"),function(){function e(t){Object(a["a"])(this,e),this.installWorker()}return Object(c["a"])(e,[{key:"installWorker",value:function(){this.isServiceWorkerSupported&&navigator.serviceWorker.register("/service.js").then(this.onRegisterSuccess,this.onRegisterError)}},{key:"onRegisterSuccess",value:function(e){this.serviceWorkerRegistration=e,console.log("ServiceWorker registration successful with scope: ",e)}},{key:"onRegisterError",value:function(e){console.log("ServiceWorker registration failed: ",e)}},{key:"isServiceWorkerSupported",get:function(){return"serviceWorker"in navigator&&null!=this.serviceWorkerRegistration}}]),e}()),v=r("60a3"),h=r("75fc"),b=(r("34ef"),r("a481"),r("14b9"),function(){function e(t){Object(a["a"])(this,e),this.workerService=t}return Object(c["a"])(e,[{key:"askPermission",value:function(){return new Promise(function(e,t){var r=Notification.requestPermission();if(r)return r.then(e,t)}).then(function(e){if("granted"!==e)throw new Error("We weren't granted permission.")})}},{key:"urlBase64ToUint8Array",value:function(e){var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(r);return Uint8Array.from(Object(h["a"])(n).map(function(e){return e.charCodeAt(0)}))}},{key:"subscribeNotifications",value:function(){var e={userVisibleOnly:!0,applicationServerKey:this.urlBase64ToUint8Array("BJN_3yvgkDrx-mgepYurxen8N-0W4y3YVOjqkHPkZyyvjnr_1GdkZkuq_LJO7HvBNCv-OieyyHXcVfCeCC1QCQU")};return this.workerService&&this.workerService.serviceWorkerRegistration?this.workerService.serviceWorkerRegistration.pushManager.subscribe(e):new Promise(function(e,t){t()})}},{key:"isAvailable",get:function(){return"PushManager"in window&&"serviceWorker"in navigator&&null!=this.workerService&&this.workerService.isServiceWorkerSupported}}]),e}()),m=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(u["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.menuVisible=!1,e.enableNotification=!1,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){var e=new d(this.$store);this.notificationService=new b(e)}},{key:"data",value:function(){return{menuVisible:!1,enableNotification:!1}}},{key:"onNotificationSwitchToggle",value:function(){var e=this;this.enableNotification&&null!=this.notificationService&&this.notificationService.askPermission().then(function(t){console.log("Mamy zgodna notyfikacje"),e.notificationService&&e.notificationService.subscribeNotifications().then(function(e){console.log("Mamy subskrypcje pushy",e)}).catch(function(e){console.log("Dupa",e)})}).catch(function(e){console.log("Dupa",e)})}}]),t}(n["default"]);f["a"]([Object(v["a"])("enableNotification")],m.prototype,"onNotificationSwitchToggle",null),m=f["a"]([Object(p["b"])({})],m);var g=m,y=g,w=(r("eeb1"),r("2877")),k=Object(w["a"])(y,o,i,!1,null,"f32f5d8c",null),j=k.exports,O=r("8c4f"),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("iframe",{staticStyle:{height:"100%"},attrs:{id:"forum_embed",src:e.src,scrolling:"no",frameborder:"0",width:"100%",height:"100%"}})},_=[],P=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(u["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.src="",e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"data",value:function(){return{src:void 0}}},{key:"created",value:function(){this.src="https://groups.google.com/forum/embed/?place=forum/jadzwingow2&showsearch=true&showpopout=true&showtabs=false&parenturl="+encodeURIComponent(window.location.href)}}]),t}(n["default"]);P=f["a"]([Object(p["b"])({})],P);var W=P,N=W,x=Object(w["a"])(N,S,_,!1,null,null,null),C=x.exports;n["default"].use(O["a"]);var R=new O["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),T=r("2f62");n["default"].use(T["a"]);var M=new T["a"].Store({state:{},mutations:{},actions:{}}),E=r("43f9"),A=r.n(E);n["default"].config.productionTip=!1,n["default"].use(A.a),new n["default"]({router:R,store:M,render:function(e){return e(j)}}).$mount("#app")},eeb1:function(e,t,r){"use strict";var n=r("81d2"),o=r.n(n);o.a}});
//# sourceMappingURL=app.998183c4.js.map