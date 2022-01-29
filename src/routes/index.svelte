<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import { username } from 'api/user';
	import { createPost, loadPosts, PostType } from 'api/posts';
	import Header from 'components/ui/Header.svelte';
	import CreatePost from 'components/CreatePost.svelte';
	import PostList from 'components/PostList.svelte';

	const posts = writable<PostType[]>([]);

	onMount(async () => {
		posts.set(await loadPosts());
		console.log(await loadPosts());
	});

	const onCreatePost = async (text: string) => {
		await createPost({
			author: $username,
			text,
			date: Date.now()
		});

		setTimeout(async () => {
			const _posts = await loadPosts();
			console.log('loaded', _posts);
			posts.set(_posts);
		}, 1000);
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
