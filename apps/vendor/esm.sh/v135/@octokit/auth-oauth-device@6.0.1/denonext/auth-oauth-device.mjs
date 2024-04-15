/* esm.sh - esbuild bundle(@octokit/auth-oauth-device@6.0.1) denonext production */
import{getUserAgent as m}from"/v135/universal-user-agent@6.0.1/denonext/universal-user-agent.mjs";import{request as w}from"/v135/@octokit/request@8.1.6/denonext/request.mjs";import{createDeviceCode as d,exchangeDeviceCode as u}from"/v135/@octokit/oauth-methods@4.0.0/denonext/oauth-methods.mjs";async function r(t,e){let i=l(t,e.auth);if(i)return i;let{data:n}=await d({clientType:t.clientType,clientId:t.clientId,request:e.request||t.request,scopes:e.auth.scopes||t.scopes});await t.onVerification(n);let o=await a(e.request||t.request,t.clientId,t.clientType,n);return t.authentication=o,o}function l(t,e){if(e.refresh===!0||!t.authentication)return!1;if(t.clientType==="github-app")return t.authentication;let i=t.authentication,n=("scopes"in e&&e.scopes||t.scopes).join(" "),o=i.scopes.join(" ");return n===o?i:!1}async function s(t){await new Promise(e=>setTimeout(e,t*1e3))}async function a(t,e,i,n){try{let o={clientId:e,request:t,code:n.device_code},{authentication:c}=i==="oauth-app"?await u({...o,clientType:"oauth-app"}):await u({...o,clientType:"github-app"});return{type:"token",tokenType:"oauth",...c}}catch(o){if(!o.response)throw o;let c=o.response.data.error;if(c==="authorization_pending")return await s(n.interval),a(t,e,i,n);if(c==="slow_down")return await s(n.interval+5),a(t,e,i,n);throw o}}async function h(t,e){return r(t,{auth:e})}async function p(t,e,i,n){let o=e.endpoint.merge(i,n);if(/\/login\/(oauth\/access_token|device\/code)$/.test(o.url))return e(o);let{token:c}=await r(t,{request:e,auth:{type:"oauth"}});return o.headers.authorization=`token ${c}`,e(o)}var f="6.0.1";function V(t){let e=t.request||w.defaults({headers:{"user-agent":`octokit-auth-oauth-device.js/${f} ${m()}`}}),{request:i=e,...n}=t,o=t.clientType==="github-app"?{...n,clientType:"github-app",request:i}:{...n,clientType:"oauth-app",request:i,scopes:t.scopes||[]};if(!t.clientId)throw new Error('[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)');if(!t.onVerification)throw new Error('[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)');return Object.assign(h.bind(null,o),{hook:p.bind(null,o)})}export{V as createOAuthDeviceAuth};
//# sourceMappingURL=auth-oauth-device.mjs.map