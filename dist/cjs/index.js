"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),o=require("react"),n=function(){return(n=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e}).apply(this,arguments)};function t(){let e;const o=()=>{e.init()};return{initNaver:(n,t,i,s,c)=>{const a="naver_login";if(!!!document.getElementById(a)){const l=document.createElement("script");l.src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js",l.onload=()=>{((n,t,i,s)=>{e=new window.naver.LoginWithNaverId({clientId:n,callbackUrl:t,isPopup:i,loginButton:{color:s.buttonColor,type:s.buttonType,height:s.buttonHeight}}),o()})(n,t,i,c),e.getLoginStatus((e=>{s()}))},l.onerror=e=>console.log(e),l.id=a,document.head.appendChild(l)}},setNaver:o,getUserInfo:()=>{o(),e.getLoginStatus((o=>{if(o){const o=e.user.email,n=e.user.name;console.log(o,n)}else console.log("AccessToken이 올바르지 않습니다.")}))}}}class i{constructor(e){this.props=e}initiate(){const e="kakao-login-sdk";if(!!!document.getElementById(e)){const o=document.createElement("script");o.src="https://developers.kakao.com/sdk/js/kakao.js",o.onload=()=>window.Kakao.init(this.props.apiKey),o.onerror=e=>console.log("APPEND SCRIPT ERROR - ",e),o.id=e,document.head.appendChild(o)}}async login(){await window.Kakao.Auth.login({success:()=>this.getUserInfo(),fail:e=>{console.log("KAKAO LOGIN ERROR - ",e),this.props.fail(e)}})}async getUserInfo(){await window.Kakao.API.request({url:"/v2/user/me",success:e=>{console.log("GET KAKAO USER INFO - ",e),this.props.success(e)},fail:e=>{console.log("GET KAKAO USER INFO - ",e),this.props.fail(e)}})}}class s{constructor(e){this.props=e}initiate(){const e="google-login-sdk";if(!!!document.getElementById(e)){const o=document.createElement("script");o.src="https://apis.google.com/js/api:client.js",o.onload=()=>this.loadAndAttachLoginFunc(),o.onerror=e=>console.log("APPEND SCRIPT ERROR - ",e),o.id=e,document.head.appendChild(o)}}async loadAndAttachLoginFunc(){await window.gapi.load("auth2",(()=>{const e=window.gapi.auth2.init({client_id:this.props.clientId,cookiepolicy:"single_host_origin"}),o=document.querySelector("#"+this.props.elementId);e.attachClickHandler(o,{},(e=>this.successCallback(e)),(e=>this.failCallback(e)))}))}async successCallback(e){console.log("GOOGLE LOGIN SUCCESS");const o={name:await e.getBasicProfile().getName()};this.props.success(o)}failCallback(e){console.log("GOOGLE LOGIN FAIL - ",e),this.props.fail()}}function c(e,o){void 0===o&&(o={});var n=o.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}c(".kakao-login {\n\tbackground-color: yellow;\n\tpadding: 10px;\n}\n");c(".google-login {\n\tbackground-color: red;\n\tpadding: 10px;\n}\n");c(".naver-login {\n\tbackground-color: green;\n\tpadding: 10px;\n}"),exports.GoogleLogin=function(o){var t=o.clientId,i=o.success,c=o.fail,a="google-login-button";return new s({clientId:t,elementId:a,success:i,fail:c}).initiate(),e.jsx("div",n({id:a,className:"google-login"},{children:e.jsx("span",{children:"구글 로그인"},void 0)}),void 0)},exports.KakaoLogin=function(o){var t=o.apiKey,s=o.success,c=o.fail,a=new i({apiKey:t,success:s,fail:c});return a.initiate(),e.jsx("div",n({className:"kakao-login",onClick:function(){return a.login()}},{children:e.jsx("span",{children:"카카오 로그인"},void 0)}),void 0)},exports.NaverLogin=function(i){var s=i.clientId,c=i.callbackUrl,a=i.success,l=i.fail,r=i.isPopup,d=void 0!==r&&r,u=i.buttonColor,g=void 0===u?"green":u,p=i.buttonType,h=void 0===p?3:p,v=i.buttonHeight,f={buttonColor:g,buttonType:h,buttonHeight:void 0===v?60:v},m=t();return o.useEffect((function(){m.initNaver(s,c,d,a,l,f)})),e.jsxs("div",{children:[e.jsx("div",{id:"naverIdLogin",style:{display:"none"}},void 0),e.jsx("div",n({className:"naver-login",onClick:function(){return document.getElementById("naverIdLogin_loginButton").click()}},{children:e.jsx("span",{children:"네이버 로그인"},void 0)}),void 0)]},void 0)};
//# sourceMappingURL=index.js.map
