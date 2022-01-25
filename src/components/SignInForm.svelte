<script>
  import Icon from 'svelte-awesome';
  import { externalLink } from 'svelte-awesome/icons';
  import Button from './Button.svelte';
  import Input from './Input.svelte';

  export let onSignUpPressed;
</script>

<style lang="stylus" scoped>
  .form 
    max-width var(--auth-form-width)
</style>

<form class="form bg-white drop-shadow-2xl rounded-2xl p-8 pb-10 mb-4">
  <h3 class="mb-3 text-center text-3xl text-gray-800 font-display">Welcome to <span class="text-violet-800">SPEAK</span>.io</h3>
  <p class="mb-8 text-center text-md text-gray-600 font-display">
    We are the leading platform in the world of decentralized social networks.
    <a href="https://www.youtube.com/watch?v=J5x3OMXjgMc" target="_blank" class="underline underline-offset-2 text-pink-700">
      What does that mean?
      <Icon data={externalLink} scale={.8} />
    </a>
  </p>
  <Input type="text" label="Username" classes="mb-4" />
  <Input type="password" label="Password" classes="mb-8" />

  <Button type="button" text="Sign In" />
  <div class="block mt-2 text-gray-700 text-right">
    Don't have an account yet?
    <button 
      type="text"
      class="underline underline-offset-2 text-pink-700 hover:text-pink-800 active:text-pink-900"
      on:click="{onSignUpPressed}"
    >
      Create one.
    </button>
  </div>
</form>