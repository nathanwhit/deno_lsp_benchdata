/* esm.sh - esbuild bundle(wrappy@1.0.2) denonext production */
var m=Object.create;var i=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var E=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),b=(r,e)=>{for(var t in e)i(r,t,{get:e[t],enumerable:!0})},c=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of _(e))!x.call(r,o)&&o!==t&&i(r,o,{get:()=>e[o],enumerable:!(n=w(e,o))||n.enumerable});return r},u=(r,e,t)=>(c(r,e,"default"),t&&c(t,e,"default")),y=(r,e,t)=>(t=r!=null?m(v(r)):{},c(e||!r||!r.__esModule?i(t,"default",{value:r,enumerable:!0}):t,r));var s=E((k,h)=>{h.exports=d;function d(r,e){if(r&&e)return d(r)(e);if(typeof r!="function")throw new TypeError("need wrapper function");return Object.keys(r).forEach(function(n){t[n]=r[n]}),t;function t(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];var f=r.apply(this,n),p=n[n.length-1];return typeof f=="function"&&f!==p&&Object.keys(p).forEach(function(l){f[l]=p[l]}),f}}});var a={};b(a,{default:()=>A});var j=y(s());u(a,y(s()));var{default:g,...O}=j,A=g!==void 0?g:O;export{A as default};
//# sourceMappingURL=wrappy.mjs.map