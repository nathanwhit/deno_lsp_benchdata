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
import { V1IngressPortStatus } from './v1IngressPortStatus.d.ts';
/**
* IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
*/
export declare class V1IngressLoadBalancerIngress {
    /**
    * hostname is set for load-balancer ingress points that are DNS based.
    */
    'hostname'?: string;
    /**
    * ip is set for load-balancer ingress points that are IP based.
    */
    'ip'?: string;
    /**
    * ports provides information about the ports exposed by this LoadBalancer.
    */
    'ports'?: Array<V1IngressPortStatus>;
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
