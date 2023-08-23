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
</script>

<section class="section">
  <div class="div a">
    <a href="/usa" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text1">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">USA</span><sup>[{countUsa}]</sup><span
              class="span_normal">USA</span
            ><sup>[{countUsa}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/canada" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text2">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">CANADA</span><sup>[{countCanada}]</sup
            ><span class="span_normal">CANADA</span><sup>[{countCanada}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/mexico" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text3">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">MEXICO</span><sup>[{countMexico}]</sup
            ><span class="span_normal">MEXICO</span><sup>[{countMexico}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/costarica" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text4">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">COSTA RICA</span><sup
              >[{countCostaRica}]</sup
            ><span class="span_normal">COSTA RICA</span><sup
              >[{countCostaRica}]</sup
            >
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/ecuador" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text7">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">ECUADOR</span><sup>[{countEcuador}]</sup
            ><span class="span_normal">ECUADOR</span><sup>[{countEcuador}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/europe" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text2">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">EUROPE</span><sup>[{countEurope}]</sup
            ><span class="span_normal">EUROPE</span><sup>[{countEurope}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/about" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text5">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour no_sup">ABOUT ME</span><span
              class="span_normal no_sup">ABOUT ME</span
            >
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/shop" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text8">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour">SHOP</span><sup>[{countShop}]</sup><span
              class="span_normal">SHOP</span
            ><sup>[{countShop}]</sup>
          {/each}
        </p>
      </div>
    </a>
  </div>

  <div class="div a">
    <a href="/contact" on:click={() => dispatch("menudisplay")}>
      <div class="div scroll text6">
        <p class="menu_item">
          {#each Array(100) as _}
            <span class="span_contour no_sup">CONTACT</span><span
              class="span_normal no_sup">CONTACT</span
            >
          {/each}
        </p>
      </div>
    </a>
  </div>
</section>

<style>
  .section {
    position: absolute;
    z-index: 3;
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
    /* color: #fff; */
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

  .text1:hover,
  .text2:hover,
  .text3:hover,
  .text4:hover,
  .text5:hover,
  .text6:hover,
  .text7:hover,
  .text8:hover {
    animation-play-state: paused;
  }
  .span_contour {
    -webkit-text-stroke: 2px #000;
    color: transparent;
    padding-left: 10px;
  }

  .no_sup {
    padding-right: 10px;
  }

  .span_normal {
    padding-left: 10px;
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

  /* section .a:last-child {
    border-bottom: 1.2px solid #000;
  } */

  .a:hover {
    background-color: #000;
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
      /* color: #fff; */
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
