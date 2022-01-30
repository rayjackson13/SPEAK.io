/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IGunChainReference } from 'gun/types/chain';
import { db } from './db';

export type PostType = {
  text: string;
  author: string;
  date: number;
  id?: string;
}

export type PostStore = {
  [x: string]: PostType;
}

export const createPost = async (post: PostType): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.get('posts').set(post, ({ err }) => {
      if (err) {
        console.error(err);
        reject(err);
      }
        
      resolve();
    });
    resolve();
  });
};

export const create = (post: PostType): IGunChainReference<any, number, false> => {
  return db.get('posts').get(post.date).put(post);
}

export let store: PostStore = {};
db.get('posts').map().on((post, key) => {
  if (!post){
    delete store[key];
    /* eslint-disable-next-line */
    store = store
    return;
  }

  store = { ...store, [key]: { ...post } };
});