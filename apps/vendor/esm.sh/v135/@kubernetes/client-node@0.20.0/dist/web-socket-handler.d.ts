/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/@types/ws@8.5.10/index.d.ts" />
/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import WebSocket = require('https://esm.sh/v135/isomorphic-ws@5.0.0/index.d.ts');
import stream = require('https://esm.sh/v135/@types/node@18.16.19/stream.d.ts');
import { V1Status } from './api.d.ts';
import { KubeConfig } from './config.d.ts';
export interface WebSocketInterface {
    connect(path: string, textHandler: ((text: string) => boolean) | null, binaryHandler: ((stream: number, buff: Buffer) => boolean) | null): Promise<WebSocket>;
}
export declare class WebSocketHandler implements WebSocketInterface {
    readonly config: KubeConfig;
    readonly socketFactory?: ((uri: string, opts: WebSocket.ClientOptions) => WebSocket) | undefined;
    static readonly StdinStream: number;
    static readonly StdoutStream: number;
    static readonly StderrStream: number;
    static readonly StatusStream: number;
    static readonly ResizeStream: number;
    static handleStandardStreams(streamNum: number, buff: Buffer, stdout: stream.Writable | null, stderr: stream.Writable | null): V1Status | null;
    static handleStandardInput(ws: WebSocket, stdin: stream.Readable | any, streamNum?: number): boolean;
    static processData(data: string | Buffer, ws: WebSocket | null, createWS: () => Promise<WebSocket>, streamNum?: number, retryCount?: number): Promise<WebSocket | null>;
    static restartableHandleStandardInput(createWS: () => Promise<WebSocket>, stdin: stream.Readable | any, streamNum?: number, retryCount?: number): () => WebSocket | null;
    constructor(config: KubeConfig, socketFactory?: ((uri: string, opts: WebSocket.ClientOptions) => WebSocket) | undefined);
    /**
     * Connect to a web socket endpoint.
     * @param path The HTTP Path to connect to on the server.
     * @param textHandler Callback for text over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     * @param binaryHandler Callback for binary data over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     */
    connect(path: string, textHandler: ((text: string) => boolean) | null, binaryHandler: ((stream: number, buff: Buffer) => boolean) | null): Promise<WebSocket>;
}
