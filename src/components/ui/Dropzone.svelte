
<script lang="ts">
  import UploadIcon from 'svelte-icons/io/IoIosCloudUpload.svelte';

  export let label: string;
  export let classes: string | undefined;
</script>

<div class="{classes}">
  <span class="block mb-2 text-gray-700 text-sm font-medium">
    {label}:
  </span>

  <span class="relative w-full border-dashed border-gray-400 border-2 h-12 sm:h-32 rounded-xl flex justify-center items-center focus-within:outline focus-within:outline-violet-500 focus-within:outline-2 hover:bg-gray-300">
    <input type="file" class="absolute w-full h-full cursor-pointer opacity-0">
    <i class="text-gray-800 w-6 sm:w-12">
      <UploadIcon />
    </i>
  
    <span class="block pl-1 sm:pl-4 text-gray-800 text-sm sm:text-base">Upload an image</span>
  </span>
</div>