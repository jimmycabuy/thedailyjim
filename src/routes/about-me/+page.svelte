<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  onMount(() => {
    gsap.from(".title", {
      y: -500,
      duration: 1.5,
      opacity: 0,
      delay: 0.5
    });

    gsap.from(".image", {
      duration: 1.5,
      opacity: 0,
      delay: 2.5
    });

    gsap.from(".description", {
      duration: 1.5,
      opacity: 0,
      delay: 2.5
    });
  });
</script>

<main class="mt-20 md:mt-0 p-6 w-full min-h-dvh flex items-center justify-center flex-col gap-4">
  <div class="title border px-4 py-2 rounded-full leading-6">Meet the thedailyjim.</div>
  <img
    src="https://www.thedailyjim.be/assets/profilepic/jimmycabuy.webp"
    alt="jimmycabuy"
    class="image object-cover h-96 rounded-md aspect-square object-top"
  />
  <p class="description sm:px-12 lg:px-24 xl:px-48 text-center text-sm">
    I am a passionate and talented photographer, fascinated by the world around me. Since my youngest age, I have been drawn to photography and it was
    at the age of 22 that I purchased my first camera. Traveling has been a source of inspiration for me and it was during my many trips that I
    developed a passion for photography. In 2021, I made a bold decision to leave everything behind and travel for 6 months throughout America,
    capturing every moment of my journey through the lens of my camera.
  </p>
  <p class="description sm:px-12 lg:px-24 xl:px-48 text-center text-sm">
    I am a travel, adventure, and street photographer, capturing unique moments and hidden stories of every place I visit. I have decided to share my
    work with the world by organizing an exhibition upon my return to Belgium, allowing people to discover my journey through my images. My love for
    discovery and adventure is reflected in my art, and my determination to capture every moment allows me to produce unique and powerful works.
  </p>
</main>
