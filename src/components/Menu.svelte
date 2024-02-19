<script>
  import pictures from "../data/pictures.json";
  import shop from "../data/shop.json";

  let screenWidth = window.innerWidth;
  let minDuration;
  let maxDuration;

  const handleResize = () => {
    screenWidth = window.innerWidth;
  };

  $: if (screenWidth <= 768) {
    minDuration = 10;
    maxDuration = 25;
  } else {
    minDuration = 20;
    maxDuration = 60;
  }

  const counts = {
    usa: 0,
    canada: 0,
    mexico: 0,
    costarica: 0,
    ecuador: 0,
    morocco: 0,
    europe: 0,
  };

  pictures.forEach((picture) => {
    if (counts.hasOwnProperty(picture.folder)) {
      counts[picture.folder]++;
    }
  });

  const menuItem = [
    {
      label: "USA",
      url: "/usa",
      count: counts.usa,
    },
    {
      label: "CANADA",
      url: "/canada",
      count: counts.canada,
    },
    {
      label: "MEXICO",
      url: "/mexico",
      count: counts.mexico,
    },
    {
      label: "COSTA RICA",
      url: "/costarica",
      count: counts.costarica,
    },
    {
      label: "ECUADOR",
      url: "/ecuador",
      count: counts.ecuador,
    },
    {
      label: "MOROCCO",
      url: "/morocco",
      count: counts.morocco,
    },
    {
      label: "EUROPE",
      url: "/europe",
      count: counts.europe,
    },
    {
      label: "ABOUT ME",
      url: "/about",
      count: null,
    },
    {
      label: "SHOP",
      url: "/shop",
      count: shop.length,
    },
    {
      label: "CONTACT",
      url: "/contact",
      count: null,
    },
  ];
</script>

<svelte:window on:resize={handleResize} />

<section class="section">
  {#each menuItem as item, i}
    <a
      href={item.url}
      class="div a"
      data-sveltekit-preload-data
      data-sveltekit-preload-code
      data-sveltekit-reload
    >
      <div>
        <div
          class="div scroll text"
          style="animation-duration: {Math.floor(
            Math.random() * (maxDuration - minDuration + 1)
          ) + minDuration}s;"
        >
          <p class="menu_item">
            {#each Array(100) as _}
              <span class="span_contour {!item.count ? 'no_count' : ''}"
                >{item.label}</span
              >{#if item.count}<sup>[{item.count}]</sup>{/if}<span
                class={!item.count ? "no_count" : ""}>{item.label}</span
              >{#if item.count}<sup>[{item.count}]</sup>{/if}
            {/each}
          </p>
        </div>
      </div>
    </a>
  {/each}
</section>

<style>
  .section {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90dvh;
    font-family: "bd-supper", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  .section .scroll {
    width: 100%;
    max-height: 100%;
    display: flex;
  }
  .div {
    font-size: 3.1rem;
    background: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    font-style: normal;
    height: 100%;
  }

  .menu_item {
    background-color: #fff;
  }

  .text {
    animation: animate linear infinite;
  }
  @media (pointer: fine) {
    .a:hover .text {
      animation-play-state: paused;
    }
    .a:hover .div {
      background-color: #000;
    }

    .a:hover .div p {
      background-color: #000;
      color: #fff;
    }
    .a:hover .div p .span_contour {
      -webkit-text-stroke: 2px #fff;
    }
    a:hover {
      cursor: pointer;
    }
    .a:hover {
      background-color: #000;
      cursor: pointer;
    }
  }

  .span_contour {
    -webkit-text-stroke: 2px #000;
    color: transparent;
  }

  span {
    padding-left: 10px;
  }

  .no_count {
    padding-right: 10px;
  }

  .a {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    border-top: 1.2px solid #000;
  }

  sup {
    vertical-align: 2rem;
    font-size: 0.5rem;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 100;
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }

  /* smartphone portrait  */
  @media (max-width: 767px) and (orientation: portrait) {
    .div {
      font-size: 3.1rem;
    }
  }
  /* smartphone landscape  */
  @media (max-width: 850px) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
    .div {
      font-size: 1.5rem;
    }
    sup {
      vertical-align: 0.6rem;
      font-size: 0.3rem;
    }
    .span_contour {
      -webkit-text-stroke: 1px #000;
    }
    .a:hover .div p .span_contour {
      -webkit-text-stroke: 1px #fff;
    }
  }
  /* tablet portrait  */
  @media (min-width: 767px) and (max-width: 1023px) and (orientation: portrait) {
    .div {
      font-size: 3.1rem;
    }
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
    .div {
      font-size: 3.1rem;
    }
  }
  /* big monitor  */
  @media (min-width: 2000px) {
    .div {
      font-size: 3rem;
    }
  }
</style>
