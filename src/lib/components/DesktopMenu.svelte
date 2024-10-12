<script>
  import socials from "$lib/data/socials.js";
  import { goto } from "$app/navigation";

  export let menuItems = [];

  const handleButtonClick = (folder) => {
    if (!folder) {
      return goto("/");
    } else {
      goto(`/?folder=${folder}`);
    }
  };
</script>

<aside class="bg-zinc-900 text-white p-6 sticky top-0 h-dvh flex justify-between flex-col min-h-dvh items-center w-64">
  <div class="text-3xl font-bold border-2 px-4 py-2 rounded-full leading-6"><button on:click={() => handleButtonClick("")}>TDJ</button></div>
  <div>
    <nav class="flex flex-col gap-4 text-center">
      {#each menuItems as { label, params, href }, i}
        <span>
          <small>0{i}</small>
          {#if !href}
            <button class="text-xl font-semibold text-center" on:click={() => handleButtonClick(params)}>{label}</button>
          {:else}
            <a {href} class="text-xl font-semibold text-center">{label}</a>
          {/if}
        </span>
      {/each}
    </nav>
  </div>
  <div class="flex gap-5 items-center">
    {#each socials as { href, target, icon }}
      <a class="flex items-center" {href} {target}>
        <span class="icon">{@html icon}</span>
      </a>
    {/each}
  </div>
</aside>
