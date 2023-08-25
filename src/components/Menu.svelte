<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  import homegallery from "../../static/homegallerypic.json";
  import shopgallery from "../../static/shop.json";

  let countUsa = 0;
  let countCanada = 0;
  let countMexico = 0;
  let countCostaRica = 0;
  let countEcuador = 0;
  let countEurope = 0;
  let countShop = 0;

  for (let i = 0; i < homegallery.length; i++) {
    if (homegallery[i].folder === "usa") {
      countUsa += 1;
    } else if (homegallery[i].folder === "canada") {
      countCanada += 1;
    } else if (homegallery[i].folder === "mexico") {
      countMexico += 1;
    } else if (homegallery[i].folder === "costarica") {
      countCostaRica += 1;
    } else if (homegallery[i].folder === "ecuador") {
      countEcuador += 1;
    } else if (homegallery[i].folder === "europe") {
      countEurope += 1;
    }
  }

  for (let i = 0; i < shopgallery.length; i++) {
    countShop += 1;
  }

  const menuItem = [
    {
      label: "USA",
      url: "/usa",
      count: countUsa,
    },
    {
      label: "CANADA",
      url: "/canada",
      count: countCanada,
    },
    {
      label: "MEXICO",
      url: "/mexico",
      count: countMexico,
    },
    {
      label: "COSTA RICA",
      url: "/costarica",
      count: countCostaRica,
    },
    {
      label: "ECUADOR",
      url: "/ecuador",
      count: countEcuador,
    },
    {
      label: "EUROPE",
      url: "/europe",
      count: countEurope,
    },
    {
      label: "ABOUT ME",
      url: "/about",
      count: null,
    },
    {
      label: "SHOP",
      url: "/shop",
      count: countShop,
    },
    {
      label: "CONTACT",
      url: "/contact",
      count: null,
    },
  ];
</script>

<section class="section">
  {#each menuItem as item, i}
    <a href={item.url} on:click={() => dispatch("menudisplay")} class="div a">
      <div>
        <div class="div scroll text{i + 1}">
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
    font-family: bd-supper, sans-serif;
    font-weight: 700;
    font-style: normal;
    height: 100%;
  }

  .menu_item {
    background-color: #fff;
  }

  .text1 {
    animation: animate 55s linear infinite;
  }

  .text2 {
    animation: animate 30s linear infinite;
  }

  .text3 {
    animation: animate 22s linear infinite;
  }

  .text4 {
    animation: animate 35s linear infinite;
  }
  .text5 {
    animation: animate 20s linear infinite;
  }
  .text6 {
    animation: animate 45s linear infinite;
  }
  .text7 {
    animation: animate 24s linear infinite;
  }
  .text8 {
    animation: animate 30s linear infinite;
  }
  .text9 {
    animation: animate 40s linear infinite;
  }

  .a:hover .text1,
  .a:hover .text2,
  .a:hover .text3,
  .a:hover .text4,
  .a:hover .text5,
  .a:hover .text6,
  .a:hover .text7,
  .a:hover .text8,
  .a:hover .text9 {
    animation-play-state: paused;
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

  .a {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    border-top: 1.2px solid #000;
  }

  a:hover {
    cursor: pointer;
  }
  .a:hover {
    background-color: #000;
    cursor: pointer;
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
    .text1 {
      animation: animate 25s linear infinite;
    }

    .text2 {
      animation: animate 10s linear infinite;
    }

    .text3 {
      animation: animate 12s linear infinite;
    }

    .text4 {
      animation: animate 15s linear infinite;
    }
    .text5 {
      animation: animate 10s linear infinite;
    }
    .text6 {
      animation: animate 13s linear infinite;
    }
    .text7 {
      animation: animate 18s linear infinite;
    }
    .text8 {
      animation: animate 11s linear infinite;
    }
    .text9 {
      animation: animate 21s linear infinite;
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
