/* esm.sh - esbuild bundle(@octokit/request-error@5.0.1) denonext production */
import{Deprecation as a}from"/v135/deprecation@2.3.1/denonext/deprecation.mjs";import n from"/v135/once@1.4.0/denonext/once.mjs";var d=n(r=>console.warn(r)),h=n(r=>console.warn(r)),o=class extends Error{constructor(i,c,e){super(i),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=c;let t;"headers"in e&&typeof e.headers<"u"&&(t=e.headers),"response"in e&&(this.response=e.response,t=e.response.headers);let s=Object.assign({},e.request);e.request.headers.authorization&&(s.headers=Object.assign({},e.request.headers,{authorization:e.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),s.url=s.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=s,Object.defineProperty(this,"code",{get(){return d(new a("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),c}}),Object.defineProperty(this,"headers",{get(){return h(new a("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),t||{}}})}};export{o as RequestError};
//# sourceMappingURL=request-error.mjs.map