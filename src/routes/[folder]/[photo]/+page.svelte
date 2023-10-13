<script>
  import { page } from "$app/stores";
  import Carrousel from "../../../components/Carrousel.svelte";
  import Photo from "../../../components/Photo.svelte";
  import PhotoText from "../../../components/PhotoText.svelte";
  import NavigationBack from "../../../components/NavigationBack.svelte";
  import pictures from "../../../data/pictures.json";
  import shop from "../../../data/shop.json";

  let folder = $page.params.folder;
  let picture = $page.params.photo;
  let photoFromPage = (folder === "shop" ? shop : pictures).find(
    (item) => item.name === picture
  );


</script>

<svelte:head>
  <title>thedailyjim | {picture}</title>
</svelte:head>

<NavigationBack {folder} />

{#if !photoFromPage.carrousel}
  <Photo {folder} {picture} />
{:else}
  <Carrousel {folder} carouselShopPhotos={photoFromPage.carrousel} />
{/if}

<PhotoText {photoFromPage} />
