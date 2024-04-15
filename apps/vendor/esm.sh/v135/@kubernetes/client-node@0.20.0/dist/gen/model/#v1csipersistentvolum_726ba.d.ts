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
import { V1SecretReference } from './v1SecretReference.d.ts';
/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
export declare class V1CSIPersistentVolumeSource {
    'controllerExpandSecretRef'?: V1SecretReference;
    'controllerPublishSecretRef'?: V1SecretReference;
    /**
    * driver is the name of the driver to use for this volume. Required.
    */
    'driver': string;
    /**
    * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
    */
    'fsType'?: string;
    'nodeExpandSecretRef'?: V1SecretReference;
    'nodePublishSecretRef'?: V1SecretReference;
    'nodeStageSecretRef'?: V1SecretReference;
    /**
    * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    /**
    * volumeAttributes of the volume to publish.
    */
    'volumeAttributes'?: {
        [key: string]: string;
    };
    /**
    * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
    */
    'volumeHandle': string;
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
