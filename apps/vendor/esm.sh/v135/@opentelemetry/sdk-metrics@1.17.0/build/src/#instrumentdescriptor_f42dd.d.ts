import { MetricOptions, ValueType } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { View } from './view/View.d.ts';
/**
 * Supported types of metric instruments.
 */
export declare enum InstrumentType {
    COUNTER = "COUNTER",
    HISTOGRAM = "HISTOGRAM",
    UP_DOWN_COUNTER = "UP_DOWN_COUNTER",
    OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER",
    OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE",
    OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
}
/**
 * An interface describing the instrument.
 */
export interface InstrumentDescriptor {
    readonly name: string;
    readonly description: string;
    readonly unit: string;
    readonly type: InstrumentType;
    readonly valueType: ValueType;
}
export declare function createInstrumentDescriptor(name: string, type: InstrumentType, options?: MetricOptions): InstrumentDescriptor;
export declare function createInstrumentDescriptorWithView(view: View, instrument: InstrumentDescriptor): InstrumentDescriptor;
export declare function isDescriptorCompatibleWith(descriptor: InstrumentDescriptor, otherDescriptor: InstrumentDescriptor): boolean;
export declare function isValidName(name: string): boolean;
//# sourceMappingURL=InstrumentDescriptor.d.ts.map
