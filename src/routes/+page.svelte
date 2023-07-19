<script>
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import Meme from "$lib/components/Meme.svelte";

  import { db, memeList } from "$lib/firebase.js";
  $: console.log($memeList);
</script>

<AuthCheck>
  <main>
    <a href="/upload" class="btn btn-primary">Upload</a>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each $memeList as meme}
        <Meme {meme} />
      {/each}
    </div>
  </main>
</AuthCheck>
