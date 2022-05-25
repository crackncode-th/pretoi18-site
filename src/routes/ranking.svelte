<script lang="ts">
  import { tasks, users as _users } from "$data/test_data.g.json";

  import Chevron from "$icons/Chevron.svelte";

  let users = _users;
  const contestants = users.length;
  const gold_medal = Math.round(contestants / 12);
  const silver_medal = Math.round(contestants / 4);
  const bronze_medal = Math.round(contestants / 2);

  function getMedalColor(rank: number) {
    // from THACO
    if (rank <= gold_medal) {
      return "bg-yellow-300";
    } else if (rank <= silver_medal) {
      return "bg-gray-300";
    } else if (rank <= bronze_medal) {
      return "bg-orange-300";
    }
    return "text-white";
  }

  let current_key = "rank";
  let ascending = true;

  function cmp<T>(a: T, b: T, key: string, flipped: boolean, fallback = "") {
    if (a[key] < b[key]) {
      return flipped ? 1 : -1;
    } else if (a[key] > b[key]) {
      return flipped ? -1 : 1;
    }
    return fallback ? cmp(a, b, fallback, flipped) : 0;
  }

  function sortKey(key: string) {
    return () => {
      if (key == current_key) {
        ascending = !ascending;
      } else {
        current_key = key;
        ascending = true;
      }

      users = users.sort((a, b) => cmp(a, b, key, !ascending, "Global"));
    };
  }
</script>

<main class="page">
  <h1 class="page-title">Ranking</h1>

  <table class="mx-auto m-8">
    <thead>
      <th class:selected-col={current_key == "rank"} on:click={sortKey("rank")}>
        <div>
          Rank
          <Chevron ascending={ascending || current_key != "rank"} />
        </div>
      </th>
      <th
        class:selected-col={current_key == "Username"}
        on:click={sortKey("Username")}
      >
        <div>
          User
          <Chevron ascending={ascending || current_key != "Username"} />
        </div>
      </th>
      <th class:selected-col={current_key == "User"} on:click={sortKey("User")}>
        <div>
          Display Name <Chevron
            ascending={ascending || current_key != "User"}
          />
        </div>
      </th>
      {#each tasks as task}
        <th class:selected-col={current_key == task} on:click={sortKey(task)}>
          <div>
            {task}
            <Chevron ascending={ascending || current_key != task} />
          </div>
        </th>
      {/each}
      <th
        class:selected-col={current_key == "Global"}
        on:click={sortKey("Global")}
      >
        <div>
          Global
          <Chevron ascending={ascending || current_key != "Global"} />
        </div>
      </th>
    </thead>
    <tbody class="text-black">
      {#each users as user}
        <tr class={getMedalColor(user.rank)}>
          <td>{user.rank}</td>
          <td>{user.Username}</td>
          <td>{user.User}</td>
          {#each tasks as task}
            <td>{user[task]}</td>
          {/each}
          <td>{user.Global}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style lang="postcss">
  th,
  td {
    @apply text-lg lg:text-xl p-0.5 lg:p-2 border;
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
