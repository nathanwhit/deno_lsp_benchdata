/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
declare type WorkerResizeMethods = 'triangle' | 'catrom' | 'mitchell' | 'lanczos3' | 'hqx';
export declare const workerResizeMethods: WorkerResizeMethods[];
export declare type Options = WorkerResizeOptions | VectorResizeOptions;
export interface ResizeOptionsCommon {
    width: number;
    height: number;
    fitMethod: 'stretch' | 'contain';
}
export interface WorkerResizeOptions extends ResizeOptionsCommon {
    method: WorkerResizeMethods;
    premultiply: boolean;
    linearRGB: boolean;
}
export interface VectorResizeOptions extends ResizeOptionsCommon {
    method: 'vector';
}
export declare const defaultOptions: Options;
export {};
//# sourceMappingURL=meta.d.ts.map
