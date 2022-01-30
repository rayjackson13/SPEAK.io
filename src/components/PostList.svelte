<script lang="ts">
  import type { PostType } from 'api/posts';
  import Post from './Post.svelte';

  export let posts: PostType[];
</script>

<div class="post-container">
  {#each posts as post}
    <Post author={post.author} text={post.text} timestamp={post.date} />
  {/each}
</div>

<style lang="sass" scoped>
  .post-container
    padding-top: 32px
</style>
