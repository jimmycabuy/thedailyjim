<script>
  export let folder;
</script>

<div>
  <a href={ "/" + folder} class="go_back">
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 275"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z"
      />
    </svg>
    {folder.toUpperCase()}
  </a>
</div>

<style>
  .go_back {
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    width: fit-content;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-left: 1rem;
    gap: 0.3rem;
  }
</style>
