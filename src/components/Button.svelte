<script lang="ts">
  export let type: 'button' | 'submit';
  export let text: string | undefined;
</script>

<button
  type={type}
  class="bg-violet-700 hover:bg-violet-800 active:bg-violet-900 w-full py-3 rounded-xl text-white"
>
  {text}
</button>
