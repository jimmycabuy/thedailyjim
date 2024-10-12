<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";

  let carousel;
  export let carouselShopPhotos;
  export let folder;
</script>

{#if browser}
  <Carousel
    bind:this={carousel}
    autoplay
    autoplayDuration={10000}
    pauseOnFocus
    swiping={true}
  >
    {#each carouselShopPhotos as photo}
      <div class="image_carrousel_container">
        <img
          class="image_carousel"
          src={`../../../assets/${folder}/${photo}.webp`}
          alt={photo}
          preload
        />
      </div>
    {/each}
  </Carousel>
{/if}

<style>
  .image_carrousel_container {
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    justify-content: center;
    max-height: 70vh;
    margin: 1rem 0;
  }

  img {
    object-fit: contain;
    pointer-events: none;
    max-width: 100%;
    width: 100%;
  }
  @media (width >= 1030px) {
    :global(
        .sc-carousel__content-container
          .sc-carousel__arrow-container:first-child
      ) {
      margin-left: 7rem;
      padding: 0;
    }

    :global(
        .sc-carousel__content-container .sc-carousel__arrow-container:last-child
      ) {
      margin-right: 7rem;
      padding: 0;
    }
  }

  :global(.sc-carousel__arrow-container button) {
    background-color: white !important;
  }

  :global(.sc-carousel__arrow-container button:focus) {
    outline: none;
  }
</style>
