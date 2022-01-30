/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import type { IGunChainReference } from "gun/types/chain";
import { writable } from "svelte/store";

import { db, suffix } from "api/db";

const dbPosts = db.get(`posts${suffix}`);

type PostType = {
  text: string;
  author: string;
  date: number;
  id?: string;
}

type PostStore = {
  [x: string]: PostType;
}

const createMapStore = (ref: IGunChainReference<any, any, false>) => {
  const { update, subscribe } = writable(<PostStore>{});
  ref.on((data, key) => {
    if (!data) {
      update(store => {
        // @ts-ignore
        delete store[key];
        return store;
      });
      return;
    }

    update(store => ({...store, [key]: data}));
  });

  return {
    subscribe,
    update: (key: string, value: PostType) => {
      return dbPosts.get(key).put(value);
    }
  };
};

const postsRef = dbPosts.map();
export const postStore = createMapStore(postsRef);
