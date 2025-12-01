<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

const containerRef = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const elements = gsap.utils.toArray('.contact-anim');

    elements.forEach(el => el.style.transition = 'none');
    
    gsap.fromTo(elements, 
      {
        y: 50,          
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,  
        stagger: 0.2,   
        ease: 'back.out(1.7)', 
        delay: 0.1,
        onComplete: () => {
          elements.forEach(el => el.style.transition = '');
        }
      }
    );

    gsap.to('.floating-icon', {
      y: -10,
      duration: 1.5,
      yoyo: true,     
      repeat: -1,     
      ease: 'sine.inOut',
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

  }, containerRef.value);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <div ref="containerRef" class="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
    
    <div class="contact-anim text-center mb-4">
      <h2 class="text-4xl md:text-5xl dark:text-slate-200 font-black mb-4 tracking-tight">
        همکاری و <span class="text-red-600">ارتباط</span>
      </h2>
      <p class="text-lg text-slate-500 dark:text-slate-400 font-medium">
        برای مشاوره تخصصی یا سفارش خدمات، همین حالا تماس بگیرید
      </p>
    </div>

    <a href="tel:09122719204" 
       class="contact-anim group w-full max-w-md bg-slate-900/90 dark:bg-white/10 backdrop-blur-[15px] text-white border border-white/10 py-6 rounded-3xl flex justify-center items-center gap-4 text-xl font-bold hover:bg-red-600 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 cursor-pointer"
       style="opacity: 0;"> <span class="text-3xl group-hover:rotate-12 transition-transform">📞</span> 
       <span>تماس تلفنی مستقیم</span>
    </a>

    <div class="contact-anim flex gap-6 mt-2">
      <a href="#" class="floating-icon w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl hover:text-red-600 hover:scale-110 transition-all duration-300">
        📷
      </a>
      <a href="#" class="floating-icon w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl hover:text-blue-500 hover:scale-110 transition-all duration-300">
        ✈️
      </a>
      <a href="#" class="floating-icon w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center justify-center text-3xl hover:text-green-500 hover:scale-110 transition-all duration-300">
        💬
      </a>
    </div>

  </div>
</template>