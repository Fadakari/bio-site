<template>
  <div class="gradient-bg">
    <div class="gradients-container">
      <div v-for="n in 3" :key="n" :class="`blob color-${n}`"></div>
    </div>
    <div class="noise-overlay"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  const blobs = gsap.utils.toArray(".blob");

  blobs.forEach((blob) => {
    gsap.to(blob, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      scale: "random(0.8, 1.2)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
});
</script>

<style scoped>
.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #f8fafc;
  overflow: hidden;
}

.gradients-container {
  filter: blur(60px);
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

.blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  mix-blend-mode: multiply;
}

.color-1 {
  width: 50vw;
  height: 50vw;
  background: #d2051e;
  top: -10%;
  left: -10%;
  opacity: 0.15;
}

.color-2 {
  width: 40vw;
  height: 40vw;
  background: #94a3b8;
  bottom: -10%;
  right: -10%;
  opacity: 0.2;
}

.color-3 {
  width: 30vw;
  height: 30vw;
  background: #cbd5e1;
  top: 40%;
  left: 40%;
  opacity: 0.3;
}

.noise-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
</style>