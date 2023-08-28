<script>
  export let folder, picture;
</script>

<div class="block_image">
  <img
    class="image_simple"
    src={`../../../assets/${folder}/${picture}.webp`}
    alt={picture}
    preload
  />
</div>

<style>
  .block_image {
    display: flex;
    justify-content: center;
  }

  img {
    max-height: 80vh;
    object-fit: contain;
    pointer-events: none;
  }

  @media (max-width: 767px) {
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
  }
  /* tablet portrait  */
  @media (min-width: 767px) and (max-width: 1023px) and (orientation: portrait) {
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
  }
</style>
