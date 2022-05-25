<script lang="ts">
  import { onMount } from "svelte";

  const targetTime = new Date("2022-05-26 23:59:59").getTime();
  let text = "เหลือเวลาอีก ...";

  function setTime() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    const totalsec = Math.floor(diff / 1000);
    const sec = totalsec % 60;
    const totalmin = Math.floor(totalsec / 60);
    const min = totalmin % 60;
    const totalhour = Math.floor(totalmin / 60);

    text = `เหลือเวลาอีก ${totalhour} ชั่วโมง ${min} นาที ${sec} วินาที`;
  }

  onMount(() => {
    const interval = setInterval(setTime, 500);

    return () => clearInterval(interval);
  });
</script>

<p class="text-3xl font-bold text-red-500">{text}</p>
<p class="text-red-500 text-xl font-semibold mb-4">
  หมดเขตรับสมัคร 26 พฤษภาคม 2565 เวลา 23:59
</p>
