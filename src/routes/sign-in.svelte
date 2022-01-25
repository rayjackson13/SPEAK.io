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
  
  import AuthLogo from '../components/AuthLogo.svelte';
  import Background from '../components/Background.svelte';
  import SignInForm from '../components/SignInForm.svelte';

  import BackgroundImage from '../assets/login-bg.jpg';

  onMount(() => {
    prefetchRoutes(['sign-up']);
  });

  const onSignUpPressed = () => {
    goto('sign-up')
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
      <SignInForm onSignUpPressed={onSignUpPressed} />
    </div>

    <Background image={BackgroundImage} />
  </div>
</div>