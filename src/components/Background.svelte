<script lang="ts">
  export let image: string 
</script>

<style lang="stylus" scoped>
  .safe
    background-color #2e2e2e
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1

  .background
    width 60%
    height 100%
    background-size cover
    background-repeat no-repeat
    background-position center center

  .background-side
    width 40%
    height 100%
    background-color #f3f4f6
</style>

<div class="safe flex">
  <div
    class="background animate__animated animate__fadeIn"
    style="background-image: linear-gradient(to right, #f3f4f600 50%, #f3f4f6ff 100%), url({image});"
  />
  <div class="background-side animate__animated animate__fadeIn"></div>
</div>