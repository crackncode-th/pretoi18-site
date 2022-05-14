<script lang="ts">
  import "../app.css";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const routes = {
    "/": "Home",
    rules: "Rules",
    schedule: "Schedule",
    about: "About",
  };
</script>

<nav
  class="flex flex-row justify-between items-center p-4 w-full lg:w-2/3 mx-auto"
>
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

  <div class="right px-4 flex flex-row justify-end items-center gap-2">
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
</nav>

<main class="px-4 py-8">
  <slot />
</main>
