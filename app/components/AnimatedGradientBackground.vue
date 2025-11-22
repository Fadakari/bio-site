<template>
  <div class="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
    
    <div class="absolute inset-0 bg-slate-50 dark:bg-dark-950 transition-colors duration-700 ease-in-out"></div>

    <div class="blobs-container absolute inset-0 w-full h-full">
      <div class="blob blob-1 bg-red-300 dark:bg-red-600/50"></div>
      <div class="blob blob-2 bg-blue-300 dark:bg-blue-600/50"></div>
      <div class="blob blob-3 bg-purple-300 dark:bg-purple-600/50"></div>
      <div class="blob blob-4 bg-yellow-300 dark:bg-teal-600/50"></div>
      <div class="blob blob-5 bg-pink-300 dark:bg-pink-600/50"></div>
    </div>

    <div class="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const blobs = gsap.utils.toArray(".blob");

    // تنظیمات اولیه و انیمیشن حرکت
    blobs.forEach((blob) => {
      gsap.set(blob, {
        xPercent: -100, 
        yPercent: -100,
        x: gsap.utils.random(-1000, 500),
        y: gsap.utils.random(200, window.innerHeight),
        scale: gsap.utils.random(0.8, 1.5),
        opacity: 0.8 
      });

      function animateBlob() {
        gsap.to(blob, {
          duration: gsap.utils.random(1, 2), // حرکت خیلی نرم
          x: gsap.utils.random(-1000, 500),
          y: gsap.utils.random(200, window.innerHeight),
          rotation: gsap.utils.random(-180, 180),
          scale: gsap.utils.random(0.8, 1.8),
          ease: "sine.inOut",
          onComplete: animateBlob
        });
      }
      animateBlob();
    });
  });
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
/* فقط استایل‌های ضروری برای سایز و بلور */
.blobs-container {
  filter: blur(80px); /* بلور شدید برای ادغام رنگ‌ها */
}

.blob {
  position: absolute;
  border-radius: 50%;
  /* سایز توپ‌ها */
  width: 25vw; 
  height: 25vw;
  min-width: 300px; /* حداقل سایز برای موبایل */
  min-height: 300px;
  transition: background-color 0.7s ease; /* تغییر رنگ نرم هنگام تغییر تم */
}
</style>