<template>
  <div class="grid gap-6 md:grid-cols-2 w-full max-w-4xl mx-auto pt-10">
    <div class="service-card group hover:border-red-500/50">
      <div class="flex items-center gap-4 mb-4">
        <div class="p-3 rounded-xl bg-red-50 text-red-600 text-2xl">🛠️</div>
        <h3 class="text-xl font-bold">نمایندگی و تعمیرات هیلتی</h3>
      </div>
      <p class="text-slate-500 text-sm leading-relaxed">تامین قطعات اورجینال و خدمات پس از فروش تخصصی ابزارآلات صنعتی.</p>
    </div>
    <div class="service-card group hover:border-blue-500/50">
      <div class="flex items-center gap-4 mb-4">
        <div class="p-3 rounded-xl bg-blue-50 text-blue-600 text-2xl">📱</div>
        <h3 class="text-xl font-bold">اپلیکیشن بازار استوک</h3>
      </div>
      <p class="text-slate-500 text-sm leading-relaxed">پلتفرم امن و واسط هوشمند برای معاملات کالای دست دوم.</p>
    </div>
    <div class="service-card md:col-span-2 group hover:border-green-500/50 bg-gradient-to-r from-white to-green-50/30">
      <div class="flex items-center gap-4 mb-4">
        <div class="p-3 rounded-xl bg-green-50 text-green-600 text-2xl">🌱</div>
        <h3 class="text-xl font-bold">مسئولیت اجتماعی</h3>
      </div>
      <p class="text-slate-500 text-sm">آموزش رایگان مهارت‌های فنی به دانشجویان و توان‌یابان جهت ورود به بازار کار.</p>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.service-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.9);
}
</style>