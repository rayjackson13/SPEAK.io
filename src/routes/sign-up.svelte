<svelte:head>
  <title>Sign Up | SPEAK.io</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</svelte:head>

<script>
  import { goto, prefetchRoutes } from '$app/navigation';
  import { onMount } from 'svelte';
  
  import AuthLogo from '../components/AuthLogo.svelte';
  import Background from '../components/Background.svelte';
  import SignUpForm from '../components/SignUpForm.svelte';

  import BackgroundImage from '../assets/signup-bg.jpeg';

  onMount(() => {
    prefetchRoutes(['sign-in']);
  });

  const onSignInPressed = () => {
    goto('sign-in')
  };
</script>

<style lang="stylus" scoped>
  .form-wrap 
    width: 60%
    height: 100%
</style>

<div class="bg-gray-100 page flex">
  <AuthLogo />

  <div class="justify-end flex flex-1">
    <div class="flex justify-center items-center form-wrap">
      <SignUpForm onSignInPressed={onSignInPressed} />
    </div>

    <Background image={BackgroundImage} />
  </div>
</div>