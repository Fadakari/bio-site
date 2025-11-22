export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // اضافه شدن ماژول content
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  site: {
    url: 'https://behzadheydari.ir',
    name: 'بهزاد حیدری | کارآفرین و متخصص ابزارآلات صنعتی',
  },

  content: {
    
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fa', dir: 'rtl' },
      title: 'Behzad Heydari | Industrial & Tech Portfolio',
      meta: [
        { name: 'description', content: 'نمایندگی هیلتی، نویسنده و بنیان‌گذار استارتاپ' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'preload', href: 'assets/fonts/Vazir.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    }
  }
})