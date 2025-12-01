<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

const sectionRef = ref(null);
let ctx;

onMounted(() => {
    ctx = gsap.context(() => {
      gsap.from('h1, p, .group', {
        y: 30, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        delay: 0.1, 
        ease: 'back.out(1.7)'
      });
    }, sectionRef.value);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <div ref="sectionRef" class="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    
    <div class="relative group mb-10">
      <div class="absolute -inset-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-tilt"></div>
      <NuxtImg
        src="/me.jpg" 
        class="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl object-cover" 
        alt="عکس پرتره بهزاد حیدری - کارآفرین و متخصص ابزار"
        width="256"
        height="256"
      />
      <div class="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg text-2xl">🛠️</div>
    </div>

    <h1 class="text-5xl md:text-8xl font-black text-slate-900 mb-4 tracking-tight">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-50 dark:to-rose-700">بهزاد حیدری</span>
    </h1>
    
    <h2 class="sr-only">تخصص‌های بهزاد حیدری</h2> <div class="flex flex-wrap justify-center gap-3 mb-8">
      <h3 class="px-4 py-1 rounded-full bg-red-50 text-red-600 dark:backdrop-blur-sm dark:bg-white/20 dark:text-red-500 font-bold text-sm border border-red-100">نمایندگی هیلتی</h3>
      <h3 class="px-4 py-1 rounded-full bg-blue-50 text-blue-600 dark:backdrop-blur-sm dark:bg-white/20 dark:text-sky-400 font-bold text-sm border border-blue-100">بنیان‌گذار استارتاپ</h3>
      <h3 class="px-4 py-1 rounded-full bg-slate-100 text-slate-600 dark:backdrop-blur-sm dark:bg-white/20 dark:text-slate-100 font-bold text-sm border border-slate-200">نویسنده کتب صنعتی</h3>
    </div>
    
    <p class="text-xl text-slate-500 dark:text-slate-300 max-w-2xl leading-relaxed">
      تلفیق قدرت ابزارآلات صنعتی با نوآوری دنیای دیجیتال. 
      <br>ما اینجا هستیم تا استانداردهای جدیدی تعریف کنیم.
    </p>
  </div>
</template>