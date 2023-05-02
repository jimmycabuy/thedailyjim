<script context="module">
  let pictureName;
  let pictureFolder;

  export function preload(page) {
    pictureName = page.params.photo;
    pictureFolder = page.params.folder;
  }
</script>

<script>
  import { fade } from "svelte/transition";

  import { onMount } from "svelte";

  let carouselShopPhotos = [];

  let indexCarousel = 0;

  const nextCarousel = () => {
    indexCarousel = (indexCarousel + 1) % carouselShopPhotos.length;
    console.log(indexCarousel);
  };

  const previousCarousel = () => {
    if (indexCarousel === 0) {
      indexCarousel = carouselShopPhotos.length - 1;
    } else {
      indexCarousel = (indexCarousel - 1) % carouselShopPhotos.length;
    }
    console.log(indexCarousel);
  };

  let allPhotosArray = [];
  let picturePlace = null;
  let picturePrice = null;
  let pictureOldPrice = null;
  let pictureSize = null;
  let picturePaper = null;
  let pictureNo = null;
  let pictureDesc = null;
  let pictureFull = null;

  onMount(async () => {
    if (pictureFolder === "shop") {
      const res = await fetch("shop.json");
      allPhotosArray = await res.json();
      for (let i = 0; i < allPhotosArray.length; i++) {
        if (allPhotosArray[i].name === pictureName) {
          picturePlace = allPhotosArray[i].place;
          picturePrice = allPhotosArray[i].price;
          pictureOldPrice = allPhotosArray[i].oldprice;
          pictureSize = allPhotosArray[i].size;
          picturePaper = allPhotosArray[i].paper;
          pictureNo = allPhotosArray[i].printNo;
          pictureDesc = allPhotosArray[i].description;
          pictureFull = allPhotosArray[i].full_photo;
          carouselShopPhotos.push(allPhotosArray[i].name);
          carouselShopPhotos.push(allPhotosArray[i].full_photo);
          if (allPhotosArray[i].full_photo2) {
            carouselShopPhotos.push(allPhotosArray[i].full_photo2);
          }
          if (allPhotosArray[i].full_photo3) {
            carouselShopPhotos.push(allPhotosArray[i].full_photo3);
          }
        }
      }
    } else {
      const res = await fetch("homegallerypic.json");
      allPhotosArray = await res.json();
      for (let i = 0; i < allPhotosArray.length; i++) {
        if (allPhotosArray[i].name === pictureName) {
          picturePlace = allPhotosArray[i].place;
        }
      }
    }
  });
</script>

<svelte:head>
  <title>thedailyjim | {pictureName}</title>
</svelte:head>

{#if pictureFolder === "h"}
  <div>
    <a href="/" class="go_back">
      <img
        src="../../../img/asset/previous.png"
        alt="previous"
        class="arrow_back"
      />
      HOME
    </a>
  </div>
{:else}
  <div>
    <a href="/{pictureFolder}" class="go_back">
      <img
        src="../../../img/asset/previous.png"
        alt="previous"
        class="arrow_back"
      />
      {#if pictureFolder === "costarica"}
        COSTA RICA
      {:else}
        {pictureFolder.toUpperCase()}
      {/if}
    </a>
  </div>
{/if}

{#if !pictureFull}
  <div class="block_image" transition:fade>
    <img
      class="image_simple"
      src={`../../../img/${pictureFolder}/${pictureName}.webp`}
      alt={pictureName}
    />
  </div>
{:else}
  <div class="block_carousel" transition:fade>
    <div class="block_image_carousel">
      <button on:click={previousCarousel}>
        <img
          class="arrow"
          src="../../../img/asset/previous.png"
          alt="previous"
        />
      </button>
      {#each [carouselShopPhotos[indexCarousel]] as photo}
        <div class="block_image">
          <img
            class="image_carousel"
            src={`../../../img/${pictureFolder}/${photo}.webp`}
            alt={pictureName}
          />
        </div>
      {/each}
      <button on:click={nextCarousel}>
        <img class="arrow" src="../../../img/asset/next.png" alt="next" />
      </button>
    </div>
  </div>
{/if}

<div class="container_text" transition:fade>
  <div class="block_text">
    {#if !picturePrice}
      <p>{picturePlace}</p>
    {:else}
      <p style="font-size: 110%;">{pictureName}</p>
      <!-- <br />
      <p style="color: tomato;">{picturePrice} €</p> -->
      <br />
      <!-- <p style="text-decoration: line-through;">{pictureOldPrice} €</p> -->
      <p>{pictureOldPrice} €</p>
      <br />
      <p>{picturePlace}</p>
      <br />
      <p>{pictureDesc}</p>
      <br />
      <p>Size: {pictureSize}</p>
      <br />
      <p>{picturePaper}</p>
      <br />
      <p>Print {pictureNo}</p>
      <br />
      <a
        class="addtocart"
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${pictureName}%2C%20dans%20le%20format%20${pictureSize}%20pour%20${pictureOldPrice}€.%20Est-elle%20encore%20disponible%20%3F%20%F0%9F%98%8D%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
        >WhatsApp</a
      >
      <br />
      <a
        class="addtocart"
        target="_blank"
        rel="noreferrer"
        href={`mailto:jimmycabuy@hotmail.com?subject=${pictureName} - ${pictureSize} - ${pictureOldPrice}€ 📸🚀`}
        >Email</a
      >
      <!-- <br />
      <a
        class="addtocart"
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${pictureName}%2C%20dans%20le%20format%20${pictureSize}.%20Est-elle%20encore%20disponible%20%3F%20%F0%9F%98%8D%0ASi%20oui%2C%20voici%20le%20prix%20que%20je%20te%20propose%20%3A%20XXX%20%E2%82%AC%0AQu%27en%20penses-tu%20%3F%20%F0%9F%98%89%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
        >Make an offer</a
      > -->
    {/if}
  </div>
</div>

<style>
  .go_back {
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    align-items: center;
    margin-left: -5px;
    width: fit-content;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-left: 1rem;
  }
  .arrow_back {
    height: 20px;
    width: 20px;
  }
  .block_carousel {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .block_image_carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
  }

  .block_image {
    display: flex;
    justify-content: center;
  }
  img {
    max-height: 80vh;
    object-fit: contain;
  }
  .container_text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .block_text {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
  }
  p {
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    text-align: center;
  }

  button {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }
  .arrow {
    height: 30px;
    width: 30px;
  }
  button:hover {
    cursor: pointer;
  }
  .addtocart {
    border: 2px solid #000;
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 15rem;
  }
  .addtocart:hover {
    color: #fff;
    background-color: #000;
  }
  @media (max-width: 767px) {
    .image_carousel {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
    }
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
    .block_carousel {
      height: 60vh;
      align-items: center;
      display: flex;
      justify-content: center;
      padding-left: 0rem;
      padding-right: 0rem;
    }
    .block_text {
      width: fit-content;
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    .image_carousel {
      max-width: 80vw;
      max-height: 80vh;
      object-fit: contain;
    }
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
  }
  /* tablet portrait  */
  @media (min-width: 767px) and (max-width: 1023px) and (orientation: portrait) {
    .image_carousel {
      width: 90vw;
      max-height: 70vh;
      object-fit: contain;
    }
    .image_simple {
      max-width: 95vw;
      max-height: 100vh;
      object-fit: contain;
    }
    .block_carousel {
      height: 70vh;
      align-items: center;
      display: flex;
      justify-content: center;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
</style>
