<script lang="ts">
  export let type: 'button' | 'submit';
  export let text: string | undefined;
</script>

<button {type}>{text}</button>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  button
    background-color: $primary-700
    width: 100%
    padding-top: 12px
    padding-bottom: 12px
    border-radius: 12px
    color: $white
    @include font(sm)

    @include screen(sm)
      @include font(lg)

    &:hover
      background-color: $primary-800

    &:active
      background-color: $primary-900

    &:focus
      outline-color: $primary-500
      outline-offset: 2px
</style>
