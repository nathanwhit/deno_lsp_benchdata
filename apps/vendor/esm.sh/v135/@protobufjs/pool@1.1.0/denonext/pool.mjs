/* esm.sh - esbuild bundle(@protobufjs/pool@1.1.0) denonext production */
var x=Object.create;var d=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var M=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),S=(t,r)=>{for(var o in r)d(t,o,{get:r[o],enumerable:!0})},_=(t,r,o,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of A(r))!I.call(t,u)&&u!==o&&d(t,u,{get:()=>r[u],enumerable:!(f=b(r,u))||f.enumerable});return t},l=(t,r,o)=>(_(t,r,"default"),o&&_(o,r,"default")),v=(t,r,o)=>(o=t!=null?x(E(t)):{},_(r||!t||!t.__esModule?d(o,"default",{value:t,enumerable:!0}):o,t));var p=M((q,i)=>{"use strict";i.exports=X;function X(t,r,o){var f=o||8192,u=f>>>1,c=null,a=f;return function(n){if(n<1||n>u)return t(n);a+n>f&&(c=t(f),a=0);var s=r.call(c,a,a+=n);return a&7&&(a=(a|7)+1),s}}});var e={};S(e,{default:()=>h});var Z=v(p());l(e,v(p()));var{default:m,...g}=Z,h=m!==void 0?m:g;export{h as default};
//# sourceMappingURL=pool.mjs.map