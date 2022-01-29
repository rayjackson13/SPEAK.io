<script lang="ts">
	import clsx from 'clsx';

	import { username } from 'api/user';
	import MenuIcon from 'svelte-icons/go/GoKebabVertical.svelte';
	import LogoIcon from 'assets/logo.svg';

	let isMenuOpened = false;

	const onMenuClick = (e: Event) => {
		const target = e.target as HTMLElement;
		const parent = target.parentElement;
		if (target.classList.contains('menu-inner') || parent?.classList.contains('menu-inner')) return;
		isMenuOpened = !isMenuOpened;
	};

	const closeMenu = (e: FocusEvent) => {
		const target = e.relatedTarget as HTMLElement;
    if (target.tagName.toLowerCase() === 'a') return;

    isMenuOpened = false;
  }

	export let title: string;
	export let fixed: boolean = false;
	export let blur: boolean = false;
	export let shadow: boolean = false;
</script>

<header
	class={clsx({
		header: true,
		'header-fixed': fixed,
		'header-blur': blur,
		'header-shadow': shadow
	})}
>
	<div class="container">
		<div class="logo">
			<a href="/">
				<img src={LogoIcon} alt="SPEAK.io Logo" />
			</a>
		</div>
		<div class="center">
			<h1>{title}</h1>
		</div>
		<div class="menu">
			<button type="button" class="menu-button" on:click={onMenuClick} on:focusout={closeMenu}>
				{#if !$username}
					<MenuIcon />
				{:else}
					<img src="https://avatars.dicebear.com/api/initials/${$username}.svg" alt={$username} />
				{/if}

				<div
					class={clsx({
						'menu-inner': true,
						'menu-inner_hidden': !isMenuOpened
					})}
				>
					{#if !$username}
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

{#if !fixed}
	<div class="space-taker" />
{/if}

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    max-height: $header-size
    display: flex
    flex-direction: column
    justify-content: center
    background-color: $gray-50

    @include screen(lg)
      max-height: $header-size-lg
      padding-top: calc($header-size-lg - $header-size)

    &-blur
      background-color: transparent
      backdrop-filter: blur(10px)

    &-shadow
      box-shadow: 0px 2px 4px rgba(0, 0, 0, .25)
  
  .container
    position: relative
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: 100%
    padding: 8px 16px
    align-items: center
    @include container

    @include screen(sm)
      grid-template-columns: 100px 1fr 100px

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
      height: 48px
      width: 48px

  .center
    text-align: center
    @include font(lg)
    font-weight: 500

    @include screen(sm)
      @include font(xl)
      text-align: left

  .menu
    display: flex
    justify-content: end
    overflow: visible

    &-inner
      position: absolute
      top: calc(100% + 16px)
      right: 0
      border-radius: 8px
      padding: 8px
      background-color: $white
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
      min-width: 240px
      transition: all .25s ease-in-out
      transform: none
      opacity: 1
      z-index: 10
      cursor: default

      &_hidden
        transform: translateY(calc(-100% - 16px))
        opacity: 0
        z-index: -1

      & a
        cursor: pointer
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
      padding: 0
      cursor: pointer

      & :global(svg)
        height: 24px

      & img
        border-radius: 50%

  .space-taker
    height: $header-size

    @include screen(lg)
      height: $header-size-lg
</style>
