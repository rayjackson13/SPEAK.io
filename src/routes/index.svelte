<script lang="ts" context="module">
	import { dbUser, AuthType } from 'api/user';
	import Header from 'components/ui/Header.svelte';

	const user = (dbUser as AuthType).is;
	console.log('start', user);
</script>

<svelte:head>
	<title>Home | SPEAK.io</title>
</svelte:head>

<div class="page">
	<Header {user} />
	<main>
		<h3>Home Page</h3>
	</main>
</div>

<style lang="sass" scoped>
	@import 'vars'

	.page
		min-height: 100vh
		background-color: $gray-50

	main
		margin-top: $header-size
</style>
