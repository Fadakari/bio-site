<template>
  <div class="w-full max-w-6xl mx-auto pt-10 px-4 pb-20 relative">
    
    <div class="text-center mb-12 transition-opacity duration-300" :class="{ 'opacity-0': selectedArticle }">
      <h2 class="text-3xl font-black text-slate-900 mb-3">آخرین نوشته‌ها</h2>
      <p class="text-slate-500">تجربیات و آموزش‌های تخصصی در حوزه صنعت و تکنولوژی</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(article, index) in articles" 
        :key="article.id"
        ref="articleRefs"
        class="article-card group relative bg-white rounded-[2rem] p-3 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-slate-300/80 transition-all duration-500 cursor-pointer border border-white"
        :class="{ 'opacity-0 pointer-events-none': selectedArticle && selectedArticle.id === article.id }"
        @click="openArticle(article, index)"
      >
        <div class="relative h-64 rounded-[1.5rem] overflow-hidden mb-4">
          <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
          <img :src="article.image" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" :alt="article.title">
          <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 z-20 shadow-sm">
            {{ article.category }}
          </span>
        </div>

        <div class="px-2 pb-2">
          <h3 class="text-xl font-black text-slate-800 mb-2 leading-tight group-hover:text-red-600 transition-colors">
            {{ article.title }}
          </h3>
          <p class="text-slate-500 text-sm line-clamp-2 leading-relaxed">
            {{ article.excerpt }}
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

    <div v-if="selectedArticle" 
         class="fixed inset-0 z-[100] flex items-center justify-center"
         role="dialog">
      
      <div class="absolute inset-0 bg-white/80 backdrop-blur-md detail-backdrop" @click="closeArticle"></div>

      <div class="detail-card absolute bg-white shadow-2xl overflow-hidden flex flex-col">
        
        <button 
          @click.stop="closeArticle" 
          class="absolute top-6 left-6 z-50 w-10 h-10 bg-black/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/40 transition-colors opacity-0 detail-content-anim"
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
            <p class="text-lg text-slate-700 font-bold leading-loose mb-6 border-b border-slate-100 pb-6">
              {{ selectedArticle.excerpt }}
            </p>
            <div class="prose prose-slate max-w-none text-justify text-slate-600 leading-8">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
              <p class="mt-4">کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای ایجاد کرد. خصوصا طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
              <h3 class="text-xl font-bold text-slate-800 mt-8 mb-2">چرا این موضوع مهم است؟</h3>
              <p>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { gsap } from 'gsap';

const articles = ref([
  {
    id: 1,
    title: 'آینده ابزارآلات صنعتی: شارژی یا برقی؟',
    excerpt: 'بررسی تخصصی جدیدترین تکنولوژی‌های هیلتی و مقایسه کارایی ابزارهای نسل جدید.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop',
    category: 'تکنولوژی',
    date: '۲۵ آبان ۱۴۰۳'
  },
  {
    id: 2,
    title: 'چگونه یک اپلیکیشن واسطه‌گری امن بسازیم؟',
    excerpt: 'تجربیات من در طراحی و توسعه اپلیکیشن بازار استوک و چالش‌های ایجاد اعتماد.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    category: 'برنامه‌نویسی',
    date: '۱۰ آبان ۱۴۰۳'
  },
  {
    id: 3,
    title: 'مسئولیت اجتماعی: آموزش راهی برای نجات',
    excerpt: 'داستان برگزاری دوره‌های آموزشی برای افراد آسیب‌پذیر و تأثیر مهارت‌آموزی.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    category: 'اجتماعی',
    date: '۱ آبان ۱۴۰۳'
  }
]);

const selectedArticle = ref(null);
const articleRefs = ref([]);
let activeRect = null;

const openArticle = async (article, index) => {
  const cardEl = articleRefs.value[index];
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
      ease: 'power3.inOut'
    }
  );

  gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.6 });

  gsap.to('.detail-content-anim', {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.3
  });
};

const closeArticle = () => {
  const detailCard = document.querySelector('.detail-card');
  const backdrop = document.querySelector('.detail-backdrop');

  gsap.to('.detail-content-anim', { opacity: 0, duration: 0.2 });
  
  gsap.to(detailCard, {
    top: activeRect.top,
    left: activeRect.left,
    width: activeRect.width,
    height: activeRect.height,
    borderRadius: '2rem',
    duration: 0.5,
    ease: 'power3.inOut',
    onComplete: () => {
      selectedArticle.value = null;
    }
  });

  gsap.to(backdrop, { opacity: 0, duration: 0.5 });
};
</script>