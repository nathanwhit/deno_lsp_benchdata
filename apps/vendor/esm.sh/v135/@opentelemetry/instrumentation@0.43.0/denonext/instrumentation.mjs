/* esm.sh - esbuild bundle(@opentelemetry/instrumentation@0.43.0) denonext production */
import{trace as v,metrics as b}from"/v135/@opentelemetry/api@1.7.0/denonext/api.mjs";function m(n){n===void 0&&(n=[]);for(var r=[],t=0,a=n.length;t<a;t++){var i=n[t];if(Array.isArray(i)){var e=m(i);r=r.concat(e.instrumentations)}else typeof i=="function"?r.push(new i):i.instrumentationName&&r.push(i)}return{instrumentations:r}}function _(n,r,t){for(var a=0,i=n.length;a<i;a++){var e=n[a];r&&e.setTracerProvider(r),t&&e.setMeterProvider(t),e.getConfig().enabled||e.enable()}}function y(n){n.forEach(function(r){return r.disable()})}function A(n){var r=m(n.instrumentations).instrumentations,t=n.tracerProvider||v.getTracerProvider(),a=n.meterProvider||b.getMeterProvider();return _(r,t,a),function(){y(r)}}import{diag as g,metrics as w,trace as x}from"/v135/@opentelemetry/api@1.7.0/denonext/api.mjs";import*as c from"/v135/shimmer@1.2.1/denonext/shimmer.mjs";var p=function(){return p=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},p.apply(this,arguments)},d=function(){function n(r,t,a){a===void 0&&(a={}),this.instrumentationName=r,this.instrumentationVersion=t,this._wrap=c.wrap,this._unwrap=c.unwrap,this._massWrap=c.massWrap,this._massUnwrap=c.massUnwrap,this._config=p({enabled:!0},a),this._diag=g.createComponentLogger({namespace:r}),this._tracer=x.getTracer(r,t),this._meter=w.getMeter(r,t),this._updateMetricInstruments()}return Object.defineProperty(n.prototype,"meter",{get:function(){return this._meter},enumerable:!1,configurable:!0}),n.prototype.setMeterProvider=function(r){this._meter=r.getMeter(this.instrumentationName,this.instrumentationVersion),this._updateMetricInstruments()},n.prototype._updateMetricInstruments=function(){},n.prototype.getConfig=function(){return this._config},n.prototype.setConfig=function(r){r===void 0&&(r={}),this._config=Object.assign({},r)},n.prototype.setTracerProvider=function(r){this._tracer=r.getTracer(this.instrumentationName,this.instrumentationVersion)},Object.defineProperty(n.prototype,"tracer",{get:function(){return this._tracer},enumerable:!1,configurable:!0}),n}();var I=function(){var n=function(r,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(a[e]=i[e])},n(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(r,t);function a(){this.constructor=r}r.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}}(),W=function(n){I(r,n);function r(t,a,i){i===void 0&&(i={});var e=n.call(this,t,a,i)||this;return e._config.enabled&&e.enable(),e}return r}(d);var O=function(n,r,t,a){function i(e){return e instanceof t?e:new t(function(o){o(e)})}return new(t||(t=Promise))(function(e,o){function f(u){try{s(a.next(u))}catch(h){o(h)}}function l(u){try{s(a.throw(u))}catch(h){o(h)}}function s(u){u.done?e(u.value):i(u.value).then(f,l)}s((a=a.apply(n,r||[])).next())})},P=function(n,r){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},a,i,e,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(s){return function(u){return l([s,u])}}function l(s){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,i&&(e=s[0]&2?i.return:s[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,s[1])).done)return e;switch(i=0,e&&(s=[s[0]&2,e.value]),s[0]){case 0:case 1:e=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!e||s[1]>e[0]&&s[1]<e[3])){t.label=s[1];break}if(s[0]===6&&t.label<e[1]){t.label=e[1],e=s;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(s);break}e[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(n,t)}catch(u){s=[6,u],i=0}finally{a=e=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};function U(n,r,t){var a,i;try{i=n()}catch(e){a=e}finally{if(r(a,i),a&&!t)throw a;return i}}function G(n,r,t){return O(this,void 0,void 0,function(){var a,i,e;return P(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),[4,n()];case 1:return i=o.sent(),[3,4];case 2:return e=o.sent(),a=e,[3,4];case 3:if(r(a,i),a&&!t)throw a;return[2,i];case 4:return[2]}})})}function L(n){return typeof n=="function"&&typeof n.__original=="function"&&typeof n.__unwrap=="function"&&n.__wrapped===!0}export{W as InstrumentationBase,L as isWrapped,A as registerInstrumentations,U as safeExecuteInTheMiddle,G as safeExecuteInTheMiddleAsync};
//# sourceMappingURL=instrumentation.mjs.map