<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<nav class="navbar">
  <a href="/">
    <h1
      on:click={() => dispatch("menudisplay")}
      role="presentation"
      class="navbar_item"
    >
      THEDAILYJIM
    </h1>
  </a>
  <h1 class="navbar_item"><slot /></h1>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: sticky;
    z-index: 4;
    top: 0;
    background-color: #fff;
    height: 5dvh;
    align-items: center;
    font-family: "bd-supper", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  @media (width >= 768px) {
    h1:hover {
      color: #888;
    }
  }

  h1:hover {
    cursor: pointer;
  }

  h1 {
    font-size: 1.7rem;
  }

  /* smartphone  */
  @media (max-width: 767px) {
    h1 {
      font-size: 1.3rem;
    }
  }
  /* tablet  */
  @media (min-width: 767px) and (max-width: 1023px) {
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
    h1 {
      font-size: 2rem;
    }
  }
  /* big monitor  */
  /* @media (min-width: 2000px) {
  } */
</style>
