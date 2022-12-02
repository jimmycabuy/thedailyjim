<script>
  import { onMount } from "svelte";
  import Spinner from "../components/Spinner.svelte";

  let category = "shop";
  let isLoading = true;

  let allPhotosJSON = [];

  onMount(async () => {
    const apiResponse = await fetch("shop.json");
    allPhotosJSON = await apiResponse.json();
    return () => console.log("Destroyed");
  });

  setTimeout(() => {
    isLoading = false;
  }, 500);
</script>

<svelte:head>
  <title>thedailyjim | {category}</title>
</svelte:head>

{#if isLoading}
  <Spinner />
{:else}
  <div class="auto-grid">
    {#each allPhotosJSON as photo, i}
      <a href="/{photo.folder}/{photo.name}">
        <div class="box">
          <img
            src={`../../img/${photo.folder}/${photo.name}.webp`}
            alt={photo.name}
            width="100%"
            height="100%"
            loading="lazy"
          />
          <div class="box_name_price">
            <p>{photo.name}</p>
            <p>{photo.price} €</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
{/if}

<style>
  .auto-grid {
    --auto-grid-min-size: 21rem;

    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 2rem;
    padding: 1rem;
  }

  p {
    font-family: bd-supper,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    transition: 0.3s ease;
  }

  a:hover {
    cursor: pointer;
    filter: brightness(50%);
  }
  .box_name_price {
    display: flex;
    justify-content: space-between;
  }
</style>
