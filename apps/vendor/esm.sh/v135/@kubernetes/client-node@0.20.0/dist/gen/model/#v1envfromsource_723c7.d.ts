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
import { V1ConfigMapEnvSource } from './v1ConfigMapEnvSource.d.ts';
import { V1SecretEnvSource } from './v1SecretEnvSource.d.ts';
/**
* EnvFromSource represents the source of a set of ConfigMaps
*/
export declare class V1EnvFromSource {
    'configMapRef'?: V1ConfigMapEnvSource;
    /**
    * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
    */
    'prefix'?: string;
    'secretRef'?: V1SecretEnvSource;
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
