<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let carouselShopPhotos, indexCarousel, folder;
</script>

<div class="block_carousel">
  <div class="block_image_carousel">
    <button on:click={() => dispatch("previousCarrousel")} class="btn_carrou">
      <svg
        width="25"
        height="25"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z"
        />
      </svg>
    </button>
    {#each [carouselShopPhotos[indexCarousel]] as photo}
      <div class="block_image">
        <img
          class="image_carousel"
          src={`../../../assets/${folder}/${photo}.webp`}
          alt={photo}
          preload
        />
      </div>
    {/each}
    <button on:click={() => dispatch("nextCarrousel")} class="btn_carrou">
      <svg
        width="25"
        height="25"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z"
        />
      </svg>
    </button>
  </div>
</div>

<style>
  img {
    max-height: 80vh;
    object-fit: contain;
    pointer-events: none;
  }
  .block_carousel {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  .block_image_carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    gap: 0.5rem;
  }
  .btn_carrou {
    border: none;
    background: none;
  }
  .btn_carrou:hover {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }

  @media (max-width: 767px) {
    .image_carousel {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
    }
    .block_carousel {
      height: 60vh;
      align-items: center;
      display: flex;
      justify-content: center;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    .image_carousel {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
    }
  }
  /* tablet portrait  */
  @media (min-width: 767px) and (max-width: 1023px) and (orientation: portrait) {
    .image_carousel {
      width: 90vw;
      max-height: 70vh;
      object-fit: contain;
    }

    .block_carousel {
      height: 70vh;
      align-items: center;
      display: flex;
      justify-content: center;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
</style>
