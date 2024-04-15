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
/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import http from 'https://esm.sh/v135/@types/node@18.16.19/http.d.ts';
import { V1APIGroup } from '../model/v1APIGroup.d.ts';
import { Authentication, Interceptor } from '../model/models.d.ts';
import { ApiKeyAuth } from '../model/models.d.ts';
export declare enum AdmissionregistrationApiApiKeys {
    BearerToken = 0
}
export declare class AdmissionregistrationApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        BearerToken: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AdmissionregistrationApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * get information of a group
     */
    getAPIGroup(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: V1APIGroup;
    }>;
}
