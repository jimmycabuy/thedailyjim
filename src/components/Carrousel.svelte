<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let carouselShopPhotos, indexCarousel, folder;
</script>

<div class="block_carousel">
  <div class="block_image_carousel">
    <button on:click={() => dispatch("previousCarrousel")} class="btn_carrou">
      <img
        class="arrow"
        src="../../../assets/asset/previous.png"
        alt="previous"
        preload
      />
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
      <img
        class="arrow"
        src="../../../assets/asset/next.png"
        alt="next"
        preload
      />
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
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .block_image_carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
  }
  .btn_carrou {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }
  .arrow {
    height: 30px;
    width: 30px;
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
