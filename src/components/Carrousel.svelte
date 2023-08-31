<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";

  export let carouselShopPhotos, folder;

  let options = { loop: true };
</script>

<div class="embla" use:emblaCarouselSvelte={{ options }}>
  <div class="embla__container">
    {#each carouselShopPhotos as photo}
      <div class="embla__slide">
        <img
          class="image_carousel"
          src={`../../../assets/${folder}/${photo}.webp`}
          alt={photo}
          preload
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    justify-content: center;
  }

  img {
    max-height: 80vh;
    object-fit: contain;
    pointer-events: none;
  }

  @media (max-width: 767px) {
    .image_carousel {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
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
  }
</style>
