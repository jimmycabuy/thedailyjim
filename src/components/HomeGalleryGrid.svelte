<script>
  import Spinner from "./Spinner.svelte";
  import { onMount } from "svelte";
  import pictures from "../data/pictures.json";

  let isLoading = true;
  let galleryForHome = [];

  onMount(() => {
    galleryForHome = pictures
      .filter((picture) => picture.folder === "home")
      .sort((a, b) => b.name.localeCompare(a.name));
  });

  setTimeout(() => {
    isLoading = false;
  }, 1500);
</script>

{#if isLoading}
  <Spinner />
{/if}

<article class="homegallery" class:is-loading={isLoading}>
  {#each galleryForHome as photo, i}
    <section>
      <div class="images">
        <a href="/{photo.folder}/{photo.name}">
          <img
            src={`../../assets/${photo.folder}/${photo.name}.webp`}
            alt={photo.name}
            width="100%"
            height="100%"
            preload
          />
        </a>
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

  section:hover {
    cursor: pointer;
  }

  @media (width >= 768px) {
    section:hover {
      filter: brightness(50%);
    }
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
