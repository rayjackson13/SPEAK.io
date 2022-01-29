<script lang="ts">
	import type { PostType } from 'api/posts';
	import Post from './Post.svelte';

  export let posts: SvelteStore<PostType[]>;
</script>

<div class="post-container">
	{#each $posts as post}
		<Post {...post} />
	{/each}
</div>

<style lang="sass" scoped>
  .post-container
    padding-top: 32px
</style>
