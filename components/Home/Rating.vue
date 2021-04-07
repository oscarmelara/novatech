<template>
  <div class="flex -mx-0.5">
    <Star
      v-for="(_, index) in 5"
      :key="index"
      class="mx-0.5 text-gray-200"
      :class="{ 'text-red-500': (index + 1) <= value }"
    />
  </div>
</template>

<script>
import Star from '~/assets/icons/star.svg?inline'

export default {
  components: {
    Star
  },
  props: {
    value: {
      type: Number,
      required: true
    }
  }
}
</script>
