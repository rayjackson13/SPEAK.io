<script lang="ts" context="module">
  import type { LoadOutput } from '@sveltejs/kit';
  import { dbUser } from 'api/user';

  export function load(): LoadOutput {
    dbUser.leave();

    return {
      redirect: '/sign-in',
      status: 302
    };
  }
</script>

<svelte:head>
  <title>Log out | SPEAK.io</title>
</svelte:head>
