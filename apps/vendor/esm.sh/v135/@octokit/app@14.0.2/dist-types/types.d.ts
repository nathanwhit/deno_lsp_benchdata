import { Octokit } from "https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts";
import type { Endpoints } from "https://esm.sh/v135/@octokit/types@12.3.0/dist-types/index.d.ts";
export type Options = {
    appId?: number | string;
    privateKey?: string;
    webhooks?: {
        secret: string;
    };
    oauth?: {
        clientId: string;
        clientSecret: string;
        allowSignup?: boolean;
    };
    Octokit?: typeof Octokit;
    log?: {
        debug: (...data: any[]) => void;
        info: (...data: any[]) => void;
        warn: (...data: any[]) => void;
        error: (...data: any[]) => void;
    };
};
export type ConstructorOptions<TOptions extends Options> = TOptions & {
    appId: number | string;
    privateKey: string;
};
export type InstallationFunctionOptions<O> = {
    octokit: O;
    installation: Endpoints["GET /app/installations"]["response"]["data"][0];
};
export type EachInstallationFunction<O> = (options: InstallationFunctionOptions<O>) => unknown | Promise<unknown>;
export interface EachInstallationInterface<O> {
    (callback: EachInstallationFunction<O>): Promise<void>;
    iterator: () => AsyncIterable<InstallationFunctionOptions<O>>;
}
type EachRepositoryFunctionOptions<O> = {
    octokit: O;
    repository: Endpoints["GET /installation/repositories"]["response"]["data"]["repositories"][0];
};
export type EachRepositoryFunction<O> = (options: EachRepositoryFunctionOptions<O>) => unknown | Promise<unknown>;
export type EachRepositoryQuery = {
    installationId: number;
};
export interface EachRepositoryInterface<O> {
    (callback: EachRepositoryFunction<O>): Promise<void>;
    (query: EachRepositoryQuery, callback: EachRepositoryFunction<O>): Promise<void>;
    iterator: (query?: EachRepositoryQuery) => AsyncIterable<EachRepositoryFunctionOptions<O>>;
}
export interface GetInstallationOctokitInterface<O> {
    (installationId: number): Promise<O>;
}
export {};
