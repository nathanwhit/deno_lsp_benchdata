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
import { V1ConfigMapKeySelector } from './v1ConfigMapKeySelector.d.ts';
import { V1ObjectFieldSelector } from './v1ObjectFieldSelector.d.ts';
import { V1ResourceFieldSelector } from './v1ResourceFieldSelector.d.ts';
import { V1SecretKeySelector } from './v1SecretKeySelector.d.ts';
/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
export declare class V1EnvVarSource {
    'configMapKeyRef'?: V1ConfigMapKeySelector;
    'fieldRef'?: V1ObjectFieldSelector;
    'resourceFieldRef'?: V1ResourceFieldSelector;
    'secretKeyRef'?: V1SecretKeySelector;
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