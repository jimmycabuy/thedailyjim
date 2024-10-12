<script>
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let fullMonth = allMonths[month];
</script>

<div>
  <p class="footer_text">
    © {fullMonth}
    {year} by
    <a
      class="footer_text"
      href="https://www.jimmycabuy.com/"
      target="_blank"
      rel="noreferrer"
    >
      Jimmy Cabuy
    </a>
  </p>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  p {
    margin: 1rem;
    text-align: justify;
  }

  /* smartphone  */
  @media (max-width: 767px) {
    p {
      font-size: 0.9rem;
    }
  }
</style>
