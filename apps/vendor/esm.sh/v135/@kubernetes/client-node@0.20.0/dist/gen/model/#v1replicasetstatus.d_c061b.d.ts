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
import { V1ReplicaSetCondition } from './v1ReplicaSetCondition.d.ts';
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
*/
export declare class V1ReplicaSetStatus {
    /**
    * The number of available replicas (ready for at least minReadySeconds) for this replica set.
    */
    'availableReplicas'?: number;
    /**
    * Represents the latest available observations of a replica set\'s current state.
    */
    'conditions'?: Array<V1ReplicaSetCondition>;
    /**
    * The number of pods that have labels matching the labels of the pod template of the replicaset.
    */
    'fullyLabeledReplicas'?: number;
    /**
    * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
    */
    'observedGeneration'?: number;
    /**
    * readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.
    */
    'readyReplicas'?: number;
    /**
    * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
    */
    'replicas': number;
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
