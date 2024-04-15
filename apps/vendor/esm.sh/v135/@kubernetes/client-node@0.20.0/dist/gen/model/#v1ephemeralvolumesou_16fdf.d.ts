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
import { V1PersistentVolumeClaimTemplate } from './v1PersistentVolumeClaimTemplate.d.ts';
/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export declare class V1EphemeralVolumeSource {
    'volumeClaimTemplate'?: V1PersistentVolumeClaimTemplate;
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