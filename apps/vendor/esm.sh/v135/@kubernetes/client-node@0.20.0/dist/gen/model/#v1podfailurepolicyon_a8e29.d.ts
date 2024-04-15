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
/**
* PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
*/
export declare class V1PodFailurePolicyOnPodConditionsPattern {
    /**
    * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
    */
    'status': string;
    /**
    * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
    */
    'type': string;
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
