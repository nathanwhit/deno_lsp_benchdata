/* esm.sh - esbuild bundle(fast-json-stable-stringify@2.1.0) denonext production */
var S=Object.create;var m=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var k=(i,r)=>()=>(r||i((r={exports:{}}).exports,r),r.exports),w=(i,r)=>{for(var f in r)m(i,f,{get:r[f],enumerable:!0})},_=(i,r,f,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of x(r))!j.call(i,n)&&n!==f&&m(i,n,{get:()=>r[n],enumerable:!(a=b(r,n))||a.enumerable});return i},l=(i,r,f)=>(_(i,r,"default"),f&&_(f,r,"default")),g=(i,r,f)=>(f=i!=null?S(h(i)):{},_(r||!i||!i.__esModule?m(f,"default",{value:i,enumerable:!0}):f,i));var o=k((I,J)=>{"use strict";J.exports=function(i,r){r||(r={}),typeof r=="function"&&(r={cmp:r});var f=typeof r.cycles=="boolean"?r.cycles:!1,a=r.cmp&&function(y){return function(t){return function(e,u){var v={key:e,value:t[e]},s={key:u,value:t[u]};return y(v,s)}}}(r.cmp),n=[];return function y(t){if(t&&t.toJSON&&typeof t.toJSON=="function"&&(t=t.toJSON()),t!==void 0){if(typeof t=="number")return isFinite(t)?""+t:"null";if(typeof t!="object")return JSON.stringify(t);var e,u;if(Array.isArray(t)){for(u="[",e=0;e<t.length;e++)e&&(u+=","),u+=y(t[e])||"null";return u+"]"}if(t===null)return"null";if(n.indexOf(t)!==-1){if(f)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var v=n.push(t)-1,s=Object.keys(t).sort(a&&a(t));for(u="",e=0;e<s.length;e++){var O=s[e],p=y(t[O]);p&&(u&&(u+=","),u+=JSON.stringify(O)+":"+p)}return n.splice(v,1),"{"+u+"}"}}(i)}});var c={};w(c,{default:()=>E});var A=g(o());l(c,g(o()));var{default:N,...C}=A,E=N!==void 0?N:C;export{E as default};
//# sourceMappingURL=fast-json-stable-stringify.mjs.map