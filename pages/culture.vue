<template>
  <div class="w-full page-culture">
    <section
      class="relative flex flex-wrap items-center justify-center w-full h-auto p-0 py-24 m-0 main"
    >
      <div
        class="container inline-flex px-10 mx-auto md:absolute md:px-28 md:mt-0"
      >
        <div class="visible w-full opacity-1 transform-none">
          <div class="w-full md:w-1/2">
            <h1 class="text-2.5xl leading-none text-red-500 md:text-7xl">
              {{ $t('mainText') }}
            </h1>
            <h3 class="text-2xl leading-none text-red-500 md:text-5xl font-black">
              {{ $t('mainTextSub') }}
            </h3>
            <p
              class="mt-10 text-base font-semibold leading-tight text-gray-400 md:text-lg"
            >
              {{ $t('mainDescription') }}
            </p>
          </div>
        </div>
      </div>
      <div class="visible block w-full pl-6 opacity-1 transform-none md:px-0">
        <div
          class="flex items-center justify-end w-full h-auto pt-10 md:py-32"
        >
          <img
            src="~/static/images/culture/header.png"
            class="hidden -mr-32 md:block header-img"
            alt="Icon"
          >
          <img
            src="~/static/images/culture/header-mobile.png"
            class="block md:hidden header-img"
            alt="Icon"
          >
        </div>
      </div>
    </section>
    <section class="bg-gray-100 our-values">
      <div class="container px-6 py-30 md:px-20 lg:px-28">
        <h3 class="mb-10 text-4xl font-bold text-center text-black">
          {{ $t('titleVisionMision') }}
        </h3>
        <div class="flex justify-center section-our-values">
          <div class="flex flex-col ov-card">
            <div class="flex items-center justify-center ov-card-icon">
              <img
                src="~/static/images/culture/icons/flame.png"
                class="ov-card-img ov-card-flame"
                alt="Icon Flame"
              >
            </div>
            <div
              class="text-4xl font-bold text-center text-red-500 ov-card-header"
            >
              {{ $t('mission.title') }}
            </div>
            <div class="flex items-center h-full leading-5 ov-card-content">
              {{ $t('mission.description') }}
            </div>
          </div>
          <div class="flex flex-col ov-card lg:ml-20">
            <div class="flex items-center justify-center ov-card-icon">
              <img
                src="~/static/images/culture/icons/rocket.png"
                class="ov-card-img ov-card-rocket"
                alt="Icon Rocket"
              >
            </div>
            <div
              class="text-4xl font-bold text-center text-red-500 ov-card-header"
            >
              {{ $t('vision.title') }}
            </div>
            <div class="flex items-center h-full leading-5 ov-card-content">
              {{ $t('vision.description') }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white best-place">
      <div class="container px-6 py-30 md:px-20 lg:px-28">
        <h3 class="font-bold text-black text-center text-4.5xl mb-10">
          Best place to work!
        </h3>
        <section class="section-video">
          <video
            src="/images/culture/sample-video.m4v"
            class="item-video"
            controls
          />
        </section>
      </div>
    </section>
    <section class="bg-gray-50 moments">
      <div class="container px-6 pt-30 pb-60 md:px-20 lg:px-28">
        <h3 class="font-bold text-black text-center text-4.5xl mb-20">
          {{ $t('titleMoments') }}
        </h3>
        <section class="section-slider">
          <div class="slider-container">
            <div
              v-for="item of items"
              :key="item.image"
              class="slider-item"
              :style="{
                backgroundImage: `url(${require('~/static/images/culture/carrousel/' +
                  item.image +
                  '.jpg')})`
              }"
            >
              <!-- <div class="slider-item-content">
                Content!
              </div> -->
            </div>
          </div>
          <div class="text-4xl font-bold text-white slider-indicator">
            {{ currentItem }}/{{ items.length }}
          </div>
          <div class="slider-controls">
            <a href="/#" class="slider-arrow arrow-right">
              <img
                src="~/static/images/culture/icons/arrow-right.png"
                alt="Arrow Right"
              >
            </a>
            <a href="/#" class="slider-arrow arrow-left">
              <img
                src="~/static/images/culture/icons/arrow-left.png"
                alt="Arrow Left"
              >
            </a>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { image: 'AB6I3455' },
        { image: 'AB6I3484' },
        { image: 'AB6I3496' },
        { image: 'AB6I3518' },
        { image: 'AB6I3536' },
        { image: 'AB6I3557' },
        { image: 'AB6I3571' },
        { image: 'AB6I3591' },
        { image: 'AB6I3620' },
        { image: 'AB6I3654' }
      ],
      currentItem: 1
    }
  },
  mounted () {
    let isChanging = false

    window.$('.section-slider .slider-container').slick({
      // adaptiveHeight: true,
      arrows: false,
      // centerMode: true,
      draggable: false,
      fade: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      swipe: false
    })

    const checkClass = () => {
      if (
        !window
          .$('.section-slider .slider-container')
          .hasClass('slick-initialized')
      ) {
        window
          .$('.section-slider .slider-container')
          .addClass('slick-initialized')
      }

      if (
        !window.$('.section-slider .slider-container').hasClass('slick-slider')
      ) {
        window.$('.section-slider .slider-container').addClass('slick-slider')
      }
    }

    window
      .$('.section-slider .slider-container')
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        checkClass()
      })

    window
      .$('.section-slider .slider-container')
      .on('afterChange', function (event, slick, currentSlide, nextSlide) {
        checkClass()
      })

    window.$('.slider-arrow.arrow-right').on('click', (event) => {
      event.preventDefault()
      event.stopPropagation()

      if (!isChanging) {
        isChanging = true

        window.$('.section-slider .slider-container').slick('slickNext')

        if (this.currentItem === this.items.length) {
          this.currentItem = 1
        } else {
          this.currentItem++
        }

        setTimeout(() => {
          isChanging = false
        }, 300)
      }
    })

    window.$('.slider-arrow.arrow-left').on('click', (event) => {
      event.preventDefault()
      event.stopPropagation()

      if (!isChanging) {
        isChanging = true

        window.$('.section-slider .slider-container').slick('slickPrev')

        if (this.currentItem === 1) {
          this.currentItem = this.items.length
        } else {
          this.currentItem--
        }

        setTimeout(() => {
          isChanging = false
        }, 300)
      }
    })
  },
  head () {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
        },
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
        }
      ]
    }
  }
}
</script>

