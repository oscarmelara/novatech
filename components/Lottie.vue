<template>
  <div ref="lottieBox" class="h-full" />
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      animation: null
    }
  },
  watch: {
    name () {
      this.loadAnimation()
    }
  },
  mounted () {
    this.loadAnimation()
  },
  methods: {
    loadAnimation () {
      if (this.animation) {
        this.animation.destroy()
      }

      this.animation = lottie.loadAnimation({
        container: this.$refs.lottieBox,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require(`~/assets/lottie/${this.name}.json`)
      })
    }
  }
}
</script>
