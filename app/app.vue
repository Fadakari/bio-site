<script setup>
import { ref, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import '~/assets/styles/main.css';

import NavBar from './components/NavBar.vue';
import HomeSection from './components/sections/HomeSection.vue';
import ServicesSection from './components/sections/ServicesSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';

const currentTab = ref('home');
const components = {
  home: HomeSection,
  services: ServicesSection,
  contact: ContactSection
};

const enterAnimation = (el, done) => {
  if (currentTab.value === 'home') {
    gsap.fromTo(el, 
      { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'back.out(1.7)', onComplete: done }
    );
  } 
  else if (currentTab.value === 'services') {
    gsap.fromTo(el.children, 
      { y: 100, opacity: 0, rotationX: -15 },
      { y: 0, opacity: 1, rotationX: 0, stagger: 0.1, duration: 0.8, ease: 'power4.out', onComplete: done }
    );
  } 
  else {
    gsap.fromTo(el,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', onComplete: done }
    );
  }
};

const leaveAnimation = (el, done) => {
  gsap.to(el, { opacity: 0, y: -20, filter: 'blur(5px)', duration: 0.3, ease: 'power1.in', onComplete: done });
};
</script>

<template>
  <div class="main-wrapper font-sans text-slate-800 overflow-hidden min-h-screen">
    
    <AnimatedGradientBackground />
    
    <NavBar :active="currentTab" @change="(id) => currentTab = id" />

    <main class="relative z-10 container mx-auto px-4 pt-32 pb-10 flex flex-col items-center min-h-screen">
      
      <Transition 
        mode="out-in" 
        :css="false" 
        @enter="enterAnimation" 
        @leave="leaveAnimation">
        
        <component :is="components[currentTab]" :key="currentTab" />
        
      </Transition>
      
    </main>
  </div>
</template>

<style>
.main-wrapper {
  position: relative;
  width: 100%;
}
</style>