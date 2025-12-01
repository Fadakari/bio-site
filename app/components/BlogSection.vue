<script setup>
import { ref, nextTick, watch, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const { data: articles, pending } = useAsyncData('blog-list', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .find()
);

const selectedArticle = ref(null);
const containerRef = ref(null);
const closeBtnRef = ref(null);
let ctx; 

watch(articles, (newArticles) => {
  if (newArticles && newArticles.length > 0) {
    requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          const cards = gsap.utils.toArray('.article-card');
          
          cards.forEach(card => card.style.transition = 'none');

          gsap.fromTo(cards, 
            { 
              y: 60, 
              autoAlpha: 0,
              scale: 0.9 
            }, 
            { 
              y: 0, 
              autoAlpha: 1, 
              scale: 1, 
              duration: 0.8, 
              stagger: 0.15, 
              ease: 'power3.out', 
              overwrite: 'auto',
              onComplete: () => {
                cards.forEach(card => card.style.transition = ''); 
              }
            }
          );
        }, containerRef.value);
    });
  }
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});

let activeRect = null;

const openArticle = async (article, event) => {
  const cardEl = event.currentTarget;
  if (!cardEl) return;

  activeRect = cardEl.getBoundingClientRect();
  selectedArticle.value = article;

  await nextTick();

  const detailCard = document.querySelector('.detail-card');
  const backdrop = document.querySelector('.detail-backdrop');
  
  gsap.fromTo(detailCard, 
    {
      position: 'fixed',
      top: activeRect.top,
      left: activeRect.left,
      width: activeRect.width,
      height: activeRect.height,
      borderRadius: '2rem'
    },
    {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '0',
      duration: 0.6,
      ease: 'power4.inOut'
    }
  );

  gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.6 });

  gsap.to([closeBtnRef.value, '.detail-content-anim'], {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.4,
    ease: 'power2.out'
  });
};

const closeArticle = () => {
  const detailCard = document.querySelector('.detail-card');
  const backdrop = document.querySelector('.detail-backdrop');

  gsap.to([closeBtnRef.value, '.detail-content-anim'], { opacity: 0, duration: 0.2 });
  
  gsap.to(detailCard, {
    top: activeRect.top,
    left: activeRect.left,
    width: activeRect.width,
    height: activeRect.height,
    borderRadius: '2rem',
    duration: 0.5,
    ease: 'power4.inOut',
    onComplete: () => {
      selectedArticle.value = null;
    }
  });

  gsap.to(backdrop, { opacity: 0, duration: 0.5 });
};
</script>

<template>
  <div ref="containerRef" class="w-full max-w-6xl mx-auto pt-10 px-4 pb-20 relative">
    
    <div class="text-center mb-12 transition-opacity duration-300" :class="{ 'opacity-0': selectedArticle }">
      <h2 class="text-3xl font-black text-slate-900 dark:text-slate-200 mb-3">آخرین نوشته‌ها</h2>
      <p class="text-slate-500 dark:text-slate-300">تجربیات و آموزش‌های تخصصی در حوزه صنعت و تکنولوژی</p>
    </div>

    <div v-if="pending" class="text-center text-slate-400 dark:text-slate-200 py-20 flex flex-col items-center gap-4">
      <div class="w-8 h-8 border-4 border-slate-200 border-t-red-600 rounded-full animate-spin"></div>
      <span>در حال بارگذاری مقالات...</span>
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(article, index) in articles" 
        :key="article.id"
        ref="articleRefs"
        class="article-card group relative bg-white/50 dark:bg-dark/50 backdrop-blur-[10px] rounded-[2rem] p-3 hover:shadow-2xl hover:shadow-slate-300/80 transition-all duration-500 cursor-pointer border border-white opacity-0"
        :class="{ 'opacity-0 pointer-events-none': selectedArticle && selectedArticle.id === article.id }"
        style="opacity: 0;" 
        @click="openArticle(article, $event)"
      >
        <div class="relative h-64 rounded-[1.5rem] overflow-hidden mb-4">
          <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
          <NuxtImg :src="article.image" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" :alt="article.title" />
          <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 z-20 shadow-sm">
            {{ article.category }}
          </span>
        </div>

        <div class="px-2 pb-2">
          <h3 class="text-xl font-black text-slate-800 dark:text-slate-200 mb-2 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
            {{ article.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed">
            {{ article.description }}
          </p>
          <div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
            <span class="text-xs text-slate-400 font-medium">{{ article.date }}</span>
            <span class="text-sm font-bold text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              مطالعه کنید &larr;
            </span>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
       <div v-if="selectedArticle" 
           class="fixed inset-0 z-[9999] flex items-center justify-center"
           role="dialog">
        
        <div class="absolute inset-0 bg-white/80 backdrop-blur-md detail-backdrop" @click="closeArticle"></div>

        <div class="detail-card absolute bg-white shadow-2xl overflow-hidden flex flex-col z-[10000]">
          
          <button 
            ref="closeBtnRef"
            @click.stop="closeArticle" 
            class="absolute top-6 left-6 z-50 w-10 h-10 bg-black/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-colors opacity-0 translate-y-4"
          >
            ✕
          </button>

          <div class="relative h-[40vh] shrink-0">
            <img :src="selectedArticle.image" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 right-0 p-6 w-full detail-content-anim opacity-0 translate-y-4">
              <span class="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold mb-2 shadow-lg">
                {{ selectedArticle.category }}
              </span>
              <h1 class="text-2xl md:text-4xl font-black text-white mb-1 leading-tight">
                {{ selectedArticle.title }}
              </h1>
            </div>
          </div>

          <div class="p-6 md:p-10 overflow-y-auto flex-grow bg-white relative">
            <div class="detail-content-anim opacity-0 translate-y-4 max-w-3xl mx-auto">
              
              <p class="text-lg text-slate-700 font-bold leading-loose mb-8 border-b border-slate-100 pb-6">
                {{ selectedArticle.description }}
              </p>
              
              <article class="prose prose-slate max-w-none text-justify text-slate-600 leading-8 prose-headings:font-black prose-headings:text-slate-800 prose-a:text-red-600">
                <ContentRenderer :value="selectedArticle" />
              </article>

            </div>
          </div>
        </div>

      </div>
    </Teleport>

  </div>
</template>

<style scoped>
:global(body.modal-open) {
  overflow: hidden;
}
:deep(h1), :deep(h2), :deep(h3) {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
:deep(ul) {
  list-style-type: disc;
  padding-right: 1.5em;
}

.article-card {
  opacity: 0; 
  will-change: transform, opacity;
}
</style>