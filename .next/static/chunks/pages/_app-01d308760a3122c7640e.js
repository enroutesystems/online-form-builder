_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("nKUr"),i=(n("uXJ4"),n("zPlV"),n("nGE6"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(o.jsx)(i.Provider,{session:n.session,children:Object(o.jsx)(t,a({},n))})}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=a(d);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new v(e,t)),1!==s.length||l||a(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},ODaL:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={error:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console&&(n&&n.length<=1&&(n=n[0]||""),console.error("[next-auth][error][".concat(e.toLowerCase(),"]"),n,"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase())))},warn:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console&&(n&&n.length<=1&&(n=n[0]||""),console.warn("[next-auth][warn][".concat(e.toLowerCase(),"]"),n,"\nhttps://next-auth.js.org/warning#".concat(e.toLowerCase())))},debug:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];console&&(r&&r.length<=1&&(r=r[0]||""),e&&e.env&&e.env._NEXTAUTH_DEBUG&&console.log("[next-auth][debug][".concat(t.toLowerCase(),"]"),r))}};t.default=n}).call(this,n("8oxB"))},XJ4Q:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("q1tI"),o=c(n("ODaL")),i=c(n("vFaK"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){l(i,r,o,c,a,"next",e)}function a(e){l(i,r,o,c,a,"throw",e)}c(void 0)}))}}var d={baseUrl:(0,i.default)(e.env.NEXTAUTH_URL||e.env.VERCEL_URL).baseUrl,basePath:(0,i.default)(e.env.NEXTAUTH_URL).basePath,keepAlive:0,clientMaxAge:0,_clientLastSync:0,_clientSyncTimer:null,_eventListenersAdded:!1,_clientSession:void 0,_clientId:Math.random().toString(36).substring(2)+Date.now().toString(36),_getSession:()=>{}};"undefined"!==typeof window&&!1===d._eventListenersAdded&&(d._eventListenersAdded=!0,window.addEventListener("storage",function(){var e=f((function*(e){if("nextauth.message"===e.key){var t=JSON.parse(e.newValue);if(t.event&&"session"===t.event&&t.data){if(d._clientId===t.clientId)return;yield d._getSession({event:"storage"})}}}));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("focus",function(){var e=f((function*(e){return d._getSession({event:"focus"})}));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("blur",function(){var e=f((function*(e){return d._getSession({event:"blur"})}));return function(t){return e.apply(this,arguments)}}()));var p=function(){var{baseUrl:e,basePath:t,clientMaxAge:n,keepAlive:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&(d.baseUrl=e),t&&(d.basePath=t),n&&(d.clientMaxAge=n),r&&(d.keepAlive=r,"undefined"!==typeof window&&r>0&&(null!==d._clientSyncTimer&&clearTimeout(d._clientSyncTimer),d._clientSyncTimer=setTimeout(f((function*(){d._clientSession&&(yield d._getSession({event:"timer"}))})),1e3*r)))},v=function(){var e=f((function*(){var{req:e,ctx:t,triggerEvent:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!e&&t&&t.req&&(e=t.req);var r=T(),o=e?{headers:{cookie:e.headers.cookie}}:{},i=yield O("".concat(r,"/session"),o);return n&&P({event:"session",data:{trigger:"getSession"}}),i}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=f((function*(){var{req:e,ctx:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!e&&t&&t.req&&(e=t.req);var n=T(),r=e?{headers:{cookie:e.headers.cookie}}:{},o=yield O("".concat(n,"/csrf"),r);return o&&o.csrfToken?o.csrfToken:null}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=f((function*(){var e=T();return O("".concat(e,"/providers"))}));return function(){return e.apply(this,arguments)}}(),y=(0,r.createContext)(),w=e=>{var t=(0,r.useContext)(y);return void 0===t?b(e):t},b=e=>{var[t,n]=(0,r.useState)(e),[i,c]=(0,r.useState)(!0),a=function(){var e=f((function*(){var{event:e=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t=null!==e,r=!(!e||"storage"!==e),i=d.clientMaxAge,a=parseInt(d._clientLastSync),u=Math.floor((new Date).getTime()/1e3),s=d._clientSession;if(!1===r&&void 0!==s){if(0===i&&!0!==t)return;if(i>0&&null===s)return;if(i>0&&u<a+i)return}void 0===s&&(d._clientSession=null),d._clientLastSync=Math.floor((new Date).getTime()/1e3);var l=!1===r,f=yield v({triggerEvent:l});d._clientSession=f,n(f),c(!1)}catch(p){o.default.error("CLIENT_USE_SESSION_ERROR",p)}}));return function(){return e.apply(this,arguments)}}();return d._getSession=a,(0,r.useEffect)(()=>{a()}),[t,i]},m=function(){var e=f((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=T(),r=t&&t.callbackUrl?t.callbackUrl:window.location,o=yield g();if(e&&o[e]){var i="credentials"===o[e].type?"".concat(n,"/callback/").concat(e):"".concat(n,"/signin/").concat(e),c={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j(u(u({},t),{},{csrfToken:yield h(),callbackUrl:r,json:!0}))},a=yield fetch(i,c),s=yield a.json();window.location=s.url?s.url:r}else window.location="".concat(n,"/signin?callbackUrl=").concat(encodeURIComponent(r))}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=f((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e&&e.callbackUrl?e.callbackUrl:window.location,n=T(),r={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j({csrfToken:yield h(),callbackUrl:t,json:!0})},o=yield fetch("".concat(n,"/signout"),r),i=yield o.json();P({event:"session",data:{trigger:"signout"}}),window.location=i.url?i.url:t}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=f((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var n=yield fetch(e,t),r=yield n.json();return Promise.resolve(Object.keys(r).length>0?r:null)}catch(i){return o.default.error("CLIENT_FETCH_ERROR",e,i),Promise.resolve(null)}}));return function(t){return e.apply(this,arguments)}}(),T=()=>"undefined"===typeof window?(e.env.NEXTAUTH_URL||o.default.warn("NEXTAUTH_URL","NEXTAUTH_URL environment variable not set"),"".concat(d.baseUrl).concat(d.basePath)):d.basePath,j=e=>Object.keys(e).map(t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t])).join("&"),P=e=>{if("undefined"!==typeof localStorage){var t=Math.floor((new Date).getTime()/1e3);localStorage.setItem("nextauth.message",JSON.stringify(u(u({},e),{},{clientId:d._clientId,timestamp:t})))}},E={getSession:v,getCsrfToken:h,getProviders:g,useSession:w,signIn:m,signOut:_,Provider:e=>{var{children:t,session:n,options:o}=e;return p(o),(0,r.createElement)(y.Provider,{value:w(n)},t)},setOptions:p,options:p,session:v,providers:g,csrfToken:h,signin:m,signout:_};t.default=E}).call(this,n("8oxB"))},nGE6:function(e,t,n){e.exports=n("XJ4Q").default},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uXJ4:function(e,t,n){},vFaK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>{e||(e="".concat("http://localhost:3000").concat("/api/auth"));var t=e.match(/^http?:\/\//)?"http":"https";e=e.replace(/^https?:\/\//,"").replace(/\/$/,"");var[n,...r]=e.split("/");return{baseUrl:n?"".concat(t,"://").concat(n):"http://localhost:3000",basePath:r.length>0?"/".concat(r.join("/")):"/api/auth"}}},zPlV:function(e,t,n){}},[[0,0,1,2]]]);