/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import https = require('https://esm.sh/v135/@types/node@18.16.19/https.d.ts');
import request = require('https://esm.sh/v135/@types/request@2.48.12/index.d.ts');
import WebSocket = require('https://esm.sh/v135/@types/ws@8.5.10/index.d.ts');
import * as api from './api.d.ts';
import { Cluster, ConfigOptions, Context, User } from './config_types.d.ts';
export declare class KubeConfig {
    private authenticators;
    /**
     * The list of all known clusters
     */
    'clusters': Cluster[];
    /**
     * The list of all known users
     */
    'users': User[];
    /**
     * The list of all known contexts
     */
    'contexts': Context[];
    /**
     * The name of the current context
     */
    'currentContext': string;
    constructor();
    getContexts(): Context[];
    getClusters(): Cluster[];
    getUsers(): User[];
    getCurrentContext(): string;
    setCurrentContext(context: string): void;
    getContextObject(name: string): Context | null;
    getCurrentCluster(): Cluster | null;
    getCluster(name: string): Cluster | null;
    getCurrentUser(): User | null;
    getUser(name: string): User | null;
    loadFromFile(file: string, opts?: Partial<ConfigOptions>): void;
    applyToHTTPSOptions(opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void>;
    applyToRequest(opts: request.Options): Promise<void>;
    loadFromString(config: string, opts?: Partial<ConfigOptions>): void;
    loadFromOptions(options: {
        clusters: Cluster[];
        contexts: Context[];
        currentContext: Context['name'];
        users: User[];
    }): void;
    loadFromClusterAndUser(cluster: Cluster, user: User): void;
    loadFromCluster(pathPrefix?: string): void;
    mergeConfig(config: KubeConfig, preserveContext?: boolean): void;
    addCluster(cluster: Cluster): void;
    addUser(user: User): void;
    addContext(ctx: Context): void;
    loadFromDefault(opts?: Partial<ConfigOptions>, contextFromStartingConfig?: boolean): void;
    makeApiClient<T extends ApiType>(apiClientType: ApiConstructor<T>): T;
    makePathsAbsolute(rootDirectory: string): void;
    exportConfig(): string;
    private getCurrentContextObject;
    private applyHTTPSOptions;
    private applyAuthorizationHeader;
    private applyOptions;
}
export interface ApiType {
    defaultHeaders: any;
    setDefaultAuthentication(config: api.Authentication): void;
}
type ApiConstructor<T extends ApiType> = new (server: string) => T;
export declare class Config {
    static SERVICEACCOUNT_ROOT: string;
    static SERVICEACCOUNT_CA_PATH: string;
    static SERVICEACCOUNT_TOKEN_PATH: string;
    static SERVICEACCOUNT_NAMESPACE_PATH: string;
    static fromFile(filename: string): api.CoreV1Api;
    static fromCluster(): api.CoreV1Api;
    static defaultClient(): api.CoreV1Api;
    static apiFromFile<T extends ApiType>(filename: string, apiClientType: ApiConstructor<T>): T;
    static apiFromCluster<T extends ApiType>(apiClientType: ApiConstructor<T>): T;
    static apiFromDefaultClient<T extends ApiType>(apiClientType: ApiConstructor<T>): T;
}
export declare function makeAbsolutePath(root: string, file: string): string;
export declare function bufferFromFileOrString(file?: string, data?: string): Buffer | null;
export declare function findHomeDir(): string | null;
export interface Named {
    name: string;
}
export declare function findObject<T extends Named>(list: T[], name: string, key: string): T | null;
export {};
