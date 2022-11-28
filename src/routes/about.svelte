<script>
  import SocialMedia from "../components/SocialMedia.svelte";
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
  </style>
</svelte:head>

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
      world of photography from a very young age. It wasn't until I was 22 that
      I got serious about photography and bought my first camera. While working
      in digital marketing, I had to do a lot of shoots for clients and I loved
      it. After that, I decided to leave everything behind and travel the world
      for 6 months to capture every single memory. Back in Belgium, I decided to
      exhibit my photos for 4 days in a Brussels gallery.
      <br /> <br />
      <span>
        "The best thing about a picture is that it never changes, even when the
        people in it do."
      </span>
    </p>
  </div>
</div>
<SocialMedia />

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
  .pp_div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190rem;
  }
  h3 {
    font-family: "GT America Bold", sans-serif;
    margin-bottom: 0.5rem;
  }
  .jim_description {
    margin-top: 0.5rem;
    font-family: "GT America Regular", sans-serif;
    text-align: justify;
  }
  .profilepicture {
    max-width: 100%;
  }

  span {
    font-family: "GT America Regular Italic", sans-serif;
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
