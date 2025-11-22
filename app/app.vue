<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import '../assets/styles/main.css';

import NavBar from './components/NavBar.vue';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.vue';
import HomeSection from './components/HomeSection.vue'; 
import ServicesSection from './components/ServicesSection.vue';
import ContactSection from './components/ContactSection.vue';
import BlogSection from './components/BlogSection.vue';
import AboutSection from './components/AboutSection.vue';

const isDark = ref(false);

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const currentTab = ref('home');

const components = {
  home: HomeSection,
  about: AboutSection,
  services: ServicesSection,
  blog: BlogSection,
  contact: ContactSection
};

const enterAnimation = (el, done) => {
  if (el) {
       gsap.fromTo(el,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', onComplete: done }
      );
    } else {
      done();
    }
  if (currentTab.value === 'home') {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', onComplete: done }
    );
    
    gsap.from(el.querySelectorAll('h1, p, .group'), {
      y: 50, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.2, ease: 'back.out(1.7)'
    });
  } 
  
  else if (currentTab.value === 'services') {
    const cards = el.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      card.style.transition = 'none';
    });

    cards.forEach((card, index) => {
      const startX = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(card, 
        { 
          x: startX, 
          y: 50, 
          autoAlpha: 0,
          rotation: index % 2 === 0 ? -5 : 5 
        },
        { 
          x: 0, 
          y: 0, 
          autoAlpha: 1, 
          rotation: 0,
          duration: 0.8, 
          delay: index * 0.15,
          ease: 'back.out(1.2)',
          onComplete: () => {
            card.style.transition = ''; 
            if (index === cards.length - 1) done();
          }
        }
      );
    });
  }
  else if (currentTab.value === 'about') {
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', onComplete: done }
    );
  }

  else if (currentTab.value === 'blog') {
    const cards = el.querySelectorAll('.article-card');
    
    cards.forEach(card => {
      card.style.transition = 'none';
    });

    gsap.fromTo(cards, 
      { 
        y: 100,
        scale: 0.9,
        autoAlpha: 0
      },
      { 
        y: 0, 
        scale: 1,
        autoAlpha: 1, 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'back.out(1.7)',
        onComplete: () => {
          cards.forEach(card => card.style.transition = ''); 
          done();
        }
      }
    );
  }
  
  else {
    gsap.fromTo(el,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', onComplete: done }
    );
  }
};

const leaveAnimation = (el, done) => {
  if (!el) {
    done();
    return;
  }
  
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
      <Transition :css="false" @enter="enterAnimation" @leave="leaveAnimation">
        <component :is="components[currentTab]" :key="currentTab" class="w-full flex flex-col items-center" />
      </Transition>
    </main>

  </div>
</template>
<style>
:root {
  --text-primary: #1e293b;
}

/* اضافه کردن استایل برای کل بادی در حالت دارک */
:global(.dark) body {
  background-color: #020617; /* همرنگ با پس‌زمینه انیمیشن */
  color: #f1f5f9; /* سفید کردن متن‌ها */
}

:global(.dark) {
  --text-primary: #f1f5f9;
}
</style>