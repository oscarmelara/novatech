<template>
  <div class="bg-gray-50">
    <the-header class="hidden md:block" />
    <the-header-mobile class="block md:hidden" />
    <Nuxt />
    <the-footer />
  </div>
</template>
<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheHeaderMobile from '~/components/TheHeaderMobile.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
    TheHeaderMobile
  }
}
</script>

<style>
@import url('@splidejs/splide/dist/css/themes/splide-sea-green.min.css');

html {
  @apply text-black;
  @apply font-semibold;
  @apply text-base;
  @apply box-border;
  font-family: 'Montserrat Alternates', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  @apply box-border;
  @apply m-0;
}

body {
  overflow-x: hidden;
}

.container {
  @apply max-w-9xl;
  @apply mx-auto;
}

h1 {
  @apply text-8xl;
  @apply font-black;
}

h2 {
  @apply text-5xl;
  @apply font-bold;
}

h3 {
  @apply text-4xl;
  @apply font-bold;
  @apply leading-tight;
}

h4 {
  @apply text-2xl;
}

@media (max-width: 600px) {
  h1  {
    @apply text-5xl;
    @apply font-black;
  }
  h2 {
    @apply text-4xl;
    @apply font-bold;
    @apply text-center;
  }
}
</style>
