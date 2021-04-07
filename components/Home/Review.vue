<template>
  <div class="relative py-5 md:py-0">
    <!-- Avatar -->
    <div class="inset-y-0 mx-auto my-auto md:absolute md:-ml-12 w-28 h-28">
      <figure class="absolute mt-2 ml-3 bg-gray-200 border-4 border-black w-28 h-28 rounded-xl" />
      <img class="absolute object-cover border-4 border-black w-28 h-28 rounded-xl" :src="avatar">
    </div>

    <!-- Content -->
    <article class="flex flex-col justify-center h-full p-4 bg-white shadow-lg md:py-8 md:pr-16 md:my-20 md:shadow-xl md:pl-26 rounded-3xl">
      <transition name="fade" mode="out-in">
        <h4 v-if="!readMore" class="w-full leading-tight">
          “{{ title }}”
        </h4>
        <p v-else class="mt-2 text-sm leading-tight">
          {{ comment }}
        </p>
      </transition>
      <p class="mt-2 text-sm font-bold text-red-500 cursor-pointer" @click="readMore = !readMore">
        Read {{ readMore ? 'less' : 'more' }}
      </p>
      <p class="mt-2 text-sm leading-tight text-gray-400 md:w-72">
        {{ position }}
      </p>
      <client-only>
        <Rating v-if="readMore" v-model="rating" class="mt-2 " />
      </client-only>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  data: () => ({
    readMore: false
  })
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

article {
  height: 18.5rem;
}
@media (max-width: 600px) {
  article {
    height: auto;
  }
}
</style>
