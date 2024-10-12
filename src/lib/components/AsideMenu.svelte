<script>
  import MobileMenu from "./MobileMenu.svelte";
  import DesktopMenu from "./DesktopMenu.svelte";

  const menuItems = [
    { label: "Home" },
    { label: "Africa", params: "africa" },
    { label: "America", params: "america" },
    { label: "Asia", params: "asia" },
    { label: "Europe", params: "europe" },
    { label: "Shop", params: "shop" },
    { label: "About me", href: "/about-me" }
  ];
</script>

<div class="hidden md:block">
  <DesktopMenu {menuItems} />
</div>
<div class="md:hidden">
  <MobileMenu {menuItems} />
</div>
