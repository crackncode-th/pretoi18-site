<script lang="ts">
  import _users from "$data/data.json";

  import Chevron from "$icons/Chevron.svelte";

  let users = _users;
  const gold_medal = 8;
  const silver_medal = 23;
  const bronze_medal = 45;

  const columns = [
    "Rank",
    "Name",
    "multiverse",
    "isekai",
    "boringpath",
    "Day 1",
    "cover",
    "explosion",
    "carnival",
    "Day 2",
    "Global",
  ];

  function getMedalColor(rank: number) {
    // from THACO
    if (rank <= gold_medal) {
      return "bg-yellow-300";
    } else if (rank <= silver_medal) {
      return "bg-gray-300";
    } else if (rank <= bronze_medal) {
      return "bg-orange-300";
    }
    return "bg-sky-200";
  }

  let current_key = "Global";
  let ascending = false;

  function cmp<T>(a: T, b: T, key: string, flipped: boolean, fallback = "") {
    if (a[key] < b[key]) {
      return flipped ? 1 : -1;
    } else if (a[key] > b[key]) {
      return flipped ? -1 : 1;
    }
    return fallback ? cmp(a, b, fallback, true) : 0;
  }

  function sortKey(key: string) {
    return () => {
      if (key == current_key) {
        ascending = !ascending;
      } else {
        current_key = key;
        ascending = false;
      }

      users = users.sort((a, b) => cmp(a, b, key, !ascending, "Global"));
    };
  }
</script>

<main class="mx-auto">
  <h1 class="page-title">Ranking</h1>
  <p>มีผู้เข้าแข่งขันที่ส่งอย่างน้อยหนึ่งครั้งทั้งหมด 92 ท่าน</p>

  <p class="text-green-500 text-3xl">ผลคะแนนอย่างเป็นทางการ</p>

  <div class="wrapper w-full 2xl:min-w-[1250px] mx-auto my-8 overflow-x-scroll">
    <table class="mx-auto">
      <thead>
        {#each columns as column}
          <th
            class:selected-col={current_key == column}
            on:click={column == "Rank" ? null : sortKey(column)}
          >
            <div>
              {column}
              {#if column != "Rank"}
                <Chevron ascending={ascending && current_key == column} />
              {/if}
            </div>
          </th>
        {/each}
      </thead>
      <tbody class="text-black">
        {#each users as user}
          <tr class={getMedalColor(user.Rank)}>
            {#each columns as column}
              <td
                class:font-bold={column.startsWith("Day") || column == "Global"}
              >
                {#if column == "Name" && user.Name == ""}
                  <span class="text-slate-600">&lt;Anonymous&gt;</span>
                {:else}
                  {user[column]}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style lang="postcss">
  th,
  td {
    @apply text-base lg:text-lg p-1 lg:p-2 border;
  }

  th {
    @apply cursor-pointer transition-all select-none;
  }

  th > div {
    @apply flex flex-row gap-1 items-center justify-center;
  }

  .selected-col {
    @apply bg-pink-300 text-black;
  }
</style>
