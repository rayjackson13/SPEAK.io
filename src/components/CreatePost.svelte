<script lang="ts">
	import { createPost } from 'api/posts';
	import { username } from 'api/user';

	import { onMount } from 'svelte';
	import { createForm } from 'svelte-forms-lib';

	import PostIcon from 'svelte-icons/io/IoIosSend.svelte';

  export let onCreatePost: (text: string) => void;
	let textarea: HTMLTextAreaElement;

	const { form, handleSubmit, handleChange, handleReset } = createForm({
		initialValues: {
			text: ''
		},
		onSubmit: async ({ text }) => {
			if (!text.trim() || !$username) return;

			onCreatePost(text);
			handleReset();
		}
	});

	onMount(async () => {
		textarea.addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key.toLowerCase() === 'enter' && e.metaKey) handleSubmit(e);
		});
	});
</script>

<form on:submit={handleSubmit}>
	<textarea
		name="text"
		bind:this={textarea}
		bind:value={$form.text}
		placeholder="Got something on your mind? Speak 😄"
		on:change={handleChange}
	/>
	<div class="options">
		<p class="helper-block">
			<span><strong>Enter</strong> inserts a new line.</span>
			<br />
			<span>Press <strong>Ctrl+Enter (⌘+Enter)</strong> to submit.</span>
		</p>
		<button class="submit" type="submit">Post <PostIcon /></button>
	</div>
</form>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  form
    background-color: $gray-400
    background-image: linear-gradient(111.23deg, #7D31DE 0%, #E97911 100%)
    border-radius: 16px
    box-shadow: 0 4px 12px rgb(0 0 0 / .25)
    padding: 2px 2px 4px

    @include screen(sm)
      padding: 5px 5px

    @include screen(lg)
      padding: 20px

  textarea
    width: 100%
    resize: none
    border-radius: 14px
    padding: 5px 10px 20px
    margin-bottom: 12px
    border: 0
    box-shadow: 0 2px 4px rgb(0 0 0 / .12)
    @include font(lg)
    font-family: $nunito
    background-color: #f6f9ff

    &:focus
      outline-color: $primary-800
      outline-offset: 2px
      border: 0
    
    @include screen(lg)
      padding: 10px 20px
      border-radius: 12px

  .options
    display: flex
    align-items: center
    justify-content: flex-end

    @include screen(md)
      justify-content: space-between

    @include touch
      justify-content: flex-end

  .submit
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    @include font(md)
    border-radius: 14px
    background-color: $white
    color: $secondary-700
    box-shadow: 0 2px 4px rgb(0 0 0 / .12)
    padding: 10px 20px
    border: 2px solid $white
    width: 100%

    & :global(svg)
      margin-left: 4px
      width: 24px
      height: 24px

    &:hover
      color: $secondary-800
      border-color: $secondary-800
      box-shadow: 0 2px 4px rgb(0 0 0 / .25)

    &:active
      color: $secondary-900
      border-color: $secondary-900
      background-color: $gray-300

    @include screen(sm)
      width: auto

  .helper-block
    @include font(sm)
    color: $gray-200
    display: none

    @include screen(md)
      display: block

    // Hide on touch devices.
    @include touch
      display: none
</style>
