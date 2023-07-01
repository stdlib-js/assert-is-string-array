// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),y="get"in l,p="set"in l,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,l.get),p&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return f&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,i;if(null==t)return p.call(t);e=t[v],i=v,r=null!=(o=t)&&b.call(o,i);try{t[v]=void 0}catch(r){return p.call(t)}return n=p.call(t),r?t[v]=e:delete t[v],n}:function(t){return p.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===s(t)};function m(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}function g(t){return"string"==typeof t}var j=String.prototype.valueOf;var d=y();function S(t){return"object"==typeof t&&(t instanceof String||(d?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function w(t){return g(t)||S(t)}c(w,"isPrimitive",g),c(w,"isObject",S);var h=m(w.isPrimitive),O=m(w.isObject),A=m(w);c(A,"primitives",h),c(A,"objects",O);export{A as default,O as objects,h as primitives};
//# sourceMappingURL=mod.js.map