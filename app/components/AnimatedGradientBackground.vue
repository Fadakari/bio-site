<template>
  <div class="gradient-bg">
    <div class="gradients-container">
      <div v-for="n in 3" :key="n" :class="`blob color-${n}`"></div>
    </div>
    <div class="noise-overlay"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const blobs = gsap.utils.toArray(".blob");
    const width = window.innerWidth;
    const height = window.innerHeight;


    function moveBlob(blob) {
      gsap.to(blob, {


        x: gsap.utils.random(-width / 2, width / 2),
        y: gsap.utils.random(-height / 2, height / 2),
        

        scale: gsap.utils.random(0.5, 1),
        
        duration: gsap.utils.random(1, 7),
        ease: "sine.inOut",
        

        onComplete: () => moveBlob(blob)
      });
    }

    blobs.forEach(blob => moveBlob(blob));
  });
});

onUnmounted(() => {
  ctx && ctx.revert();
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
  filter: blur(70px);
  width: 100%;
  height: 100%;
  opacity: 0.7;
}

.blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  mix-blend-mode: multiply;
  

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.color-1 {
  width: 60vw;
  height: 60vw;
  background: #d2051e;
  opacity: 0.25;
}

.color-2 {
  width: 50vw;
  height: 50vw;
  background: #3872c4;
  opacity: 0.3;
}

.color-3 {
  width: 40vw;
  height: 40vw;
  background: #8d0e0e;
  opacity: 0.4;
}

.noise-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
</style>