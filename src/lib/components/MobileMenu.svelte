<script>
  import BurgerMenu from "./BurgerMenu.svelte";
  import socials from "$lib/data/socials.js";
  import { goto } from "$app/navigation";

  export let menuItems = [];

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleButtonClick = (folder) => {
    isMenuOpen = false;
    if (!folder) {
      return goto("/");
    } else {
      goto(`/?folder=${folder}`);
    }
  };
</script>

<div class="md:hidden flex justify-between items-center p-4 bg-zinc-900 text-white w-full fixed top-0 z-50">
  <BurgerMenu {isMenuOpen} on:toggleMenu={toggleMenu} />

  <div class="text-3xl font-bold border-2 px-4 py-2 rounded-full leading-6">
    <button on:click={() => handleButtonClick("")}>TDJ</button>
  </div>
</div>

<aside
  class="translate-x-0 fixed top-0 left-0 z-40 w-screen h-dvh bg-zinc-900 text-white p-6 flex flex-col justify-between min-h-dvh transform transition-transform duration-300 ease-in-out"
  class:translate-x-[-100%]={!isMenuOpen}
>
  <nav class="flex flex-col gap-4 m-auto text-center">
    {#each menuItems as { label, params, href }, i}
      <span>
        {#if !href}
          <button class="text-xl font-semibold text-center" on:click={() => handleButtonClick(params)}>{label}</button>
        {:else}
          <a {href} class="text-xl font-semibold text-center" on:click={toggleMenu}>{label}</a>
        {/if}
      </span>
    {/each}
  </nav>
  <div class="flex gap-5 items-center justify-center">
    {#each socials as { href, target, icon }}
      <a class="flex items-center" {href} {target}>
        <span class="icon">{@html icon}</span>
      </a>
    {/each}
  </div>
</aside>
