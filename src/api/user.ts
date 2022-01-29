/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
import http from 'http';
import GUN from 'gun';
import 'gun/sea.js';
import 'gun/axe.js';
import type { IGunChainReference } from 'gun/types/chain';
import { writable } from 'svelte/store';

export type APIException = {
  err: string;
};

export type UserType = {
  alias: string
}

export type AuthType = IGunChainReference<Record<string, any>, any, false> & {
  is: any;
}

export type Database = IGunChainReference<any, any, "pre_root"> & {
  on: (type: string, callback: () => void) => IGunChainReference<any, any, false>
}

// Initialize the database
export const db = GUN(['ws://localhost:3333']);

// Get current user with option to keep auth between browser sessions.
export const dbUser = db.user().recall({ sessionStorage: true });

export const username = writable('');

dbUser.get('alias').on(v => username.set(v));

(db as Database).on('auth', async() => {
  const alias = await dbUser.get('alias');
  // @ts-ignore
  username.set(alias);

  console.log(`signed in as ${alias}`);
});
