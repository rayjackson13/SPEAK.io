<script lang="ts">
  import { formatDistance } from 'date-fns';

  export let author = '';
  export let text = '';
  export let timestamp: number = Date.now();
  const purifyText = (text: string) => {
    if (!text) return '';
    return text.replace(/[\\]+n/gi, '\n');
  };

  const getReadableDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return formatDistance(date, new Date(), { addSuffix: true });
  };
</script>

<article class="card">
  <div class="card-aside">
    <img src={`https://avatars.dicebear.com/api/initials/${author}.svg`} alt={author} />
  </div>
  <div class="card-main">
    <div class="card-head">
      <span>@{author}</span>
      <small class="card-date">{getReadableDate(timestamp)}</small>
    </div>
    <div class="card-body">
      <p>
        {purifyText(text)}
      </p>
    </div>
  </div>
</article>

<style lang="sass" scoped>
  @import 'functions'
  @import 'vars'

  .card
    display: flex
    border-radius: 16px
    box-shadow: 0 4px 12px rgb(0 0 0 / .12)
    padding: 5px
    padding-left: 18px
    margin-bottom: 8px

    @include screen(lg)
      padding: 20px

    &-aside img
      width: 36px
      height: 36px
      border-radius: 50%
    
      @include screen(lg)
        width: 60px
        height: 60px

    &-main
      flex: 1
      padding-left: 12px
      max-width: calc(100% - 48px)

      @include screen(lg)
        padding-left: 18px
        max-width: calc(100% - 78px)

    &-head
      display: flex
      justify-content: space-between
      margin-bottom: 4px

      span
        display: block
        @include font(lg)
        color: $primary-800

    &-date
      text-align: right
      width: 100%
      @include font(sm)
      color: $gray-500

    &-body p
      @include font(lg)
      margin-bottom: 4px
      width: 100%
      height: 100%
      white-space: pre-wrap
      word-break: break-word

      @include screen(lg)
        @include font(xl)

      & :global(*)
        max-width: 100%
</style>
