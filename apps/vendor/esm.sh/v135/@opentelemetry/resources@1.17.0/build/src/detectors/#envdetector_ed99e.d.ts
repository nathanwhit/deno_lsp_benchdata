import { Detector } from '../types.d.ts';
import { ResourceDetectionConfig } from '../config.d.ts';
import { IResource } from '../IResource.d.ts';
/**
 * EnvDetector can be used to detect the presence of and create a Resource
 * from the OTEL_RESOURCE_ATTRIBUTES environment variable.
 */
declare class EnvDetector implements Detector {
    /**
     * Returns a {@link Resource} populated with attributes from the
     * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
     * function to conform to the Detector interface.
     *
     * @param config The resource detection config
     */
    detect(config?: ResourceDetectionConfig): Promise<IResource>;
}
export declare const envDetector: EnvDetector;
export {};
//# sourceMappingURL=EnvDetector.d.ts.map
