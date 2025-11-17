<template>
  <div class="aurora-bg">
    <div class="aurora-light one"></div>
    <div class="aurora-light two"></div>
    <div class="aurora-light three"></div>
    <div class="grain-overlay"></div>
  </div>
</template>

<style scoped>
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: #f1f5f9;
  overflow: hidden;
}

.aurora-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

.one {
  top: -10%;
  left: -10%;
  width: 70vw;
  height: 70vw;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(255,255,255,0) 70%);
  animation-duration: 12s;
}

.two {
  bottom: -20%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(255,255,255,0) 70%);
  animation-duration: 15s;
  animation-delay: -2s;
}

.three {
  top: 40%;
  left: 40%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(148, 163, 184, 0.2) 0%, rgba(255,255,255,0) 70%);
  animation-duration: 18s;
  animation-delay: -5s;
}

.grain-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  pointer-events: none;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(5%, 5%) scale(1.1); }
}
</style>