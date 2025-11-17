<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 transition-all duration-500"
       :class="{ 'py-3': isScrolled }">
    
    <div class="relative flex items-center p-1.5 rounded-full border border-white/40 shadow-2xl shadow-slate-200/40 backdrop-blur-2xl bg-white/60 transition-all duration-500 ease-out"
         :class="isMobile ? 'w-full justify-between px-4 py-2' : 'gap-2 pr-2'">

      <div class="flex items-center gap-2 pl-4 pr-2 cursor-pointer group select-none" @click="$emit('change', 'home')">
        <div class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600 group-hover:scale-125 transition-transform"></span>
        </div>
        <span class="font-black text-lg tracking-tighter text-slate-800 group-hover:text-red-600 transition-colors">
          BEHZAD
        </span>
      </div>

      <div v-if="!isMobile" class="flex items-center bg-slate-100/40 rounded-full p-1.5 border border-white/40 backdrop-blur-sm">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="$emit('change', tab.id)"
          class="relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 overflow-hidden group"
          :class="active === tab.id ? 'text-red-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'"
        >
          <span class="relative z-10 flex items-center gap-2 transition-transform duration-300 group-active:scale-95">
            {{ tab.label }}
          </span>
          
          <div v-if="active === tab.id" 
               class="absolute inset-0 rounded-full transition-all duration-300
                      bg-gradient-to-b from-white/80 to-white/10
                      backdrop-blur-2xl
                      border border-white/90
                      shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_15px_rgba(220,38,38,0.25)]"
               style="view-transition-name: active-tab-bg">
               
               <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 translate-x-[-100%] animate-shine"></div>
          </div>
        </button>
      </div>

      <button v-else 
              @click="mobileMenuOpen = true" 
              class="p-2 rounded-full text-slate-700 hover:bg-white/50 transition-colors active:scale-90">
        <div class="flex flex-col gap-1.5 w-6 items-end">
          <span class="w-full h-0.5 bg-slate-800 rounded-full"></span>
          <span class="w-2/3 h-0.5 bg-slate-800 rounded-full group-hover:w-full transition-all"></span>
          <span class="w-full h-0.5 bg-slate-800 rounded-full"></span>
        </div>
      </button>
    </div>

    <Transition name="menu-fade">
      <div v-if="isMobile && mobileMenuOpen" 
           class="fixed inset-0 z-[60] bg-white/80 backdrop-blur-3xl flex flex-col items-center justify-center overflow-hidden"
           @click.self="closeMobileMenu">
        
        <button class="absolute top-6 right-6 p-4 rounded-full bg-white/50 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:rotate-90 shadow-sm border border-white/60"
                @click="closeMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex flex-col gap-5 w-full px-8 items-center max-w-sm">
          <TransitionGroup name="stagger-list" tag="div" class="w-full flex flex-col gap-4" appear>
            <button v-for="(tab, index) in tabs" 
                    :key="tab.id" 
                    @click="selectMobile(tab.id)"
                    class="w-full py-5 text-2xl font-black tracking-tight rounded-3xl transition-all duration-300 group border border-transparent relative overflow-hidden backdrop-blur-sm"
                    :class="active === tab.id 
                      ? 'bg-red-50/80 text-red-600 shadow-lg shadow-red-500/10 border-red-100 scale-105' 
                      : 'hover:bg-white/40 text-slate-400 hover:text-slate-800'"
                    :style="{ transitionDelay: `${index * 80}ms` }">
              
              <span class="relative z-10">{{ tab.label }}</span>
              
              <span v-if="active === tab.id" class="absolute left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></span>
            </button>
          </TransitionGroup>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps(['active']);
const emit = defineEmits(['change']);

const tabs = [
  { id: 'home', label: 'معرفی' },
  { id: 'services', label: 'خدمات' },
  { id: 'contact', label: 'تماس' }
];

const isMobile = ref(false);
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const checkScreen = () => { isMobile.value = window.innerWidth < 768; };

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
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
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.4s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.stagger-list-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stagger-list-leave-active {
  transition: all 0.3s ease;
}

.stagger-list-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.stagger-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.animate-shine {
  animation: shine 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes shine {
  0% { transform: translateX(-150%) skewX(-12deg); }
  20% { transform: translateX(150%) skewX(-12deg); }
  100% { transform: translateX(150%) skewX(-12deg); }
}
</style>