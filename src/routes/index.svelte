<script lang="ts">
  const handleLink = () => {
    window.open(
      "https://docs.google.com/forms/d/17Vf0IOAQ9NY8uC472wbZdhx0hFEBMMPiB0IDMxbG_E4/viewform?edit_requested=true"
    );
  };
</script>

<main class="page">
  <h1 class="text-5xl sm:text-6xl font-bold mb-10">Crack 'n' Code Pre TOI18</h1>
  <h2 class="mb-20">
    TOI ใกล้เข้ามาแล้ว อยากจะทดสอบฝีมือตัวเองใช่มั้ย คุณคิดว่าคุณพร้อมแค่ไหนกัน
    กดปุ่มลงทะเบียนแข่งด้านล่างเลยยย
  </h2>
  <button
    on:click={handleLink}
    class="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900 transition-all duration-100"
  >
    <h2>ลงทะเบียน</h2>
  </button>

  <h2 class="mt-40">การแข่งขัน Pre-TOI 18</h2>
  <p>
    จะจัดขึ้นในวันที่ 28-29 พฤษภาคม 2565 ผ่านระบบ CMS
    ซึ่งเป็นระบบเดียวกับที่ใช้ในการแข่งขันคอมพิวเตอร์โอลิมปิกระหว่างประเทศ (IOI)
    และการสอบคัดเลือกในค่ายสสวท
  </p>
</main>

<style lang="postcss">
  h2 {
    @apply text-3xl font-bold;
  }

  p {
    @apply text-xl lg:text-2xl my-4;
  }
</style>
