<template>
  <div class="w-full max-w-6xl mx-auto pt-8 pb-24" itemscope itemtype="https://schema.org/Person">
    
    <header class="text-center mb-16 opacity-0 animate-fade-in-up" style="animation-delay: 0.1s">
      <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-300 mb-6 tracking-tight" itemprop="name">
        بیوگرافی <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-900 dark:from-red-600 dark:to-slate-400">بهزاد حیدری</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed" itemprop="description">
        مدیرعامل شرکت تعمیرات تخصصی هیلتی حیدری، کارآفرین نمونه و نویسنده کتب تخصصی صنعت و هنر.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <aside class="lg:col-span-4 flex flex-col gap-8 opacity-0 animate-fade-in-up" style="animation-delay: 0.2s">
        
        <div class="bg-white/50 dark:backdrop-blur-[10px] rounded-[2.5rem] p-2 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
          <div class="relative rounded-[2rem] overflow-hidden aspect-[3/4]">
            <NuxtImg src="/me.jpg" alt="بهزاد حیدری" itemprop="image" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6 text-white">
              <h3 class="font-black text-2xl mb-1">بهزاد حیدری</h3>
              <p class="text-slate-300 text-sm font-bold bg-red-600/90 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">مدیرعامل و بنیان‌گذار</p>
            </div>
          </div>
        </div>

        <div class="bg-white/20 dark:backdrop-blur-[10px] rounded-[2rem] p-6 shadow-xl border border-slate-100">
          <h3 class="font-black text-lg mb-4 flex items-center gap-2 text-slate-800 dark:text-slate-300">
            <span class="w-2 h-6 bg-red-600 rounded-full"></span>
            اطلاعات فردی و کاری
          </h3>
          <div class="space-y-0 divide-y divide-slate-100 border-2 border-slate-200 rounded-xl overflow-hidden text-sm">
            <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">تولد</span>
              <span class="font-bold text-slate-800" itemprop="birthDate">۴ اردیبهشت ۱۳۶۵</span>
            </div>
            <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">محل فعالیت</span>
              <span class="font-bold text-slate-800" itemprop="workLocation">تهران، ایران</span>
            </div>
            <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">شروع فعالیت</span>
              <span class="font-bold text-slate-800">سال ۱۳۸۱</span>
            </div>
            <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">وبسایت فروشگاه ما</span>
              <a href="https://stockheydari.ir" target="_blank" class="font-bold text-red-600 hover:underline" itemprop="url">فروشگاه</a>
            </div>
            <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">وبسایت تعمیرات تخصصی ما</span>
              <a href="https://tamirat-takhasosi-heydari.ir" target="_blank" class="font-bold text-red-600 hover:underline" itemprop="url">تعمیرات تخصصی</a>
            </div>
             <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">تماس</span>
              <span class="font-bold text-slate-800" dir="ltr">09122719204</span>
            </div>
             <div class="flex justify-between p-4 bg-slate-50/10 dark:backdrop-blur-[10px] hover:bg-slate-50/50 transition-colors">
              <span class="text-slate-500 dark:text-slate-300">درخواست تعمیرات:</span>
              <a href="https://tamirat-takhasosi-heydari.ir/%d9%81%d8%b1%d9%85-%d8%af%d8%b1%d8%ae%d9%88%d8%a7%d8%b3%d8%aa-%d8%aa%d8%b9%d9%85%db%8c%d8%b1%d8%a7%d8%aa/" target="_blank" class="font-bold text-red-600 hover:underline" itemprop="url">فرم  درخواست تعمیرات</a>
            </div>

            <div class="p-4 bg-slate-100/50 dark:bg-white/5">
              <span class="block text-slate-500 dark:text-slate-200 mb-3 text-xs font-bold">دانلود اپلیکیشن و دسترسی سریع:</span>
              
              <div class="flex items-center justify-between gap-2">

                <a href="https://cafebazaar.ir/app/com.example.stockdivarapp" target="_blank" class="group relative flex-1 h-12 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/50 flex items-center justify-center text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white transition-all duration-300" title="دانلود از بازار">
                   <NuxtImg src="/Cafebazaar-Logo.svg" alt="" class="p-3" />
                   <span class="absolute -top-8 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">بازار</span>
                </a>
                
                <a href="https://myket.ir/app/com.example.stockdivarapp" target="_blank" class="group relative flex-1 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-sky-300 hover:text-white dark:hover:bg-sky-300 dark:hover:text-white transition-all duration-300" title="دانلود از مایکت">
                   <NuxtImg src="/Myket-Logo-farsi.svg" alt="" class="p-3" />
                   <span class="absolute -top-8 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">مایکت</span>
                </a>

                <a href="https://stockdivar.ir" target="_blank" class="group relative flex-1 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300" title="نسخه وب">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                   </svg>
                   <span class="absolute -top-8 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">وبسایت</span>
                </a>

              </div>
            </div>
          </div>
        </div>

      </aside>

      <main class="lg:col-span-8 space-y-12">
        
        <section class="bg-white/30 dark:backdrop-blur-[10px] rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-slate-100 opacity-0 animate-fade-in-up" style="animation-delay: 0.3s">
          <h2 class="text-3xl font-black text-slate-900 dark:text-slate-200 mb-8 relative inline-block">
            مسیر زندگی و حرفه‌ای
            <span class="absolute -bottom-2 right-0 w-1/2 h-1 bg-red-600 rounded-full"></span>
          </h2>
          
          <div class="prose prose-slate max-w-none text-justify leading-loose text-slate-600 dark:text-slate-300">
            <p>
              درود، اینجانب <strong>بهزاد حیدری</strong> هستم. داستان من از سال‌های ۱۳۷۶ و ۱۳۷۷ در کارگاه‌های درودگری و طراحی مبلمان آغاز شد؛ جایی که هنر و صنعت برای اولین بار در ذهن من گره خوردند.
            </p>
            <p>
              اما نقطه عطف بزرگ در سال <strong>۱۳۹۲</strong> رقم خورد؛ ورود به دنیای پیچیده الکترونیک و تعمیرات تخصصی ابزارآلات صنعتی. این مسیر در سال‌های ۹۶ و ۹۷ با درک قدرت <strong>دیجیتال مارکتینگ</strong> تکامل یافت و منجر به راه‌اندازی پلتفرم‌های آنلاین فروشگاهی شد.
            </p>
            <p>
              اکنون با بیش از دو دهه تجربه، باور دارم که طراحی، ترکیبی از اصول علمی و خلاقیت هنری است. اولین ایده کارآفرینی من نیز حول همین مفهوم شکل گرفت و امروز مفتخرم که مجموعه‌ای پیشرو در ارائه خدمات تخصصی هیلتی و ابزارآلات را مدیریت می‌کنم.
            </p>
          </div>

          <div class="mt-10 bg-dark-900/70 backdrop-blur-[10px] text-white p-8 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 left-0 text-8xl text-slate-800 opacity-50 font-serif leading-none -translate-y-4 translate-x-4">”</div>
            <p class="relative z-10 text-lg font-medium text-center italic">
              «هر روزی که با انگیزه و ذهنیت رشد آغاز شود، می‌تواند به دستاوردهای بزرگی ختم گردد. برای شروع تازه هیچوقت دیر نیست.»
            </p>
             <div class="text-center mt-4 text-slate-400 text-sm font-bold">- بهزاد حیدری</div>
          </div>
        </section>

        <section class="opacity-0 animate-fade-in-up relative" style="animation-delay: 0.4s">
          <div class="flex items-center justify-between mb-6">
             <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-200">افتخارات و رسانه‌ها</h3>
             <div class="flex gap-2">
                <button @click="scrollCarousel('full', -1)" class="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-1 border-slate-300 transition duration-300 ease-in-out shadow-md flex items-center justify-center hover:bg-slate-50 z-50 absolute top-1/2 -right-5">→</button>
                <button @click="scrollCarousel('full', 1)" class="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border-1 border-slate-300 transition duration-300 ease-in-out shadow-md flex items-center justify-center hover:bg-slate-50 z-50 absolute top-1/2 -left-5">←</button>
             </div>
          </div>
          
          <div ref="fullCarousel" class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar scroll-smooth">
  
              <div class="w-full flex-shrink-0 h-64 md:h-96 rounded-[2rem] snap-center relative overflow-hidden group">
                  <NuxtImg src="/ourpicture.jpg" alt="عنوان عکس" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                    <div class="text-white">
                      <h4 class="text-2xl font-black mb-2">کارآفرین نمونه</h4>
                      <p class="opacity-90 text-sm">تقدیر شده در حوزه اشتغال‌زایی و نوآوری صنعتی</p>
                    </div>
                  </div>
              </div>
          
              <div class="w-full flex-shrink-0 h-64 md:h-96 rounded-[2rem] snap-center relative overflow-hidden group">
                  <NuxtImg src="/me.jpg" alt="نویسنده" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                    <div class="text-white">
                      <h4 class="text-2xl font-black mb-2">نویسنده کتب تخصصی</h4>
                      <p class="opacity-90 text-sm">تالیف مراجع کاربردی در زمینه تعمیرات ابزار</p>
                    </div>
                  </div>
              </div>
          
            </div>
        </section>

        <div class="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.6s">
           <div class="bg-white/50 dark:bg-white/0 dark:bg-gradient-to-br dark:from-white/40 dark:to-purple-700/50 backdrop-blur-[5px] p-8 rounded-[2rem] border border-slate-200">
              <h4 class="font-black text-xl mb-4 text-slate-800 dark:text-slate-200">💎 استراتژی رشد</h4>
              <p class="text-slate-600 dark:text-slate-300 text-sm leading-7 text-justify">
                تمرکز بر تحلیل دقیق بازار، مشارکت با فعالان برتر و سرمایه‌گذاری روی آموزش مداوم. ما باور داریم که «تیم» قلب تپنده هر موفقیتی است.
              </p>
           </div>
           
           <div class="bg-dark/70 dark:bg-white/0 dark:bg-gradient-to-br dark:from-dark-900/60 dark:from-50% dark:to-purple-700/50 backdrop-blur-[15px] text-white p-8 rounded-[2rem]">
              <h4 class="font-black text-xl mb-4">🚀 چشم‌انداز ۵ ساله</h4>
              <p class="text-slate-300 text-sm leading-7 text-justify">
                گسترش شبکه خدمات، پایداری مسئولیت‌های اجتماعی و ایجاد بستری امن برای رشد دانشجویان و مددجویان بهزیستی و کمیته امداد.
              </p>
           </div>

            <div class="md:col-span-2 bg-white/50 dark:bg-white/0 backdrop-blur-[15px] dark:bg-gradient-to-r dark:from-white/0 dark:from-50% dark:to-red-600/70 p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl shrink-0">💡</div>
              <div>
                <h4 class="font-black dark:text-white text-xl mb-2">الگوها و الهام‌بخش‌ها</h4>
                <p class="text-slate-600 dark:text-slate-300 text-sm leading-7">
                  جناب آقای <strong>احد عظیم‌زاده</strong> الگوی تأثیرگذار من در مسیر کارآفرینی بوده‌اند. درس‌های ایشان در پشتکار و فعالیت‌های اجتماعی، چراغ راه من بوده است.
                </p>
              </div>
           </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fullCarousel = ref(null);
const smallCarousel = ref(null);



const scrollCarousel = (type, direction) => {
  const container = type === 'full' ? fullCarousel.value : smallCarousel.value;
  if (!container) return;
  
  const containerWidth = container.offsetWidth;
  
  const scrollAmount = type === 'full' ? containerWidth : (containerWidth / 3);

  container.scrollBy({
    left: direction * -scrollAmount, 
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>