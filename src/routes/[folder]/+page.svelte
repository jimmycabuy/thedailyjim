<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import GalleryGrid from "../../components/GalleryGrid.svelte";
  import Spinner from "../../components/Spinner.svelte";
  import pictures from "../../data/pictures.json";

  let folder = $page.params.folder;
  let isLoading = true;
  let allPhotosFolder = [];

  onMount(() => {
    allPhotosFolder = pictures.filter((picture) => picture.folder === folder);
    allPhotosFolder.sort((a, b) => a.place.localeCompare(b.place));
  });

  setTimeout(() => {
    isLoading = false;
  }, 1000);
</script>

<svelte:head>
  <title>thedailyjim | {folder}</title>
</svelte:head>

{#if isLoading}
  <Spinner />
{/if}
<div class:is-loading={isLoading}>
  <GalleryGrid allPhotos={allPhotosFolder} />
</div>

<style>
  .is-loading {
    display: none;
  }
</style>
