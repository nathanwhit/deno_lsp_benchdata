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
* SELinuxOptions are the labels to be applied to the container
*/
export declare class V1SELinuxOptions {
    /**
    * Level is SELinux level label that applies to the container.
    */
    'level'?: string;
    /**
    * Role is a SELinux role label that applies to the container.
    */
    'role'?: string;
    /**
    * Type is a SELinux type label that applies to the container.
    */
    'type'?: string;
    /**
    * User is a SELinux user label that applies to the container.
    */
    'user'?: string;
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
