<script lang="ts">
  import { onMount } from "svelte";
  const targetTime = new Date("2022-05-28 19:00:00").getTime();
  let text = "...";
  function setTime() {
    const now = new Date().getTime();
    const diff = targetTime - now;
    const totalsec = Math.floor(diff / 1000);
    const sec = totalsec % 60;
    const totalmin = Math.floor(totalsec / 60);
    const min = totalmin % 60;
    const totalhour = Math.floor(totalmin / 60);
    text = `${totalhour} ชั่วโมง ${min} นาที ${sec} วินาที`;
  }
  onMount(() => {
    const interval = setInterval(setTime, 500);
    return () => clearInterval(interval);
  });
</script>

<p class="text-4xl font-bold text-red-500">{text}</p>
<p class="text-red-500 text-xl font-semibold mb-4">(เริ่มเวลา 19:00 น.)</p>
