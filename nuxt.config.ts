export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      title: 'Erfan Fadakar | Industrial & Tech Portfolio',
      meta: [
        { name: 'description', content: 'نمایندگی هیلتی، نویسنده و بنیان‌گذار استارتاپ' }
      ]
    }
  }
})