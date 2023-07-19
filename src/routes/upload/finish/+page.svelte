<script>
  import { beforeNavigate } from "$app/navigation";

  import { meme } from "$lib/stores.js";
  import { saveMeme } from "$lib/firebase.js";

  beforeNavigate(() => {
    alert("before navigate");
    saveMeme().then(() => {});
  });
</script>

<div class="flex flex-col justify-center items-center">
  <h2 class="text-xl">{$meme.title}</h2>
  <div class="flex flex-wrap">
    {#if $meme.tags}
      {#each $meme.tags as tag}
        <span class="badge badge-primary m-1">{tag}</span>
      {/each}
    {/if}
  </div>
  <div class="flex justify-center">
    {#if $meme.type == "file"}
      <img src={$meme.content} alt="" class="max-w-xs" />
    {:else if $meme.type == "url"}
      <a href={$meme.content}>{$meme.content}</a>
    {/if}
  </div>
</div>
<div class="flex items-center m-10">
  <a href="/" class="btn btn-primary m-auto">Go Home</a>
</div>
