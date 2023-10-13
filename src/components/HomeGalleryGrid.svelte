<script>
  import Spinner from "./Spinner.svelte";
  import pictures from "../data/pictures.json";

  let isLoading = true;

  const uniquePictures = new Set();

  while (uniquePictures.size < 80) {
    const randomIndex = Math.floor(Math.random() * pictures.length);
    uniquePictures.add(pictures[randomIndex]);
  }

  const randomObjects = Array.from(uniquePictures);

  console.log(randomObjects.length);
  setTimeout(() => {
    isLoading = false;
  }, 1500);
</script>

{#if isLoading}
  <Spinner />
{/if}

<article class="homegallery" class:is-loading={isLoading}>
  {#each randomObjects as photo, i}
    <section>
      <div class="images">
        <img
          src={`../../assets/${photo.folder}/${photo.name}.webp`}
          alt={photo.name}
          width="100%"
          height="100%"
          preload
        />
      </div>
    </section>
  {/each}
</article>

<style>
  .is-loading {
    display: none;
  }

  article {
    columns: 10;
    padding: 0 1rem 1rem 1rem;
  }

  section {
    margin-bottom: 2px;
    margin-right: -5px;
    margin-left: -5px;
    transition: 0.3s ease;
  }

  /* smartphone  */
  @media (max-width: 767px) {
    article {
      columns: 3;
    }
  }
  /* tablet  */
  @media (min-width: 767px) and (max-width: 1023px) {
    article {
      columns: 6;
    }
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
    article {
      columns: 8;
    }
  }
  /* big monitor  */
  @media (min-width: 2000px) {
    article {
      columns: 12;
    }
  }
</style>
