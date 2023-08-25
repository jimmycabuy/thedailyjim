<script>
  const socialItems = [
    {
      label: "INSTAGRAM",
      url: "https://www.instagram.com/thedailyjim",
      target: "_blank",
    },
    {
      label: "FACEBOOK",
      url: "https://urlgeni.us/facebook/the_dailyjim",
      target: "_blank",
    },
    {
      label: "TELEGRAM",
      url: "https://t.me/jimmycabuy",
      target: "_blank",
    },
    {
      label: "WHATSAPP",
      url: "https://wa.me/32474917815",
      target: "_blank",
    },
    {
      label: "TIKTOK",
      url: "https://www.tiktok.com/@thedailyjim",
      target: "_blank",
    },
    {
      label: "MAIL",
      url: "mailto:jimmycabuy@hotmail.com?subject=Hi Jimmy, I need your talents 📸🚀",
      target: "_blank",
    },
  ];
</script>

<section>
  {#each socialItems as item, i}
    <a href={item.url} target={item.target} rel="noreferrer">
      <div class="scroll text{i + 1}">
        <p class="menu_item_socialmedia">
          {#each Array(100) as _}
            {item.label} <span>{item.label} </span>{item.label}
            <span>{item.label} </span>
          {/each}
        </p>
      </div>
    </a>
  {/each}
</section>

<style>
  section {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  section .scroll {
    width: 100%;
    max-height: 100%;
    display: flex;
  }
  div {
    font-size: 2.5rem;
    background: #000;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: bd-supper, sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .text1 {
    animation: animate 55s linear infinite;
  }

  .text2 {
    animation: animate 24s linear infinite;
  }

  .text3 {
    animation: animate 30s linear infinite;
  }

  .text4 {
    animation: animate 27s linear infinite;
  }

  .text5 {
    animation: animate 35s linear infinite;
  }

  .text6 {
    animation: animate 45s linear infinite;
  }

  .text1:hover,
  .text2:hover,
  .text3:hover,
  .text4:hover,
  .text5:hover,
  .text6:hover {
    animation-play-state: paused;
  }

  span {
    -webkit-text-stroke: 2px #fff;
    color: transparent;
  }

  .menu_item_socialmedia {
    color: #fff;
    border-top: 1px solid #fff;
  }

  section a:last-of-type div p:last-child {
    border-bottom: 1px solid #fff;
  }

  a:hover div p {
    background-color: #fff;
    color: #000;
  }
  a:hover div p span {
    -webkit-text-stroke: 2px #000;
  }

  @keyframes animate {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }

  /* smartphone  */
  @media (max-width: 767px) {
  }
  /* tablet  */
  @media (min-width: 767px) and (max-width: 1023px) {
  }
  /* computer  */
  @media (min-width: 1024px) and (max-width: 2000px) {
  }
  /* big monitor  */
  @media (min-width: 2000px) {
  }
</style>
