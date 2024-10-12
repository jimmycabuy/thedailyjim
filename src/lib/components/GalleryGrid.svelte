<script>
  import Spinner from "$lib/components/Spinner.svelte";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  export let photos = [];
  export let loading = true;

  let screenWidth;

  const handleResize = () => {
    screenWidth = window.innerWidth;
  };

  onMount(() => {
    screenWidth = window.innerWidth;
  });

  $: columns = screenWidth >= 1280 ? 5 : screenWidth >= 1024 ? 4 : screenWidth >= 768 ? 3 : 2;
</script>

<svelte:window on:resize={handleResize} />

<div class="relative flex gap-4 w-full md:mt-0" class:mt-20={!loading} class:p-4={!loading} class:max-h-dvh={loading} class:overflow-hidden={loading}>
  {#if photos?.length}
    {#each Array(columns).fill(0) as _, colIndex}
      <div class="flex-1 flex flex-col">
        {#each photos.filter((_, i) => i % columns === colIndex) as photo}
          {#if photo.alt}
            <button class="mb-4" on:click={() => goto(`/?folder=${photo.folder}&photo=${photo.name}`)}>
              <img class="w-full h-auto rounded-md" src={`/assets/${photo.folder}/${photo.name}`} alt={photo.alt} loading="lazy" />
            </button>
          {/if}
        {/each}
      </div>
    {/each}
  {:else}
    <p>No photos found</p>
  {/if}
  {#if loading}
    <div class="absolute flex items-center justify-center bg-black w-full h-dvh">
      <Spinner />
    </div>
  {/if}
</div>