<style>
.big-section {
  padding-top: 50px;
}

.header-img {
  max-height: 650px;
}

/* .section-our-values {} */

.section-our-values .ov-card {
  --img-size: 106px;
  --icon-middle-pos: calc(var(--img-size) / 2);

  background-color: white;
  border: 6px solid #1f2234;
  border-radius: 20px;
  height: 330px;
  margin-top: calc(var(--icon-middle-pos) + 20px);
  position: relative;
  width: 100%;
  max-width: 300px;
}

.section-our-values .ov-card .ov-card-icon {
  background-color: #ff4c41;
  border: 6px solid #1f2234;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - var(--icon-middle-pos));
  top: calc(var(--icon-middle-pos) * -1);
  height: var(--img-size);
  width: var(--img-size);
}

.section-our-values .ov-card .ov-card-icon .ov-card-flame {
  max-width: 30px;
}

.section-our-values .ov-card .ov-card-icon .ov-card-rocket {
  max-width: 48px;
}

.section-our-values .ov-card .ov-card-icon .ov-card-infinite {
  max-width: 60px;
}

.section-our-values .ov-card .ov-card-header {
  border-bottom: 6px solid #1f2234;
  padding-bottom: 20px;
  padding-top: calc(var(--icon-middle-pos) + 20px);
}

.section-our-values .ov-card .ov-card-content {
  padding: 25px 18px;
}

/* .section-video {} */

.section-video .item-video {
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
  object-fit: cover;
  border-radius: 25px;
  width: 100%;
  max-height: 700px;
}

