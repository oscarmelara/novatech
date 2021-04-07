<template>
  <div>
    <figure class="relative">
      <div class="absolute flex flex-col h-full pr-4 pb-18 w-72 pt-30 pl-7">
        <h3>
          {{ title }}
        </h3>
        <p class="mt-1 text-sm leading-tight">
          {{ description }}
        </p>
        <h3 class="mt-auto text-red-500">
          {{ ('0' + number).slice(-2) }}
        </h3>
      </div>
      <img class="absolute bottom-0 right-0 select-none mb-7 mr-9" :src="`/icons/${icon}.png`">
      <img class="select-none" src="/images/home/window.png">
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
figure {
  width: 20.688rem;
  height: 23.625rem;
}
</style>
