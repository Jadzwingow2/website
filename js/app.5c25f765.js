(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3542477e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"14d2":function(e,t,n){"use strict";var r=n("84aa"),a=n.n(r);a.a},"84aa":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-mode":"fixed"}},[n("md-app-toolbar",{staticClass:"md-dense md-primary",attrs:{"md-elevation":"1"}},[n("h3",{staticClass:"md-title",staticStyle:{flex:"1"}},[e._v("Jadźwingów 2")]),n("md-button",{attrs:{to:"/"}},[e._v("Grupa dyskusyjna")]),n("md-button",{attrs:{to:"/join"}},[e._v("Dołącz do grupy dyskusyjnej")]),n("md-switch",{model:{value:e.enableNotification,callback:function(t){e.enableNotification=t},expression:"enableNotification"}},[e._v("Powiadamiaj mnie o waznych sprawach")])],1),n("md-app-content",[n("router-view")],1)],1)],1)},o=[],i=n("d225"),u=n("b0b4"),c=n("308d"),s=n("6bb5"),l=n("4e2b"),f=n("9ab4"),d=n("2fe1"),p=(n("51de"),n("e094"),function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.menuVisible=!1,e.enableNotification=!1,e}return Object(l["a"])(t,e),Object(u["a"])(t,[{key:"data",value:function(){return{menuVisible:!1,enableNotification:!1}}}]),t}(r["default"]));p=f["a"]([Object(d["a"])({})],p);var b=p,m=b,h=(n("14d2"),n("2877")),v=Object(h["a"])(m,a,o,!1,null,"a3a19ea2",null),y=v.exports,j=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("iframe",{staticStyle:{height:"100%"},attrs:{id:"forum_embed",src:e.src,scrolling:"no",frameborder:"0",width:"100%",height:"100%"}})},g=[],O=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.src="",e}return Object(l["a"])(t,e),Object(u["a"])(t,[{key:"data",value:function(){return{src:void 0}}},{key:"created",value:function(){this.src="https://groups.google.com/forum/embed/?place=forum/jadzwingow2&showsearch=true&showpopout=true&showtabs=false&parenturl="+encodeURIComponent(window.location.href)}}]),t}(r["default"]);O=f["a"]([Object(d["a"])({})],O);var _=O,x=_,k=Object(h["a"])(x,w,g,!1,null,null,null),P=k.exports;r["default"].use(j["a"]);var S=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),C=n("2f62");r["default"].use(C["a"]);var N=new C["a"].Store({state:{},mutations:{},actions:{}}),T=n("43f9"),E=n.n(T);r["default"].config.productionTip=!1,r["default"].use(E.a),new r["default"]({router:S,store:N,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.5c25f765.js.map