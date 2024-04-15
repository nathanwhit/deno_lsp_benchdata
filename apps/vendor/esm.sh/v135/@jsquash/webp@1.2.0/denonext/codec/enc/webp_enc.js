/* esm.sh - esbuild bundle(@jsquash/webp@1.2.0/codec/enc/webp_enc) denonext production */
import __Process$ from "node:process";
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var gn=(()=>{var or=import.meta.url;return function(a={}){var a=typeof a<"u"?a:{},ar,M;a.ready=new Promise(function(r,e){ar=r,M=e}),globalThis.ServiceWorkerGlobalScope!==void 0&&typeof self<"u"&&caches.default!==void 0&&(globalThis.ImageData||(globalThis.ImageData=class{constructor(e,n,t){this.data=e,this.width=n,this.height=t}}),import.meta.url===void 0&&(import.meta.url="https://localhost"),self.location===void 0&&(self.location={href:""}));var ur=Object.assign({},a),Hr=[],Vr="./this.program",Mr=(r,e)=>{throw e},fr=typeof window=="object",N=typeof importScripts=="function",yn=typeof __Process$=="object"&&typeof __Process$.versions=="object"&&typeof __Process$.versions.node=="string",T="";function Nr(r){return a.locateFile?a.locateFile(r,T):T+r}var Br,Lr,Q,xr;(fr||N)&&(N?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),or&&(T=or),T.indexOf("blob:")!==0?T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1):T="",Br=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.send(null),e.responseText},N&&(Q=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),Lr=(r,e,n)=>{var t=new XMLHttpRequest;t.open("GET",r,!0),t.responseType="arraybuffer",t.onload=()=>{if(t.status==200||t.status==0&&t.response){e(t.response);return}n()},t.onerror=n,t.send(null)},xr=r=>document.title=r);var bn=a.print||console.log.bind(console),j=a.printErr||console.warn.bind(console);Object.assign(a,ur),ur=null,a.arguments&&(Hr=a.arguments),a.thisProgram&&(Vr=a.thisProgram),a.quit&&(Mr=a.quit);var D;a.wasmBinary&&(D=a.wasmBinary);var wn=a.noExitRuntime||!0;typeof WebAssembly!="object"&&x("no native wasm support detected");var B,sr=!1,qr;function Xr(r,e,n){for(var t=e+n,i="";!(e>=t);){var o=r[e++];if(!o)return i;if(!(o&128)){i+=String.fromCharCode(o);continue}var f=r[e++]&63;if((o&224)==192){i+=String.fromCharCode((o&31)<<6|f);continue}var u=r[e++]&63;if((o&240)==224?o=(o&15)<<12|f<<6|u:o=(o&7)<<18|f<<12|u<<6|r[e++]&63,o<65536)i+=String.fromCharCode(o);else{var s=o-65536;i+=String.fromCharCode(55296|s>>10,56320|s&1023)}}return i}function Gr(r,e){return r?Xr(g,r,e):""}function zr(r,e,n,t){if(!(t>0))return 0;for(var i=n,o=n+t-1,f=0;f<r.length;++f){var u=r.charCodeAt(f);if(u>=55296&&u<=57343){var s=r.charCodeAt(++f);u=65536+((u&1023)<<10)|s&1023}if(u<=127){if(n>=o)break;e[n++]=u}else if(u<=2047){if(n+1>=o)break;e[n++]=192|u>>6,e[n++]=128|u&63}else if(u<=65535){if(n+2>=o)break;e[n++]=224|u>>12,e[n++]=128|u>>6&63,e[n++]=128|u&63}else{if(n+3>=o)break;e[n++]=240|u>>18,e[n++]=128|u>>12&63,e[n++]=128|u>>6&63,e[n++]=128|u&63}}return e[n]=0,n-i}function Kr(r,e,n){return zr(r,g,e,n)}function Zr(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);t<=127?e++:t<=2047?e+=2:t>=55296&&t<=57343?(e+=4,++n):e+=3}return e}var C,g,P,L,_,p,cr,lr;function vr(){var r=B.buffer;a.HEAP8=C=new Int8Array(r),a.HEAP16=P=new Int16Array(r),a.HEAP32=_=new Int32Array(r),a.HEAPU8=g=new Uint8Array(r),a.HEAPU16=L=new Uint16Array(r),a.HEAPU32=p=new Uint32Array(r),a.HEAPF32=cr=new Float32Array(r),a.HEAPF64=lr=new Float64Array(r)}var dr,pr=[],hr=[],gr=[],Jr=!1;function Qr(){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)ee(a.preRun.shift());rr(pr)}function Yr(){Jr=!0,rr(hr)}function re(){if(a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;)te(a.postRun.shift());rr(gr)}function ee(r){pr.unshift(r)}function ne(r){hr.unshift(r)}function te(r){gr.unshift(r)}var $=0,Y=null,O=null;function ie(r){$++,a.monitorRunDependencies&&a.monitorRunDependencies($)}function oe(r){if($--,a.monitorRunDependencies&&a.monitorRunDependencies($),$==0&&(Y!==null&&(clearInterval(Y),Y=null),O)){var e=O;O=null,e()}}function x(r){a.onAbort&&a.onAbort(r),r="Aborted("+r+")",j(r),sr=!0,qr=1,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw M(e),e}var ae="data:application/octet-stream;base64,";function _r(r){return r.startsWith(ae)}var F;a.locateFile?(F="webp_enc.wasm",_r(F)||(F=Nr(F))):F=new URL("webp_enc.wasm",import.meta.url).href;function mr(r){try{if(r==F&&D)return new Uint8Array(D);if(Q)return Q(r);throw"both async and sync fetching of the wasm failed"}catch(e){x(e)}}function ue(r){return!D&&(fr||N)&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+r+"'";return e.arrayBuffer()}).catch(function(){return mr(r)}):Promise.resolve().then(function(){return mr(r)})}function yr(r,e,n){return ue(r).then(function(t){return WebAssembly.instantiate(t,e)}).then(function(t){return t}).then(n,function(t){j("failed to asynchronously prepare wasm: "+t),x(t)})}function fe(r,e,n,t){return!r&&typeof WebAssembly.instantiateStreaming=="function"&&!_r(e)&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(function(i){var o=WebAssembly.instantiateStreaming(i,n);return o.then(t,function(f){return j("wasm streaming compile failed: "+f),j("falling back to ArrayBuffer instantiation"),yr(e,n,t)})}):yr(e,n,t)}function se(){var r={a:ln};function e(t,i){var o=t.exports;return a.asm=o,B=a.asm.x,vr(),dr=a.asm.D,ne(a.asm.y),oe("wasm-instantiate"),o}ie("wasm-instantiate");function n(t){e(t.instance)}if(a.instantiateWasm)try{return a.instantiateWasm(r,e)}catch(t){j("Module.instantiateWasm callback failed with error: "+t),M(t)}return fe(D,F,r,n).catch(M),{}}function rr(r){for(;r.length>0;)r.shift()(a)}function ce(r){this.excPtr=r,this.ptr=r-24,this.set_type=function(e){p[this.ptr+4>>2]=e},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(e){p[this.ptr+8>>2]=e},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_refcount=function(e){_[this.ptr>>2]=e},this.set_caught=function(e){e=e?1:0,C[this.ptr+12>>0]=e},this.get_caught=function(){return C[this.ptr+12>>0]!=0},this.set_rethrown=function(e){e=e?1:0,C[this.ptr+13>>0]=e},this.get_rethrown=function(){return C[this.ptr+13>>0]!=0},this.init=function(e,n){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var e=_[this.ptr>>2];_[this.ptr>>2]=e+1},this.release_ref=function(){var e=_[this.ptr>>2];return _[this.ptr>>2]=e-1,e===1},this.set_adjusted_ptr=function(e){p[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){var e=Dr(this.get_type());if(e)return p[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}var le=0,ve=0;function de(r,e,n){var t=new ce(r);throw t.init(e,n),le=r,ve++,r}var q={};function br(r){for(;r.length;){var e=r.pop(),n=r.pop();n(e)}}function X(r){return this.fromWireType(_[r>>2])}var k={},W={},G={},pe=48,he=57;function ge(r){if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=pe&&e<=he?"_"+r:r}function wr(r,e){return r=ge(r),{[r]:function(){return e.apply(this,arguments)}}[r]}function er(r,e){var n=wr(e,function(t){this.name=e,this.message=t;var i=new Error(t).stack;i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},n}var Tr=void 0;function Ar(r){throw new Tr(r)}function Er(r,e,n){r.forEach(function(u){G[u]=e});function t(u){var s=n(u);s.length!==r.length&&Ar("Mismatched type converter count");for(var c=0;c<r.length;++c)A(r[c],s[c])}var i=new Array(e.length),o=[],f=0;e.forEach((u,s)=>{W.hasOwnProperty(u)?i[s]=W[u]:(o.push(u),k.hasOwnProperty(u)||(k[u]=[]),k[u].push(()=>{i[s]=W[u],++f,f===o.length&&t(i)}))}),o.length===0&&t(i)}function _e(r){var e=q[r];delete q[r];var n=e.rawConstructor,t=e.rawDestructor,i=e.fields,o=i.map(f=>f.getterReturnType).concat(i.map(f=>f.setterArgumentType));Er([r],o,f=>{var u={};return i.forEach((s,c)=>{var v=s.fieldName,l=f[c],d=s.getter,y=s.getterContext,E=f[c+i.length],U=s.setter,w=s.setterContext;u[v]={read:V=>l.fromWireType(d(y,V)),write:(V,ir)=>{var J=[];U(w,V,E.toWireType(J,ir)),br(J)}}}),[{name:e.name,fromWireType:function(s){var c={};for(var v in u)c[v]=u[v].read(s);return t(s),c},toWireType:function(s,c){for(var v in u)if(!(v in c))throw new TypeError('Missing field:  "'+v+'"');var l=n();for(v in u)u[v].write(l,c[v]);return s!==null&&s.push(t,l),l},argPackAdvance:8,readValueFromPointer:X,destructorFunction:t}]})}function me(r,e,n,t,i){}function z(r){switch(r){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+r)}}function ye(){for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);Rr=r}var Rr=void 0;function h(r){for(var e="",n=r;g[n];)e+=Rr[g[n++]];return e}var Cr=void 0;function m(r){throw new Cr(r)}function A(r,e,n={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=e.name;if(r||m('type "'+t+'" must have a positive integer typeid pointer'),W.hasOwnProperty(r)){if(n.ignoreDuplicateRegistrations)return;m("Cannot register type '"+t+"' twice")}if(W[r]=e,delete G[r],k.hasOwnProperty(r)){var i=k[r];delete k[r],i.forEach(o=>o())}}function be(r,e,n,t,i){var o=z(n);e=h(e),A(r,{name:e,fromWireType:function(f){return!!f},toWireType:function(f,u){return u?t:i},argPackAdvance:8,readValueFromPointer:function(f){var u;if(n===1)u=C;else if(n===2)u=P;else if(n===4)u=_;else throw new TypeError("Unknown boolean type size: "+e);return this.fromWireType(u[f>>o])},destructorFunction:null})}var nr=[],b=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Pr(r){r>4&&--b[r].refcount===0&&(b[r]=void 0,nr.push(r))}function we(){for(var r=0,e=5;e<b.length;++e)b[e]!==void 0&&++r;return r}function Te(){for(var r=5;r<b.length;++r)if(b[r]!==void 0)return b[r];return null}function Ae(){a.count_emval_handles=we,a.get_first_emval=Te}var S={toValue:r=>(r||m("Cannot use deleted val. handle = "+r),b[r].value),toHandle:r=>{switch(r){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var e=nr.length?nr.pop():b.length;return b[e]={refcount:1,value:r},e}}}};function Ee(r,e){e=h(e),A(r,{name:e,fromWireType:function(n){var t=S.toValue(n);return Pr(n),t},toWireType:function(n,t){return S.toHandle(t)},argPackAdvance:8,readValueFromPointer:X,destructorFunction:null})}function Re(r,e,n){if(r[e].overloadTable===void 0){var t=r[e];r[e]=function(){return r[e].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+r[e].overloadTable+")!"),r[e].overloadTable[arguments.length].apply(this,arguments)},r[e].overloadTable=[],r[e].overloadTable[t.argCount]=t}}function $r(r,e,n){a.hasOwnProperty(r)?((n===void 0||a[r].overloadTable!==void 0&&a[r].overloadTable[n]!==void 0)&&m("Cannot register public name '"+r+"' twice"),Re(a,r,r),a.hasOwnProperty(n)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),a[r].overloadTable[n]=e):(a[r]=e,n!==void 0&&(a[r].numArguments=n))}function Ce(r,e,n){switch(e){case 0:return function(t){var i=n?C:g;return this.fromWireType(i[t])};case 1:return function(t){var i=n?P:L;return this.fromWireType(i[t>>1])};case 2:return function(t){var i=n?_:p;return this.fromWireType(i[t>>2])};default:throw new TypeError("Unknown integer type: "+r)}}function Pe(r,e,n,t){var i=z(n);e=h(e);function o(){}o.values={},A(r,{name:e,constructor:o,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,u){return u.value},argPackAdvance:8,readValueFromPointer:Ce(e,i,t),destructorFunction:null}),$r(e,o)}function Fr(r){var e=jr(r),n=h(e);return R(e),n}function Wr(r,e){var n=W[r];return n===void 0&&m(e+" has unknown type "+Fr(r)),n}function $e(r,e,n){var t=Wr(r,"enum");e=h(e);var i=t.constructor,o=Object.create(t.constructor.prototype,{value:{value:n},constructor:{value:wr(t.name+"_"+e,function(){})}});i.values[n]=o,i[e]=o}function Fe(r,e){switch(e){case 2:return function(n){return this.fromWireType(cr[n>>2])};case 3:return function(n){return this.fromWireType(lr[n>>3])};default:throw new TypeError("Unknown float type: "+r)}}function We(r,e,n){var t=z(n);e=h(e),A(r,{name:e,fromWireType:function(i){return i},toWireType:function(i,o){return o},argPackAdvance:8,readValueFromPointer:Fe(e,t),destructorFunction:null})}function Ue(r,e,n,t,i,o){var f=e.length;f<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=e[1]!==null&&n!==null,s=!1,c=1;c<e.length;++c)if(e[c]!==null&&e[c].destructorFunction===void 0){s=!0;break}var v=e[0].name!=="void",l=f-2,d=new Array(l),y=[],E=[];return function(){arguments.length!==l&&m("function "+r+" called with "+arguments.length+" arguments, expected "+l+" args!"),E.length=0;var U;y.length=u?2:1,y[0]=i,u&&(U=e[1].toWireType(E,this),y[1]=U);for(var w=0;w<l;++w)d[w]=e[w+2].toWireType(E,arguments[w]),y.push(d[w]);var V=t.apply(null,y);function ir(J){if(s)br(E);else for(var I=u?1:2;I<e.length;I++){var hn=I===1?U:d[I-2];e[I].destructorFunction!==null&&e[I].destructorFunction(hn)}if(v)return e[0].fromWireType(J)}return ir(V)}}function ke(r,e){for(var n=[],t=0;t<r;t++)n.push(p[e+t*4>>2]);return n}function Se(r,e,n){a.hasOwnProperty(r)||Ar("Replacing nonexistant public symbol"),a[r].overloadTable!==void 0&&n!==void 0?a[r].overloadTable[n]=e:(a[r]=e,a[r].argCount=n)}function Ie(r,e,n){var t=a["dynCall_"+r];return n&&n.length?t.apply(null,[e].concat(n)):t.call(null,e)}var K=[];function Ur(r){var e=K[r];return e||(r>=K.length&&(K.length=r+1),K[r]=e=dr.get(r)),e}function je(r,e,n){if(r.includes("j"))return Ie(r,e,n);var t=Ur(e).apply(null,n);return t}function De(r,e){var n=[];return function(){return n.length=0,Object.assign(n,arguments),je(r,e,n)}}function H(r,e){r=h(r);function n(){return r.includes("j")?De(r,e):Ur(e)}var t=n();return typeof t!="function"&&m("unknown function pointer with signature "+r+": "+e),t}var kr=void 0;function Oe(r,e){var n=[],t={};function i(o){if(!t[o]&&!W[o]){if(G[o]){G[o].forEach(i);return}n.push(o),t[o]=!0}}throw e.forEach(i),new kr(r+": "+n.map(Fr).join([", "]))}function He(r,e,n,t,i,o,f){var u=ke(e,n);r=h(r),i=H(t,i),$r(r,function(){Oe("Cannot call "+r+" due to unbound types",u)},e-1),Er([],u,function(s){var c=[s[0],null].concat(s.slice(1));return Se(r,Ue(r,c,null,i,o,f),e-1),[]})}function Ve(r,e,n){switch(e){case 0:return n?function(i){return C[i]}:function(i){return g[i]};case 1:return n?function(i){return P[i>>1]}:function(i){return L[i>>1]};case 2:return n?function(i){return _[i>>2]}:function(i){return p[i>>2]};default:throw new TypeError("Unknown integer type: "+r)}}function Me(r,e,n,t,i){e=h(e),i===-1&&(i=4294967295);var o=z(n),f=l=>l;if(t===0){var u=32-8*n;f=l=>l<<u>>>u}var s=e.includes("unsigned"),c=(l,d)=>{},v;s?v=function(l,d){return c(d,this.name),d>>>0}:v=function(l,d){return c(d,this.name),d},A(r,{name:e,fromWireType:f,toWireType:v,argPackAdvance:8,readValueFromPointer:Ve(e,o,t!==0),destructorFunction:null})}function Ne(r,e,n){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=t[e];function o(f){f=f>>2;var u=p,s=u[f],c=u[f+1];return new i(u.buffer,c,s)}n=h(n),A(r,{name:n,fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Be(r,e){e=h(e);var n=e==="std::string";A(r,{name:e,fromWireType:function(t){var i=p[t>>2],o=t+4,f;if(n)for(var u=o,s=0;s<=i;++s){var c=o+s;if(s==i||g[c]==0){var v=c-u,l=Gr(u,v);f===void 0?f=l:(f+="\0",f+=l),u=c+1}}else{for(var d=new Array(i),s=0;s<i;++s)d[s]=String.fromCharCode(g[o+s]);f=d.join("")}return R(t),f},toWireType:function(t,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var o,f=typeof i=="string";f||i instanceof Uint8Array||i instanceof Uint8ClampedArray||i instanceof Int8Array||m("Cannot pass non-string to std::string"),n&&f?o=Zr(i):o=i.length;var u=tr(4+o+1),s=u+4;if(p[u>>2]=o,n&&f)Kr(i,s,o+1);else if(f)for(var c=0;c<o;++c){var v=i.charCodeAt(c);v>255&&(R(s),m("String has UTF-16 code units that do not fit in 8 bits")),g[s+c]=v}else for(var c=0;c<o;++c)g[s+c]=i[c];return t!==null&&t.push(R,u),u},argPackAdvance:8,readValueFromPointer:X,destructorFunction:function(t){R(t)}})}function Le(r,e){for(var n="",t=0;!(t>=e/2);++t){var i=P[r+t*2>>1];if(i==0)break;n+=String.fromCharCode(i)}return n}function xe(r,e,n){if(n===void 0&&(n=2147483647),n<2)return 0;n-=2;for(var t=e,i=n<r.length*2?n/2:r.length,o=0;o<i;++o){var f=r.charCodeAt(o);P[e>>1]=f,e+=2}return P[e>>1]=0,e-t}function qe(r){return r.length*2}function Xe(r,e){for(var n=0,t="";!(n>=e/4);){var i=_[r+n*4>>2];if(i==0)break;if(++n,i>=65536){var o=i-65536;t+=String.fromCharCode(55296|o>>10,56320|o&1023)}else t+=String.fromCharCode(i)}return t}function Ge(r,e,n){if(n===void 0&&(n=2147483647),n<4)return 0;for(var t=e,i=t+n-4,o=0;o<r.length;++o){var f=r.charCodeAt(o);if(f>=55296&&f<=57343){var u=r.charCodeAt(++o);f=65536+((f&1023)<<10)|u&1023}if(_[e>>2]=f,e+=4,e+4>i)break}return _[e>>2]=0,e-t}function ze(r){for(var e=0,n=0;n<r.length;++n){var t=r.charCodeAt(n);t>=55296&&t<=57343&&++n,e+=4}return e}function Ke(r,e,n){n=h(n);var t,i,o,f,u;e===2?(t=Le,i=xe,f=qe,o=()=>L,u=1):e===4&&(t=Xe,i=Ge,f=ze,o=()=>p,u=2),A(r,{name:n,fromWireType:function(s){for(var c=p[s>>2],v=o(),l,d=s+4,y=0;y<=c;++y){var E=s+4+y*e;if(y==c||v[E>>u]==0){var U=E-d,w=t(d,U);l===void 0?l=w:(l+="\0",l+=w),d=E+e}}return R(s),l},toWireType:function(s,c){typeof c!="string"&&m("Cannot pass non-string to C++ string type "+n);var v=f(c),l=tr(4+v+e);return p[l>>2]=v>>u,i(c,l+4,v+e),s!==null&&s.push(R,l),l},argPackAdvance:8,readValueFromPointer:X,destructorFunction:function(s){R(s)}})}function Ze(r,e,n,t,i,o){q[r]={name:h(e),rawConstructor:H(n,t),rawDestructor:H(i,o),fields:[]}}function Je(r,e,n,t,i,o,f,u,s,c){q[r].fields.push({fieldName:h(e),getterReturnType:n,getter:H(t,i),getterContext:o,setterArgumentType:f,setter:H(u,s),setterContext:c})}function Qe(r,e){e=h(e),A(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})}var Ye={};function rn(r){var e=Ye[r];return e===void 0?h(r):e}function Sr(){if(typeof globalThis=="object")return globalThis;function r(e){e.$$$embind_global$$$=e;var n=typeof $$$embind_global$$$=="object"&&e.$$$embind_global$$$==e;return n||delete e.$$$embind_global$$$,n}if(typeof $$$embind_global$$$=="object"||(typeof __global$=="object"&&r(__global$)?$$$embind_global$$$=__global$:typeof self=="object"&&r(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function en(r){return r===0?S.toHandle(Sr()):(r=rn(r),S.toHandle(Sr()[r]))}function nn(r){r>4&&(b[r].refcount+=1)}function tn(r){var e=new Array(r+1);return function(n,t,i){e[0]=n;for(var o=0;o<r;++o){var f=Wr(p[t+o*4>>2],"parameter "+o);e[o+1]=f.readValueFromPointer(i),i+=f.argPackAdvance}var u=new(n.bind.apply(n,e));return S.toHandle(u)}}var Ir={};function on(r,e,n,t){r=S.toValue(r);var i=Ir[e];return i||(i=tn(e),Ir[e]=i),i(r,n,t)}function an(){x("")}function un(r,e,n){g.copyWithin(r,e,e+n)}function fn(){return 2147483648}function sn(r){var e=B.buffer;try{return B.grow(r-e.byteLength+65535>>>16),vr(),1}catch{}}function cn(r){var e=g.length;r=r>>>0;var n=fn();if(r>n)return!1;let t=(s,c)=>s+(c-s%c)%c;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);o=Math.min(o,r+100663296);var f=Math.min(n,t(Math.max(r,o),65536)),u=sn(f);if(u)return!0}return!1}Tr=a.InternalError=er(Error,"InternalError"),ye(),Cr=a.BindingError=er(Error,"BindingError"),Ae(),kr=a.UnboundTypeError=er(Error,"UnboundTypeError");var ln={k:de,m:_e,o:me,t:be,s:Ee,q:Pe,d:$e,h:We,f:He,c:Me,b:Ne,i:Be,e:Ke,n:Ze,a:Je,u:Qe,j:Pr,w:en,l:nn,v:on,g:an,r:un,p:cn},Tn=se(),vn=function(){return(vn=a.asm.y).apply(null,arguments)},tr=function(){return(tr=a.asm.z).apply(null,arguments)},R=function(){return(R=a.asm.A).apply(null,arguments)},jr=a.___getTypeName=function(){return(jr=a.___getTypeName=a.asm.B).apply(null,arguments)},dn=a.__embind_initialize_bindings=function(){return(dn=a.__embind_initialize_bindings=a.asm.C).apply(null,arguments)},pn=function(){return(pn=a.asm.__errno_location).apply(null,arguments)},Dr=function(){return(Dr=a.asm.E).apply(null,arguments)},Z;O=function r(){Z||Or(),Z||(O=r)};function Or(){if($>0||(Qr(),$>0))return;function r(){Z||(Z=!0,a.calledRun=!0,!sr&&(Yr(),ar(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),re()))}a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),r()},1)):r()}if(a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Or(),a.ready}})(),En=gn;export{En as default};
//# sourceMappingURL=webp_enc.js.map