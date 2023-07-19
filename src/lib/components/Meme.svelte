<script>
  export let meme;
  //   if (meme.tags) meme.tags = meme.tags.split(",");
  console.log(meme);
</script>

<div class="card card-compact bg-base-200 m-4 shadow">
  <figure>
    {#if meme.type == "file"}
      <img src={meme.content} alt={meme.name} />
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">{meme.title}</h2>
    <!-- <div class="flex justify-evenly">
      {#if meme.tags}
        {#each meme.tags as tag}
          <span class="badge">{tag}</span>
        {/each}
      {/if}
    </div> -->
    {#if meme.type == "url"}
      <a href={meme.content}>{meme.content}</a>
    {/if}
  </div>
</div>
