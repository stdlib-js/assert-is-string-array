// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,c=r,f=function(t,e,r){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(t,e)||a.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t},y=e()?c:f,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),s=function(){return b&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,d=_,g=function(t){return d.call(t)},m=Object.prototype.hasOwnProperty,v=function(t,e){return null!=t&&m.call(t,e)},j="function"==typeof Symbol?Symbol.toStringTag:"",S=v,h=j,w=_,O=g,A=function(t){var e,r,n;if(null==t)return w.call(t);r=t[h],e=S(t,h);try{t[h]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[h]=r:delete t[h],n},P=s()?A:O,T=P,E=Array.isArray?Array.isArray:function(t){return"[object Array]"===T(t)},x=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!E(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}},V=function(t){return"string"==typeof t},k=String.prototype.valueOf,G=P,C=function(t){try{return k.call(t),!0}catch(t){return!1}},F=s(),M=function(t){return"object"==typeof t&&(t instanceof String||(F?C(t):"[object String]"===G(t)))},q=V,z=M,B=p,D=function(t){return q(t)||z(t)},H=M;B(D,"isPrimitive",V),B(D,"isObject",H);var I=D,J=x(I);return p(J,"primitives",x(I.isPrimitive)),p(J,"objects",x(I.isObject)),J},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isStringArray=e();
//# sourceMappingURL=browser.js.map
