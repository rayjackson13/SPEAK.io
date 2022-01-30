<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import clsx from 'clsx';

  export let type: 'text' | 'password';
  export let label: string;
  export let classes: string | undefined;
  export let value: string;
  export let name: string;
  export let handleChange: ((event: any) => any) | undefined;
  export let error: string | undefined;

  const getClass = (error: string | undefined) => {
    return clsx(!!error && 'input-error');
  };
</script>

<div class={classes}>
  <label>
    {label}:
    <input
      {name}
      class={getClass(error)}
      placeholder={label}
      {type}
      {value}
      on:change={handleChange}
    />
    {#if error}
      <small>{error}</small>
    {/if}
  </label>
</div>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  label
    display: block
    @include font(sm)
    color: $gray-700
    font-weight: 500

  input
    margin-top: 4px
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
    appearance: none
    border: 2px solid $gray-400
    border-radius: 16px
    width: 100%
    padding: 12px 16px
    color: $gray-800
    outline-offset: 2px

    @include screen(sm)
      @include font(lg)

    &:focus
      outline: 1px auto $primary-500

  .input-error
    border-color: $secondary-700

  small
    color: $secondary-700

</style>
