<script>
  import Countdown from "$components/Countdown.svelte";
</script>

<main class="page">
  <h1 class="page-title mb-10">Crack 'n' Code Pre TOI18</h1>
  <h2 class="mb-20">
    TOI ใกล้เข้ามาแล้ว อยากจะทดสอบฝีมือตัวเองใช่มั้ย คุณคิดว่าคุณพร้อมแค่ไหนกัน
  </h2>

  {#if new Date().getTime() <= new Date("2022-05-28 19:00:00").getTime()}
    <p class="text-3xl font-semibold text-red-500">
      หมดเขตรับสมัครแล้ว จะเริ่มแข่งขันวันที่ 1 ในอีก
    </p>
    <Countdown />
  {:else}
    <p class="text-3xl font-semibold text-red-500">
      หมดเขตรับสมัครแล้ว การแข่งขันวันที่ 1 ได้เริ่มขึ้นแล้ว
    </p>
  {/if}

  <button
    class="border rounded-lg px-5 py-2.5 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900 transition-all select-none"
    on:click={() => window.open("http://209.97.175.45/")}
  >
    <h2>เข้าระบบเกรดเดอร์</h2>
  </button>

  <h2 class="mt-20">การแข่งขัน Pre-TOI 18</h2>
  <p>
    จะจัดขึ้นในวันที่ <b>28-29 พฤษภาคม 2565</b> ผ่านระบบ CMS ซึ่งเป็นระบบเดียวกับที่ใช้ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ
    (IOI) การสอบคัดเลือกในค่ายสสวท รวมถึงการแข่งขันโอลิมปิกระดับชาติครั้งที่ 18 (TOI18)
    ที่จะมาถึงนี้
  </p>
</main>
