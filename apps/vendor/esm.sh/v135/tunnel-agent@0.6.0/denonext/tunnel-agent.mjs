/* esm.sh - esbuild bundle(tunnel-agent@0.6.0) denonext production */
import __Process$ from "node:process";
import * as __0$ from "node:net";
import * as __1$ from "node:tls";
import * as __2$ from "node:http";
import * as __3$ from "node:https";
import * as __4$ from "node:events";
import * as __5$ from "node:assert";
import * as __6$ from "node:util";
import * as __7$ from "/v135/safe-buffer@5.2.1/denonext/safe-buffer.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"net":return e(__0$);case"tls":return e(__1$);case"http":return e(__2$);case"https":return e(__3$);case"events":return e(__4$);case"assert":return e(__5$);case"util":return e(__6$);case"safe-buffer":return e(__7$);default:throw new Error("module \""+n+"\" not found");}};
var L=Object.create;var O=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var f=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var D=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),U=(t,e)=>{for(var o in e)O(t,o,{get:e[o],enumerable:!0})},q=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of _(e))!B.call(t,n)&&n!==o&&O(t,n,{get:()=>e[n],enumerable:!(r=T(e,n))||r.enumerable});return t},h=(t,e,o)=>(q(t,e,"default"),o&&q(o,e,"default")),C=(t,e,o)=>(o=t!=null?L(w(t)):{},q(e||!t||!t.__esModule?O(o,"default",{value:t,enumerable:!0}):o,t));var k=D(d=>{"use strict";var te=f("net"),P=f("tls"),S=f("http"),b=f("https"),F=f("events"),G=f("assert"),z=f("util"),M=f("safe-buffer").Buffer;d.httpOverHttp=j;d.httpsOverHttp=I;d.httpOverHttps=J;d.httpsOverHttps=K;function j(t){var e=new a(t);return e.request=S.request,e}function I(t){var e=new a(t);return e.request=S.request,e.createSocket=x,e.defaultPort=443,e}function J(t){var e=new a(t);return e.request=b.request,e}function K(t){var e=new a(t);return e.request=b.request,e.createSocket=x,e.defaultPort=443,e}function a(t){var e=this;e.options=t||{},e.proxyOptions=e.options.proxy||{},e.maxSockets=e.options.maxSockets||S.Agent.defaultMaxSockets,e.requests=[],e.sockets=[],e.on("free",function(r,n,s){for(var u=0,l=e.requests.length;u<l;++u){var m=e.requests[u];if(m.host===n&&m.port===s){e.requests.splice(u,1),m.request.onSocket(r);return}}r.destroy(),e.removeSocket(r)})}z.inherits(a,F.EventEmitter);a.prototype.addRequest=function(e,o){var r=this;if(typeof o=="string"&&(o={host:o,port:arguments[2],path:arguments[3]}),r.sockets.length>=this.maxSockets){r.requests.push({host:o.host,port:o.port,request:e});return}r.createConnection({host:o.host,port:o.port,request:e})};a.prototype.createConnection=function(e){var o=this;o.createSocket(e,function(r){r.on("free",n),r.on("close",s),r.on("agentRemove",s),e.request.onSocket(r);function n(){o.emit("free",r,e.host,e.port)}function s(u){o.removeSocket(r),r.removeListener("free",n),r.removeListener("close",s),r.removeListener("agentRemove",s)}})};a.prototype.createSocket=function(e,o){var r=this,n={};r.sockets.push(n);var s=N({},r.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:!1});s.proxyAuth&&(s.headers=s.headers||{},s.headers["Proxy-Authorization"]="Basic "+M.from(s.proxyAuth).toString("base64")),v("making CONNECT request");var u=r.request(s);u.useChunkedEncodingByDefault=!1,u.once("response",l),u.once("upgrade",m),u.once("connect",E),u.once("error",R),u.end();function l(c){c.upgrade=!0}function m(c,i,g){__Process$.nextTick(function(){E(c,i,g)})}function E(c,i,g){if(u.removeAllListeners(),i.removeAllListeners(),c.statusCode===200)G.equal(g.length,0),v("tunneling connection has established"),r.sockets[r.sockets.indexOf(n)]=i,o(i);else{v("tunneling socket could not be established, statusCode=%d",c.statusCode);var y=new Error("tunneling socket could not be established, statusCode="+c.statusCode);y.code="ECONNRESET",e.request.emit("error",y),r.removeSocket(n)}}function R(c){u.removeAllListeners(),v(`tunneling socket could not be established, cause=%s
`,c.message,c.stack);var i=new Error("tunneling socket could not be established, cause="+c.message);i.code="ECONNRESET",e.request.emit("error",i),r.removeSocket(n)}};a.prototype.removeSocket=function(e){var o=this.sockets.indexOf(e);if(o!==-1){this.sockets.splice(o,1);var r=this.requests.shift();r&&this.createConnection(r)}};function x(t,e){var o=this;a.prototype.createSocket.call(o,t,function(r){var n=P.connect(0,N({},o.options,{servername:t.host,socket:r}));o.sockets[o.sockets.indexOf(r)]=n,e(n)})}function N(t){for(var e=1,o=arguments.length;e<o;++e){var r=arguments[e];if(typeof r=="object")for(var n=Object.keys(r),s=0,u=n.length;s<u;++s){var l=n[s];r[l]!==void 0&&(t[l]=r[l])}}return t}var v;__Process$.env.NODE_DEBUG&&/\btunnel\b/.test(__Process$.env.NODE_DEBUG)?v=function(){var t=Array.prototype.slice.call(arguments);typeof t[0]=="string"?t[0]="TUNNEL: "+t[0]:t.unshift("TUNNEL:"),console.error.apply(console,t)}:v=function(){};d.debug=v});var p={};U(p,{debug:()=>Y,default:()=>$,httpOverHttp:()=>Q,httpOverHttps:()=>W,httpsOverHttp:()=>V,httpsOverHttps:()=>X});var A=C(k());h(p,C(k()));var{httpOverHttp:Q,httpsOverHttp:V,httpOverHttps:W,httpsOverHttps:X,debug:Y}=A,{default:H,...Z}=A,$=H!==void 0?H:Z;export{Y as debug,$ as default,Q as httpOverHttp,W as httpOverHttps,V as httpsOverHttp,X as httpsOverHttps};
//# sourceMappingURL=tunnel-agent.mjs.map