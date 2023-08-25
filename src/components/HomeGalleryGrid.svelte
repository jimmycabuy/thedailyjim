<script>
  import Spinner from "./Spinner.svelte";
  import { onMount, onDestroy } from "svelte";
  import galleryStore from "../homegallery-store";

  let loadedPhotos = [];
  let unsubscribe;
  let isLoading = true;
  let allPhotosFromJson = [];
  let galleryForHome = [];

  onMount(async () => {
    const res = await fetch("homegallerypic.json");
    allPhotosFromJson = await res.json();
    for (let i = 0; i < allPhotosFromJson.length; i++) {
      if (allPhotosFromJson[i].folder === "h") {
        galleryForHome = [...galleryForHome, allPhotosFromJson[i]];
      }
    }
    galleryForHome.sort((a, b) => {
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
    unsubscribe = galleryStore.subscribe((items) => {
      loadedPhotos = items;
    });
    galleryStore.setHomeGalleryPics(galleryForHome);
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  setTimeout(() => {
    isLoading = false;
  }, 700);
</script>

{#if isLoading}
  <Spinner />
{:else}
  <article class="homegallery">
    {#each loadedPhotos as photo, i}
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

  img {
    pointer-events: none;
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
