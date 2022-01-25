<script lang="ts">
  import clsx from 'clsx';

  export let image: string;
  export let classes: string | undefined = undefined;

  const rootClasses = clsx('safe', 'flex', classes);
</script>

<style lang="stylus" scoped>
  $gradient = linear-gradient(to right, #f3f4f600 50%, #f3f4f6ff 100%)
  $desktop = '(min-width 1280px)'

  .safe
    background-color #2e2e2e
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1

  .background
    width 100%
    height 100%
    background-size cover
    background-repeat no-repeat
    background-position center center
    background-image: var(--image);

    @media $desktop
      width 60%
      background-image $gradient, var(--image)
      background-position left center

  .background-side
    width 0
    height 100%
    background-color #f3f4f6
    opacity 0

    @media $desktop
      width 40%
      opacity 1
</style>

<div class={rootClasses}>
  <div
    class="background animate__animated animate__fadeIn"
    style="--image: url({image});"
  />
  <div class="background-side animate__animated animate__fadeIn"></div>
</div>