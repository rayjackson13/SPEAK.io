<svelte:head>
  <title>Sign In | SPEAK.io</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</svelte:head>

<script>
  import { goto, prefetchRoutes } from '$app/navigation';
  import { onMount } from 'svelte';
  
  import AuthHeader from 'components/auth/AuthHeader.svelte';
  import Background from 'components/ui/Background.svelte';
  import SignInForm from 'components/auth/SignInForm.svelte';

  import BackgroundImage from 'assets/login-bg.jpg';

  onMount(() => {
    prefetchRoutes(['sign-up']);
  });
</script>

<style lang="stylus" scoped>
  // Using 1280px as a workaround since stylus ignores `@screen sm` directive
  $desktop = '(min-width 1280px)'
  .form-wrap 
    width 100%
    height 100%

    @media $desktop
      width 60%
</style>

<div class="bg-white sm:bg-gray-100 page flex flex-col xl:flex-row">
  <AuthHeader />

  <div class="justify-end flex flex-1">
    <div class="flex justify-center items-center form-wrap">
      <SignInForm />
    </div>

    <Background image={BackgroundImage} classes="invisible sm:visible" />
  </div>
</div>