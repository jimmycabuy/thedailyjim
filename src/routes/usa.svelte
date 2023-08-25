<script>
  import { onMount } from "svelte";
  import GalleryGrid from "../components/GalleryGrid.svelte";
  import Spinner from "../components/Spinner.svelte";

  let country = "usa";
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
  <GalleryGrid allPhotos={allPhotosCountry} />
{/if}
