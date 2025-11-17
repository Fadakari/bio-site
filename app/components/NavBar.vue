<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
    
    <div class="bg-white/70 backdrop-blur-md border border-white/50 shadow-sm rounded-full px-6 py-3 flex items-center justify-between gap-8 transition-all duration-500"
         :class="isMobile ? 'w-full justify-between' : 'min-w-[400px]'">
      
      <span class="font-black text-lg tracking-tight text-slate-800">FADAKAR</span>

      <div v-if="!isMobile" class="flex gap-1">
        <button v-for="item in items" :key="item.id" 
          @click="$emit('change', item.id)"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden"
          :class="active === item.id ? 'text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'">
          
          <span class="relative z-10">{{ item.label }}</span>
          
          <div v-if="active === item.id" 
               class="absolute inset-0 bg-slate-900 rounded-full"
               style="view-transition-name: active-tab"></div>
        </button>
      </div>

      <button v-else @click="isOpen = !isOpen" class="p-2 text-2xl">
        {{ isOpen ? '✕' : '☰' }}
      </button>
    </div>

    <div v-if="isMobile && isOpen" 
         class="absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-3xl p-4 shadow-2xl flex flex-col gap-2 border border-white/50 animate-menu-pop">
      <button v-for="item in items" :key="item.id"
        @click="selectMobile(item.id)"
        class="py-4 text-center font-bold rounded-xl transition-colors"
        :class="active === item.id ? 'bg-slate-100 text-slate-900' : 'text-slate-500'">
        {{ item.label }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps(['active']);
const emit = defineEmits(['change']);

const items = [
  { id: 'home', label: 'خانه' },
  { id: 'services', label: 'خدمات' },
  { id: 'contact', label: 'تماس' }
];

const isMobile = ref(false);
const isOpen = ref(false);

const checkScreen = () => { isMobile.value = window.innerWidth < 768; };
const selectMobile = (id) => {
  emit('change', id);
  isOpen.value = false;
};

onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);
});
onUnmounted(() => window.removeEventListener('resize', checkScreen));
</script>

<style>
@keyframes menuPop {
  from { opacity: 0; transform: translateY(-20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-menu-pop { animation: menuPop 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
</style>