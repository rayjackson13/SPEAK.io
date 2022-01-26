<script lang="ts">
	import UploadIcon from 'svelte-icons/io/IoIosCloudUpload.svelte';

	export let label: string;
	export let classes: string | undefined;
</script>

<div class={classes}>
	<span class="label">{label}:</span>

	<span class="wrap">
		<input type="file" />
		<i class="icon">
			<UploadIcon />
		</i>

		<span class="text">Upload an image</span>
	</span>
</div>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .label
    display: block
    @include font(sm)
    color: $gray-700
    font-weight: 500
    margin-bottom: 4px

  .wrap
    position: relative
    width: 100%
    border-style: dashed
    border-color: $gray-400
    border-width: 2px
    height: 48px
    border-radius: 12px
    display: flex
    justify-content: center
    align-items: center

    &:hover
      background-color: $gray-200

    &:active
      background-color: $gray-400

    &:focus-within
      outline: auto
      outline-width: 1px
      outline-color: $primary-500
      outline-offset: 2px

    @include screen(sm)
      height: 128px
  
  input
    position: absolute
    width: 100%
    height: 100%
    cursor: pointer
    opacity: 0

  .icon
    color: $gray-800
    width: 24px

    @include screen(sm)
      width: 48px

  .text
    display: block
    @include font(sm)
    color: $gray-800
    padding-left: 4px

    @include screen(sm)
      @include font(md)
      padding-left: 16px
</style>
