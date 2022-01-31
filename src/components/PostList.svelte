<script lang="ts">
  import type { PostType } from 'stores/posts';
  import Post from './Post.svelte';

  export let posts: PostType[];
</script>

<div class="post-container">
  {#if !posts || !posts.length}
    <p>Loading...</p>
  {/if}

  {#each posts as post}
    <Post author={post.author} text={post.text} timestamp={post.date} />
  {/each}
</div>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .post-container
    padding-top: 32px

    & p
      width: 100%
      text-align: center
      color: $gray-600
      @include font(md)
</style>
