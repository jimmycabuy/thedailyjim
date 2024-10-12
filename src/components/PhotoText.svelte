<script>
  export let photoFromPage;
</script>

<div class="container_text">
  <div class="block_text">
    {#if !photoFromPage.price}
      <p>{photoFromPage.place}</p>
    {:else}
      <p style="font-size: 110%;">{photoFromPage.name}</p>
      <br />
      {#if !photoFromPage.sold}
        <p>{photoFromPage.oldprice} €</p>
      {:else}
        <p>SOLD*</p>
      {/if}
      <br />
      <p>{photoFromPage.place}</p>
      <br />
      <p>{photoFromPage.description}</p>
      <br />
      <p>Size: {photoFromPage.size}</p>
      <br />
      <p>{photoFromPage.paper}</p>
      <br />
      <p>Print No {photoFromPage.printNo}/5</p>
      <br />
      {#if !photoFromPage.sold}
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${photoFromPage.name}%2C%20dans%20le%20format%20${photoFromPage.size}%20pour%20${photoFromPage.oldprice}€.%20Est-elle%20encore%20disponible%20%3F%20%F0%9F%98%8D%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
          >WhatsApp</a
        >
        <br />
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`mailto:jimmycabuy@hotmail.com?subject=${photoFromPage.name} - ${photoFromPage.size} - ${photoFromPage.oldprice}€ 📸🚀`}
          >Email</a
        >
      {:else}
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`https://api.whatsapp.com/send?phone=32474917815&text=Hello%20Jimmy%20%F0%9F%91%8B%0AJe%20suis%20int%C3%A9ress%C3%A9%20par%20la%20photo%20${
            photoFromPage.name
          }%2C%20j%27aimerais%20donc%20la%20faire%20r%C3%A9imprimer%20(Print%20No%20${
            photoFromPage.printNo + 1
          }%2F5)%20%F0%9F%98%8D%0AComment%20peut-on%20s%27arranger%20%3F%0AMerci%20et%20belle%20journ%C3%A9e%2C`}
          >WhatsApp*</a
        >
        <br />
        <a
          class="addtocart"
          target="_blank"
          rel="noreferrer"
          href={`mailto:jimmycabuy@hotmail.com?subject=${
            photoFromPage.name
          } - I would like to reprint (No ${photoFromPage.printNo + 1}/5) 📸🚀`}
          >Email*</a
        >
        <br />
        <p class="text_reprint">
          *The print No {photoFromPage.printNo}/5 has been sold and is currently
          out of stock, but feel free to contact me if you would like a reprint.
          You will then benefit the print No {photoFromPage.printNo + 1}/5.
        </p>
      {/if}
    {/if}
  </div>
</div>

<style>
  .addtocart {
    border: 2px solid #000;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 15rem;
    transition: 0.3s;
  }
  .addtocart:hover {
    color: #fff;
    background-color: #000;
  }

  .text_reprint {
    font-size: small;
  }

  .container_text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .block_text {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 65%;
  }
  p {
    font-size: 1rem;
    text-align: center;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 767px) {
    .block_text {
      width: fit-content;
    }
  }
</style>
