/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1ObjectMeta } from './v1ObjectMeta.d.ts';
import { V1alpha2ResourceClaimSpec } from './v1alpha2ResourceClaimSpec.d.ts';
/**
* ResourceClaimTemplateSpec contains the metadata and fields for a ResourceClaim.
*/
export declare class V1alpha2ResourceClaimTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec': V1alpha2ResourceClaimSpec;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
