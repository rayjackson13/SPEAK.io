<script>
	import { onMount } from 'svelte';
	import { prefetchRoutes } from '$app/navigation';
  
	import AuthHeader from 'components/auth/AuthHeader.svelte';
	import Background from 'components/ui/Background.svelte';
	import SignInForm from 'components/auth/SignInForm.svelte';

	import BackgroundImage from 'assets/login-bg.jpg';

	onMount(() => {
		prefetchRoutes(['sign-up']);
	});
</script>

<svelte:head>
	<title>Sign In | SPEAK.io</title>
</svelte:head>

<div class="page">
	<AuthHeader />

	<div class="page-inner">
		<div class="form-wrap">
			<SignInForm />
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
      justify-content: end
      flex: 1

  .form-wrap
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%

    @include screen(xl)
      width: 60%
</style>
