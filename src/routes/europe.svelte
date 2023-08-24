<script>
  import { onMount } from "svelte";
  import Spinner from "../components/Spinner.svelte";

  let country = "europe";
  let isLoading = true;

  let allPhotosJSON = [];
  let allPhotosCountry = [];

  onMount(async () => {
    const apiResponse = await fetch("homegallerypic.json");
    allPhotosJSON = await apiResponse.json();
    for (let i = 0; i < allPhotosJSON.length; i++) {
      if (allPhotosJSON[i].folder === country) {
        allPhotosCountry = [...allPhotosCountry, allPhotosJSON[i]];
      }
    }
    allPhotosCountry.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    return () => console.log("Destroyed");
  });

  setTimeout(() => {
    isLoading = false;
  }, 500);
</script>

<svelte:head>
  <title>thedailyjim | {country}</title>
</svelte:head>

{#if isLoading}
  <Spinner />
{:else}
  <article>
    {#each allPhotosCountry as photo, i}
      <section>
        <div class="images">
          <a href="/{photo.folder}/{photo.name}">
            <img
              src={`../../img/${photo.folder}/${photo.name}.webp`}
              alt={photo.name}
              width="100%"
              height="100%"
              loading="lazy"
              preload
            />
          </a>
        </div>
      </section>
    {/each}
  </article>
{/if}

<style>
  article {
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
      columns: 2;
    }
  }
  /* tablet  */
  @media (min-width: 767px) and (max-width: 1023px) {
    article {
      columns: 3;
    }
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
    article {
      columns: 4;
    }
  }
  /* big monitor  */
  @media (min-width: 2000px) {
    article {
      columns: 6;
    }
  }
</style>
