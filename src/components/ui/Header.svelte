<script lang="ts">
	import clsx from 'clsx';

	import type { UserType } from 'api/user';
	import MenuIcon from 'svelte-icons/go/GoKebabVertical.svelte';
	import LogoIcon from 'assets/logo2.svg';

	export let user: UserType | undefined = undefined;

	let isMenuOpened = false;
	const onMenuClick = () => (isMenuOpened = !isMenuOpened);
	const closeMenu = () => (isMenuOpened = false);
</script>

<header>
	<div class="container">
		<div class="logo">
			<a href="/">
				<img src={LogoIcon} alt="SPEAK.io Logo" />
			</a>
		</div>
		<div class="center">
			<h1>Home</h1>
		</div>
		<div class="menu">
			<button type="button" class="menu-button" on:click={onMenuClick} on:focusout={closeMenu}>
				{#if !user}
					<MenuIcon />
				{:else}
					<button>Hi</button>
				{/if}

				<div class={clsx('menu-inner', !isMenuOpened && 'menu-inner_hidden')}>
					{#if !user}
						<a href="/sign-up">Sign Up</a>
						<a href="/sign-in">Log In</a>
					{:else}
						<a href="/log-out">Log Out</a>
					{/if}
				</div>
			</button>
		</div>
	</div>
</header>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    max-height: $header-size
    display: flex
    flex-direction: column
    justify-content: center
  
  .container
    background-color: $white
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 100%
    padding: 8px 16px
    align-items: center

    & > *
      max-height: 100%

  .logo
    display: block
    padding-left: 4px

    & a
      display: flex
      align-items: center
      height: 100%

    & img
      height: 36px
      width: 36px

  .center
    text-align: center
    @include font(lg)
    font-weight: 500

  .menu
    display: flex
    justify-content: end
    overflow: visible

    &-inner
      position: absolute
      top: calc(100% + 8px)
      left: calc(100% + 16px)
      border-radius: 8px
      padding: 8px
      background-color: $white
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
      min-width: 240px
      transition: transform .25s ease-in-out
      transform: translateX(calc(-100% - 32px))

      &_hidden
        transform: none

      & a
        display: block
        padding: 8px 10px
        @include font(md)
        color: $secondary-700
        text-underline-offset: 2px

    &-button
      height: 100%
      display: flex
      align-items: center
      width: 48px
      height: 48px
      background-image: none
      background-color: transparent

      & :global(svg)
        height: 24px
</style>
