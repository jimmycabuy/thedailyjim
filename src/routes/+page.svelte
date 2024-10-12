<script>
  import GalleryGrid from "$lib/components/GalleryGrid.svelte";
  import Image from "$lib/components/Image.svelte";
  import { photosStore } from "$lib/stores/photosStore";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let photos = [];
  let loading = true;

  const getRandomPhotos = (photos) =>
    photos
      .filter((photo) => photo.folder !== "shop")
      .sort(() => 0.5 - Math.random())
      .slice(0, 80);

  onMount(async () => {
    try {
      const response = await fetch("/assets/photos.json");
      if (!response.ok) throw new Error("Erreur lors du chargement des photos");
      photos = await response.json();
      photosStore.set(photos);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        loading = false;
      }, 1000);
    }
  });

  $: folderParam = $page.url.searchParams.get("folder") || null;
  $: photoParam = $page.url.searchParams.get("photo") || null;
  $: filteredPhotos = folderParam
    ? $photosStore.sort(() => 0.5 - Math.random()).filter((photo) => photo.folder === folderParam)
    : getRandomPhotos($photosStore);
</script>

{#if photoParam}
  <Image {photoParam} {folderParam} />
{:else}
  <GalleryGrid photos={filteredPhotos} {loading} />
{/if}
