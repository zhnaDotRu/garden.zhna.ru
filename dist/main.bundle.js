!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">\r\n  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">\r\n  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">\r\n  <link rel="manifest" href="/favicon/site.webmanifest">\r\n  <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">\r\n  <link rel="shortcut icon" href="/favicon/favicon.ico">\r\n  <meta name="msapplication-TileColor" content="#00a300">\r\n  <meta name="msapplication-config" content="/favicon/browserconfig.xml">\r\n  <meta name="theme-color" content="#ffffff">\r\n  <title>Garden</title>\r\n</head>\r\n<body>\r\n  <header class="header js-header">\r\n    <h1 class="header-h1">Garden</h1>\r\n    <div class="header-info">\r\n      <div class="info">\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Days:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Trees:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Apples all:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n      </div>\r\n      <div class="info">\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Apples on tree:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Apples on earth:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n        <p class="info-text">\r\n          <span class="info-text-span mod-h">Apples bad:</span>\r\n          <span class="info-text-span mod-num js-set-num">100</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class="button-menu js-open-menu">\r\n      <div class="button-menu-line"></div>\r\n      <div class="button-menu-line"></div>\r\n      <div class="button-menu-line"></div>\r\n    </div>\r\n  </header>\r\n  <nav class="nav">\r\n    <div class="nav-button js-next-day">Next day</div>\r\n    <div class="nav-button js-open-settings">Settings</div>\r\n  </nav>\r\n  <div class="settings-popup js-settings-popup is-closed">\r\n    <div class="input-block">\r\n      <p class="input-block-text">Garden trees:</p>\r\n      <input type="text" disabled class="input-block-in js-input-settings">\r\n    </div>\r\n    <div class="input-block">\r\n      <p class="input-block-text">New tree day:</p>\r\n      <input type="text" class="input-block-in js-input-settings">\r\n    </div>\r\n    <div class="input-block">\r\n      <p class="input-block-text">Apples:</p>\r\n      <input type="text" class="input-block-in js-input-settings">\r\n    </div>\r\n    <div class="input-block">\r\n      <p class="input-block-text">New apple day:</p>\r\n      <input type="text" class="input-block-in js-input-settings">\r\n    </div>\r\n      <div class="input-block">\r\n      <p class="input-block-text">Days on tree:</p>\r\n    <input type="text" class="input-block-in js-input-settings">\r\n    </div>\r\n    <div class="input-block">\r\n      <p class="input-block-text">Days on earth:</p>\r\n      <input type="text" class="input-block-in js-input-settings">\r\n    </div>\r\n\r\n    <div class="button-block">\r\n      <div class="button-block-btn js-reset">Reset</div>\r\n      <div class="button-block-btn js-save">Save</div>\r\n      <div class="button-block-btn js-close">Close</div>\r\n    </div>\r\n  </div>\r\n  <main class="main js-main"></main>\r\n</body>\r\n</html>'},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,s);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,s,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=r.apply(this,arguments)),s}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,p=0,c=[],u=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=a[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(b(r.parts[i],t))}else{var o=[];for(i=0;i<r.parts.length;i++)o.push(b(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:o}}}}function d(e,t){for(var n=[],r={},s=0;s<e.length;s++){var a=e[s],i=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(o):n.push(r[i]={id:i,parts:[o]})}return n}function h(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=o(e.insertAt.before,n);n.insertBefore(t,s)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,s,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=p++;n=l||(l=y(t)),r=_.bind(null,n,i,!1),s=_.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,s=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&s;(t.convertToAbsoluteUrls||a)&&(r=u(r));s&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var i=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}.bind(null,n,t),s=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),s=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var i=n[s];(o=a[i.id]).refs--,r.push(o)}e&&f(d(e,t),t);for(s=0;s<r.length;s++){var o;if(0===(o=r[s]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete a[o.id]}}}};var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var a=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var s,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(s=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},function(e,t){var n=document.querySelector(".js-header");document.querySelector(".js-open-menu").addEventListener("click",function(){this.classList.toggle("is-open"),n.classList.toggle("is-open")},!1)},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(5);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._days=0,this._daysOnTree=this._settings.daysOnTree,this._daysOnEarth=this._settings.daysOnEarth,this._maxDay=this._daysOnTree+this._daysOnEarth}var t,n,s;return t=e,(n=[{key:"passDay",value:function(){++this._days}},{key:"info",get:function(){var e=this._days-this._daysOnTree,t=e<=0?0:100*e/this._daysOnEarth;return{days:this._days,corruption:t,location:this._days<=this._daysOnTree,is:this._days>this._maxDay}}}])&&r(t.prototype,n),s&&r(t,s),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._days=0,this._applesBad=0,this._apples=[];for(var n=this._settings.apples,r=1;r<=n;r++)this._apples.push(new s(this._settings.apple))}var t,n,r;return t=e,(n=[{key:"passDay",value:function(){var e=this;++this._days,this._apples=this._apples.filter(function(t){return t.passDay(),!t.info.is||(++e._applesBad,!1)}),this._days%this._settings.newAppleDay==0&&this._apples.push(new s(this._settings.apple))}},{key:"info",get:function(){var e=0,t=0;return this._apples.forEach(function(n){var r=n.info;r.location?++e:r.is||++t}),{days:this._days,applesBad:this._applesBad,applesOnTree:e,applesOnEarth:t,apples:this._apples}}}])&&a(t.prototype,n),r&&a(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._trees=[];for(var n=1;n<=this._settings.gardenTrees;n++)this._trees.push(new i(this._settings.tree));this._days=0}var t,n,r;return t=e,(n=[{key:"passDay",value:function(){++this._days,this._days%this._settings.newTreeDay==0&&this._trees.push(new i(this._settings.tree)),this._trees.forEach(function(e){return e.passDay()})}},{key:"info",get:function(){var e=0,t=0,n=0;return this._trees.forEach(function(r){var s=r.info;e+=s.applesBad,t+=s.applesOnTree,n+=s.applesOnEarth}),{applesOnTree:t,applesOnEarth:n,applesBad:e,days:this._days,trees:this._trees}}},{key:"applesOnTree",get:function(){return this.info.applesOnTree}},{key:"applesOnEarth",get:function(){return this.info.applesOnEarth}},{key:"applesBad",get:function(){return this.info.applesBad}},{key:"days",get:function(){return this.info.days}},{key:"countTrees",get:function(){return this._trees.length}}])&&o(t.prototype,n),r&&o(t,r),e}();function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,f(t).call(this,n)))._elementDraw=e,r._draw=[],r}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,l),n=t,(r=[{key:"draw",value:function(){var e=this;this.info.trees.forEach(function(t){var n=t.info,r=e._createTree(n.days,n.applesOnTree,n.applesOnEarth,n.applesBad);e._draw.push(r),e._elementDraw.appendChild(r.tree)})}},{key:"nextDay",value:function(){var e=this;this.passDay(),this.info.trees.forEach(function(t,n){var r=t.info,s=e._draw[n];if(void 0!==s)s.days.innerText=r.days,s.onTree.innerText=r.applesOnTree,s.onEarth.innerText=r.applesOnEarth,s.bad.innerText=r.applesBad;else{var a=e._createTree(r.days,r.applesOnTree,r.applesOnEarth,r.applesBad);e._draw.push(a),e._elementDraw.appendChild(a.tree)}})}},{key:"_createTree",value:function(e,t,n,r){var s=document.createElement("div");s.className="tree";var a=document.createElement("img");a.className="tree-img",a.src="./img/tree.png";var i=document.createElement("div");i.className="tree-info";var o=this._createText("Days: ",e);i.appendChild(o.p);var l=this._createText("On tree: ",t);i.appendChild(l.p);var p=this._createText("On earth: ",n);i.appendChild(p.p);var c=this._createText("Bad: ",r);return i.appendChild(c.p),s.appendChild(a),s.appendChild(i),{tree:s,days:o.span,onTree:l.span,onEarth:p.span,bad:c.span}}},{key:"_createText",value:function(e,t){var n=document.createElement("p");n.className="tree-info-text",n.innerHTML=e;var r=document.createElement("span");return r.innerText=t,n.appendChild(r),{p:n,span:r}}}])&&c(n.prototype,r),s&&c(n,s),t}();function v(e,t,n,r,s,a){e[0].innerText=t,e[1].innerText=n,e[2].innerText=r+s+a,e[3].innerText=r,e[4].innerText=s,e[5].innerText=a}function y(e,t,n,r,s,a,i,o){e[0].disabled=o,e[0].value=t,e[1].value=n,e[2].value=r,e[3].value=s,e[4].value=a,e[5].value=i}var m={gardenTrees:3,newTreeDay:360,tree:{apples:10,newAppleDay:30,apple:{daysOnTree:10,daysOnEarth:1}}},b=document.querySelector(".js-main"),g=document.querySelector(".js-settings-popup"),x=document.querySelectorAll(".js-input-settings"),_=document.querySelectorAll(".js-set-num"),w=new h(b,m);w.draw(),v(_,w.days,w.countTrees,w.applesOnTree,w.applesOnEarth,w.applesBad);var T=!1;document.querySelector(".js-next-day").addEventListener("click",function(){w.nextDay(),v(_,w.days,w.countTrees,w.applesOnTree,w.applesOnEarth,w.applesBad)},!1),document.querySelector(".js-open-settings").addEventListener("click",function(){y(x,m.gardenTrees,m.newTreeDay,m.tree.apples,m.tree.newAppleDay,m.tree.apple.daysOnTree,m.tree.apple.daysOnEarth,!0),g.classList.remove("is-closed")},!1),document.querySelector(".js-close").addEventListener("click",function(){T=!1,g.classList.add("is-closed")},!1),document.querySelector(".js-reset").addEventListener("click",function(){y(x,3,360,10,30,30,1,!(T=!0))},!1),document.querySelector(".js-save").addEventListener("click",function(){var e=!0;if(x.forEach(function(t){(function(e){var t=e.value;return t>=1&&Math.floor(t)===+t?(e.classList.remove("is-error"),!0):(e.classList.add("is-error"),!1)})(t)||(e=!1)}),e){if(m.gardenTrees=parseInt(x[0].value),m.newTreeDay=parseInt(x[1].value),m.tree.apples=parseInt(x[2].value),m.tree.newAppleDay=parseInt(x[3].value),m.tree.apple.daysOnTree=parseInt(x[4].value),m.tree.apple.daysOnEarth=parseInt(x[5].value),T){for(x[0].disabled=T,T=!1;b.firstChild;)b.removeChild(b.firstChild);(w=new h(b,m)).draw(),v(_,w.days,w.countTrees,w.applesOnTree,w.applesOnEarth,w.applesBad)}g.classList.add("is-closed")}},!1)}]);