<script>
  import { goto } from "$app/navigation";

  export let folderParam, photoParam;
</script>

<div class="max-h-dvh flex justify-center w-full p-4 relative mt-20 md:mt-0">
  <button class="absolute top-4 right-4 text-white rounded-full px-2" on:click={() => goto(`/?folder=${folderParam}`)}> ✕ </button>
  <img src={`/assets/${folderParam}/${photoParam}`} alt={photoParam} class="w-auto h-auto max-w-full max-h-full object-contain rounded-md" />
</div>
