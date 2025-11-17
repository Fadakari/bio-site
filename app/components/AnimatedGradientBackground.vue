<template>
  <div class="aurora-bg">
    <div class="aurora-orb one"></div>
    <div class="aurora-orb two"></div>
    <div class="aurora-orb three"></div>
    <div class="noise-overlay"></div>
  </div>
</template>

<style scoped>
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: #ffffff;
  overflow: hidden;
}

.aurora-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
  mix-blend-mode: multiply;
}

.one {
  top: -10%;
  left: -10%;
  width: 70vw;
  height: 70vw;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.911) 0%, rgba(255, 255, 255, 0) 70%);
  animation-duration: 1s;
  animation-name: float-1;
}

.two {
  top: 20%;
  right: -20%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(59, 131, 246, 0.918) 0%, rgba(255, 255, 255, 0) 70%);
  animation-duration: 1s;
  animation-name: float-2;
}

.three {
  bottom: -20%;
  left: 20%;
  width: 80vw;
  height: 80vw;
  background: radial-gradient(circle, rgba(79, 89, 104, 0.863) 0%, rgba(255, 255, 255, 0) 70%);
  animation-duration: 1s;
  animation-name: float-3;
}

.noise-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  pointer-events: none;
}

@keyframes float-1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(10%, 5%) scale(1.1); }
}
@keyframes float-2 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-10%, 10%) scale(0.9); }
}
@keyframes float-3 {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(5%, -5%) rotate(5deg); }
}
</style>