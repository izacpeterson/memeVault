<script>
  import "../app.css";
  import { meme } from "$lib/stores.js";

  let darkTheme = true;
  let theme;
  $: darkTheme ? (theme = "dark") : (theme = "light");
</script>

<main class="min-h-screen pt-4" data-theme={theme}>
  <!-- <h1 class="text-2xl text-center">Meme Vault</h1> -->

  <slot />
  <!-- formatted code pre tag for the meme json object -->

  <footer class="fixed bottom-0 left-0 w-full flex justify-evenly">
    <input type="checkbox" name="" id="" bind:checked={darkTheme} class="toggle" />
    <a href="/">home</a>
  </footer>
</main>
