// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

import type { LoadResponse } from "./deps.ts";
import type { CacheSetting, FileFetcher } from "./file_fetcher.ts";

/** Provides an interface to Deno's CLI cache.
 *
 * It is better to use the {@linkcode createCache} function directly. */
export class FetchCacher {
  #fileFetcher: FileFetcher;

  constructor(fileFetcher: FileFetcher) {
    this.#fileFetcher = fileFetcher;
  }

  // this should have the same interface as deno_graph's loader
  load = (
    specifier: string,
    _isDynamic?: boolean,
    cacheSetting?: CacheSetting,
  ): Promise<LoadResponse | undefined> => {
    const url = new URL(specifier);
    return this.#fileFetcher.fetch(url, { cacheSetting });
  };
}
