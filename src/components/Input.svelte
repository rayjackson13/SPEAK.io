<script lang="ts">
  export let type: 'text' | 'password';
  export let label: string;
  export let classes: string | undefined;
</script>

<div class="{classes}">
  <label class="block text-gray-700 text-sm font-medium">
    {label}:
    <input 
      class="mt-1 shadow appearance-none border-2 rounded-2xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none border-gray-400 focus:border-violet-500 text-lg" 
      placeholder={label}
      type={type}
    >
  </label>
</div>