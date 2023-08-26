<div class="loading">
  <span class="loader" />
</div>

<style>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #000;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
