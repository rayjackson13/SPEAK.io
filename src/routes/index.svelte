<script lang="ts">
	import { onMount, beforeUpdate } from 'svelte';

	import { username } from 'api/user';
	import { create } from 'api/posts';
	import Header from 'components/ui/Header.svelte';
	import CreatePost from 'components/CreatePost.svelte';
	import PostList from 'components/PostList.svelte';
import { postStore } from 'stores/posts';

	const getPosts = () => {
		return Object.entries($postStore)
			.sort((a, b) => b[1].date - a[1].date)
			.map((val) => val[1]);
	};

	$: posts = getPosts();

	onMount(() => {
		posts = getPosts();
	});

	beforeUpdate(() => {
		posts = getPosts();
	});

	const onCreatePost = async (text: string) => {
		postStore.update(Date.now().toString(), {
			author: $username,
			text,
			date: Date.now()
		});
	};
</script>

<svelte:head>
	<title>Home | SPEAK.io</title>
</svelte:head>

<div class="page">
	<Header title="Home" />
	<main>
		<CreatePost {onCreatePost} />
		<PostList {posts} />
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
