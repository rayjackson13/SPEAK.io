/// <reference types="@sveltejs/kit" />
/// <reference types="vite-svg-loader" />

declare module '*.svg' {
  import type { SvelteComponent } from 'svelte';
  const content: SvelteComponent;
  export default content;
}

declare module '*.svg?component' {
  import type { SvelteComponent } from 'svelte';
  const content: SvelteComponent;
  export default content;
}

declare module '*.svg?src' {
  const content: string;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
