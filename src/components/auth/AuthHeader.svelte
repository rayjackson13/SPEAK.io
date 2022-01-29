<script lang="ts">
	import LogoIcon from 'assets/logo.svg';
</script>

<div class="wrap">
	<img src={LogoIcon} alt="SPEAK.io Logo" />
	<span>SPEAK.io</span>
</div>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .wrap
    width: 100%
    height: 56px
    padding: 4px 16px
    display: flex
    align-items: center
    background-color: $gray-800

    @include screen(sm)
      height: 64px

    @include screen(xl)
      position: absolute
      left: 64px
      top: 32px
      width: auto
      height: auto
      background-color: transparent

  img
    position: absolute
    left: 16px
    width: 48px
    z-index: 1
    // filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))

    @include screen(sm)
      left: 64px
      width: 64px

    @include screen(xl)
      position: static
      left: auto
      width: 96px

  span
    display: block
    padding-left: 16px
    color: $white
    font-family: $nunito
    width: 100%
    text-align: center
    @include font(xl)

    @include screen(sm)
      @include font(xxl)
    
    @include screen(xl)
      visibility: hidden
</style>
