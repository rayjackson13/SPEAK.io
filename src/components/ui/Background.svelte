<script lang="ts">
  import clsx from 'clsx';

  export let image: string;
  export let classes: string | undefined = undefined;
</script>

<div class={clsx('wrap', classes)}>
  <div class="background" style="--image: url({image});" />
  <div class="background-side" />
</div>

<style lang="sass" scoped>
  @import 'functions'

  $gradient: linear-gradient(to right, #f3f4f600 50%, #f3f4f6ff 100%)

  @keyframes fadeIn
    0% 
      opacity: 0
    100% 
      opacity:1

  .wrap
    background-color: #2e2e2e
    display: flex
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    visibility: hidden

    @include screen(sm)
      visibility: visible

  .background
    width: 100%
    height: 100%
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    background-image: var(--image)
    animation-name: fadeIn
    animation-fill-mode: both
    animation-duration: 1s

    @include screen(xl)
      width: 60%
      background-image: $gradient, var(--image)
      background-position: left center

  .background-side
    width: 0
    height: 100%
    background-color: #f3f4f6
    opacity: 0
    animation-name: fadeIn
    animation-fill-mode: both
    animation-duration: 1s

    @include screen(xl)
      width: 40%
      opacity: 1
</style>
