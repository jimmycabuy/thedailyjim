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

{#if !messageSent}
  <div class="container_contact">
    <h2>Fill the form. It's easy</h2>

    <form
      action="https://getform.io/f/e0fcd5ea-3300-4659-8085-c6108ccbef1a"
      method="POST"
      id="form_container"
    >
      <div class="one_element_form">
        <label for="firstname">First Name*</label>
        <input type="text" name="firstname" id="firstname" required />
      </div>
      <div class="one_element_form">
        <label for="lastname">Last Name*</label>
        <input type="text" name="lastname" id="lastname" required />
      </div>
      <div class="one_element_form">
        <label for="email">Email*</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="one_element_form">
        <label for="phone">Phone Number</label>
        <input type="number" name="phone" id="phone" />
      </div>
      <div class="one_element_form">
        <label for="message">Your Message*</label>
        <textarea name="message" id="message" required />
      </div>
      <input type="hidden" name="_gotcha" style="display:none !important" />
      <div class="button_container">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
{:else if isLoading}
  <Spinner />
{:else}
  <div class="container_full_height">
    <p>
      I have received your message. Thank you very much. <br /> I will get back
      to you as soon as possible. <br /><br /> Have a beautiful day!
    </p>
    <a href="/" class="backhome">Go gack home</a>
  </div>
{/if}

<style>
  .container_contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .container_full_height {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    height: 80vh;
  }

  #form_container {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 1rem;
    width: 60vw;
  }
  .one_element_form {
    display: flex;
    flex-direction: column;
  }
  * {
    font-family: bd-supper, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  label {
    font-size: 0.9rem;
  }

  input {
    border: none;
    height: 2.5rem;
    border: 2px solid #000;
    border-radius: 0%;
    font-size: 0.9rem;
    padding-left: 0.5rem;
  }
  textarea {
    resize: none;
    border: none;
    border: 2px solid #000;
    height: 8rem;
    border-radius: 0%;
    font-size: 0.9rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  .button_container {
    display: flex;
    justify-content: center;
  }
  button {
    background: #fff;
    border: 2px solid #000;
    font-family: bd-supper, sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    padding: 0.5rem;
    width: 15rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #000;
    font-size: 0.9rem;
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
    border: 2px solid #000;
    width: 10rem;
    font-family: bd-supper, sans-serif;
    font-weight: 700;
    font-style: normal;
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
    font-weight: 700 !important;
  }

  @media (max-width: 767px) {
    #form_container {
      width: 95vw;
    }
    .container_full_height {
      height: 70vh;
    }
  }
</style>
