import type { RequestInterface, Route, EndpointOptions, RequestParameters, OctokitResponse } from "https://esm.sh/v135/@octokit/types@12.3.0/dist-types/index.d.ts";
import * as OAuthMethodsTypes from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
export type ClientType = "oauth-app" | "github-app";
export type OAuthAppStrategyOptions = {
    clientId: string;
    clientType?: "oauth-app";
    onVerification: OnVerificationCallback;
    scopes?: string[];
    request?: RequestInterface;
};
export type GitHubAppStrategyOptions = {
    clientId: string;
    clientType: "github-app";
    onVerification: OnVerificationCallback;
    request?: RequestInterface;
};
export interface OAuthAppAuthInterface {
    (options: OAuthAppAuthOptions): Promise<OAuthAppAuthentication>;
    hook(request: RequestInterface, route: Route | EndpointOptions, parameters?: RequestParameters): Promise<OctokitResponse<any>>;
}
export interface GitHubAppAuthInterface {
    (options: GitHubAppAuthOptions): Promise<GitHubAppAuthentication | GitHubAppAuthenticationWithExpiration>;
    hook(request: RequestInterface, route: Route | EndpointOptions, parameters?: RequestParameters): Promise<OctokitResponse<any>>;
}
export type OAuthAppAuthOptions = {
    type: "oauth";
    scopes?: string[];
    refresh?: boolean;
};
export type GitHubAppAuthOptions = {
    type: "oauth";
    refresh?: boolean;
};
export type OAuthAppAuthentication = {
    type: "token";
    tokenType: "oauth";
} & Omit<OAuthMethodsTypes.OAuthAppAuthentication, "clientSecret">;
export type GitHubAppAuthentication = {
    type: "token";
    tokenType: "oauth";
} & Omit<OAuthMethodsTypes.GitHubAppAuthentication, "clientSecret">;
export type GitHubAppAuthenticationWithExpiration = {
    type: "token";
    tokenType: "oauth";
} & Omit<OAuthMethodsTypes.GitHubAppAuthentication, "clientSecret">;
export type Verification = {
    device_code: string;
    user_code: string;
    verification_uri: string;
    expires_in: number;
    interval: number;
};
export type OnVerificationCallback = (verification: Verification) => any | Promise<any>;
export type OAuthAppState = {
    clientId: string;
    clientType: "oauth-app";
    onVerification: OnVerificationCallback;
    scopes: string[];
    request: RequestInterface;
    authentication?: OAuthAppAuthentication;
};
export type GitHubAppState = {
    clientId: string;
    clientType: "github-app";
    onVerification: OnVerificationCallback;
    request: RequestInterface;
    authentication?: GitHubAppAuthentication | GitHubAppAuthenticationWithExpiration;
};
