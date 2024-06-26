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
/**
 * Notice: I (Jamie Sinclair) have copied this code from the JPEG encode module
 * and modified it to decode PNG images.
 */
import type { InitInput, InitOutput as PngModule } from './codec/squoosh_png.d.ts';
export declare function init(moduleOrPath?: InitInput): Promise<PngModule>;
export default function decode(data: ArrayBuffer): Promise<ImageData>;
//# sourceMappingURL=decode.d.ts.map
