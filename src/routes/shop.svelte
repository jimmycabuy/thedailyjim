<script>
  import { onMount } from "svelte";
  import Spinner from "../components/Spinner.svelte";

  let category = "shop";
  let isLoading = true;

  let allPhotosJSON = [];

  onMount(async () => {
    const apiResponse = await fetch("shop.json");
    allPhotosJSON = await apiResponse.json();
    allPhotosJSON.sort((a, b) => {
      const nameA = a.price;
      const nameB = b.price;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
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
      <a class="photo_link" href="/{photo.folder}/{photo.name}">
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
            <!-- remove this paragraph when sales are over -->
            <p style="color: tomato;">SALES</p>
            <!-- remove this paragraph when sales are over -->
            <p style="color: tomato;">40% off</p>
            <!-- remove this paragraph when sales are over -->
            <p style="color: tomato;">{photo.price * 0.6} €</p>
            <!-- remove the style when sales are over -->
            <p style="text-decoration: line-through;">{photo.price} €</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div class="box_demand">
    <p class="paragraph_demand">
      All the pictures on my website can be printed and framed on demand. <br />
      Do not hesitate to contact me for more information.
    </p>
    <a
      class="addtocart"
      target="_blank"
      rel="noreferrer"
      href="https://wa.link/2vi05h"
      >WhatsApp
    </a>
    <!-- href="https://wa.link/lkyiri" -->
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
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .box_demand {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 1rem 0;
    gap: 1.5rem;
  }

  .paragraph_demand {
    text-align: center;
  }

  .addtocart {
    border: 2px solid #000;
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 10rem;
  }
  .addtocart:hover {
    color: #fff;
    background-color: #000;
  }

  .photo_link {
    transition: 0.3s ease;
  }

  .photo_link:hover {
    cursor: pointer;
    filter: brightness(50%);
  }
  .box_name_price {
    display: flex;
    justify-content: space-between;
  }
</style>
