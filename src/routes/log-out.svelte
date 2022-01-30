<script lang="ts" context="module">
	import { dbUser } from 'api/user';
	export function load() {
	  dbUser.leave(undefined);

	  return {
	    redirect: '/sign-in',
	    status: 302
	  };
	}
</script>

<svelte:head>
	<title>Log out | SPEAK.io</title>
</svelte:head>
