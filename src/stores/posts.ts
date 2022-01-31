/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import type { IGunChainReference } from "gun/types/chain";
import { writable } from "svelte/store";

import { db, suffix } from "api/db";
import gun from "gun";

const dbPosts = db.get(`posts${suffix}`);
const SECRET = import.meta.env.VITE_POST_SECRET;

export type PostType = {
  text: string;
  author: string;
  date: number;
  id?: string;
}

type PostStore = {
  [x: string]: PostType;
}

const encryptPost = async (post: PostType) => {
  const text = await gun.SEA.encrypt(post.text, <string>SECRET);
  return { ...post, text };
};

const decryptPost = async (post: PostType) => {
  const text = await gun.SEA.decrypt(post.text, <string>SECRET);
  return { ...post, text };
};

const createMapStore = (ref: IGunChainReference<any, any, false>) => {
  const { update, subscribe } = writable(<PostStore>{});
  ref.on(async (data, key) => {
    if (!data) {
      update(store => {
        // @ts-ignore
        delete store[key];
        return store;
      });
      return;
    }

    const post = await decryptPost(data);
    update(store => ({...store, [key]: post}));
  });

  return {
    subscribe,
    update: async (key: string, post: PostType) => {
      const encrypted = await encryptPost(post);
      return dbPosts.get(key).put(encrypted);
    }
  };
};

const postsRef = dbPosts.map();
export const postStore = createMapStore(postsRef);
