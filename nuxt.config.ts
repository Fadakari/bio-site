export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],


  app: {
    head: {
      title: 'Behzad Heydari | Industrial & Tech Portfolio',
      meta: [
        { name: 'description', content: 'نمایندگی هیلتی، نویسنده و بنیان‌گذار استارتاپ' }
      ]
    }
  }
})