(function(){"use strict";var e={2304:function(e,t,n){n.d(t,{db:function(){return S}});var r=n(9242),o=n(3396),i=n(7139);const a={class:"nav_inner"},u={class:"main_logo_wrap"},c=(0,o.Uk)("COWORKER"),s={class:"menu_wrap"},d={key:0},l=(0,o.Uk)("Home"),f=(0,o.Uk)("로그인"),m=(0,o.Uk)("로그아웃");function p(e,t,n,r,p,h){const g=(0,o.up)("router-link"),v=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",a,[(0,o._)("nav",null,[(0,o._)("div",u,[(0,o.Wm)(g,{to:"/",class:"main_logo"},{default:(0,o.w5)((()=>[c])),_:1})]),(0,o._)("div",s,[""!==e.$store.state.userName?((0,o.wg)(),(0,o.iD)("span",d,(0,i.zw)(e.$store.state.userName)+"님",1)):(0,o.kq)("",!0),(0,o.Wm)(g,{to:"/"},{default:(0,o.w5)((()=>[l])),_:1}),""==e.$store.state.userName?((0,o.wg)(),(0,o.j4)(g,{key:1,to:"/login"},{default:(0,o.w5)((()=>[f])),_:1})):null!==e.$store.state.userName?((0,o.wg)(),(0,o.j4)(g,{key:2,to:"/",onClick:t[0]||(t[0]=e=>h.logOut())},{default:(0,o.w5)((()=>[m])),_:1})):(0,o.kq)("",!0)])])]),(0,o.Wm)(v)])}var h=n(2336),g={methods:{isLogin(){const e=(0,h.v0)();(0,h.Aj)(e,(e=>{e&&this.$store.commit("getUserName",e)}))},logOut(){const e=(0,h.v0)();(0,h.w7)(e).then((()=>{this.$store.commit("getUserName","")})).catch((e=>{console.log(e)}))}},mounted(){this.isLogin()}},v=n(89);const b=(0,v.Z)(g,[["render",p]]);var y=b,w=n(2483),k=n(65),O=(0,k.MT)({state:{userName:"",userUid:""},getters:{isLogined(e){return""!=e.userUid}},mutations:{getUserName(e,t){""==t?(e.userName="",e.userUid=""):(e.userName=t.displayName,e.userUid=t.uid)}},actions:{},modules:{}});const _=[{path:"/",name:"home",component:()=>n.e(450).then(n.bind(n,2450))},{path:"/login",name:"login",component:()=>n.e(655).then(n.bind(n,8655))},{path:"/sign",name:"sign",component:()=>n.e(628).then(n.bind(n,2628))},{path:"/write",name:"write",component:()=>n.e(822).then(n.bind(n,9822)),meta:{login:!0}},{path:"/mypage",name:"mypage",component:()=>n.e(168).then(n.bind(n,3168)),meta:{login:!0}},{path:"/detail/:id",name:"detail",component:()=>n.e(448).then(n.bind(n,448))},{path:"/amend/:id",name:"amend",component:()=>n.e(92).then(n.bind(n,2092)),meta:{login:!0}}],N=(0,w.p7)({history:(0,w.PO)("/coworker/"),routes:_});history.pushState(null,document.title,"#back"),N.beforeEach(((e,t,n)=>{if(e.meta.login&&!O.getters.isLogined)return alert("로그인하셔야 합니다"),void n("/login");n()}));var j=N,C=n(4275);const E={apiKey:"AIzaSyAa4n0GQwnZsy7tmVUM72NO7b40aDyOPuc",authDomain:"coworker-7527b.firebaseapp.com",projectId:"coworker-7527b",storageBucket:"coworker-7527b.appspot.com",messagingSenderId:"252949409751",appId:"1:252949409751:web:83a81a4d622ec08d062592"};var U=n(6035);const A=(0,C.ZF)(E),S=(0,U.ad)(A);(0,r.ri)(y).use(O).use(j).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{92:"3c07cbd1",168:"1a7f4c61",448:"a940160e",450:"7f5f799a",628:"7326ebb6",655:"c9114717",822:"16cecb21"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{92:"48371ccd",448:"1d42ad09",450:"6106edea",655:"d336a6a4",822:"5ecf62a2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cowork:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/coworker/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={92:1,448:1,450:1,655:1,822:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var d=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkcowork"]=self["webpackChunkcowork"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2304)}));r=n.O(r)})();
//# sourceMappingURL=app.d0973874.js.map