<script lang="ts">
	export let author: string = '';
	export let text: string = '';
	export let timestamp: number = Date.now();

	const date = new Date(timestamp).toDateString();
</script>

<article class="card">
	<div class="card-aside">
		<img src={`https://avatars.dicebear.com/api/initials/${author}.svg`} alt={author} />
	</div>
	<div class="card-main">
		<div class="card-head">
			<span>@{author}</span>
      <small class="card-date">{date}</small>
		</div>
		<div class="card-body">
			<p>{text}</p>
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
    padding: 2px 2px 4px
    margin-bottom: 8px

    @include screen(sm)
      padding: 5px 5px

    @include screen(lg)
      padding: 20px

    &-aside img
      width: 60px
      height: 60px
      border-radius: 50%
    
    &-main
      flex: 1
      padding-left: 18px

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
      @include font(xl)
      margin-bottom: 4px
</style>
