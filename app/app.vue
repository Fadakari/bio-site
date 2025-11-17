<template>
  <div class="main-container font-sans text-slate-800">
    <AnimatedGradientBackground />

    <main class="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
      
      <header class="flex flex-col items-center text-center mt-10 mb-16 animate-fade-in">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-gray-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src="/me.jpg" 
            alt="عکس پروفایل" 
            class="relative w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-2xl"
          />
        </div>
        
        <h1 class="text-3xl md:text-5xl font-black mt-6 mb-2 tracking-tight">
          عرفان فداکار
        </h1>
        <p class="text-lg md:text-xl text-gray-600 font-medium">
          <span class="text-red-600">تعمیرات تخصصی هیلتی</span> | نویسنده | توسعه‌دهنده وب
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-2">
        
        <div class="card group hover:border-red-500 cursor-pointer">
          <div class="flex items-center gap-4 mb-3">
            <div class="icon-box bg-red-100 text-red-600">🛠️</div>
            <h2 class="text-xl font-bold">خدمات و تعمیرات هیلتی</h2>
          </div>
          <p class="text-gray-500 text-sm mb-4 leading-relaxed">
            نمایندگی رسمی فروش و تعمیرات تخصصی ابزارآلات صنعتی. تضمین کیفیت و قطعات اصلی.
          </p>
          <span class="text-red-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
            مشاهده خدمات &larr;
          </span>
        </div>

        <div class="card group hover:border-blue-500 cursor-pointer">
          <div class="flex items-center gap-4 mb-3">
            <div class="icon-box bg-blue-100 text-blue-600">📱</div>
            <h2 class="text-xl font-bold">اپلیکیشن بازار استوک</h2>
          </div>
          <p class="text-gray-500 text-sm mb-4 leading-relaxed">
            پلتفرم واسطه‌گری امن برای خرید و فروش کالاهای دست دوم (مشابه دیوار).
          </p>
          <span class="text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
            دانلود یا مشاهده &larr;
          </span>
        </div>

        <div class="card group hover:border-green-500 cursor-pointer md:col-span-2 bg-gradient-to-br from-white to-green-50">
          <div class="flex items-center gap-4 mb-3">
            <div class="icon-box bg-green-100 text-green-600">🌱</div>
            <h2 class="text-xl font-bold">آموزش و توانمندسازی</h2>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">
            برگزاری دوره‌های آموزشی فنی و نرم‌افزاری برای دانشجویان و حمایت از اشتغال افراد آسیب‌پذیر.
            <br><strong>"مهارت‌آموزی، کلید بازگشت به زندگی"</strong>
          </p>
        </div>

      </div>

      <div class="fixed bottom-6 left-0 right-0 flex justify-center z-50 px-4">
        <a href="tel:09120000000" class="bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-slate-800 transition transform hover:scale-105">
          <span class="text-xl">📞</span>
          <span class="font-bold text-lg">تماس مستقیم با من</span>
        </a>
      </div>

    </main>
  </div>
</template>

<style>
.card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 1.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01);
}

.card:hover {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.icon-box {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 1.5rem;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

body {
  font-family: 'Vazirmatn', sans-serif;
}
</style>