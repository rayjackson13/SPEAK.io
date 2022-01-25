<script lang="ts">
  import { beforeUpdate } from 'svelte';
  import clsx from 'clsx';

  export let type: 'text' | 'password';
  export let label: string;
  export let classes: string | undefined;
  export let value: string;
  export let name: string;
  export let handleChange: ((event: any) => any) | undefined;
  export let errors: any | undefined;
  
  const originalClass = 'mt-1 shadow appearance-none border-2 rounded-2xl w-full py-3 px-4 text-gray-800 leading-tight border-gray-400 focus:outline-violet-500 outline-offset-2 sm:text-lg';
  const getClass = () => {
    return clsx(originalClass, !!$errors[name] && 'border-pink-700');
  }

  let inputClass = getClass();
  beforeUpdate(() => { inputClass = getClass() })
</script>

<div class="{classes}">
  <label class="block text-gray-700 text-sm font-medium">
    {label}:
    <input
      name={name}
      class={inputClass}
      placeholder={label}
      type={type}
      value={value}
      on:change={handleChange}
    >
    {#if $errors[name]}
      <small class="text-pink-700">{$errors[name]}</small>
    {/if}
  </label>
</div>