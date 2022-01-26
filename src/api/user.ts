/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import type { IGunChainReference } from 'gun/types/chain';

export type APIException = {
  err: string;
};

export type UserType = {
  alias: string
}

export type AuthType = IGunChainReference<Record<string, any>, any, false> & {
  is: any;
}

// Initialize the database
export const db = GUN();

// Get current user with option to keep auth between browser sessions.
export const dbUser = db.user().recall({ sessionStorage: true });

export const username = writable('');

dbUser.get('alias').on(v => username.set(v));
