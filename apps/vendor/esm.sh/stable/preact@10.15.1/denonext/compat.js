/* esm.sh - esbuild bundle(preact@10.15.1/compat) denonext production */
import{Component as f,createElement as c,options as i,toChildArray as s,Fragment as h,render as v,hydrate as $,createContext as B,createRef as H,cloneElement as z}from"/stable/preact@10.15.1/denonext/preact.mjs";import{Component as Ve,Fragment as Me,createContext as We,createElement as Fe,createRef as $e}from"/stable/preact@10.15.1/denonext/preact.mjs";import{useState as D,useId as j,useReducer as Y,useEffect as I,useLayoutEffect as E,useRef as Z,useImperativeHandle as q,useMemo as G,useCallback as J,useContext as K,useDebugValue as Q}from"/stable/preact@10.15.1/denonext/hooks.js";export*from"/stable/preact@10.15.1/denonext/hooks.js";function L(e,t){for(var n in t)e[n]=t[n];return e}function b(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function y(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function C(e){this.props=e}function X(e,t){function n(o){var u=this.props.ref,a=u==o.ref;return!a&&u&&(u.call?u(null):u.current=null),t?!t(this.props,o)||!a:b(this.props,o)}function r(o){return this.shouldComponentUpdate=n,c(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C.prototype=new f).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(e,t){return b(this.props,e)||b(this.state,t)};var N=i.__b;i.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),N&&N(e)};var ee=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function te(e){function t(n){var r=L({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ee,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var R=function(e,t){return e==null?null:s(s(e).map(t))},ne={map:R,forEach:R,count:function(e){return e?s(e).length:0},only:function(e){var t=s(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:s},re=i.__e;i.__e=function(e,t,n,r){if(e.then){for(var o,u=t;u=u.__;)if((o=u.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}re(e,t,n,r)};var k=i.unmount;function T(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=L({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return T(r,t,n)})),e}function A(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return A(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function d(){this.__u=0,this.t=null,this.__b=null}function V(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function oe(e){var t,n,r;function o(u){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return c(n,u)}return o.displayName="Lazy",o.__f=!0,o}function p(){this.u=null,this.o=null}i.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),k&&k(e)},(d.prototype=new f).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=V(r.__v),u=!1,a=function(){u||(u=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__a){var m=r.state.__a;r.__v.__k[0]=A(m,m.__c.__P,m.__c.__O)}var g;for(r.setState({__a:r.__b=null});g=r.t.pop();)g.forceUpdate()}},_=t.__h===!0;r.__u++||_||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=T(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&c(h,null,e.fallback);return o&&(o.__h=null),[c(h,null,t.__a?null:e.children),o]};var x=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ue(e){return this.getChildContext=function(){return e.context},e.children}function ae(e){var t=this,n=e.i;t.componentWillUnmount=function(){v(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),v(c(ue,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ie(e,t){var n=c(ae,{__v:e,i:t});return n.containerInfo=t,n}(p.prototype=new f).__a=function(e){var t=this,n=V(t.__v),r=t.o.get(e);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),x(t,e,r)):o()};n?n(u):u()}},p.prototype.render=function(e){this.u=null,this.o=new Map;var t=s(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},p.prototype.componentDidUpdate=p.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){x(e,n,t)})};var M=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,le=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_e=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,se=/[A-Z0-9]/g,ce=typeof document<"u",fe=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function pe(e,t,n){return t.__k==null&&(t.textContent=""),v(e,t),typeof n=="function"&&n(),e?e.__c:null}function de(e,t,n){return $(e,t),typeof n=="function"&&n(),e?e.__c:null}f.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(f.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var O=i.event;function he(){}function ve(){return this.cancelBubble}function me(){return this.defaultPrevented}i.event=function(e){return O&&(e=O(e)),e.persist=he,e.isPropagationStopped=ve,e.isDefaultPrevented=me,e.nativeEvent=e};var S,ye={enumerable:!1,configurable:!0,get:function(){return this.class}},P=i.vnode;i.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var u in n){var a=n[u];if(!(u==="value"&&"defaultValue"in n&&a==null||ce&&u==="children"&&r==="noscript"||u==="class"||u==="className")){var l=u.toLowerCase();u==="defaultValue"&&"value"in n&&n.value==null?u="value":u==="download"&&a===!0?a="":l==="ondoubleclick"?u="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||fe(n.type)?l==="onfocus"?u="onfocusin":l==="onblur"?u="onfocusout":_e.test(u)?u=l:r.indexOf("-")===-1&&le.test(u)?u=u.replace(se,"-$&").toLowerCase():a===null&&(a=void 0):l=u="oninput",l==="oninput"&&o[u=l]&&(u="oninputCapture"),o[u]=a}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=s(n.children).forEach(function(_){_.props.selected=o.value.indexOf(_.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=s(n.children).forEach(function(_){_.props.selected=o.multiple?o.defaultValue.indexOf(_.props.value)!=-1:o.defaultValue==_.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",ye)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=M,P&&P(e)};var U=i.__r;i.__r=function(e){U&&U(e),S=e.__c};var w=i.diffed;i.diffed=function(e){w&&w(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),S=null};var be={ReactCurrentDispatcher:{current:{readContext:function(e){return S.__n[e.__c].props.value}}}},Ie="17.0.2";function Ce(e){return c.bind(null,e)}function W(e){return!!e&&e.$$typeof===M}function Ee(e){return W(e)?z.apply(null,arguments):e}function Se(e){return!!e.__k&&(v(null,e),!0)}function ge(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ne=function(e,t){return e(t)},Re=function(e,t){return e(t)},ke=h;function F(e){e()}function xe(e){return e}function Oe(){return[!1,F]}var Pe=E;function Ue(e,t){var n=t(),r=D({h:{__:n,v:t}}),o=r[0].h,u=r[1];return E(function(){o.__=n,o.v=t,y(o.__,t())||u({h:o})},[e,n,t]),I(function(){return y(o.__,o.v())||u({h:o}),e(function(){y(o.__,o.v())||u({h:o})})},[e]),n}var Le={useState:D,useId:j,useReducer:Y,useEffect:I,useLayoutEffect:E,useInsertionEffect:Pe,useTransition:Oe,useDeferredValue:xe,useSyncExternalStore:Ue,startTransition:F,useRef:Z,useImperativeHandle:q,useMemo:G,useCallback:J,useContext:K,useDebugValue:Q,version:"17.0.2",Children:ne,render:pe,hydrate:de,unmountComponentAtNode:Se,createPortal:ie,createElement:c,createContext:B,createFactory:Ce,cloneElement:Ee,createRef:H,Fragment:h,isValidElement:W,findDOMNode:ge,Component:f,PureComponent:C,memo:X,forwardRef:te,flushSync:Re,unstable_batchedUpdates:Ne,StrictMode:ke,Suspense:d,SuspenseList:p,lazy:oe,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:be};export{ne as Children,Ve as Component,Me as Fragment,C as PureComponent,ke as StrictMode,d as Suspense,p as SuspenseList,be as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ee as cloneElement,We as createContext,Fe as createElement,Ce as createFactory,ie as createPortal,$e as createRef,Le as default,ge as findDOMNode,Re as flushSync,te as forwardRef,de as hydrate,W as isValidElement,oe as lazy,X as memo,pe as render,F as startTransition,Se as unmountComponentAtNode,Ne as unstable_batchedUpdates,xe as useDeferredValue,Pe as useInsertionEffect,Ue as useSyncExternalStore,Oe as useTransition,Ie as version};
//# sourceMappingURL=compat.js.map