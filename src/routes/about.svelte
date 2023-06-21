<script>
  import SocialMedia from "../components/SocialMedia.svelte";
  import Spinner from "../components/Spinner.svelte";
  let isLoading = true;

  setTimeout(() => {
    isLoading = false;
  }, 500);
</script>

<svelte:head>
  <title>thedailyjim | about</title>
  <style>
    body {
      background-color: #000;
    }
    .footer_text,
    h3,
    .jim_description {
      color: #fff;
    }
    .lds-ripple div {
      border: 4px solid #fff !important;
    }
    .navbar {
      background-color: #000 !important;
    }
    h1 {
      color: white;
    }
    .section {
      background-color: #000 !important;
    }
    .div {
      background: #000 !important;
    }
    .menu_item {
      color: #fff !important;
      background-color: #000 !important;
    }
    .span_contour {
      -webkit-text-stroke: 2px #fff !important;
    }
    .a {
      background-color: #000 !important;
      border-top: 1.2px solid #fff !important;
    }
    .a:hover .div {
      background-color: #fff !important;
    }
    .a:hover .div p {
      background-color: #fff !important;
      color: #000 !important;
    }
    .a:hover .div p .span_contour {
      -webkit-text-stroke: 2px #000 !important;
    }
    .a:hover {
      background-color: #fff !important;
    }
  </style>
</svelte:head>

{#if isLoading}
  <Spinner />
{:else}
  <div class="aboutme_block">
    <div class="pp_div">
      <img
        class="profilepicture"
        src="../../img/profilepic/jimmycabuy.webp"
        alt="jimmycabuy"
      />
    </div>
    <div>
      <h3>Jimmy alias thedailyjim</h3>
      <p class="jim_description">
        I am a passionate and talented photographer, fascinated by the world
        around me. Since my youngest age, I have been drawn to photography and
        it was at the age of 22 that I purchased my first camera. Traveling has
        been a source of inspiration for me and it was during my many trips that
        I developed a passion for photography. In 2021, I made a bold decision
        to leave everything behind and travel for 6 months throughout America,
        capturing every moment of my journey through the lens of my camera.
        <br /> <br />
        I am a travel, adventure, and street photographer, capturing unique moments
        and hidden stories of every place I visit. I have decided to share my work
        with the world by organizing an exhibition upon my return to Belgium, allowing
        people to discover my journey through my images. My love for discovery and
        adventure is reflected in my art, and my determination to capture every moment
        allows me to produce unique and powerful works.
        <br /> <br />
        <span>
          "The best thing about a picture is that it never changes, even when
          the people in it do."
        </span>
      </p>
    </div>
  </div>
  <SocialMedia />
{/if}

<style>
  .aboutme_block {
    margin: 1rem 1rem 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 0;
    position: relative;
  }
  .pp_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140rem;
  }
  h3 {
    font-family: bd-supper, sans-serif;
    font-weight: 700;
    font-style: normal;
    margin-bottom: 0.5rem;
  }
  .jim_description {
    margin-top: 0.5rem;
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
  }
  .profilepicture {
    max-width: 100%;
  }

  span {
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 85%;
  }

  /* smartphone  */
  @media (max-width: 767px) {
    .aboutme_block {
      flex-wrap: wrap;
    }
  }
  /* tablet  */
  @media (min-width: 767px) and (max-width: 1023px) {
    .aboutme_block {
      flex-wrap: wrap;
    }
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
  }
  /* big monitor  */
  @media (min-width: 2000px) {
  }
</style>
