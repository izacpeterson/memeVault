<script>
  import { auth, user } from "$lib/firebase.js";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
  }
</script>

<main class="card shadow-xl m-6 bg-base-200">
  <div class="card-body items-center">
    {#if !$user}
      <h2 class="card-title">Login</h2>
      <div class="card-actions">
        <button on:click={signInWithGoogle} class="btn btn-primary">Sign in with Google</button>
      </div>
    {:else}
      <p>Welcome to the meme zone,</p>
      <p class="text-success">{$user.displayName}</p>
      <div class="card-actions justify-end">
        <a href="/" class="btn btn-primary">See the Memes</a>
        <button
          on:click={() => {
            signOut(auth);
          }}
          class="btn btn-warning">Sign out</button
        >
      </div>
    {/if}
  </div>
</main>
