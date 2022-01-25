<svelte:head>
  <title>Home | SPEAK.io</title>
</svelte:head>

<script context="module">
  export async function load() {
    return {
      status: 302,
      redirect: "/sign-up"
    };
  }
</script>
