import type { RequestInterface, Endpoints } from "https://esm.sh/v135/@octokit/types@11.1.0/dist-types/index.d.ts";
import type { GitHubAppAuthenticationWithExpirationEnabled, GitHubAppAuthenticationWithExpirationDisabled } from "./types.d.ts";
type CommonOptions = {
    clientType: "github-app";
    clientId: string;
    clientSecret: string;
    token: string;
    permissions?: Endpoint["parameters"]["permissions"];
    request?: RequestInterface;
};
type TargetOption = {
    target: string;
};
type TargetIdOption = {
    target_id: number;
};
type RepositoriesOption = {
    repositories?: string[];
};
type RepositoryIdsOption = {
    repository_ids?: number[];
};
type Endpoint = Endpoints["POST /applications/{client_id}/token/scoped"];
export type ScopeTokenOptions = (CommonOptions & TargetOption & RepositoriesOption) | (CommonOptions & TargetIdOption & RepositoriesOption) | (CommonOptions & TargetOption & RepositoryIdsOption) | (CommonOptions & TargetIdOption & RepositoryIdsOption);
export type ScopeTokenResponse = Endpoint["response"] & {
    authentication: GitHubAppAuthenticationWithExpirationEnabled | GitHubAppAuthenticationWithExpirationDisabled;
};
export declare function scopeToken(options: ScopeTokenOptions): Promise<ScopeTokenResponse>;
export {};
