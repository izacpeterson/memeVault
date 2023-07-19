<script>
  import { meme } from "$lib/stores.js";
  import { beforeNavigate } from "$app/navigation";

  import { db, user, saveMeme } from "$lib/firebase.js";
  import { doc, getDoc, setDoc } from "firebase/firestore";

  // $: meme.update((m) => {
  //   m.type = type;
  //   m.title = title;
  //   m.tags = tags.split(",");
  //   return m;
  // });
  beforeNavigate(() => {
    // alert("before navigate");
    //saveMeme();
  });
</script>

<form action="" class="flex flex-col">
  <h2 class="text-xl">Meme Type</h2>

  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">File Upload</span>
      <input type="radio" name="radio-10" bind:group={$meme.type} value="file" class="radio checked:bg-red-500" />
    </label>
  </div>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">URL</span>
      <input type="radio" name="radio-10" bind:group={$meme.type} value="url" class="radio checked:bg-blue-500" />
    </label>
  </div>
  <h2 class="text-xl">Details</h2>
  <label for="">
    <span class="label-text">Title</span>
    <input type="text" placeholder="OMG SO FUNNY LOL" bind:value={$meme.title} class="input input-bordered w-full max-w-xs" />
  </label>
  <label for="">
    <span class="label-text">Tags (comma seperated)</span>
    <input type="text" placeholder="cats, gif" class="input input-bordered w-full max-w-xs" bind:value={$meme.tags} />
  </label>
  <div class="card-actions justify-end mt-4">
    <button on:click={saveMeme} class="btn">Submit</button>
    <a href="/upload/content" class="btn btn-primary">Next</a>
  </div>
</form>
