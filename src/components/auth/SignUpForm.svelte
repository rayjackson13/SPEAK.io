<script lang="ts">
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';

  import Icon from 'svelte-awesome';
  import { externalLink } from 'svelte-awesome/icons';

  import Button from 'components/ui/Button.svelte';
  import Dropzone from 'components/ui/Dropzone.svelte';
  import Input from 'components/ui/Input.svelte';
import { ValidationErrors } from 'constants/ValidationErrors';

  const { form, errors, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string()
        .required(ValidationErrors.UsernameEmpty)
        .min(6, ValidationErrors.UsernameShort),
      password: yup.string()
        .required(ValidationErrors.PasswordEmpty)
        .min(6, ValidationErrors.PasswordShort),
    }),
    onSubmit: values => {
      console.log('Submitting...', JSON.stringify(values))
    }
  })
</script>

<style lang="stylus" scoped>
  .form 
    max-width var(--auth-form-width)
</style>

<form 
  class="h-full xl:h-auto sm:mt-12 form bg-white sm:drop-shadow-2xl sm:rounded-2xl p-4 sm:p-8 pb-10 mb-4"
  on:submit|preventDefault={handleSubmit}
>
  <h3 class="mb-2 sm:mb-3 text-center text-xl sm:text-3xl text-gray-800 font-display">Welcome to <span class="text-violet-800">SPEAK</span>.io</h3>
  <p class="mb-4 sm:mb-8 text-center text-sm sm:text-base text-gray-600 font-display">
    We are the leading platform in the world of decentralized social networks.
    <a href="https://www.youtube.com/watch?v=J5x3OMXjgMc" target="_blank" class="underline underline-offset-2 text-pink-700">
      What does that mean?
      <Icon data={externalLink} scale={.8} />
    </a>
  </p>

  <Input 
    type="text" 
    name="username" 
    label="Username" 
    classes="mb-4" 
    handleChange={handleChange}
    bind:value={$form.username}
    errors={errors}
  />

  <Input
    type="password"
    name="password"
    label="Password"
    classes="mb-4"
    handleChange={handleChange}
    bind:value={$form.password}
    errors={errors}
  />

  <Dropzone classes="mb-8" label="Avatar (optional)" />

  <Button type="submit" text="Sign Up" />

  <div class="block mt-2 text-gray-700 text-right text-sm sm:text-base">
    Already have an account?
    <a 
      href="/sign-in"
      class="rounded-xl underline underline-offset-2 text-pink-700 hover:text-pink-800 active:text-pink-900 outline-violet-500 outline-offset-2"
    >
      Sign In.
  </a>
  </div>
</form>