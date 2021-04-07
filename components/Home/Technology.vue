<template>
  <div class="z-10 text-left">
    <!-- Content -->
    <div
      v-bind="$attrs"
      class="relative w-full h-full px-6 pt-5 pb-5 bg-white border-4 border-black rounded-xl card-content"
    >
      <h3 class="flex items-center mb-8">
        {{ title }} <img class="ml-3" src="/icons/arrow-right.png" alt="">
      </h3>

      <div class="flex flex-wrap -mx-6 -my-3">
        <div v-for="tech in technologies" :key="tech.name" class="w-16 mx-6 my-3">
          <figure class="flex items-center justify-center w-16 h-16 border-black rounded-xl border-3" :style="{ backgroundColor: tech.color }">
            <img :src="`/icons/technologies/${tech.icon}`" :alt="tech.name">
          </figure>
          <p class="mt-1 text-sm font-bold text-center">
            {{ tech.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card-content:before {
  --distance-card-content: 20px;

  background-color: #E0E0E0;
  border: 4px solid #1F2234;
  border-radius: 21px;
  content: '';
  height: 100%;
  left: var(--distance-card-content);
  position: absolute;
  top: var(--distance-card-content);
  width: 100%;
  z-index: -1;
}
</style>
