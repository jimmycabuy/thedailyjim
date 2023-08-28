<script>
  export let folder;
</script>

<div>
  <a href={folder === "home" ? "/" : "/" + folder} class="go_back">
    <img
      src="../../../assets/asset/previous.png"
      alt="previous"
      class="arrow_back"
      preload
    />
    {folder.toUpperCase()}
  </a>
</div>

<style>
  .go_back {
    font-family: "bd-supper", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    align-items: center;
    margin-left: -5px;
    width: fit-content;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-left: 1rem;
  }
  .arrow_back {
    height: 20px;
    width: 20px;
    padding-bottom: 3px;
  }
</style>
