<script>
  import Navbar from "../components/Navbar.svelte";
  import Menu from "../components/Menu.svelte";
  import Footer from "../components/Footer.svelte";

  let menuToggle = false;

  const toggleMenu = () => {
    menuToggle = !menuToggle;
  };

  const removeMenuDisplay = () => {
    setTimeout(() => {
      menuToggle = false;
    }, 200);
  };
</script>

<div>
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

  <main class:menu-open={menuToggle} class="main-content">
    <slot />
  </main>

  {#if !menuToggle}
    <Footer />
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100dvh;
    -webkit-tap-highlight-color: transparent;
  }
  .main-content.menu-open {
    display: none;
  }
</style>
