<script lang="ts">
	import { writable } from 'svelte/store';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { goto } from '$app/navigation';

	import Icon from 'svelte-awesome';
	import ExternalLinkIcon from 'svelte-awesome/icons/external-link';

	import { dbUser, APIException } from 'api/user';
	import Button from 'components/ui/Button.svelte';
	import Input from 'components/ui/Input.svelte';
	import { ValidationErrors } from 'constants/ValidationErrors';

	export let mode: 'sign-in' | 'sign-up' = 'sign-in';

	const apiError = writable<string | undefined>();
	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			username: yup
				.string()
				.min(6, ValidationErrors.UsernameShort)
				.required(ValidationErrors.UsernameEmpty),
			password: yup
				.string()
				.min(6, ValidationErrors.PasswordShort)
				.required(ValidationErrors.PasswordEmpty)
		}),
		onSubmit: (values) => {
			const { username, password } = values;

			if (mode === 'sign-in') {
				dbUser.auth(username, password, (e) => {
					const { err } = e as APIException;
					if (err) {
						apiError.set(err);
						return;
					}

					goto('/');
				});
				return;
			}

			dbUser.create(username, password, (e) => {
				const { err } = e as APIException;
				if (err) {
					apiError.set(err);
					return;
				}

				dbUser.auth(username, password);
				goto('/');
			});
		}
	});
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h3 class="title">Welcome to <span class="title-accent">SPEAK</span>.io</h3>
	<p class="info">
		We are the leading platform in the world of decentralized social networks.
		<a href="https://www.youtube.com/watch?v=J5x3OMXjgMc" class="info-link" target="_blank">
			What does that mean?
			<Icon data={ExternalLinkIcon} scale={0.8} />
		</a>
	</p>

	<Input
		type="text"
		name="username"
		label="Username"
		classes="input"
		{handleChange}
		bind:value={$form.username}
		error={$errors.username}
	/>

	<Input
		type="password"
		name="password"
		label="Password"
		classes="input"
		{handleChange}
		bind:value={$form.password}
		error={$errors.password}
	/>

	<div class="errorHolder">
		{#if $apiError}
			<small>{$apiError}</small>
		{/if}
	</div>

	<Button type="submit" text={mode === 'sign-in' ? 'Sign In' : 'Sign Up'} />

	<div class="no-account">
		{#if mode === 'sign-in'}
			Don't have an account yet?
			<a href="/sign-up" class="no-account__link">Create one.</a>
		{:else}
			Already have an account?
			<a href="/sign-in" class="no-account__link"> Sign In.</a>
		{/if}
	</div>
</form>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  form
    max-width: $auth-form-width
    background-color: $white
    width: 100%
    padding: 16px 16px 40px
    margin-bottom: 16px

    @include screen(sm)
      margin-top: 64px
      border-radius: 16px
      padding: 32px 32px 40px
      box-shadow: 0 4px 12px rgb(0 0 0 / 25%)

    @include screen(xl)
      height: auto

  .title
    @include font(lg)
    margin-bottom: 8px
    text-align: center
    font-family: $nunito
    color: $gray-800

    @include screen(sm)
      @include font(xxl)
      margin-bottom: 12px

    &-accent
      color: $primary-800

  .info
    @include font(sm)
    font-family: $nunito
    text-align: center
    color: $gray-600
    margin-bottom: 16px

    @include screen(sm)
      @include font(md)
      margin-bottom: 32px

    &-link
      text-decoration: underline
      text-underline-offset: 2px
      color: $secondary-700

  * :global(.input)
    margin-bottom: 16px

  .errorHolder
    padding-bottom: 16px
    
    & small
      display: block
      text-align: center
      color: $secondary-700
      width: 100%
      padding-top: 8px

  .no-account
    display: block
    @include font(sm)
    margin-top: 8px
    color: $gray-700
    text-align: right

    @include screen(sm)
      @include font(md)

    &__link
      border-radius: 12px
      text-decoration: underline
      text-underline-offset: 2px
      color: $secondary-700
      outline-offset: 2px
      outline-color: $primary-500

      &:hover
        color: $secondary-800

      &:active
        color: $secondary-900
</style>
