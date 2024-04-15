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
import { V1AWSElasticBlockStoreVolumeSource } from './v1AWSElasticBlockStoreVolumeSource.d.ts';
import { V1AzureDiskVolumeSource } from './v1AzureDiskVolumeSource.d.ts';
import { V1AzureFileVolumeSource } from './v1AzureFileVolumeSource.d.ts';
import { V1CSIVolumeSource } from './v1CSIVolumeSource.d.ts';
import { V1CephFSVolumeSource } from './v1CephFSVolumeSource.d.ts';
import { V1CinderVolumeSource } from './v1CinderVolumeSource.d.ts';
import { V1ConfigMapVolumeSource } from './v1ConfigMapVolumeSource.d.ts';
import { V1DownwardAPIVolumeSource } from './v1DownwardAPIVolumeSource.d.ts';
import { V1EmptyDirVolumeSource } from './v1EmptyDirVolumeSource.d.ts';
import { V1EphemeralVolumeSource } from './v1EphemeralVolumeSource.d.ts';
import { V1FCVolumeSource } from './v1FCVolumeSource.d.ts';
import { V1FlexVolumeSource } from './v1FlexVolumeSource.d.ts';
import { V1FlockerVolumeSource } from './v1FlockerVolumeSource.d.ts';
import { V1GCEPersistentDiskVolumeSource } from './v1GCEPersistentDiskVolumeSource.d.ts';
import { V1GitRepoVolumeSource } from './v1GitRepoVolumeSource.d.ts';
import { V1GlusterfsVolumeSource } from './v1GlusterfsVolumeSource.d.ts';
import { V1HostPathVolumeSource } from './v1HostPathVolumeSource.d.ts';
import { V1ISCSIVolumeSource } from './v1ISCSIVolumeSource.d.ts';
import { V1NFSVolumeSource } from './v1NFSVolumeSource.d.ts';
import { V1PersistentVolumeClaimVolumeSource } from './v1PersistentVolumeClaimVolumeSource.d.ts';
import { V1PhotonPersistentDiskVolumeSource } from './v1PhotonPersistentDiskVolumeSource.d.ts';
import { V1PortworxVolumeSource } from './v1PortworxVolumeSource.d.ts';
import { V1ProjectedVolumeSource } from './v1ProjectedVolumeSource.d.ts';
import { V1QuobyteVolumeSource } from './v1QuobyteVolumeSource.d.ts';
import { V1RBDVolumeSource } from './v1RBDVolumeSource.d.ts';
import { V1ScaleIOVolumeSource } from './v1ScaleIOVolumeSource.d.ts';
import { V1SecretVolumeSource } from './v1SecretVolumeSource.d.ts';
import { V1StorageOSVolumeSource } from './v1StorageOSVolumeSource.d.ts';
import { V1VsphereVirtualDiskVolumeSource } from './v1VsphereVirtualDiskVolumeSource.d.ts';
/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export declare class V1Volume {
    'awsElasticBlockStore'?: V1AWSElasticBlockStoreVolumeSource;
    'azureDisk'?: V1AzureDiskVolumeSource;
    'azureFile'?: V1AzureFileVolumeSource;
    'cephfs'?: V1CephFSVolumeSource;
    'cinder'?: V1CinderVolumeSource;
    'configMap'?: V1ConfigMapVolumeSource;
    'csi'?: V1CSIVolumeSource;
    'downwardAPI'?: V1DownwardAPIVolumeSource;
    'emptyDir'?: V1EmptyDirVolumeSource;
    'ephemeral'?: V1EphemeralVolumeSource;
    'fc'?: V1FCVolumeSource;
    'flexVolume'?: V1FlexVolumeSource;
    'flocker'?: V1FlockerVolumeSource;
    'gcePersistentDisk'?: V1GCEPersistentDiskVolumeSource;
    'gitRepo'?: V1GitRepoVolumeSource;
    'glusterfs'?: V1GlusterfsVolumeSource;
    'hostPath'?: V1HostPathVolumeSource;
    'iscsi'?: V1ISCSIVolumeSource;
    /**
    * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'nfs'?: V1NFSVolumeSource;
    'persistentVolumeClaim'?: V1PersistentVolumeClaimVolumeSource;
    'photonPersistentDisk'?: V1PhotonPersistentDiskVolumeSource;
    'portworxVolume'?: V1PortworxVolumeSource;
    'projected'?: V1ProjectedVolumeSource;
    'quobyte'?: V1QuobyteVolumeSource;
    'rbd'?: V1RBDVolumeSource;
    'scaleIO'?: V1ScaleIOVolumeSource;
    'secret'?: V1SecretVolumeSource;
    'storageos'?: V1StorageOSVolumeSource;
    'vsphereVolume'?: V1VsphereVirtualDiskVolumeSource;
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
