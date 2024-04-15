/* esm.sh - esbuild bundle(minipass@3.3.6) denonext production */
import __Process$ from "node:process";
import { Buffer as __Buffer$ } from "node:buffer";
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
import * as __0$ from "node:events";
import * as __1$ from "node:stream";
import * as __2$ from "node:string_decoder";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"events":return e(__0$);case"stream":return e(__1$);case"string_decoder":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var v=Object.create;var x=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var et=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var I=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')});var it=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),rt=(i,t)=>{for(var e in t)x(i,e,{get:t[e],enumerable:!0})},O=(i,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of tt(t))!st.call(i,n)&&n!==e&&x(i,n,{get:()=>t[n],enumerable:!(s=k(t,n))||s.enumerable});return i},E=(i,t,e)=>(O(i,t,"default"),e&&O(e,t,"default")),P=(i,t,e)=>(e=i!=null?v(et(i)):{},O(t||!i||!i.__esModule?x(e,"default",{value:i,enumerable:!0}):e,i));var U=it((pt,z)=>{"use strict";var H=typeof __Process$=="object"&&__Process$?__Process$:{stdout:null,stderr:null},nt=I("events"),Y=I("stream"),G=I("string_decoder").StringDecoder,u=Symbol("EOF"),a=Symbol("maybeEmitEnd"),c=Symbol("emittedEnd"),L=Symbol("emittingEnd"),g=Symbol("emittedError"),T=Symbol("closed"),q=Symbol("read"),B=Symbol("flush"),V=Symbol("flushChunk"),l=Symbol("encoding"),d=Symbol("decoder"),D=Symbol("flowing"),S=Symbol("paused"),y=Symbol("resume"),r=Symbol("bufferLength"),_=Symbol("bufferPush"),N=Symbol("bufferShift"),o=Symbol("objectMode"),h=Symbol("destroyed"),j=Symbol("emitData"),J=Symbol("emitEnd"),F=Symbol("emitEnd2"),m=Symbol("async"),w=i=>Promise.resolve().then(i),K=__global$._MP_NO_ITERATOR_SYMBOLS_!=="1",ot=K&&Symbol.asyncIterator||Symbol("asyncIterator not implemented"),ht=K&&Symbol.iterator||Symbol("iterator not implemented"),ft=i=>i==="end"||i==="finish"||i==="prefinish",lt=i=>i instanceof ArrayBuffer||typeof i=="object"&&i.constructor&&i.constructor.name==="ArrayBuffer"&&i.byteLength>=0,ut=i=>!__Buffer$.isBuffer(i)&&ArrayBuffer.isView(i),M=class{constructor(t,e,s){this.src=t,this.dest=e,this.opts=s,this.ondrain=()=>t[y](),e.on("drain",this.ondrain)}unpipe(){this.dest.removeListener("drain",this.ondrain)}proxyErrors(){}end(){this.unpipe(),this.opts.end&&this.dest.end()}},C=class extends M{unpipe(){this.src.removeListener("error",this.proxyErrors),super.unpipe()}constructor(t,e,s){super(t,e,s),this.proxyErrors=n=>e.emit("error",n),t.on("error",this.proxyErrors)}};z.exports=class W extends Y{constructor(t){super(),this[D]=!1,this[S]=!1,this.pipes=[],this.buffer=[],this[o]=t&&t.objectMode||!1,this[o]?this[l]=null:this[l]=t&&t.encoding||null,this[l]==="buffer"&&(this[l]=null),this[m]=t&&!!t.async||!1,this[d]=this[l]?new G(this[l]):null,this[u]=!1,this[c]=!1,this[L]=!1,this[T]=!1,this[g]=null,this.writable=!0,this.readable=!0,this[r]=0,this[h]=!1}get bufferLength(){return this[r]}get encoding(){return this[l]}set encoding(t){if(this[o])throw new Error("cannot set encoding in objectMode");if(this[l]&&t!==this[l]&&(this[d]&&this[d].lastNeed||this[r]))throw new Error("cannot change encoding");this[l]!==t&&(this[d]=t?new G(t):null,this.buffer.length&&(this.buffer=this.buffer.map(e=>this[d].write(e)))),this[l]=t}setEncoding(t){this.encoding=t}get objectMode(){return this[o]}set objectMode(t){this[o]=this[o]||!!t}get async(){return this[m]}set async(t){this[m]=this[m]||!!t}write(t,e,s){if(this[u])throw new Error("write after end");if(this[h])return this.emit("error",Object.assign(new Error("Cannot call write after a stream was destroyed"),{code:"ERR_STREAM_DESTROYED"})),!0;typeof e=="function"&&(s=e,e="utf8"),e||(e="utf8");let n=this[m]?w:f=>f();return!this[o]&&!__Buffer$.isBuffer(t)&&(ut(t)?t=__Buffer$.from(t.buffer,t.byteOffset,t.byteLength):lt(t)?t=__Buffer$.from(t):typeof t!="string"&&(this.objectMode=!0)),this[o]?(this.flowing&&this[r]!==0&&this[B](!0),this.flowing?this.emit("data",t):this[_](t),this[r]!==0&&this.emit("readable"),s&&n(s),this.flowing):t.length?(typeof t=="string"&&!(e===this[l]&&!this[d].lastNeed)&&(t=__Buffer$.from(t,e)),__Buffer$.isBuffer(t)&&this[l]&&(t=this[d].write(t)),this.flowing&&this[r]!==0&&this[B](!0),this.flowing?this.emit("data",t):this[_](t),this[r]!==0&&this.emit("readable"),s&&n(s),this.flowing):(this[r]!==0&&this.emit("readable"),s&&n(s),this.flowing)}read(t){if(this[h])return null;if(this[r]===0||t===0||t>this[r])return this[a](),null;this[o]&&(t=null),this.buffer.length>1&&!this[o]&&(this.encoding?this.buffer=[this.buffer.join("")]:this.buffer=[__Buffer$.concat(this.buffer,this[r])]);let e=this[q](t||null,this.buffer[0]);return this[a](),e}[q](t,e){return t===e.length||t===null?this[N]():(this.buffer[0]=e.slice(t),e=e.slice(0,t),this[r]-=t),this.emit("data",e),!this.buffer.length&&!this[u]&&this.emit("drain"),e}end(t,e,s){return typeof t=="function"&&(s=t,t=null),typeof e=="function"&&(s=e,e="utf8"),t&&this.write(t,e),s&&this.once("end",s),this[u]=!0,this.writable=!1,(this.flowing||!this[S])&&this[a](),this}[y](){this[h]||(this[S]=!1,this[D]=!0,this.emit("resume"),this.buffer.length?this[B]():this[u]?this[a]():this.emit("drain"))}resume(){return this[y]()}pause(){this[D]=!1,this[S]=!0}get destroyed(){return this[h]}get flowing(){return this[D]}get paused(){return this[S]}[_](t){this[o]?this[r]+=1:this[r]+=t.length,this.buffer.push(t)}[N](){return this.buffer.length&&(this[o]?this[r]-=1:this[r]-=this.buffer[0].length),this.buffer.shift()}[B](t){do;while(this[V](this[N]()));!t&&!this.buffer.length&&!this[u]&&this.emit("drain")}[V](t){return t?(this.emit("data",t),this.flowing):!1}pipe(t,e){if(this[h])return;let s=this[c];return e=e||{},t===H.stdout||t===H.stderr?e.end=!1:e.end=e.end!==!1,e.proxyErrors=!!e.proxyErrors,s?e.end&&t.end():(this.pipes.push(e.proxyErrors?new C(this,t,e):new M(this,t,e)),this[m]?w(()=>this[y]()):this[y]()),t}unpipe(t){let e=this.pipes.find(s=>s.dest===t);e&&(this.pipes.splice(this.pipes.indexOf(e),1),e.unpipe())}addListener(t,e){return this.on(t,e)}on(t,e){let s=super.on(t,e);return t==="data"&&!this.pipes.length&&!this.flowing?this[y]():t==="readable"&&this[r]!==0?super.emit("readable"):ft(t)&&this[c]?(super.emit(t),this.removeAllListeners(t)):t==="error"&&this[g]&&(this[m]?w(()=>e.call(this,this[g])):e.call(this,this[g])),s}get emittedEnd(){return this[c]}[a](){!this[L]&&!this[c]&&!this[h]&&this.buffer.length===0&&this[u]&&(this[L]=!0,this.emit("end"),this.emit("prefinish"),this.emit("finish"),this[T]&&this.emit("close"),this[L]=!1)}emit(t,e,...s){if(t!=="error"&&t!=="close"&&t!==h&&this[h])return;if(t==="data")return e?this[m]?w(()=>this[j](e)):this[j](e):!1;if(t==="end")return this[J]();if(t==="close"){if(this[T]=!0,!this[c]&&!this[h])return;let f=super.emit("close");return this.removeAllListeners("close"),f}else if(t==="error"){this[g]=e;let f=super.emit("error",e);return this[a](),f}else if(t==="resume"){let f=super.emit("resume");return this[a](),f}else if(t==="finish"||t==="prefinish"){let f=super.emit(t);return this.removeAllListeners(t),f}let n=super.emit(t,e,...s);return this[a](),n}[j](t){for(let s of this.pipes)s.dest.write(t)===!1&&this.pause();let e=super.emit("data",t);return this[a](),e}[J](){this[c]||(this[c]=!0,this.readable=!1,this[m]?w(()=>this[F]()):this[F]())}[F](){if(this[d]){let e=this[d].end();if(e){for(let s of this.pipes)s.dest.write(e);super.emit("data",e)}}for(let e of this.pipes)e.end();let t=super.emit("end");return this.removeAllListeners("end"),t}collect(){let t=[];this[o]||(t.dataLength=0);let e=this.promise();return this.on("data",s=>{t.push(s),this[o]||(t.dataLength+=s.length)}),e.then(()=>t)}concat(){return this[o]?Promise.reject(new Error("cannot concat in objectMode")):this.collect().then(t=>this[o]?Promise.reject(new Error("cannot concat in objectMode")):this[l]?t.join(""):__Buffer$.concat(t,t.dataLength))}promise(){return new Promise((t,e)=>{this.on(h,()=>e(new Error("stream destroyed"))),this.on("error",s=>e(s)),this.on("end",()=>t())})}[ot](){return{next:()=>{let e=this.read();if(e!==null)return Promise.resolve({done:!1,value:e});if(this[u])return Promise.resolve({done:!0});let s=null,n=null,f=b=>{this.removeListener("data",A),this.removeListener("end",R),n(b)},A=b=>{this.removeListener("error",f),this.removeListener("end",R),this.pause(),s({value:b,done:!!this[u]})},R=()=>{this.removeListener("error",f),this.removeListener("data",A),s({done:!0})},Z=()=>f(new Error("stream destroyed"));return new Promise((b,$)=>{n=$,s=b,this.once(h,Z),this.once("error",f),this.once("end",R),this.once("data",A)})}}}[ht](){return{next:()=>{let e=this.read();return{value:e,done:e===null}}}}destroy(t){return this[h]?(t?this.emit("error",t):this.emit(h),this):(this[h]=!0,this.buffer.length=0,this[r]=0,typeof this.close=="function"&&!this[T]&&this.close(),t?this.emit("error",t):this.emit(h),this)}static isStream(t){return!!t&&(t instanceof W||t instanceof Y||t instanceof nt&&(typeof t.pipe=="function"||typeof t.write=="function"&&typeof t.end=="function"))}}});var p={};rt(p,{default:()=>mt,isStream:()=>at});var X=P(U());E(p,P(U()));var{isStream:at}=X,{default:Q,...dt}=X,mt=Q!==void 0?Q:dt;export{mt as default,at as isStream};
//# sourceMappingURL=minipass.mjs.map