<script>
  /**
   * The width of the skeleton loader.
   * @type {string}
   * @defaultValue '100%'
   */
  export let width = "100%";

  /**
   * The height of the skeleton loader.
   * @type {string}
   * @defaultValue '200px'
   */
  export let height = "200px";

  /**
   * The border-radius of the skeleton loader.
   * @type {string}
   * @defaultValue '0.75rem'
   */
  export let radius = "0.75rem";
</script>

<div class="skeleton" style="width: {width}; height: {height}; border-radius: {radius};"></div>

<style>
  .skeleton {
    background-color: #e0e0e0;
    background-image: linear-gradient(90deg, #e0e0e0, #f0f0f0, #e0e0e0);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
