<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<main class="page">
  <h1 class="page-title mb-10">Crack 'n' Code Pre TOI18</h1>
  <h2 class="mb-20">
    TOI ใกล้เข้ามาแล้ว อยากจะทดสอบฝีมือตัวเองใช่มั้ย คุณคิดว่าคุณพร้อมแค่ไหนกัน
  </h2>

  <p class="text-3xl font-semibold text-red-500">
    การแข่งขันได้สิ้นสุดลงแล้ว ขอบคุณทุกคนที่ให้ความสนใจ
  </p>

  <div class="buttons">
    <button
      on:click={() =>
        window.open("https://github.com/crackncode-th/2206-tasks")}
    >
      <h2>อ่านโจทย์และเฉลย</h2>
    </button>
    <button on:click={() => goto("/ranking")}>
      <h2>ดูอันดับการแข่งขัน</h2>
    </button>
  </div>

  <h2 class="mt-20">การแข่งขัน Pre-TOI 18</h2>
  <p>
    จะจัดขึ้นในวันที่ <b>28-29 พฤษภาคม 2565</b> ผ่านระบบ CMS ซึ่งเป็นระบบเดียวกับที่ใช้ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ
    (IOI) การสอบคัดเลือกในค่ายสสวท รวมถึงการแข่งขันโอลิมปิกระดับชาติครั้งที่ 18 (TOI18)
    ที่จะมาถึงนี้
  </p>
</main>

<style lang="postcss">
  .buttons {
    @apply flex flex-row gap-2 justify-center select-none;
  }

  .buttons > button {
    @apply border rounded-lg px-5 py-2.5 border-red-500 text-red-500;
    @apply hover:text-white hover:bg-red-600 focus:ring-red-900 transition-all;
  }
</style>
