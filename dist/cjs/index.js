"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=function(){return(t=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */class o{constructor(e){this.props=e}initiate(){const e="kakao-login-sdk";if(!!!document.getElementById(e)){const t=document.createElement("script");t.src="https://developers.kakao.com/sdk/js/kakao.js",t.onload=()=>window.Kakao.init(this.props.apiKey),t.onerror=e=>console.log("APPEND SCRIPT ERROR - ",e),t.id=e,document.head.appendChild(t)}}async login(){await window.Kakao.Auth.login({success:()=>this.getUserInfo(),fail:e=>{console.log("KAKAO LOGIN ERROR - ",e),this.props.fail(e)}})}async getUserInfo(){await window.Kakao.API.request({url:"/v2/user/me",success:e=>{console.log("GET KAKAO USER INFO - ",e),this.props.success(e)},fail:e=>{console.log("GET KAKAO USER INFO - ",e),this.props.fail(e)}})}}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===o&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".kakao-login {\n\tbackground-color: yellow;\n\tpadding: 10px;\n}\n"),exports.KakaoLogin=function(n){var s=n.apiKey,i=n.success,a=n.fail,r=new o({apiKey:s,success:i,fail:a});return r.initiate(),e.jsx("div",t({className:"kakao-login",onClick:function(){return r.login()}},{children:e.jsx("span",{children:"카카오 로그인"},void 0)}),void 0)};
//# sourceMappingURL=index.js.map
