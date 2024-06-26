import { Context } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { ReadableSpan } from './export/ReadableSpan.d.ts';
import { Span } from './Span.d.ts';
/**
 * SpanProcessor is the interface Tracer SDK uses to allow synchronous hooks
 * for when a {@link Span} is started or when a {@link Span} is ended.
 */
export interface SpanProcessor {
    /**
     * Forces to export all finished spans
     */
    forceFlush(): Promise<void>;
    /**
     * Called when a {@link Span} is started, if the `span.isRecording()`
     * returns true.
     * @param span the Span that just started.
     */
    onStart(span: Span, parentContext: Context): void;
    /**
     * Called when a {@link ReadableSpan} is ended, if the `span.isRecording()`
     * returns true.
     * @param span the Span that just ended.
     */
    onEnd(span: ReadableSpan): void;
    /**
     * Shuts down the processor. Called when SDK is shut down. This is an
     * opportunity for processor to do any cleanup required.
     */
    shutdown(): Promise<void>;
}
//# sourceMappingURL=SpanProcessor.d.ts.map
