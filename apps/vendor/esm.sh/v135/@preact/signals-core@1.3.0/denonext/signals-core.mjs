/* esm.sh - esbuild bundle(@preact/signals-core@1.3.0) denonext production */
function v(){throw new Error("Cycle detected")}function d(){if(h>1){h--;return}let i,t=!1;for(;r!==void 0;){let o=r;for(r=void 0,p++;o!==void 0;){let f=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&a(o))try{o.c()}catch(b){t||(i=b,t=!0)}o=f}}if(p=0,h--,t)throw i}function N(i){if(h>0)return i();h++;try{return i()}finally{d()}}var n,r,h=0,p=0,c=0;function y(i){if(n===void 0)return;let t=i.n;if(t===void 0||t.t!==n)return t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t},n.s!==void 0&&(n.s.n=t),n.s=t,i.n=t,32&n.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=n.s,t.n=void 0,n.s.n=t,n.s=t),t}function s(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}s.prototype.h=function(){return!0};s.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};s.prototype.U=function(i){if(this.t!==void 0){let t=i.e,o=i.x;t!==void 0&&(t.x=o,i.e=void 0),o!==void 0&&(o.e=t,i.x=void 0),i===this.t&&(this.t=o)}};s.prototype.subscribe=function(i){let t=this;return U(function(){let o=t.value,f=32&this.f;this.f&=-33;try{i(o)}finally{this.f|=f}})};s.prototype.valueOf=function(){return this.value};s.prototype.toString=function(){return this.value+""};s.prototype.toJSON=function(){return this.value};s.prototype.peek=function(){return this.v};Object.defineProperty(s.prototype,"value",{get(){let i=y(this);return i!==void 0&&(i.i=this.i),this.v},set(i){if(n instanceof e&&function(){throw new Error("Computed cannot have side-effects")}(),i!==this.v){p>100&&v(),this.v=i,this.i++,c++,h++;try{for(let t=this.t;t!==void 0;t=t.x)t.t.N()}finally{d()}}}});function O(i){return new s(i)}function a(i){for(let t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function S(i){for(let t=i.s;t!==void 0;t=t.n){let o=t.S.n;if(o!==void 0&&(t.r=o),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function w(i){let t,o=i.s;for(;o!==void 0;){let f=o.p;o.i===-1?(o.S.U(o),f!==void 0&&(f.n=o.n),o.n!==void 0&&(o.n.p=f)):t=o,o.S.n=o.r,o.r!==void 0&&(o.r=void 0),o=f}i.s=t}function e(i){s.call(this,void 0),this.x=i,this.s=void 0,this.g=c-1,this.f=4}(e.prototype=new s).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===c))return!0;if(this.g=c,this.f|=1,this.i>0&&!a(this))return this.f&=-2,!0;let i=n;try{S(this),n=this;let t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return n=i,w(this),this.f&=-2,!0};e.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(let t=this.s;t!==void 0;t=t.n)t.S.S(t)}s.prototype.S.call(this,i)};e.prototype.U=function(i){if(this.t!==void 0&&(s.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(let t=this.s;t!==void 0;t=t.n)t.S.U(t)}};e.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;i!==void 0;i=i.x)i.t.N()}};e.prototype.peek=function(){if(this.h()||v(),16&this.f)throw this.v;return this.v};Object.defineProperty(e.prototype,"value",{get(){1&this.f&&v();let i=y(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function k(i){return new e(i)}function x(i){let t=i.u;if(i.u=void 0,typeof t=="function"){h++;let o=n;n=void 0;try{t()}catch(f){throw i.f&=-2,i.f|=8,l(i),f}finally{n=o,d()}}}function l(i){for(let t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,x(i)}function g(i){if(n!==this)throw new Error("Out-of-order effect");w(this),n=i,this.f&=-2,8&this.f&&l(this),d()}function u(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}u.prototype.c=function(){let i=this.S();try{if(8&this.f||this.x===void 0)return;let t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}};u.prototype.S=function(){1&this.f&&v(),this.f|=1,this.f&=-9,x(this),S(this),h++;let i=n;return n=this,g.bind(this,i)};u.prototype.N=function(){2&this.f||(this.f|=2,this.o=r,r=this)};u.prototype.d=function(){this.f|=8,1&this.f||l(this)};function U(i){let t=new u(i);try{t.c()}catch(o){throw t.d(),o}return t.d.bind(t)}export{s as Signal,N as batch,k as computed,U as effect,O as signal};
//# sourceMappingURL=signals-core.mjs.map