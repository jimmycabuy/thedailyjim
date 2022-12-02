<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>thedailyjim | {status}</title>
</svelte:head>

<div>
  <h1>Oops...</h1>
  <h1>{status}</h1>
  <p>{error.message}</p>
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  h1, p {
    margin: 0 auto;
    font-family: bd-supper,sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 80vh;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
