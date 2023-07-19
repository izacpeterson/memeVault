<script>
  import { user } from "$lib/firebase.js";
</script>

{#if $user}
  <slot />
{:else}
  <div class="card bg-base-200 m-8">
    <div class="card-body items-center">
      <p>You must sign in to view this page</p>
      <a class="btn btn-primary" href="/auth">Login</a>
    </div>
  </div>
{/if}
