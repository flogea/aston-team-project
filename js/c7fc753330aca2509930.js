(()=>{"use strict";var e,r,t,n={232:(e,r,t)=>{var n=t(745),a=t(998),s=t(655),o=t(294),i=t(335),c=()=>(0,a.I0)(),l=a.v9,u=t(791),d=t(168),h=(0,d.oM)({name:"auth",initialState:{statusAuth:"LOADING",email:null,uid:""},reducers:{setAuthUser(e,r){e.email=r.payload.email,e.uid=r.payload.uid,e.statusAuth="SUCCESS"},userNotFound(e){e.email=null,e.uid="",e.statusAuth="SUCCESS"}}}),{setAuthUser:v,userNotFound:f}=h.actions;const p=h.reducer;var m=(0,d.oM)({name:"cards",initialState:{cardsData:[],saveCardsData:[]},reducers:{replaceCards(e,r){e.cardsData=r.payload},addMoreCards(e,r){e.cardsData.push(...r.payload)},removeCards(e){e.cardsData=[]}}}),{replaceCards:j,addMoreCards:y,removeCards:g}=m.actions;const b=m.reducer;var x=(0,d.oM)({name:"search",initialState:{searchValue:"",countPerPage:30,totalPages:0},reducers:{setSearchValue(e,r){e.searchValue=r.payload},resetSearch(e){e.searchValue=""},setTotalPages(e,r){var{payload:t}=r;e.totalPages=t}}}),{setSearchValue:O,resetSearch:P,setTotalPages:w}=x.actions;const S=x.reducer;var N=(0,d.oM)({name:"user",initialState:{email:null,token:null,id:null},reducers:{setUser(e,r){e.email=r.payload.email,e.token=r.payload.token,e.id=r.payload.id},removeUser(e){e.email=null,e.token=null,e.id=null}}}),{setUser:k,removeUser:A}=N.actions;const E=N.reducer;var _=e=>e.auth.uid,D=e=>e.auth.email,C=e=>e.auth.statusAuth,T=(0,u.UY)({user:E,search:S,cards:b,auth:p}),U=(0,d.xC)({reducer:T});function I(){var e=l(D);return{isAuth:!!e,email:e}}var L=t(893),M=["component"];function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var F=e=>{var{component:r}=e,t=H(e,M),{isAuth:n}=I();return n?(0,L.jsx)(r,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach((function(r){R(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},t)):(0,L.jsx)(i.Fg,{to:"/login",replace:!0})},q=t(953);const W=t.p+"assets/fav-filled-2d60195711216266f4a8.png",X=t.p+"assets/fav-94d68ded12286cc7a798.png";var J=t(977),Y=t(785),z=(0,J.ZF)({apiKey:"AIzaSyDUXWXlVm8uHklKlTz7-sWxTXbFYuMOT5U",authDomain:"aston-photo-gallery.firebaseapp.com",projectId:"aston-photo-gallery",storageBucket:"aston-photo-gallery.appspot.com",messagingSenderId:"547446131876",appId:"1:547446131876:web:a136a2475d8f92bacaaa31"}),G=(0,Y.v0)(z),K=(0,q.ad)(z);const V="t3s26QVSgcFUkHVBkvzg",Q="amvc2ZeBeTyXgURj4TYG",Z="NWzt4LNtXuUqmCr7wwTQ",$="sweITg5Z2tt3krWwZgK1",ee="ZbKAyAgU6jerGgPQ5g9A",re="uOcb9zrYLDNLhc_hYWS2";function te(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ne(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?te(Object(t),!0).forEach((function(r){ae(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ae(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function se(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function oe(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){se(s,n,a,o,i,"next",e)}function i(e){se(s,n,a,o,i,"throw",e)}o(void 0)}))}}var ie=e=>{var{isAuth:r}=I(),{id:t,urls:n,alt_description:a,liked_by_user:i}=e,[c,u]=(0,o.useState)(i),d=l(_),h=e=>{e.preventDefault(),u((()=>!c))},v=function(){var r=oe((function*(){try{yield(0,q.pl)((0,q.JU)(K,"users/".concat(d,"/favorites"),t),ne(ne({},e),{},{liked_by_user:!0}))}catch(e){console.error("Ошибка при добавлении карточки в избранное: ",e)}}));return function(){return r.apply(this,arguments)}}(),f=function(){var e=oe((function*(e){yield(0,q.oe)((0,q.JU)(K,"users/".concat(d,"/favorites"),e))}));return function(r){return e.apply(this,arguments)}}();return(0,L.jsx)("div",{className:V,children:(0,L.jsxs)(s.rU,{to:"/card?id=".concat(t),children:[(0,L.jsx)("div",{className:Q,children:(0,L.jsx)("button",{disabled:!r,title:r?"Add to favorites":"Authorize to add to favorites",className:Z,onClick:c?e=>{h(e),f(t)}:e=>{h(e),v()},children:(0,L.jsx)("img",{src:c?W:X,alt:""})})}),(0,L.jsx)("div",{className:$,children:(0,L.jsx)("img",{src:null==n?void 0:n.regular,alt:"image"})}),(0,L.jsx)("div",{className:ee,children:(0,L.jsx)("div",{className:re,children:a&&a.length>100?"".concat(a.slice(0,100),"..."):a})})]})})};const ce="bcvEoAGvxOleIuasmcg6";var le=e=>{var{cards:r}=e,t=r.map((e=>{var{id:r,urls:t,alt_description:n,liked_by_user:a}=e;return(0,L.jsx)("li",{children:(0,L.jsx)(ie,{id:r,urls:t,alt_description:n,liked_by_user:a})},r)}));return(0,L.jsx)("ul",{className:ce,children:t})},ue=()=>(0,L.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,L.jsx)("path",{d:"M23.66 6.96 16 14.63 8.32 6.96 6.95 8.33 14.62 16l-7.67 7.67 1.37 1.37 7.67-7.68 7.67 7.68 1.37-1.37L17.36 16l7.67-7.67-1.37-1.37Z",fill:"inherit"})});const de="yxxp4Dpp6UIdHwxABVeG";var he=e=>{var{title:r,handleSubmit:t}=e,[n,a]=(0,o.useState)(""),[s,i]=(0,o.useState)(""),[c,l]=(0,o.useState)(""),[u,d]=(0,o.useState)("");return(0,L.jsxs)("form",{className:de,onSubmit:e=>{e.preventDefault(),t(n,s)},children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,L.jsx)("input",{type:"email",value:n,onChange:e=>{var r=e.target.value;a(r),(e=>{e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?l(""):l("Invalid email format"):l("Email is required")})(r)},placeholder:"Email",required:!0})]}),c&&(0,L.jsx)("p",{children:c}),(0,L.jsxs)("div",{children:[(0,L.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,L.jsx)("input",{type:"password",value:s,onChange:e=>{var r=e.target.value;i(r),(e=>{e?e.length<6?d("Password must be at least 6 characters long"):d(""):d("Password is required")})(r)},placeholder:"Password",required:!0})]}),u&&(0,L.jsx)("p",{children:u}),(0,L.jsx)("button",{children:r})]})};const ve="dDRRXIIg4vAbQn8dQzmo",fe="S6rLE3BqBsddY5TPfdhg",pe="g87VLBs39AwMWAOzcAff";var me=()=>(0,L.jsxs)(s.rU,{to:"/",className:ve,children:[(0,L.jsx)("h1",{className:fe,children:"Photo Gallery"}),(0,L.jsx)("p",{className:pe,children:"find your mood"})]});const je="lr2y5T6qgvpckfJ9StH9",ye="Dq0AwFGRf_CJ_F_WOfLZ",ge="M3tvYWDWIXB5YMkbPf7o";var be=e=>{var{fullscreen:r}=e;return(0,L.jsx)("div",{className:"".concat(je," ").concat(r&&ye),children:(0,L.jsx)("span",{className:ge})})};const xe="fIx_CB_Dp1B5CT0nSuBm",Oe="U1DnwO2qYxKLL1LqlTFX",Pe="bqMkJLwVtyT9pESoUdMK";function we(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}var Se=()=>{var e=c(),r=(0,i.s0)(),{isAuth:t,email:n}=I(),a=function(){var t,n=(t=function*(){try{yield(0,Y.w7)(G),e(A()),r("/")}catch(e){console.error(e)}},function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(e){we(s,n,a,o,i,"next",e)}function i(e){we(s,n,a,o,i,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();if("SUCCESS"!==l(C))return(0,L.jsx)(be,{fullscreen:!0});var o=e=>{var{isActive:r}=e;return r?Oe:""};return(0,L.jsx)("nav",{className:xe,children:t?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(s.OL,{to:"/favorites",className:o,children:"Favorites"}),(0,L.jsx)(s.OL,{to:"/history",className:o,children:"History"}),(0,L.jsxs)("button",{onClick:()=>a(),className:Pe,children:["Log out from ",(0,L.jsx)("span",{children:n})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(s.OL,{to:"/login",className:o,children:"Login"}),(0,L.jsx)(s.OL,{to:"/register",className:o,children:"Register"})]})})},Ne=()=>(0,L.jsx)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,L.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})});const ke="k5rxhHqufc0wTH_iRBgY",Ae="S898CJNNo9cb_xQn4FBI";var Ee=()=>(0,L.jsx)("header",{className:ke,children:(0,L.jsxs)("div",{className:Ae,children:[(0,L.jsx)(me,{}),(0,L.jsx)(Se,{})]})});const _e="QcyAwWrXP4IvTyugCBDk",De="zwrmBObIHf75VWaw38yw";var Ce=e=>{var{children:r}=e;return(0,L.jsxs)("div",{className:_e,children:[(0,L.jsx)(Ee,{}),(0,L.jsx)("main",{className:De,children:r})]})};const Te="kIwoKeY1ahkooJTXbu5k",Ue="kioBQlhTvvd5Aum2TU03",Ie="XsniiaeK_STDgsIj1Oog",Le="ajFuQufx5wCXf2dNC1RP";var Me=e=>{var{onSubmit:r}=e,t=c(),[n,a]=(0,o.useState)(""),s=(0,o.useRef)(null),i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=(0,o.useRef)();function a(){n.current&&(clearTimeout(n.current),n.current=void 0)}return(0,o.useEffect)((()=>t?a:void 0),[t]),function(){for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];a(),n.current=setTimeout((()=>e(...s)),r)}}((e=>t(O(e))),500,!0);return(0,o.useEffect)((()=>()=>{t(P())}),[t]),(0,L.jsxs)("form",{className:Te,onSubmit:function(e){e.preventDefault(),r(n)},name:"search",children:[(0,L.jsx)("input",{className:Ue,ref:s,value:n,placeholder:"Find a photo for you",onChange:function(e){a(e.target.value),i(e.target.value)}}),n&&(0,L.jsx)("button",{className:Ie,type:"button","aria-label":"clear input",onClick:function(){var e;a(""),t(P()),null===(e=s.current)||void 0===e||e.focus()},children:(0,L.jsx)(ue,{})}),(0,L.jsx)("button",{type:"submit",className:Le,disabled:!n.length,"aria-label":"Search",children:(0,L.jsx)(Ne,{})})]})};const Be="nlWODRnelZwk8H1WSwb3",Re="tRTLbVEQAzT1QRMCc1PM",He="CdPc0hE8Dg8KmcnLx3cE",Fe="kmzUaLH__6hRQyiA0kIw",qe="Ys99cJte9zU9W_qELMT5",We="XAST3IQBuGPp_yosKtEo",Xe="maDGhwQedZYPPrckXRM1";var Je=e=>{var{id:r,alt_description:t="no description",thumb:n,owner:a,likes:o=0}=e;return(0,L.jsxs)("article",{className:Be,children:[(0,L.jsx)(s.rU,{to:"/card?id=".concat(r),className:Re}),(0,L.jsx)("div",{className:He,children:(0,L.jsx)("img",{src:n,alt:t})}),(0,L.jsx)("h2",{className:We,children:t}),(0,L.jsx)("p",{className:qe,children:"by ".concat(a)}),(0,L.jsxs)("p",{className:Fe,children:[(0,L.jsx)("span",{role:"img","aria-label":"heart",children:"❤️"})," ",o]}),(0,L.jsx)("span",{className:Xe,children:"→"})]})};const Ye="TD1HD6cN_5HU7pXRZlxa",ze="PQyGLGo76sk88jGeFpf5",Ge="cIBHfP8MjIO0mJykMJa2",Ke="E8ykriKZvDPoO7oOFtns";var Ve=e=>{var{photos:r,visible:t,errorMessage:n=""}=e,a=r.map((e=>{var{id:r,alt_description:t,urls:n,user:a,likes:s}=e;return(0,L.jsx)("li",{children:(0,L.jsx)(Je,{id:r,alt_description:t,thumb:n.thumb,owner:a.name,likes:s})},r)}));return(0,L.jsx)("div",{className:"".concat(Ye," ").concat(t&&Ge),id:"bar","aria-label":"Suggestions Bar",children:n?(0,L.jsx)("p",{className:Ke,children:n}):(0,L.jsx)("ul",{className:ze,children:a})})};function Qe(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function Ze(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){Qe(s,n,a,o,i,"next",e)}function i(e){Qe(s,n,a,o,i,"throw",e)}o(void 0)}))}}var $e={baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID ".concat("3Pox_wNs8532dngHm4uot-g_A-WiHVbZgQkXouZiKdY")}},er=function(){var e=Ze((function*(e){return e.ok?e.json():e.json().then((e=>Promise.reject(null==e?void 0:e.errors[0])))}));return function(r){return e.apply(this,arguments)}}(),rr=function(){var e=Ze((function*(e){var{endPoint:r,body:t,method:n}=e;try{var{baseURL:a,headers:s}=$e,o={headers:s,method:n||"GET"};t&&(o.body=JSON.stringify(t));var i=yield fetch("".concat(a).concat(r),o);return er(i)}catch(e){return Promise.reject("Unexpected error from makeRequest")}}));return function(r){return e.apply(this,arguments)}}(),tr=e=>{var r=[];for(var t in e)e[t]&&r.push("".concat(t,"=").concat(e[t]));return"?"+r.join("&")},nr=e=>rr({endPoint:"/photos/".concat(e)}),ar=e=>{var r="";return e&&(r=tr(e)),rr({endPoint:"/photos".concat(r)})},sr=e=>{var r="";return e&&(r=tr(e)),rr({endPoint:"/photos/random".concat(r)})},or=e=>{var r=tr(e);return rr({endPoint:"/search/photos".concat(r)})};const ir="lkajQKCidxJ9BGKaIToL";function cr(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}var lr=()=>{var e=c(),r=l(_),[t,n]=(0,o.useState)(!1),[a,s]=(0,o.useState)([]),[i,u]=(0,o.useState)(""),{isAuth:d}=I(),{searchValue:h,countPerPage:v}=l((e=>e.search)),f=function(){var t,a=(t=function*(t){if(n(!1),or({query:t,per_page:v,page:1}).then((r=>{var{results:t,total_pages:n}=r;e(j(t)),e(w(n))})).catch(console.log),d)try{yield(0,q.pl)((0,q.JU)(K,"users/".concat(r,"/searchHistory"),t),{searchValue:t})}catch(e){console.error("Ошибка при добавлении параметра поиска: ",e)}},function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(e){cr(s,n,a,o,i,"next",e)}function i(e){cr(s,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}(),p=e=>{u("string"==typeof e?e:"An error occurred during the request. Please try again later."),s([])};return(0,o.useEffect)((()=>{u(""),h&&sr({count:5,query:h}).then((e=>{s(e)})).catch(p).finally((()=>n(!0)))}),[h]),(0,o.useEffect)((()=>{var e=e=>{t&&!e.target.closest("section")&&n(!1)};return t&&document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[t]),(0,L.jsxs)("section",{className:ir,children:[(0,L.jsx)(Me,{onSubmit:f}),(0,L.jsx)(Ve,{photos:a,visible:t&&h.length>0,errorMessage:i})]})};const ur={cardPage:"KJtAPu_Cnoijkj2S0QAw",cardInfo:"EklOGZMCgGTOhK40Q9k1",cardImage:"pSlmUVy_0sa_pz0wteQ8",cardDescription:"BGgAqLKXk42y7c0JtmYV",title:"SNoz5zU2p4uwGAeFtlH9",extraInfo:"NY1lFrOd_RJg2i6XJyF9",author:"sdxTcX9qj5tOfomBr9vr",location:"gw3XbhzPk7uJmk3A_wAh",othersPosts:"HqW1R4WykOyRHOIjfeYS",posts:"vppp4ePSNtO_JmfkMC7e"};function dr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function hr(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?dr(Object(t),!0).forEach((function(r){vr(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dr(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function vr(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function fr(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function pr(){var e,r,t,n=(0,i.TH)(),a=l(_),[s,c]=(0,o.useState)(null),[u,d]=(0,o.useState)(null),{isAuth:h}=I(),v=(0,o.useCallback)(function(){var e,r=(e=function*(e){var r,t=yield nr(e);if(c(t),h)try{yield(0,q.pl)((0,q.JU)(K,"users/".concat(a,"/cardsHistory"),e),hr({},t))}catch(e){console.error("Ошибка при добавлении карточки в историю: ",e)}var n=null==t||null===(r=t.topics[0])||void 0===r?void 0:r.id,s=yield sr({topics:n,orientation:"portrait",count:20});d(s)},function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){fr(s,n,a,o,i,"next",e)}function i(e){fr(s,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),[a]);return(0,o.useLayoutEffect)((()=>{var e=new URLSearchParams(window.location.search).get("id");v(e)}),[n,v]),(0,L.jsxs)("div",{className:ur.cardPage,children:[s&&(0,L.jsxs)("section",{className:ur.cardInfo,children:[(0,L.jsx)("div",{className:ur.cardImage,children:(0,L.jsx)("img",{src:null==s||null===(e=s.urls)||void 0===e?void 0:e.regular,alt:""})}),(0,L.jsxs)("div",{className:ur.cardDescription,children:[(0,L.jsx)("div",{className:ur.title,children:(0,L.jsx)("h2",{children:null==s?void 0:s.description})}),(0,L.jsxs)("div",{className:ur.extraInfo,children:[(0,L.jsx)("div",{className:ur.author,children:null==s||null===(r=s.user)||void 0===r?void 0:r.name}),(0,L.jsxs)("div",{className:ur.location,children:[null==s||null===(t=s.location)||void 0===t?void 0:t.country,s.location.city?", ".concat(s.location.city):"Unknown location"]})]})]})]}),(0,L.jsxs)("section",{className:ur.othersPosts,children:[(0,L.jsx)("h2",{children:"You might like it"}),(0,L.jsx)("ul",{className:ur.posts,children:u&&u.map((e=>(0,L.jsx)("li",{children:(0,L.jsx)(ie,hr({},e),e.id)},e.id)))})]})]})}var mr=()=>{var e=c(),r=(0,i.s0)();return(0,L.jsx)(he,{title:"Sign In",handleSubmit:(t,n)=>{(0,Y.e5)(G,t,n).then((t=>{var{user:n}=t;e(k({email:n.email,id:n.uid,token:n.refreshToken})),r("/")})).catch((()=>alert("Invalid user!")))}})},jr=()=>{var{isAuth:e}=I(),r=(0,i.s0)();return e&&r("/"),(0,L.jsxs)("div",{className:"authContainer",children:[(0,L.jsx)("h1",{children:"Login"}),(0,L.jsx)(mr,{}),(0,L.jsxs)("p",{children:["Don't have an account? ",(0,L.jsx)(s.rU,{to:"/register",children:"Register here"})]})]})},yr=()=>{var e=c(),r=(0,i.s0)();return(0,L.jsx)(he,{title:"Sign Out",handleSubmit:(t,n)=>{(0,Y.Xb)(G,t,n).then((t=>{var{user:n}=t;e(k({email:n.email,id:n.uid,token:n.refreshToken})),r("/")})).catch(console.error)}})},gr=()=>{var{isAuth:e}=I(),r=(0,i.s0)();return e&&r("/"),(0,L.jsxs)("div",{className:"authContainer",children:[(0,L.jsx)("h1",{children:"Register"}),(0,L.jsx)(yr,{}),(0,L.jsxs)("p",{children:["Already have an account? ",(0,L.jsx)(s.rU,{to:"/login",children:"Sign in"})]})]})},br=()=>{var[e,r]=(0,o.useState)([]),t=l(_),[n,a]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{a(!0);var e=(0,q.cf)((0,q.hJ)(K,"users/".concat(t,"/favorites")),(e=>{var t=e.docs.map((e=>e.data()));r(t),a(!1)}));return()=>e()}),[t]),(0,L.jsxs)(L.Fragment,{children:[n&&(0,L.jsx)(be,{}),!n&&e.length>0&&(0,L.jsx)(le,{cards:e}),!n&&0===e.length&&(0,L.jsx)("h2",{children:"You have no favorites"})]})};function xr(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}function Or(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){xr(s,n,a,o,i,"next",e)}function i(e){xr(s,n,a,o,i,"throw",e)}o(void 0)}))}}const Pr="GRbRIY8KlgqcpHaT1A6O";var wr=()=>{var e=c(),{cardsData:r}=l((e=>e.cards)),{countPerPage:t}=l((e=>e.search)),[n,a]=(0,o.useState)(!1);return function(){var e=c(),[r,t]=(0,o.useState)(2),[n,a]=(0,o.useState)(!1),{searchValue:s,countPerPage:i,totalPages:u}=l((e=>e.search)),d=(0,o.useCallback)(Or((function*(){var n;if(s){var{results:o}=yield or({query:s,page:r,per_page:i});n=o}else n=yield ar({page:r,per_page:i});e(y(n)),t((e=>e+1)),a(!1)})),[e,r,s,i]);(0,o.useEffect)((()=>{if(n){if(u&&u<r)return void a(!1);d()}}),[n,d,r,u]),(0,o.useEffect)((()=>(document.addEventListener("scroll",h),function(){document.removeEventListener("scroll",h)})),[]);var h=e=>{e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&a(!0)}}(),(0,o.useEffect)((()=>{r.length||(a(!0),ar({page:1,per_page:t}).then((r=>{e(j(r))})).catch(console.log).finally((()=>{a(!1)})))}),[r.length,e,t]),(0,L.jsxs)("div",{className:Pr,children:[(0,L.jsx)(lr,{}),n&&(0,L.jsx)(be,{}),!n&&r.length>0&&(0,L.jsx)(le,{cards:r})]})};const Sr="zL5jDhxyHZEFGIR399CC",Nr="X1uMAynGbM_EvqQCAGKY",kr="RtBbPB1p3DrsPIhNNbBX",Ar="XlkSyiFtif7y4fJ2_5Ct",Er="WYKHJaYO1N1tQRP4PnDm";function _r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Dr(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_r(Object(t),!0).forEach((function(r){Cr(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_r(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Cr(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Tr(e,r,t,n,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,a)}const Ur=function(){var e=c(),r=(0,i.s0)(),[t,n]=(0,o.useState)([]),[a,s]=(0,o.useState)([]),u=l(_),[d,h]=(0,o.useState)(!1);(0,o.useEffect)((()=>{h(!0);var e=(0,q.cf)((0,q.hJ)(K,"users/".concat(u,"/cardsHistory")),(e=>{var r=e.docs.map((e=>e.data()));n(r.reverse()),h(!1)})),r=(0,q.cf)((0,q.hJ)(K,"users/".concat(u,"/searchHistory")),(e=>{var r=e.docs.map((e=>e.data()));s(r.reverse()),h(!1)}));return()=>{e(),r()}}),[u]);var v=function(){var t,n=(t=function*(t){or({query:t,per_page:20}).then((r=>{e(j(r.results))})).catch(console.log).finally((()=>r("/")))},function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(e){Tr(s,n,a,o,i,"next",e)}function i(e){Tr(s,n,a,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return d?(0,L.jsx)(be,{}):(0,L.jsxs)("div",{className:Sr,children:[(0,L.jsx)("h2",{children:"Cards you've looked at"}),null!=t&&t.length?(0,L.jsx)("ul",{className:Nr,children:t.map(((e,r)=>(0,L.jsx)("li",{children:(0,L.jsx)(ie,Dr({},e))},r)))}):(0,L.jsx)("p",{className:Er,children:"You haven't looked at any cards yet"}),(0,L.jsx)("h2",{children:"Search history"}),null!=a&&a.length?(0,L.jsx)("ul",{className:kr,children:a.map(((e,r)=>(0,L.jsx)("li",{className:Ar,onClick:()=>v(e.searchValue),children:e.searchValue},r)))}):(0,L.jsx)("p",{className:Er,children:"You haven't searched for anything yet"})]})},Ir="vrNuVB8A4modZMRW46_n",Lr="MDaoXD0zx4g0qVFozIpL",Mr="b_1Zox2nlTI8sv7BKEX4",Br="KT2lhf6TUn2ZuPUOuFME",Rr="d44UssZEHzOGhqUKsckQ";var Hr=()=>{var e=(0,i.s0)();return(0,L.jsxs)("section",{className:Ir,children:[(0,L.jsx)("p",{className:Lr,children:"404"}),(0,L.jsx)("h2",{className:Mr,children:"Page not found"}),(0,L.jsx)("nav",{children:(0,L.jsxs)("ul",{className:Br,children:[(0,L.jsx)("li",{children:(0,L.jsx)("button",{onClick:()=>e(-1),className:Rr,type:"button",children:"Back"})}),(0,L.jsx)("li",{children:(0,L.jsx)("button",{onClick:()=>e("/",{replace:!0}),className:Rr,type:"button",children:"Main page"})})]})})]})},Fr=(0,d.hg)("auth/checkAuth",((e,r)=>{var{dispatch:t}=r;(0,Y.Aj)(G,(e=>t(e?v({email:e.email,uid:e.uid}):f())))}));const qr=function(){var e=c(),r=l(C);return(0,o.useEffect)((()=>{e(Fr())}),[e]),"LOADING"===r?(0,L.jsx)(be,{fullscreen:!0}):(0,L.jsx)(Ce,{children:(0,L.jsxs)(i.Z5,{children:[(0,L.jsx)(i.AW,{path:"/",element:(0,L.jsx)(wr,{})}),(0,L.jsx)(i.AW,{path:"/login",element:(0,L.jsx)(jr,{})}),(0,L.jsx)(i.AW,{path:"/register",element:(0,L.jsx)(gr,{})}),(0,L.jsx)(i.AW,{path:"/card",element:(0,L.jsx)(pr,{})}),(0,L.jsx)(i.AW,{path:"/favorites",element:(0,L.jsx)(F,{component:br})}),(0,L.jsx)(i.AW,{path:"/history",element:(0,L.jsx)(F,{component:Ur})}),(0,L.jsx)(i.AW,{path:"*",element:(0,L.jsx)(Hr,{})})]})})};(0,n.s)(document.getElementById("root")).render((0,L.jsx)(a.zt,{store:U,children:(0,L.jsx)(s.VK,{basename:"dist/index.html",children:(0,L.jsx)(qr,{})})}))}},a={};function s(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return n[e](t,t.exports,s),t.exports}s.m=n,e=[],s.O=(r,t,n,a)=>{if(!t){var o=1/0;for(u=0;u<e.length;u++){for(var[t,n,a]=e[u],i=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every((e=>s.O[e](t[c])))?t.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);s.r(a);var o={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,s.d(a,o),a},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),(()=>{var e={143:0};s.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[o,i,c]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var u=c(s)}for(r&&r(t);l<o.length;l++)a=o[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},t=self.webpackChunkgallery=self.webpackChunkgallery||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=s.O(void 0,[809],(()=>s(232)));o=s.O(o)})();
//# sourceMappingURL=c7fc753330aca2509930.js.map