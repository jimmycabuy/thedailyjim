<script>
  import "../app.css";
  import AsideMenu from "$lib/components/AsideMenu.svelte";
</script>

<div class="flex">
  <AsideMenu />
  <slot />
</div>
