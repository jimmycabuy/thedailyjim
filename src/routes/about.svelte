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
        Passionate about digital and new technologies, I have always enjoyed the
        world of photography from a very young age. It wasn't until I was 22
        that I got serious about photography and bought my first camera. While
        working in digital marketing, I had to do a lot of shoots for clients
        and I loved it. After that, I decided to leave everything behind and
        travel the world for 6 months to capture every single memory. Back in
        Belgium, I decided to exhibit my photos for 4 days in a Brussels
        gallery.
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
    margin: 1rem;
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
    width: 190rem;
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
