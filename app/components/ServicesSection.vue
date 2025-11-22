<template>
  <div class="w-full max-w-5xl mx-auto pt-6 pb-20">
    
    <div class="text-center mb-12 service-card opacity-0" style="animation: none !important;">
      <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-200 mb-3">فعالیت‌ها و تخصص‌ها</h2>
      <div class="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
    </div>

    <div class="grid gap-8 md:grid-cols-2 w-full">
      
      <div class="service-card group relative overflow-hidden bg-white/50 backdrop-blur-[10px] dark:bg-red-700/20 backdrop-blur-[10px] border-x border-slate-200 rounded-3xl p-8 hover:border-red-600 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 opacity-0">
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
          
          <div class="flex items-center gap-2 text-red-600 font-bold text-sm cursor-pointer group/link">
            <span>مشاهده جزئیات</span>
            <span class="group-hover/link:-translate-x-2 transition-transform">←</span>
          </div>
        </div>
      </div>

      <div class="service-card group relative overflow-hidden bg-white/50 backdrop-blur-[10px] dark:bg-sky-600/30 border border-slate-200 rounded-3xl p-8 hover:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20 opacity-0">
        <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-slate-100 dark:bg-slate-700 rounded-full group-hover:bg-slate-800/10 transition-colors duration-500"></div>
        <div class="absolute left-6 top-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">📱</div>

        <div class="relative z-10">
          <div class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-3xl shadow-lg shadow-slate-500/40 group-hover:scale-110 transition-transform duration-500">
            📱
          </div>
          <h3 class="text-2xl font-black text-slate-900 dark:text-slate-200 mb-3 group-hover:text-slate-700 transition-colors">اپلیکیشن بازار استوک</h3>
          <p class="text-slate-500 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
            پلتفرم هوشمند و امن برای خرید و فروش کالاهای صنعتی دست دوم. واسطی مطمئن برای معاملات شما.
          </p>

          <div class="flex items-center gap-2 text-slate-800 dark:text-sky-200 font-bold text-sm cursor-pointer group/link">
            <span>دانلود نسخه آزمایشی</span>
            <span class="group-hover/link:-translate-x-2 transition-transform">←</span>
          </div>
        </div>
      </div>

      <div class="service-card md:col-span-2 group relative bg-dark/70 backdrop-blur-[15px] overflow-hidden dark:bg-green-600/40 border border-slate-200 rounded-3xl p-8 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/10 opacity-0">
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

    </div>
  </div>
</template>

<style scoped>
.service-card {
  will-change: transform, opacity;
}
</style>