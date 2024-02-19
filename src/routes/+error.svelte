<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>thedailyjim | Error</title>
</svelte:head>

<main>
  <h1>{$page.status}</h1>
  <h1>Oops! Page not found</h1>
  <h4>Sorry, the page you are looking for does not exist.</h4>
  <button on:click={() => goto("/")}>Homepage</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    gap: 1rem;
  }
  button {
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    border: 2px solid black;
    padding: 0.5rem 2rem;
    border-radius: 10px;
    background: none;
    transition: 0.3s;
  }

  button:hover {
    background: #000;
    color: #fff;
  }
</style>
