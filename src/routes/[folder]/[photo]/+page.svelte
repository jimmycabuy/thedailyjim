<script>
  import { page } from "$app/stores";
  import { blur } from "svelte/transition";
  import pictures from "../../../data/pictures.json";
  import shop from "../../../data/shop.json";

  let folder = $page.params.folder;
  let picture = $page.params.photo;
  let photoFromPage;

  if (folder === "shop") {
    photoFromPage = shop.find((item) => item.name === picture);
  } else {
    photoFromPage = pictures.find((item) => item.name === picture);
  }

  let carouselShopPhotos = [photoFromPage.name, photoFromPage.full_photo];

  let indexCarousel = 0;

  const nextCarousel = () => {
    indexCarousel = (indexCarousel + 1) % carouselShopPhotos.length;
  };

  const previousCarousel = () => {
    if (indexCarousel === 0) {
      indexCarousel = carouselShopPhotos.length - 1;
    } else {
      indexCarousel = (indexCarousel - 1) % carouselShopPhotos.length;
    }
  };
</script>

<svelte:head>
  <title>thedailyjim | {picture}</title>
</svelte:head>

{#if folder === "h"}
  <div>
    <a href="/" class="go_back">
      <img
        src="../../../assets/asset/previous.png"
        alt="previous"
        class="arrow_back"
        preload
      />
      HOME
    </a>
  </div>
{:else}
  <div>
    <a href="/{folder}" class="go_back">
      <img
        src="../../../assets/asset/previous.png"
        alt="previous"
        class="arrow_back"
        preload
      />
      {#if folder === "costarica"}
        COSTA RICA
      {:else}
        {folder.toUpperCase()}
      {/if}
    </a>
  </div>
{/if}

{#if !photoFromPage.full_photo}
  <div class="block_image" in:blur>
    <img
      class="image_simple"
      src={`../../../assets/${folder}/${picture}.webp`}
      alt={picture}
      preload
    />
  </div>
{:else}
  <div class="block_carousel" in:blur>
    <div class="block_image_carousel">
      <button on:click={previousCarousel} class="btn_carrou">
        <img
          class="arrow"
          src="../../../assets/asset/previous.png"
          alt="previous"
          preload
        />
      </button>
      {#each [carouselShopPhotos[indexCarousel]] as photo}
        <div class="block_image">
          <img
            class="image_carousel"
            src={`../../../assets/${folder}/${photo}.webp`}
            alt={photo}
            preload
          />
        </div>
      {/each}
      <button on:click={nextCarousel} class="btn_carrou">
        <img
          class="arrow"
          src="../../../assets/asset/next.png"
          alt="next"
          preload
        />
      </button>
    </div>
  </div>
{/if}

<div class="container_text" in:blur>
  <div class="block_text">
    {#if !photoFromPage.price}
      <p>{photoFromPage.place}</p>
    {:else}
      <p style="font-size: 110%;">{photoFromPage.name}</p>
      <br />
      {#if !photoFromPage.sold}
        <p>{photoFromPage.oldprice} €</p>
      {:else}
        <p>SOLD*</p>
      {/if}
      <br />
      <p>{photoFromPage.place}</p>
      <br />
      <p>{photoFromPage.description}</p>
      <br />
      <p>Size: {photoFromPage.size}</p>
      <br />
      <p>{photoFromPage.paper}</p>
      <br />
      <p>Print No {photoFromPage.printNo}/5</p>
      <br />
      {#if !photoFromPage.sold}
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${photoFromPage.name}%2C%20dans%20le%20format%20${photoFromPage.size}%20pour%20${photoFromPage.oldprice}€.%20Est-elle%20encore%20disponible%20%3F%20%F0%9F%98%8D%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
          >WhatsApp</a
        >
        <br />
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`mailto:jimmycabuy@hotmail.com?subject=${photoFromPage.name} - ${photoFromPage.size} - ${photoFromPage.oldprice}€ 📸🚀`}
          >Email</a
        >
      {:else}
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${
            photoFromPage.name
          }%2C%20j%27aimerais%20donc%20la%20faire%20r%C3%A9imprimer%20(Print%20No%20${
            photoFromPage.printNo + 1
          }%2F5)%20%F0%9F%98%8D%0AComment%20peut-on%20s%27arranger%20%3F%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
          >WhatsApp*</a
        >
        <br />
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`mailto:jimmycabuy@hotmail.com?subject=${
            photoFromPage.name
          } - I would like to reprint (No ${photoFromPage.printNo + 1}/5) 📸🚀`}
          >Email*</a
        >
        <br />
        <p class="text_reprint">
          *The print No {photoFromPage.printNo}/5 has been sold and is currently
          out of stock, but feel free to contact me if you would like a reprint.
          You will then benefit the print No {photoFromPage.printNo + 1}/5.
        </p>
      {/if}
    {/if}
  </div>
</div>

<style>
  .go_back {
    font-family: "bd-supper", sans-serif;
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
    padding-bottom: 3px;
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
    pointer-events: none;
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
    width: 65%;
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .btn_carrou {
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
  .btn_carrou:hover {
    cursor: pointer;
  }
  .addtocart {
    border: 2px solid #000;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 15rem;
    transition: 0.3s;
  }
  .addtocart:hover {
    color: #fff;
    background-color: #000;
  }

  button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }

  .text_reprint {
    font-size: small;
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
