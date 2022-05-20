<script lang="ts">
  import "../app.css";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import Facebook from "$icons/Facebook.svelte";
  import GitHub from "$icons/GitHub.svelte";
  import Instagram from "$icons/Instagram.svelte";
  import List from "$icons/List.svelte";

  import ext from "$lib/ext";
  import { onMount } from "svelte";

  const routes = {
    "/": "Home",
    rules: "Rules",
    schedule: "Schedule",
    about: "About",
  };

  let popup = false;

  onMount(() => {
    window.addEventListener("click", () => (popup = false));
  });
</script>

<nav class="flex flex-row justify-between items-center p-4 rwidth mx-auto">
  <div class="left">
    <img
      on:click={() => {
        goto("/");
      }}
      class="cursor-pointer"
      width="96"
      src="crackncode.webp"
      alt="crack n code logo"
    />
  </div>

  <!-- Desktop Nav -->
  <div
    class="links px-4 flex-row hidden sm:flex justify-end items-center gap-2"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'bg-slate-800'
          : 'hover:bg-slate-700'} p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- Mobile Nav -->
  <div
    class="inline sm:hidden bg-slate-800 hover:bg-slate-600 p-2 rounded"
    on:click={() => setTimeout(() => (popup = !popup), 10)}
  >
    <List />
  </div>

  <div
    class="bg-slate-800 rounded absolute top-4 p-2 flex flex-col {popup
      ? 'right-2 opacity-100'
      : '-right-28 opacity-0'} transition-all"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'text-pink-500'
          : 'text-white'} p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>

<main class="p-4 min-h-[calc(100vh-18rem)]">
  <slot />
</main>

<footer class="flex flex-col justify-center items-center my-5 w-2/3 mx-auto">
  <hr class="mb-5 w-full" />
  <h2 class="text-lg font-bold">Crack 'n' Code Pre TOI18</h2>
  <p class="mb-2">"เดือนนี้คุณทำโจทย์ Crack 'n' Code แล้วหรือยัง"</p>

  <div class="icons flex flex-row justify-center gap-4">
    <a href="https://www.facebook.com/profile.php?id=100069611934421" {...ext}>
      <Facebook />
    </a>
    <a href="https://www.instagram.com/crackncodeth" {...ext}>
      <Instagram />
    </a>
    <a href="https://github.com/crackncode-th" {...ext}>
      <GitHub />
    </a>
  </div>
</footer>

<style lang="postcss">
  .icons > a {
    @apply text-white hover:text-gray-400 transition-all;
  }
</style>
