import GUN from 'gun';
import 'gun/sea.js';
import 'gun/axe.js';

export const db = GUN({
  peers: <string[]>[import.meta.env.VITE_RELAY_HOST],
});