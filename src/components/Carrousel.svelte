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
    max-width: 80vw;
  }
</style>
