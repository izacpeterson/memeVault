<script>
  import { meme } from "$lib/stores.js";
  import { saveMeme, user, storage, db } from "$lib/firebase.js";
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  let loading = false;

  async function upload(e) {
    loading = true;
    if ($meme.type == "file") {
      e.preventDefault();
      const file = e.target.files[0];
      let url = URL.createObjectURL(file);
      $meme.content = url;

      let fileExtension = file.name.split(".").pop();

      console.log(file);

      const storageRef = ref(storage, $meme.id + "." + fileExtension);
      const result = await uploadBytes(storageRef, file);

      url = await getDownloadURL(result.ref);
      $meme.content = url;
      // saveMeme();
      loading = false;
    } else if ($meme.type == "url") {
      $meme.content = e.target.value;
      // saveMeme();
      loading = false;
    }

    console.log($meme);
  }
</script>

<form on:submit={upload} class="flex flex-col">
  <h2 class="text-xl">Content</h2>
  {#if $meme.type == "file"}
    <label for="">
      <span class="label-text">File</span>
      <input type="file" name="" id="" class="file-input file-input-primary" on:change={upload} />
    </label>
  {:else if $meme.type == "url"}
    <label for="">
      <span class="label-text">URL</span>
      <input type="text" placeholder="https://google.com" class="input input-bordered w-full max-w-xs" on:change={upload} />
    </label>
  {/if}
  {#if !loading}
    <div class="card-actions justify-end mt-4">
      <a href="/upload/finish" class="btn btn-primary">Finish</a>
      <!-- <button class="btn btn-primary">Finish</button> -->
    </div>
  {:else}
    <p class="text-center m-4 text-xl text-warning flex items-end justify-center">Uploading Data <span class="mx-1 loading loading-dots loading-xs" /></p>
  {/if}
</form>
<!-- {$meme.id} -->
