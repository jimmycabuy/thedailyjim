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

<section>
  <div class="a">
    <a href="/usa" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text1">
        <p class="menu_item">
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
          USA<sup>[{countUsa}] </sup> <span> USA</span><sup>[{countUsa}] </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/canada" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text2">
        <p class="menu_item">
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
          CANADA<sup>[{countCanada}] </sup> <span> CANADA</span><sup
            >[{countCanada}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/mexico" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text3">
        <p class="menu_item">
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
          MEXICO<sup>[{countMexico}] </sup> <span> MEXICO</span><sup
            >[{countMexico}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/costarica" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text4">
        <p class="menu_item">
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
          COSTA RICA<sup>[{countCostaRica}] </sup> <span> COSTA RICA</span><sup
            >[{countCostaRica}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/ecuador" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text7">
        <p class="menu_item">
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
          ECUADOR<sup>[{countEcuador}] </sup> <span> ECUADOR</span><sup
            >[{countEcuador}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/europe" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text2">
        <p class="menu_item">
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
          EUROPE<sup>[{countEurope}] </sup> <span> EUROPE</span><sup
            >[{countEurope}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a_about">
    <a href="/about" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text5">
        <p class="menu_item_about">
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
          ABOUT ME <span> ABOUT ME</span>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/shop" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text8">
        <p class="menu_item">
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
          SHOP<sup>[{countShop}] </sup> <span> SHOP</span><sup
            >[{countShop}]
          </sup>
        </p>
      </div>
    </a>
  </div>

  <div class="a">
    <a href="/contact" on:click={() => dispatch("menudisplay")}>
      <div class="scroll text6">
        <p class="menu_item">
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
          CONTACT <span> CONTACT</span>
        </p>
      </div>
    </a>
  </div>

</section>

<style>
  section {
    position: absolute;
    z-index: 3;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    height: 90.4vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 2rem;
  }
  section .scroll {
    width: 100%;
    max-height: 100%;
    display: flex;
  }
  div {
    font-size: 3.1rem;
    background: #fff;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: bd-supper,sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .menu_item {
    background-color: #fff;
  }

  .menu_item_about {
    background-color: #000;
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
    color: #fff;
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

  /* hr {
    height: 1.2px;
    width: 100%;
    background-color: #000;
    border: none;
    margin: 0;
  } */
  span {
    -webkit-text-stroke: 2px #000;
    color: transparent;
  }

  .menu_item_about span {
    -webkit-text-stroke: 2px #fff;
  }

  .a:hover div {
    background-color: #000;
  }

  .a:hover div p {
    background-color: #000;
    color: #fff;
  }
  .a:hover div p span {
    -webkit-text-stroke: 2px #fff;
  }

  .a {
    display: flex;
    height: 9.2vh;
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
    border-top: 1.2px solid #000;
  }

  .a_about {
    display: flex;
    height: 9.2vh;
    background-color: #000;
    flex-direction: column;
    justify-content: center;
    border-top: 1.2px solid #000;
  }

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
    div {
      font-size: 3.1rem;
    }
    .a,
    .a_about {
      height: 7.5vh;
    }
  }
  /* smartphone landscape  */
  @media (max-width: 850px) and (orientation: landscape) and (hover: none) and (pointer: coarse) {
    div {
      font-size: 1.5rem;
    }
    .a,
    .a_about {
      height: 6.6vh;
    }
    sup {
      vertical-align: 0.6rem;
      font-size: 0.3rem;
    }
    span {
      -webkit-text-stroke: 1px #000;
    }
    .a:hover div p span {
      -webkit-text-stroke: 1px #fff;
    }
  }
  /* tablet portrait  */
  @media (min-width: 767px) and (max-width: 1023px) and (orientation: portrait) {
    div {
      font-size: 3.1rem;
    }
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
    div {
      font-size: 3.1rem;
    }
  }
  /* big monitor  */
  @media (min-width: 2000px) {
    div {
      font-size: 3rem;
    }
  }
</style>
