<script>
  import Navbar from "../components/Navbar.svelte";
  import Menu from "../components/Menu.svelte";
  import Footer from "../components/Footer.svelte";

  let menuToggle = false;

  const toggleMenu = () => {
    menuToggle = !menuToggle;
  };

  const removeMenuDisplay = () => {
    menuToggle = false;
  };

  // let m = { x: 0, y: 0 };

  // function handleMousemove(event) {
  // 	m.x = event.clientX;
  // 	m.y = event.clientY;
  //   console.log("x : " + m.x)
  //   console.log("y : " + m.y)
  // }
</script>

<Navbar on:menudisplay={removeMenuDisplay}>
  {#if !menuToggle}
    <span on:click={toggleMenu} role="presentation">MENU</span>
  {:else}
    <span on:click={toggleMenu} role="presentation">CLOSE</span>
  {/if}
</Navbar>

{#if menuToggle}
  <Menu on:menudisplay={removeMenuDisplay} />
{/if}

<!-- <main on:mousemove={handleMousemove}> -->
<main class:menu-open={menuToggle} class="main-content">
  <slot />
</main>

<Footer />

<style>
  .main-content.menu-open {
    display: none; /* Masque le contenu principal */
  }
</style>