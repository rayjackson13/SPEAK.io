<script>
	import { beforeUpdate, onMount } from 'svelte';
	import { goto, prefetchRoutes } from '$app/navigation';

	import { username } from 'api/user';
	import AuthForm from 'components/AuthForm.svelte';
	import Background from 'components/ui/Background.svelte';
	import Header from 'components/ui/Header.svelte';

	import BackgroundImage from 'assets/signup-bg.jpeg';

	const checkAuth = () => !!$username && goto('/');

	onMount(() => {
	  prefetchRoutes(['sign-in', '/']);
	  checkAuth();
	});

	beforeUpdate(() => {
	  checkAuth();
	});
</script>

<svelte:head>
	<title>Sign Up | SPEAK.io</title>
</svelte:head>

<div class="page">
	<Header title="SPEAK.io" blur shadow />

	<div class="page-inner">
		<div class="form-wrap">
			<AuthForm mode="sign-up" />
		</div>

		<Background image={BackgroundImage} />
	</div>
</div>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .page
    background-color: $white
    display: flex
    flex-direction: column
    min-height: 100vh
    position: relative
    z-index: 0

    @include screen(sm)
      background-color: $gray-100

    @include screen(xl)
      flex-direction: row

    &-inner
      display: flex
      flex: 1
      justify-content: center
      @include container

      @include screen(xl)
        justify-content: flex-end

  .form-wrap
    display: flex
    justify-content: center
    align-items: flex-start
    
    @include screen(xl)
      align-items: center
</style>
