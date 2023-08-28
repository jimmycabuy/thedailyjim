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

  let carouselShopPhotos = [photoFromPage.name, photoFromPage.full_photo];
  let indexCarousel = 0;

  const nextCarousel = () =>
    (indexCarousel = (indexCarousel + 1) % carouselShopPhotos.length);
  const previousCarousel = () =>
    (indexCarousel =
      (indexCarousel - 1 + carouselShopPhotos.length) %
      carouselShopPhotos.length);
</script>

<svelte:head>
  <title>thedailyjim | {picture}</title>
</svelte:head>

<NavigationBack {folder} />

{#if !photoFromPage.full_photo}
  <Photo {folder} {picture} />
{:else}
  <Carrousel
    on:nextCarrousel={nextCarousel}
    on:previousCarrousel={previousCarousel}
    {indexCarousel}
    {folder}
    {carouselShopPhotos}
  />
{/if}

<PhotoText {photoFromPage} />
