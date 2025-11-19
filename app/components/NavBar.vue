<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8"
    :class="isScrolled ? 'py-3 bg-white/70 backdrop-blur-xl shadow-sm' : 'py-6 bg-transparent'"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <div class="flex items-center gap-2 cursor-pointer select-none group" @click="$emit('change', 'home')">
        <div class="relative w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl text-white overflow-hidden transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 shadow-lg shadow-slate-900/20">
          <span class="font-black text-xl relative z-10">B</span>
          <div class="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-slate-900 text-lg leading-none tracking-tight">BEHZAD</span>
          <span class="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-0.5">Portfolio</span>
        </div>
      </div>

      <div v-if="!isMobile" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-shadow-sm">
        <div class="flex p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-inner">
          <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="$emit('change', tab.id)"
              class="nav-btn relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ease-out outline-none border-none focus:outline-none focus:ring-0 overflow-hidden"
              :class="[
                  // کلاس‌های پایه برای هر دو حالت
                  active === tab.id 
                      ? 'bg-slate-100 shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)] transform scale-95' 
                      : 'text-slate-500 hover:text-slate-900',

                  // مدیریت کلاس‌های هاور
                  active === tab.id 
                      ? 'hover:bg-gray-700 hover:scale-110 hover:z-10 active:scale-85' // رنگ هاور برای دکمه فعال (اختیاری، چون سفید است)
                      : 'hover:text-slate-700 hover:bg-gray-300 hover:scale-110 hover:z-10 active:scale-85' // رنگ هاور برای دکمه‌های غیرفعال
              ]"
          >
              <!-- این div سفید خودش پس‌زمینه دکمه فعال است -->
              <div v-if="active === tab.id" class="absolute inset-0 bg-white rounded-xl z-0" style="view-transition-name: active-tab;"></div>

              <span class="relative z-10 flex items-center gap-2">
                  <span>{{ tab.icon }}</span>
                  {{ tab.label }}
              </span>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <a href="tel:09120000000" 
           class="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-red-600 hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-slate-900/20 border-none outline-none">
           <span>تماس بگیرید</span>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
           </svg>
        </a>

        <button v-if="isMobile" 
                @click="mobileMenuOpen = true" 
                class="p-2.5 rounded-xl bg-white text-slate-900 shadow-md shadow-slate-100 active:scale-90 transition-all border-none outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>

    <Transition name="mobile-menu">
      <div v-if="isMobile && mobileMenuOpen" 
           class="fixed inset-0 z-[100] flex flex-col backdrop-blur-[15px]"
           @click.self="mobileMenuOpen = false">
        
        <div class="flex items-center justify-between p-6 border-b border-slate-100">
          <span class="font-black text-2xl text-slate-900">منو</span>
          <button @click="mobileMenuOpen = false" class="p-2 rounded-full bg-slate-50 hover:bg-red-50 text-slate-500 hover:text-red-500 transition-colors border-none outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 flex flex-col gap-3 p-6 overflow-y-auto">
          <button v-for="(tab, i) in tabs" 
                  :key="tab.id"
                  @click="selectMobile(tab.id)"
                  class="group relative w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border-2 active:scale-95 overflow-hidden isolate animate-slide-in-right opacity-0"
                  :class="active === tab.id 
                    ? 'bg-red-700 border-red-700 text-white shadow-xl shadow-red-700/30' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-red-200 hover:bg-red-50/50'"
                  :style="{ animationDelay: `${i * 100}ms` }"
          >
            <div v-if="active === tab.id" class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30 -skew-x-12 translate-x-[-100%] animate-shine"></div>

            <span class="text-2xl transition-transform duration-300 group-hover:scale-110"
                  :class="active === tab.id ? 'opacity-100' : 'opacity-70 grayscale group-hover:grayscale-0'">
              {{ tab.icon }}
            </span>
            
            <span class="text-lg font-bold tracking-wide">{{ tab.label }}</span>
            
            <span v-if="active !== tab.id" class="mr-auto text-slate-300 group-hover:text-red-400 group-hover:-translate-x-1 transition-all">
              ←
            </span>
            
            <span v-if="active === tab.id" class="mr-auto w-2.5 h-2.5 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse"></span>
          </button>
        </div>

        <div class="p-6 bg-slate-50">
          <p class="text-center text-slate-400 text-sm">© 2024 Behzad Heydari</p>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps(['active']);
const emit = defineEmits(['change']);

const tabs = [
  { id: 'home', label: 'خانه', icon: '🏠' },
  { id: 'services', label: 'خدمات من', icon: '⚡' },
  { id: 'contact', label: 'ارتباط', icon: '📞' }
];

const isMobile = ref(false);
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const checkScreen = () => { isMobile.value = window.innerWidth < 768; };

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const selectMobile = (id) => {
  emit('change', id);
  setTimeout(() => { mobileMenuOpen.value = false; }, 200);
};

onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes shine {
  0% { transform: translateX(150%) skewX(-12deg); }
  100% { transform: translateX(-250%) skewX(-12deg); }
}

.animate-shine {
  animation: shine 3s infinite ease-in-out;
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
.nav-btn {
  cursor: pointer;
} .nav-btn:hover {
  
}
</style>