.section-slider {
  --slider-height: 745px;
  /* --slider-height: 900px; */

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 25px;
  height: var(--slider-height);
  position: relative;
  width: 100%;
}

.section-slider .slider-container {
  height: 100%;
  position: relative;
  z-index: 1;
}

.section-slider .slider-indicator {
  position: absolute;
  right: 40px;
  top: 30px;
  z-index: 2;
}

.section-slider .slider-controls {
  background-color: #45e4db;
  border-radius: 2px;
  /* padding: 2px 12px; */
  position: absolute;
  right: -25px;
  top: 100px;
  z-index: 2;
}

.section-slider .slider-controls .slider-arrow {
  display: block;
  padding: 20px 18px;
  position: relative;
  transition: all 0.2s linear;
}

.section-slider .slider-controls .slider-arrow:hover {
  background-color: #1f2234;
  opacity: 0.75;
}

.section-slider .slider-controls .slider-arrow.arrow-right:after {
  background-color: #3fb7b0;
  bottom: -1px;
  content: '';
  display: block;
  height: 2px;
  left: 15%;
  /* margin: 15px 0; */
  position: absolute;
  width: 70%;
}

.section-slider .slick-list {
  border-radius: 25px;
  height: 100%;
}

.section-slider .slider-item {
  /* background-position: center top; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  height: var(--slider-height);
}

.section-slider .slider-item:before {
  background-color: rgba(196, 196, 196, 0.15);
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.section-slider .slider-item .slider-img {
  width: 100%;
}

@media (max-width: 1380px) {
  .moments .container {
    padding-left: 80px;
    padding-right: 80px;
  }

  .section-slider {
    --slider-height: 700px;
  }

  .section-slider .slider-controls .slider-arrow {
    padding: 16px;
  }
}

@media (max-width: 1260px) {
  .big-section h1 {
    font-size: 3rem;
  }
}

@media (max-width: 1200px) {
  .moments .container {
    padding-bottom: 6em;
    padding-top: 3em;
  }

  .moments h3 {
    margin-bottom: 1.3em;
  }

  .section-slider {
    --slider-height: 550px;
  }

  .section-slider .slider-indicator {
    right: 60px;
    top: 20px;
  }

  .section-slider .slider-controls {
    top: 25px;
  }

  .section-slider .slider-controls .slider-arrow img {
    max-width: 20px;
  }
}

@media (max-width: 1024px) {
  .our-values .container,
  .best-place .container {
    padding-bottom: 6em;
    padding-top: 3em;
  }
}

@media (max-width: 992px) {
  .big-section .container {
    flex-wrap: wrap;
  }

  .big-section .inner-content {
    width: 100%;
  }

  .big-section .inner-content h1 {
    text-align: center;
  }

  .big-section .inner-content + div {
    justify-content: center;
    margin-top: 50px;
    width: 100%;
  }

  .big-section .inner-content + div .header-img {
    max-width: 50%;
  }

  .section-our-values {
    display: block;
  }

  .section-our-values .ov-card {
    margin-left: auto;
    margin-right: auto;
  }

  .section-slider {
    --slider-height: 480px;
  }
}

@media (max-width: 768px) {
  .moments .container {
    padding-bottom: 5em;
  }

  .section-slider {
    --slider-height: 360px;
  }

  .section-slider .slider-indicator {
    font-size: 1.4rem;
    right: 30px;
  }

  .section-slider .slider-controls {
    right: -20px;
  }

  .section-slider .slider-controls .slider-arrow {
    padding: 8px;
  }

  .section-contact .container {
    padding-top: 40px;
  }
}

@media (max-width: 480px) {
  h3.text-4xl {
    font-size: 1.6rem;
  }

  .section-slider {
    --slider-height: 250px;
  }

  .moments .container {
    padding-left: 30px;
    padding-right: 30px;
  }

  .section-our-values .ov-card .ov-card-header {
    font-size: 1.6rem;
  }
}
</style>
