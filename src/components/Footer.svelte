<script>
  let date = new Date();
  let year = date.getFullYear();
  let mounth = date.getMonth();
  let fullmounth;

  if (mounth === 0) {
    fullmounth = "January";
  } else if (mounth === 1) {
    fullmounth = "February";
  } else if (mounth === 2) {
    fullmounth = "March";
  } else if (mounth === 3) {
    fullmounth = "April";
  } else if (mounth === 4) {
    fullmounth = "May";
  } else if (mounth === 5) {
    fullmounth = "June";
  } else if (mounth === 6) {
    fullmounth = "July";
  } else if (mounth === 7) {
    fullmounth = "August";
  } else if (mounth === 8) {
    fullmounth = "September";
  } else if (mounth === 9) {
    fullmounth = "October";
  } else if (mounth === 10) {
    fullmounth = "November";
  } else if (mounth === 11) {
    fullmounth = "December";
  }

  let isLoading = true;

  setTimeout(() => {
    isLoading = false;
  }, 700);
</script>

{#if !isLoading}
  <div>
    <p class="footer_text">
      © {fullmounth}
      {year} by
      <a
        class="footer_text"
        href="https://jimmycabuy.com/"
        target="_blank"
        rel="noreferrer"
      >
        Jimmy Cabuy
      </a>
    </p>
  </div>
{/if}

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    margin: 1rem;
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
  }

  /* smartphone  */
  @media (max-width: 767px) {
    p {
      font-size: 0.9rem;
    }
  }
</style>
