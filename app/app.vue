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


  console.log(
    '%c Developed by %c Erfan Fadakar %c 🚀 ',
    'background: #333; color: #fff; padding: 5px; border-radius: 3px 0 0 3px;',
    'background: #ef4444; color: #fff; padding: 5px; font-weight: bold;',
    'background: #333; color: #fff; padding: 5px; border-radius: 0 3px 3px 0;'
  );
  console.log('Need a website like this? Contact me at: 09910689541, in Telegram or Whatsapp');

  let secretCode = 'fadakar';
  let inputSequence = '';
  
  window.addEventListener('keydown', (e) => {
    inputSequence += e.key.toLowerCase();
    
    if (inputSequence.length > secretCode.length) {
      inputSequence = inputSequence.slice(-secretCode.length);
    }

    if (inputSequence === secretCode) {
      alert('این وبسایت با افتخار توسط سید عرفان حسینی فداکاری طراحی و توسعه داده شده است. \nتکنولوژی‌ها: Nuxt 3, GSAP, Tailwind');
    }
  });
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




</script>

<template>
  <div class="app-container text-slate-800 font-sans overflow-hidden min-h-screen flex flex-col px-5">
    
    <AnimatedGradientBackground />
    
    <NavBar />

    <main class="flex-grow flex flex-col items-center justify-center relative z-10 pt-24 pb-10 w-full">
      <NuxtPage />
    </main>

  </div>
</template>
<style>
:root {
  --text-primary: #1e293b;
}

::-webkit-scrollbar {
  display: none;
}

html, body {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(.dark) body {
  background-color: #020617;
  color: #f1f5f9;
}

:global(.dark) {
  --text-primary: #f1f5f9;
}
</style>