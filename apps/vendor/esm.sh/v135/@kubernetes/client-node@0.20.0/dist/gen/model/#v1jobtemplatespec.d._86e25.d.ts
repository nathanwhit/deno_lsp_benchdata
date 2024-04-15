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
import { V1JobSpec } from './v1JobSpec.d.ts';
import { V1ObjectMeta } from './v1ObjectMeta.d.ts';
/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
export declare class V1JobTemplateSpec {
    'metadata'?: V1ObjectMeta;
    'spec'?: V1JobSpec;
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
