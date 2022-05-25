<script lang="ts">
  import Countdown from "$components/Countdown.svelte";

  const pastRegistration =
    new Date().getTime() >= new Date("2022-05-26 23:59:59").getTime();
</script>

<main class="page">
  <h1 class="page-title mb-10">Crack 'n' Code Pre TOI18</h1>
  <h2 class="mb-20">
    TOI ใกล้เข้ามาแล้ว อยากจะทดสอบฝีมือตัวเองใช่มั้ย คุณคิดว่าคุณพร้อมแค่ไหนกัน
    กดปุ่มลงทะเบียนแข่งด้านล่างเลยยย
  </h2>

  <div class="buttons flex flex-row justify-center gap-2">
    <button
      on:click={() =>
        window.open(
          "https://docs.google.com/forms/d/17Vf0IOAQ9NY8uC472wbZdhx0hFEBMMPiB0IDMxbG_E4"
        )}
      class:hidden={pastRegistration}
    >
      <h2>ลงทะเบียน</h2>
    </button>
    <button
      class="hidden สวัสดีวัยรุ่น-F12-ลองกดปุ่มนี้ดูสิ"
      on:click={() =>
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
    >
      <h2>เข้าระบบเกรดเดอร์</h2>
    </button>
  </div>

  <div class:hidden={pastRegistration}>
    <Countdown />
  </div>

  <h2 class="mt-20">การแข่งขัน Pre-TOI 18</h2>
  <p>
    จะจัดขึ้นในวันที่ <b>28-29 พฤษภาคม 2565</b> ผ่านระบบ CMS ซึ่งเป็นระบบเดียวกับที่ใช้ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ
    (IOI) การสอบคัดเลือกในค่ายสสวท รวมถึงการแข่งขันโอลิมปิกระดับชาติครั้งที่ 18 (TOI18)
    ที่จะมาถึงนี้
  </p>
</main>

<style lang="postcss">
  .buttons > button {
    @apply border rounded-lg px-5 py-2.5 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900 transition-all select-none;
  }
</style>
