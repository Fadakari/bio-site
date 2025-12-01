<template>
  <HomeSection />
</template>

<script setup>
import HomeSection from '~/components/HomeSection.vue'

useSeoMeta({
  title: 'خانه',
  description: 'وبسایت رسمی بهزاد حیدری، مدیرعامل تعمیرات تخصصی هیلتی، کارآفرین و نویسنده کتب صنعتی. آشنایی با خدمات و بیوگرافی.',
  ogTitle: 'بهزاد حیدری | کارآفرین و متخصص صنعتی',
  ogDescription: 'بیوگرافی و وبسایت رسمی بهزاد حیدری. دسترسی به خدمات تعمیرات هیلتی، اپلیکیشن استوک و مقالات تخصصی.',
  ogImage: 'https://behzadheydari.ir/me.jpg',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'ProfilePage',
  }),
  definePerson({
    name: 'بهزاد حیدری',
    alternateName: ['Behzad Heydari', 'مهندس حیدری'],
    image: '/me.jpg',
    description: 'کارآفرین نمونه، مدیرعامل تعمیرات تخصصی هیلتی و نویسنده.',
    jobTitle: 'مدیرعامل',
    worksFor: {
      name: 'تعمیرات تخصصی هیلتی حیدری',
      url: 'https://tamirat-takhasosi-heydari.ir'
    }
  })
])
</script>