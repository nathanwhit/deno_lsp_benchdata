import { CollectionResult } from './MetricData.d.ts';
export interface MetricCollectOptions {
    /**
     * Timeout for the SDK to perform the involved asynchronous callback
     * functions.
     *
     * If the callback functions failed to finish the observation in time,
     * their results are discarded and an error is appended in the
     * {@link CollectionResult.errors}.
     */
    timeoutMillis?: number;
}
/**
 * This is a public interface that represent an export state of a MetricReader.
 */
export interface MetricProducer {
    /**
     * Collects the metrics from the SDK. If there are asynchronous Instruments
     * involved, their callback functions will be triggered.
     */
    collect(options?: MetricCollectOptions): Promise<CollectionResult>;
}
//# sourceMappingURL=MetricProducer.d.ts.map
