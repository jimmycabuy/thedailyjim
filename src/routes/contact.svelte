<script>
  import { onMount } from "svelte";
  import Spinner from "../components/Spinner.svelte";
  let messageSent = false;
  let isLoading = true;

  onMount(() => {
    const formElement = document.querySelector("#form_container");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new URLSearchParams(new FormData(formElement));
      fetch("https://getform.io/f/e0fcd5ea-3300-4659-8085-c6108ccbef1a", {
        method: "POST",
        body: data,
      });
      setTimeout(() => {
        isLoading = false;
      }, 1000);
      messageSent = true;
    });
  });
</script>

<div class="container_contact">
  {#if !messageSent}
    <h2>Fill the form. It's easy</h2>

    <form
      action="https://getform.io/f/e0fcd5ea-3300-4659-8085-c6108ccbef1a"
      method="POST"
      id="form_container"
    >
      <input type="text" name="firstname" placeholder="First Name" required />
      <input type="text" name="lastname" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="number" name="phone" placeholder="Phone Number" />
      <textarea name="message" placeholder="Write your message" required />
      <input type="hidden" name="_gotcha" style="display:none !important" />
      <button type="submit">Send</button>
    </form>
  {:else if isLoading}
    <Spinner />
  {:else}
    <p>
      I have received your message. Thank you very much. <br /> I will get back
      to you as soon as possible. <br /><br /> Have a beautiful day!
    </p>
    <a href="/" class="backhome">Go gack home</a>
  {/if}
</div>

<style>
  .container_contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  #form_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 60vw;
  }
  * {
    font-family: "GT America Black", sans-serif;
  }

  input {
    border: none;
    height: 3rem;
    border-bottom: 2px solid #888;
    width: 100%;
    border-radius: 0%;
    font-size: 0.8rem;
  }
  textarea {
    resize: none;
    border: none;
    border-bottom: 2px solid #888;
    margin-top: 1rem;
    height: 10rem;
    width: 100%;
    border-radius: 0%;
    font-size: 0.8rem;

  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  button {
    background: #fff;
    border: 1px solid #000;
    font-family: "GT America Regular", sans-serif;
    text-align: center;
    padding: 0.5rem;
    width: 15rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #000;
  }
  button:hover {
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  p {
    text-align: center;
  }

  .backhome {
    border: 1px solid #000;
    width: 10rem;
    font-family: "GT America Regular", sans-serif;
    text-align: center;
    padding: 0.5rem;
    width: 11rem;
  }
  .backhome:hover {
    color: #fff;
    background-color: #000;
  }
  h2 {
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    #form_container {
      width: 80vw;
    }
  }
</style>
