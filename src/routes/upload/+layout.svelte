<script>
  import { page } from "$app/stores";
  import AuthCheck from "$lib/components/AuthCheck.svelte";
</script>

<AuthCheck>
  <nav class="flex w-full items-center flex-col">
    <ul class="steps lg:w-1/2">
      <a href="/upload" class="step step-primary">Details</a>
      <a href="/upload/content" class="step" class:step-primary={$page.route.id?.includes("content") || $page.route.id?.includes("details") || $page.route.id?.includes("finish")}>Content</a>
      <!-- <a href="/upload/details" class="step" class:step-primary={$page.route.id?.includes("details") || $page.route.id?.includes("finish")}>Details</a> -->
      <a href="/upload/finish" class="step" class:step-primary={$page.route.id?.includes("finish")}>Finish</a>
    </ul>
  </nav>

  <main class="card m-4 bg-base-200 shadow-xl">
    <div class="card-body">
      <h1 class="card-title">New Meme</h1>
      <slot />
    </div>
  </main>
</AuthCheck>
