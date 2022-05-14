<script lang="ts">
  import "../font.css";
  import "../app.css";

  import { goto } from "$app/navigation";
  import Facebook from "../components/Facebook.svelte";

  const routes = {
    rules: "Rules",
    schedule: "Schedule",
    about: "About",
  };
  const handleFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=100069611934421");
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
        class="text-xl hover:bg-slate-300 p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>

<main class="p-4">
  <slot />
</main>

<footer class="flex justify-center mt-10">
  <div class="w-3/4">
    <hr class="mb-5" />
    <h2 class="text-lg font-bold">Crack 'n' Code Pre TOI18</h2>
    <p class="mb-2">"เดือนนี้คุณทำโจทย์ Crack 'n' Code แล้วหรือยัง"</p>
    <div
      on:click={handleFacebook}
      class="flex justify-center mb-5 hover:text-gray-800"
    >
      <Facebook />
    </div>
  </div>
</footer>
