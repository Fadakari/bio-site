<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
// آدرس CSS (طبق آخرین اصلاحی که انجام دادیم)
import '../assets/styles/main.css';

import NavBar from './components/NavBar.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';
// ایمپورت مستقیم کامپوننت‌ها (چک کنید نام فایل‌ها دقیق باشد)
import HomeSection from './components/HomeSection.vue'; 
import ServicesSection from './components/ServicesSection.vue';
import ContactSection from './components/ContactSection.vue'; // این فایل را هم بسازید (ساده)

const currentTab = ref('home');

// نگاشت تب‌ها به کامپوننت‌ها
const components = {
  home: HomeSection,
  services: ServicesSection,
  contact: ContactSection
};

// --- انیمیشن‌های ورود (GSAP) ---
const enterAnimation = (el, done) => {
  // ۱. انیمیشن صفحه خانه: زوم شدن و بلور
  if (currentTab.value === 'home') {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', onComplete: done }
    );
    
    // انیمیشن تکی برای متن‌ها
    gsap.from(el.querySelectorAll('h1, p, .group'), {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.2, ease: 'back.out(1.7)'
    });
  } 
  
  // ۲. انیمیشن صفحه خدمات: کارت‌ها یکی یکی می‌آیند
  else if (currentTab.value === 'services') {
    gsap.fromTo(el.children, 
      { y: 100, opacity: 0, rotateX: -10 },
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 0.8, ease: 'power4.out', onComplete: done }
    );
  } 
  
  // ۳. انیمیشن تماس: اسلاید از بغل
  else {
    gsap.fromTo(el,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', onComplete: done }
    );
  }
};

// --- انیمیشن خروج ---
const leaveAnimation = (el, done) => {
  gsap.to(el, { 
    opacity: 0, 
    y: -20, 
    filter: 'blur(5px)', 
    duration: 0.3, 
    ease: 'power1.in', 
    onComplete: done 
  });
};
</script>

<template>
  <div class="app-container text-slate-800 font-sans overflow-hidden min-h-screen flex flex-col px-5">
    
    <AnimatedGradientBackground />
    
    <NavBar :active="currentTab" @change="(id) => currentTab = id" />

    <main class="flex-grow flex flex-col items-center justify-center relative z-10 pt-24 pb-10 w-full">
      <Transition mode="out-in" :css="false" @enter="enterAnimation" @leave="leaveAnimation">
        <component :is="components[currentTab]" :key="currentTab" class="w-full flex flex-col items-center" />
      </Transition>
    </main>

  </div>
</template>