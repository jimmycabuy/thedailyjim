<script>
  import { onMount } from "svelte";
  import Spinner from "../../components/Spinner.svelte";
  import shop from "../../data/shop.json";

  let isLoading = true;

  onMount(() => {
    shop.sort((a, b) => a.price - b.price);
  });

  setTimeout(() => {
    isLoading = false;
  }, 1500);
</script>

<svelte:head>
  <title>thedailyjim | shop</title>
</svelte:head>

{#if isLoading}
  <Spinner />
{/if}

<div class:isLoading>
  <p class="paragraph_shop">
    Please note that the photos displayed in the shop below are the printed and
    framed photos currently in stock.
    <br />
    They represent a selection of available photos for sale, but they are not the
    only ones available.*
    <br />
  </p>
  <div class="auto-grid">
    {#each shop as photo, i}
      <a class="photo_link" href="/{photo.folder}/{photo.name}">
        <div class="box">
          <img
            src={`../../assets/${photo.folder}/${photo.name}.webp`}
            alt={photo.name}
            width="100%"
            height="100%"
            preload
          />
          <div class="box_name_price">
            <p>{photo.name}</p>
            <p>{photo.oldprice} €</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div class="box_demand">
    <p class="paragraph_demand">
      *All the photographs featured on my website can be printed and
      custom-framed upon request.
      <br />
      If you're interested in owning a physical copy of any image or would like more
      details, please don't hesitate to reach out to me.
      <br />
      I would be more than happy to provide you with further information and assist
      you in selecting the perfect print for your preferences.
    </p>
    <a
      class="addtocart"
      target="_blank"
      rel="noreferrer"
      href="https://wa.link/2vi05h"
      >WhatsApp
    </a>
  </div>
</div>

<style>
  .isLoading {
    display: none;
  }
  .auto-grid {
    --auto-grid-min-size: 21rem;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 2rem;
    padding: 1rem;
  }

  p {
    font-family: "bd-supper", sans-serif;
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
    padding: 0 1rem 0 1rem;
  }

  .paragraph_shop {
    text-align: center;
    padding: 0 1rem 1rem 1rem;
  }

  .paragraph_demand {
    text-align: center;
  }

  .addtocart {
    border: 2px solid #000;

    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 10rem;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    transition: 0.3s;
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
  }

  @media (width >= 768px) {
    .photo_link:hover {
      filter: brightness(50%);
    }
  }

  .box_name_price {
    display: flex;
    justify-content: space-between;
  }
</style>
