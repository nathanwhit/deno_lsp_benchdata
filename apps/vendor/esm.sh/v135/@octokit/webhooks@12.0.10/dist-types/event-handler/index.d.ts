import type { EmitterWebhookEvent, EmitterWebhookEventName, HandlerFunction, Options, WebhookEventHandlerError } from "../types.d.ts";
interface EventHandler<TTransformed> {
    on<E extends EmitterWebhookEventName>(event: E | E[], callback: HandlerFunction<E, TTransformed>): void;
    onAny(handler: (event: TTransformed extends unknown ? EmitterWebhookEvent : EmitterWebhookEvent & TTransformed) => any): void;
    onError(handler: (event: WebhookEventHandlerError<TTransformed>) => any): void;
    removeListener<E extends EmitterWebhookEventName>(event: E | E[], callback: HandlerFunction<E, TTransformed>): void;
    receive(event: EmitterWebhookEvent): Promise<void>;
}
export declare function createEventHandler<TTransformed>(options: Options<TTransformed>): EventHandler<TTransformed>;
export {};
