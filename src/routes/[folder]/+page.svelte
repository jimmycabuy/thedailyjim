<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import GalleryGrid from "../../components/GalleryGrid.svelte";
  import Spinner from "../../components/Spinner.svelte";
  import pictures from "../../data/pictures.json";

  let folder = $page.params.folder;
  let isLoading = true;
  let allPhotosFolder = [];

  onMount(async () => {
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].folder === folder) {
        allPhotosFolder = [...allPhotosFolder, pictures[i]];
      }
    }
    allPhotosFolder.sort((a, b) => {
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
  });

  setTimeout(() => {
    isLoading = false;
  }, 750);
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
