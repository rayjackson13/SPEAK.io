<script lang="ts" context="module">
	import Header from 'components/ui/Header.svelte';
	import CreatePost from 'components/CreatePost.svelte';
</script>

<svelte:head>
	<title>Home | SPEAK.io</title>
</svelte:head>

<div class="page">
	<Header title="Home" />
	<main>
		<CreatePost />
	</main>
</div>

<style lang="sass" scoped>
	@import 'functions'
	@import 'vars'

	.page
		min-height: 100vh
		background-color: $gray-50

	main
		padding: 16px 16px 0
		@include container

		@include screen(sm)
			padding-top: 32px

		@include screen(lg)
			padding-left: 116px
			padding-right: 116px
</style>
