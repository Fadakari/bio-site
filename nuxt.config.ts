export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // اضافه شدن ماژول content
  modules: ['@unocss/nuxt', '@nuxt/content'],


  content: ( {
    highlight: {
      theme: 'github-light'
    }
  } as any ),

  app: {
    head: {
      title: 'Behzad Heydari | Industrial & Tech Portfolio',
      meta: [
        { name: 'description', content: 'نمایندگی هیلتی، نویسنده و بنیان‌گذار استارتاپ' }
      ]
    }
  }
})