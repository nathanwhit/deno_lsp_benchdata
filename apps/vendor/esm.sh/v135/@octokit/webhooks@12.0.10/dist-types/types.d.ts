import type { RequestError } from "https://esm.sh/v135/@octokit/request-error@5.0.1/dist-types/index.d.ts";
import type { WebhookEventMap, WebhookEventName } from "https://esm.sh/v135/@octokit/webhooks-types@7.1.0/schema.d.ts";
import type { Logger } from "./createLogger.ts";
import type { emitterEventNames } from "./generated/webhook-names.ts";
export type EmitterWebhookEventName = (typeof emitterEventNames)[number];
export type EmitterWebhookEvent<TEmitterEvent extends EmitterWebhookEventName = EmitterWebhookEventName> = TEmitterEvent extends `${infer TWebhookEvent}.${infer TAction}` ? BaseWebhookEvent<Extract<TWebhookEvent, WebhookEventName>> & {
    payload: {
        action: TAction;
    };
} : BaseWebhookEvent<Extract<TEmitterEvent, WebhookEventName>>;
export type EmitterWebhookEventWithStringPayloadAndSignature = {
    id: string;
    name: EmitterWebhookEventName;
    payload: string;
    signature: string;
};
interface BaseWebhookEvent<TName extends WebhookEventName> {
    id: string;
    name: TName;
    payload: WebhookEventMap[TName];
}
export interface Options<TTransformed = unknown> {
    secret?: string;
    transform?: TransformMethod<TTransformed>;
    log?: Partial<Logger>;
}
type TransformMethod<T> = (event: EmitterWebhookEvent) => T | PromiseLike<T>;
export type HandlerFunction<TName extends EmitterWebhookEventName, TTransformed> = (event: EmitterWebhookEvent<TName> & TTransformed) => any;
export type RemoveHandlerFunction<TName extends EmitterWebhookEventName | "*", TTransformed> = (event: EmitterWebhookEvent<Exclude<TName, "*">> & TTransformed) => any;
type Hooks = {
    [key: string]: Function[];
};
export interface State extends Options<any> {
    eventHandler?: any;
    hooks: Hooks;
    log: Logger;
}
/**
 * Error object with optional properties coming from `octokit.request` errors
 */
export type WebhookError = Error & Partial<RequestError>;
export interface WebhookEventHandlerError<TTransformed = unknown> extends AggregateError<WebhookError> {
    event: TTransformed extends unknown ? EmitterWebhookEvent : EmitterWebhookEvent & TTransformed;
}
/**
 * Workaround for TypeScript incompatibility with types exported by aggregate-error.
 * Credit: https://git.io/JUEEr
 * @copyright Sindre Sorhus
 * @license MIT (https://git.io/JUEEK)
 * @see https://github.com/octokit/webhooks.js/pull/270/files
 */
declare class AggregateError<T extends Error = Error> extends Error implements Iterable<T> {
    readonly name: "AggregateError";
    constructor(errors: ReadonlyArray<T | {
        [key: string]: any;
    } | string>);
    [Symbol.iterator](): IterableIterator<T>;
}
export {};
