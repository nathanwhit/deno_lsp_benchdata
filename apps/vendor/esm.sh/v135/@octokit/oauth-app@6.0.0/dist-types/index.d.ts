import { type GetUserOctokitWithStateInterface } from "./methods/get-user-octokit.d.ts";
import { type GetWebFlowAuthorizationUrlInterface } from "./methods/get-web-flow-authorization-url.d.ts";
import { type CreateTokenInterface } from "./methods/create-token.d.ts";
import { type CheckTokenInterface } from "./methods/check-token.d.ts";
import { type ResetTokenInterface } from "./methods/reset-token.d.ts";
import { type RefreshTokenInterface } from "./methods/refresh-token.d.ts";
import { type ScopeTokenInterface } from "./methods/scope-token.d.ts";
import { type DeleteTokenInterface } from "./methods/delete-token.d.ts";
import { type DeleteAuthorizationInterface } from "./methods/delete-authorization.d.ts";
import type { AddEventHandler, ClientType, ClientTypeFromOptions, ConstructorOptions, OctokitTypeFromOptions, Options } from "./types.d.ts";
export type { HandlerOptions, OctokitRequest, OctokitResponse, } from "./middleware/types.d.ts";
export { handleRequest } from "./middleware/handle-request.d.ts";
export { unknownRouteResponse } from "./middleware/unknown-route-response.d.ts";
export { createNodeMiddleware } from "./middleware/node/index.d.ts";
export { sendResponse as sendNodeResponse } from "./middleware/node/send-response.d.ts";
export { createWebWorkerHandler } from "./middleware/web-worker/index.d.ts";
export { createAWSLambdaAPIGatewayV2Handler } from "./middleware/aws-lambda/api-gateway-v2.d.ts";
type Constructor<T> = new (...args: any[]) => T;
export declare class OAuthApp<TOptions extends Options<ClientType> = Options<"oauth-app">> {
    static VERSION: string;
    static defaults<TDefaults extends Options<ClientType>, S extends Constructor<OAuthApp<TDefaults>>>(this: S, defaults: TDefaults): {
        new (...args: any[]): {
            type: ClientTypeFromOptions<TDefaults>;
            on: AddEventHandler<TDefaults>;
            octokit: OctokitTypeFromOptions<TDefaults>;
            getUserOctokit: GetUserOctokitWithStateInterface<ClientTypeFromOptions<TDefaults>>;
            getWebFlowAuthorizationUrl: GetWebFlowAuthorizationUrlInterface<ClientTypeFromOptions<TDefaults>>;
            createToken: CreateTokenInterface<ClientTypeFromOptions<TDefaults>>;
            checkToken: CheckTokenInterface<ClientTypeFromOptions<TDefaults>>;
            resetToken: ResetTokenInterface<ClientTypeFromOptions<TDefaults>>;
            refreshToken: RefreshTokenInterface;
            scopeToken: ScopeTokenInterface;
            deleteToken: DeleteTokenInterface;
            deleteAuthorization: DeleteAuthorizationInterface;
        };
    } & S;
    constructor(options: ConstructorOptions<TOptions>);
    type: ClientTypeFromOptions<TOptions>;
    on: AddEventHandler<TOptions>;
    octokit: OctokitTypeFromOptions<TOptions>;
    getUserOctokit: GetUserOctokitWithStateInterface<ClientTypeFromOptions<TOptions>>;
    getWebFlowAuthorizationUrl: GetWebFlowAuthorizationUrlInterface<ClientTypeFromOptions<TOptions>>;
    createToken: CreateTokenInterface<ClientTypeFromOptions<TOptions>>;
    checkToken: CheckTokenInterface<ClientTypeFromOptions<TOptions>>;
    resetToken: ResetTokenInterface<ClientTypeFromOptions<TOptions>>;
    refreshToken: RefreshTokenInterface;
    scopeToken: ScopeTokenInterface;
    deleteToken: DeleteTokenInterface;
    deleteAuthorization: DeleteAuthorizationInterface;
}
