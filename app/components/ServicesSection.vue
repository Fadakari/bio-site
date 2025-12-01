<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const showCharityModal = ref(false);

const cardsContainer = ref(null);

onMounted(() => {
  const cards = gsap.utils.toArray('.service-card-anim');
  
  gsap.set(cards, { 
    opacity: 0, 
    y: 80, 
    scale: 0.8,
    rotationX: -15 
  });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotationX: 0,
    duration: 1,
    stagger: 0.15,
    ease: "elastic.out(1, 0.6)",
    delay: 0.4,
    force3D: true,
    onComplete: () => {
      gsap.set(cards, { clearProps: "transform, scale, rotationX" });
      cards.forEach(card => card.classList.remove('opacity-0'));
    }
  });
});
</script>

<template>
  <div class="w-full max-w-5xl mx-auto pt-6 pb-20">
    
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-200 mb-3">فعالیت‌ها و تخصص‌ها</h2>
      <div class="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
    </div>

    <div ref="cardsContainer" class="grid gap-8 md:grid-cols-2 w-full">
      
      <div class="service-card-anim service-card group relative overflow-hidden bg-white/50 backdrop-blur-[10px] dark:bg-red-700/20 border-x border-slate-200 rounded-3xl p-8 hover:border-red-600 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 opacity-0">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-red-50 rounded-full group-hover:bg-red-600/10 transition-colors duration-500"></div>
        <div class="absolute right-6 top-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none text-red-600">🛠️</div>
        
        <div class="relative z-10">
          <div class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-3xl shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform duration-500">
            🛠️
          </div>
          <h3 class="text-2xl font-black text-slate-900 dark:text-slate-300 mb-3 group-hover:text-red-700 transition-colors">نمایندگی هیلتی</h3>
          <p class="text-slate-500 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
            تامین قطعات اورجینال، تعمیرات تخصصی و کالیبراسیون ابزارآلات دقیق صنعتی با استاندارد جهانی هیلتی.
          </p>
          
          <a href="https://stockheydari.ir/" target="_blank" class="flex items-center gap-2 text-red-600 font-bold text-sm cursor-pointer group/link">
            <span>مشاهده جزئیات</span>
            <span class="group-hover/link:-translate-x-2 transition-transform">←</span>
          </a>
        </div>
      </div>

      <div class="service-card-anim service-card group relative overflow-hidden bg-white/50 backdrop-blur-[10px] dark:bg-sky-600/30 border border-slate-200 rounded-3xl p-8 hover:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20 opacity-0">
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-slate-100 dark:bg-slate-700 rounded-full group-hover:bg-slate-800/10 transition-colors duration-500"></div>
        <div class="absolute left-6 top-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">📱</div>

        <div class="relative z-10">
          <div class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-3xl shadow-lg shadow-slate-500/40 group-hover:scale-110 transition-transform duration-500">
            📱
          </div>
          <h3 class="text-2xl font-black text-slate-900 dark:text-slate-200 mb-3 group-hover:text-slate-700 transition-colors">اپلیکیشن استوک</h3>
          <p class="text-slate-500 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
            پلتفرم هوشمند و امن برای خرید و فروش کالاهای صنعتی دست دوم. واسطی مطمئن برای معاملات شما.
          </p>

          <a href="https://cafebazaar.ir/app/com.example.stockdivarapp" target="_blank" class="flex items-center gap-2 text-slate-800 dark:text-sky-200 font-bold text-sm cursor-pointer group/link">
            <span>نصب از کافه بازار</span>
            <span class="group-hover/link:-translate-x-2 transition-transform">←</span>
          </a>
        </div>
      </div>

      <div class="service-card-anim service-card md:col-span-2 group relative bg-dark/70 backdrop-blur-[15px] overflow-hidden dark:bg-green-600/40 border border-slate-200 rounded-3xl p-8 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/10 opacity-0">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div class="w-20 h-20 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-4xl text-green-600 border-4 border-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
            🌱
          </div>
          <div class="text-center md:text-right">
            <h3 class="text-2xl font-black text-slate-200 mb-3">مسئولیت اجتماعی و آموزش</h3>
            <p class="text-slate-300 leading-relaxed max-w-2xl text-sm md:text-base">
              ما متعهد به آینده‌ای روشن‌تر هستیم. برگزاری دوره‌های رایگان تعمیرات تخصصی برای دانشجویان و توان‌بخشی شغلی برای توان‌یابان عزیز، بخشی از دین ما به جامعه صنعتی کشور است.
            </p>
            <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">#آموزش_رایگان</span>
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">#کارآفرینی</span>
              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">#حمایت</span>
            </div>
          </div>
        </div>
      </div>

      <div class="service-card-anim service-card md:col-span-2 group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200/60 dark:border-amber-700/50 rounded-3xl p-8 hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer opacity-0" @click="showCharityModal = true">
        
        <div class="absolute right-0 top-0 w-64 h-64 bg-white/40 dark:bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-400/20 transition-colors duration-700"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div class="relative shrink-0">
             <div class="w-24 h-24 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-5xl shadow-xl shadow-amber-200/50 dark:shadow-none group-hover:scale-110 transition-transform duration-500">
               🌱
             </div>
             <div class="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white dark:border-slate-900">
               طرح ویژه
             </div>
          </div>

          <div class="text-center md:text-right flex-1">
            <h3 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-amber-100 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
              مجموعه‌ی فانوس راه زندگی
            </h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
              ما باور داریم هیچ ابزاری دور ریختنی نیست؛ انسان‌ها نیز هم.
              <br class="hidden md:block">
              طرح جامع توانمندسازی و آموزش تخصصی تعمیرات برای <strong>رهجویان مسیر پاکی</strong>.
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4 items-center">
              <span class="text-amber-700 dark:text-amber-400 text-sm font-bold border-b border-dashed border-amber-400 pb-0.5">بازگشت به اشتغال</span>
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
              <span class="text-amber-700 dark:text-amber-400 text-sm font-bold border-b border-dashed border-amber-400 pb-0.5">حمایت پس از درمان</span>
              
              <button class="mr-auto px-6 py-2 bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-900 rounded-xl text-sm font-bold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2 group/btn">
                <span>جزئیات طرح</span>
                <span class="group-hover/btn:-translate-x-1 transition-transform">←</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


  <Teleport to="body">
      <Transition 
        enter-active-class="transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
        enter-from-class="translate-y-10 scale-90 blur-sm"
        enter-to-class="opacity-100 translate-y-0 scale-100 blur-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="scale-95 blur-sm"
      >
        <div v-if="showCharityModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog">
          
          <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md" @click="showCharityModal = false"></div>

          <div class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div class="bg-gradient-to-r from-amber-400 to-orange-500 p-8 text-white relative overflow-hidden shrink-0">
               <div class="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
               <button @click="showCharityModal = false" class="absolute top-4 left-4 bg-white/20 hover:bg-white/40 rounded-full w-10 h-10 flex items-center justify-center transition-colors text-white z-20">✕</button>
               
               <h3 class="text-3xl font-black relative z-10 mb-2">داستان یک شروع دوباره</h3>
               <p class="text-orange-50 font-medium relative z-10 text-lg">تبدیل مهارت به پلی برای بازگشت به زندگی</p>
            </div>

            <div class="p-8 overflow-y-auto custom-scrollbar text-justify">
              <div class="prose prose-slate dark:prose-invert max-w-none">
                <p class="text-lg leading-loose text-slate-600 dark:text-slate-300 font-medium">
                  در مجموعه حیدری، ما فلسفه‌ای متفاوت داریم: <span class="text-amber-600 dark:text-amber-400 font-bold">«تعمیر کردن، هنر احیاست.»</span>
                </p>
                
                <p class="leading-loose text-slate-500 dark:text-slate-400">
                  همانطور که یک ابزار صنعتی ارزشمند اما آسیب‌دیده، با دانش و حوصله می‌تواند به چرخه تولید بازگردد و دوباره مفید واقع شود، انسان‌هایی که در مقطعی از زندگی دچار لغزش شده‌اند نیز شایسته فرصتی دوباره برای شکوفایی هستند.
                </p>

                <div class="my-6 bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 rounded-l-xl">
                  <h4 class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">🎯 اهداف آکادمی رویش:</h4>
                  <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-none m-0 p-0">
                    <li class="flex items-center gap-2">
                      <span class="text-green-500">✔</span>
                      آموزش رایگان و فوق‌تخصصی تعمیرات ابزار (هیلتی و...)
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-green-500">✔</span>
                      ایجاد هویت حرفه‌ای و اعتماد‌به‌نفس شغلی
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-green-500">✔</span>
                      تضمین اشتغال در شبکه همکاران پس از پایان دوره پاکی و مهارت
                    </li>
                  </ul>
                </div>

                <p class="leading-loose text-slate-500 dark:text-slate-400">
                  این طرح ویژه‌ی عزیزانی است که عزم خود را برای تغییر جزم کرده‌اند (رهجویان پاکی). ما در کنار آموزش فنی، حمایت معنوی خود را نثار می‌کنیم تا این عزیزان نه به عنوان یک فرد آسیب‌دیده، بلکه به عنوان یک <strong>«متخصص فنی ماهر»</strong> به آغوش جامعه و خانواده بازگردند.
                </p>
              </div>

              <div class="mt-8 flex justify-center">
                 <a href="tel:0912..." class="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
                  تماس جهت معرفی یا مشاوره طرح
                 </a>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
</template>

<style scoped>
.service-card {
  transition: none;
}
</style>