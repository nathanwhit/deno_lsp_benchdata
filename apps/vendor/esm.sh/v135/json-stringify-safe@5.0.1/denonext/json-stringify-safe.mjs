/* esm.sh - esbuild bundle(json-stringify-safe@5.0.1) denonext production */
var m=Object.create;var d=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var j=(t,i)=>()=>(i||t((i={exports:{}}).exports,i),i.exports),I=(t,i)=>{for(var n in i)d(t,n,{get:i[n],enumerable:!0})},l=(t,i,n,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of z(i))!C.call(t,r)&&r!==n&&d(t,r,{get:()=>i[r],enumerable:!(e=O(i,r))||e.enumerable});return t},u=(t,i,n)=>(l(t,i,"default"),n&&l(n,i,"default")),x=(t,i,n)=>(n=t!=null?m(S(t)):{},l(i||!t||!t.__esModule?d(n,"default",{value:t,enumerable:!0}):n,t));var p=j((c,a)=>{c=a.exports=J;c.getSerialize=_;function J(t,i,n,e){return JSON.stringify(t,_(i,e),n)}function _(t,i){var n=[],e=[];return i==null&&(i=function(r,f){return n[0]===f?"[Circular ~]":"[Circular ~."+e.slice(0,n.indexOf(f)).join(".")+"]"}),function(r,f){if(n.length>0){var o=n.indexOf(this);~o?n.splice(o+1):n.push(this),~o?e.splice(o,1/0,r):e.push(r),~n.indexOf(f)&&(f=i.call(this,r,f))}else n.push(f);return t==null?f:t.call(this,r,f)}}});var s={};I(s,{default:()=>k,getSerialize:()=>N});var h=x(p());u(s,x(p()));var{getSerialize:N}=h,{default:g,...b}=h,k=g!==void 0?g:b;export{k as default,N as getSerialize};
//# sourceMappingURL=json-stringify-safe.mjs.map