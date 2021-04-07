<template>
  <div class="pb-5">
    <main class="bg-red-500">
      <div class="container flex justify-between h-full px-6 pt-16 pb-6 lg:pr-0 lg:p-28 lg:pt-36">
        <aside
          class="flex flex-col w-full text-white slider mt-14"
          :style="{ maxWidth: currentSlide.width }"
        >
          <h1
            :class="currentSlide.titleClass"
            :style="{ maxWidth: currentSlide.width }"
          >
            {{ currentSlide.title }}
          </h1>
          <p
            v-if="currentSlide.subtitle"
            class="max-w-md mt-4 mb-2 text-xl font-bold leading-tight text-left"
          >
            {{ currentSlide.subtitle }}
          </p>
          <p
            :class="[
              currentSlide.descriptionClass,
              {
                'mt-8 lg:mt-12': !currentSlide.subtitle,
              }
            ]"
            class="text-base leading-tight text-left lg:text-lg"
          >
            {{ currentSlide.description }}
          </p>
          <aside class="block pl-12 mt-8 lg:hidden">
            <Lottie :name="currentSlide.animation" />
          </aside>

          <div class="flex justify-center mt-auto mb-8 -mx-2 lg:justify-start">
            <!-- <h4
              v-for="(_, index) in itemSlideshow"
              :key="index"
              class="mx-2 text-black transition-opacity duration-300 cursor-pointer"
              :class="{ 'opacity-30': slideshow.currentSlide !== index }"
              @click="slideshow.currentSlide = index"
            >
              {{ ('0' + (index + 1)).slice(-2) }}
            </h4> -->
          </div>
        </aside>
        <aside class="hidden pl-12 lg:block w-full">
          <Lottie :name="currentSlide.animation" />
        </aside>
      </div>
    </main>
    <section class="container flex flex-col-reverse items-center justify-between py-12 xl:flex-row xl:items-end xl:pl-40 xl:-mt-32 xl:pr-28">
      <aside class="flex flex-wrap justify-center w-full max-w-3xl xl:-m-3.5">
        <Window
          v-for="(item, index) in howWeDoIt.items"
          :key="index"
          v-bind="item"
          class="m-3.5"
          :class="{ 'flex justify-center xl:w-full': !index }"
          :number="index + 1"
        />
      </aside>
      <aside class="w-full px-6 mb-10 text-center xl:text-left xl:max-w-xs xl:mb-16 xl:ml-10 xl:px-0">
        <h2>
          {{ $t('howWeDoIt.title') }}
        </h2>
        <p class="mt-3 text-base leading-none text-center xl:text-left xl:text-lg ">
          {{ howWeDoIt.description }}
        </p>
      </aside>
    </section>

    <!-- <section class="mt-16 md:mt-36">
      <h2 class="text-center">
        Reviews
      </h2>

      <client-only>
        <splide
          class="mx-auto md:-mt-14 max-w-7xl"
          :options="reviews.sliderOptions"
        >
          <splide-slide v-for="(item, index) in reviews.items" :key="index">
            <Review v-bind="item" />
          </splide-slide>

          <template v-slot:controls>
            <div class="splide__arrows">
              <ArrowLeft class="md:-ml-6 splide__arrow splide__arrow--prev" />
              <ArrowRight class="splide__arrow splide__arrow--next" />
            </div>
          </template>
        </splide>
      </client-only>
    </section> -->

    <section class="py-12 text-center">
      <h2 class="mb-20">
        {{ $t('technologies') }}
      </h2>

      <div class="flex flex-wrap justify-center max-w-5xl pl-5 mx-auto pr-9 lg:px-0">
        <Technology class="w-full lg:pr-10 lg:w-1/2" title="Mobile" :technologies="technologies.mobile" />
        <Technology class="w-full mt-12 lg:mt-0 lg:w-1/2" title="Frontend" :technologies="technologies.frontend" />
        <Technology class="w-full mt-12" title="Backend" :technologies="technologies.backend" />
        <Technology class="w-full mt-12" :title="$t('platform')" :technologies="technologies.platforms" />
        <Technology class="w-full mt-12" :title="$t('architecture')" :technologies="technologies.architecture" />
        <Technology class="w-full mt-12" title="Database" :technologies="technologies.databases" />
      </div>
    </section>
  </div>
</template>

<script>
// import ArrowLeft from '~/assets/icons/arrow-left.svg?inline'
// import ArrowRight from '~/assets/icons/arrow-right.svg?inline'

export default {
  components: {
    // ArrowLeft,
    // ArrowRight
  },
  data () {
    return {
      slideshow: {
        currentSlide: 0,
        items: [
          {
            title: 'Creamos soluciones digitales',
            subtitle: 'para alcanzar tus objetivos más ambiciosos',
            description:
              'En Novatech nos volvemos tu socio estratégico en el área de tecnología y te ayudamos a sobresalir sobre la competencia por medio de productos y sistemas innovadores con el uso de las últimas tecnologías en el mercado',
            descriptionClass: 'max-w-md-2.5',
            animation: 'slide2',
            width: '37.188rem'
          },
          {
            title: 'Desarrollamos experiencias únicas',
            titleClass: 'text-4xl leading-tight md:text-7xl',
            description:
              'Te acompañamos desde la conceptualización hasta creación de las interfaces gráficas más modernas, teniendo como principal enfoque brindar la mejor experiencia para el usuario.',
            descriptionClass: 'max-w-md',
            animation: 'slide3',
            width: '36.625rem'
          },
          {
            title: 'De la idea al producto',
            description:
              'Nuestra metodología ágil le permitirá la mejor toma de decisiones al momento de desarrollar un producto digital, ¡Tu pones la idea y nosotros le damos vida!',
            descriptionClass: 'max-w-sm',
            animation: 'slide1',
            width: '38.625rem'
          }
        ]
      },
      reviews: {
        sliderOptions: {
          perPage: 2,
          rewind: true,
          pagination: false,
          gap: '7.5rem',
          padding: '4rem',
          breakpoints: {
            1024: {
              perPage: 1,
              padding: '1rem'
            }
          }
        },
        items: [
          {
            title: 'They were very proactive in ensuring we receive what we paid for, with no issues with time or language barriers.',
            comment:
              'A social app for physical therapists partnered with Novatech to finish development on their app. The goal was to make the project APP HIPAA compliant and launch it on both the Apple Store and Google Play.',
            position: 'CMO, Therapist Social App',
            rating: 5,
            avatar: '/images/empty_user_profile_no_image.jpg'
          },
          {
            title: 'They are always available.',
            comment:
              'Novatech helps a logistics and supply chain company to craft their shipment and delivery app. The platform will enable users access to the information they need in real-time.',
            position: 'Operations Director, Envia de Guatemala',
            rating: 5,
            avatar: '/images/empty_user_profile_no_image.jpg'
          }
        ]
      },
      technologies: {
        mobile: [
          {
            name: 'Xamarin',
            color: '#46A1D3',
            icon: 'xamarin.png'
          },
          {
            name: 'Kotlin',
            color: '#8762F2',
            icon: 'kotlin.png'
          },
          {
            name: 'Swift',
            color: '#FF6839',
            icon: 'swift.png'
          },
          {
            name: 'React Native',
            color: '#45D1E4',
            icon: 'react_native.png'
          }
        ],
        frontend: [
          {
            name: 'Angular',
            color: '#FF5252',
            icon: 'angular.png'
          },
          {
            name: 'Vue',
            color: '#11AF80',
            icon: 'vue.png'
          },
          {
            name: 'React',
            color: '#BEBEBE',
            icon: 'react.png'
          }
        ],
        backend: [
          {
            name: 'Laravel',
            color: '#FF354D',
            icon: 'laravel.png'
          },
          {
            name: 'Nodejs',
            color: '#6DB6D6',
            icon: 'node.png'
          },
          {
            name: 'Springboot',
            color: '#61D0AF',
            icon: 'springboot.png'
          },
          {
            name: 'ASP .Net',
            color: '#EDEDED',
            icon: 'asp.png'
          },
          {
            name: 'Ruby on Rails',
            color: '#FF5050',
            icon: 'ruby.png'
          },
          {
            name: 'ASP .NetCore',
            color: '#7659EB',
            icon: 'core.png'
          },
          {
            name: 'Django',
            color: '#5A6C10',
            icon: 'django.png'
          }
        ],
        platforms: [
          {
            name: 'Azure',
            color: '#008AD7',
            icon: 'azure.png'
          },
          {
            name: 'AWS',
            color: '#FAB957',
            icon: 'aws.png'
          },
          {
            name: 'Google Cloud',
            color: '#00AC48',
            icon: 'gcp.png'
          },
          {
            name: 'Docker',
            color: '#45D1E4',
            icon: 'docker.png'
          },
          {
            name: 'Kubernets',
            color: '#8762F2',
            icon: 'kubernetes.png'
          },
          {
            name: 'DevOps',
            color: '#E339FF',
            icon: 'devops.png'
          }
        ],
        architecture: [
          {
            name: 'MVVM',
            color: '#E79494',
            icon: 'mvvm.png'
          },
          {
            name: 'MVC',
            color: '#90AF11',
            icon: 'mvc.png'
          },
          {
            name: 'Micro servicios',
            color: '#565656',
            icon: 'micro.png'
          },
          {
            name: 'SOA',
            color: '#56D5C5',
            icon: 'soa.png'
          }
        ],
        databases: [
          {
            name: 'SQL',
            color: '#46A1D3',
            icon: 'sql.png'
          },
          {
            name: 'MySQL',
            color: '#FFB800',
            icon: 'mysql.png'
          },
          {
            name: 'Oracle',
            color: '#FF4646',
            icon: 'oracle.png'
          },
          {
            name: 'Postgres',
            color: '#1175AD',
            icon: 'postgres.png'
          },
          {
            name: 'Redis',
            color: '#FF522D',
            icon: 'redis.png'
          },
          {
            name: 'Mongo',
            color: '#41C84E',
            icon: 'mongo.png'
          },
          {
            name: 'Cosmos',
            color: '#464CD3',
            icon: 'cosmos.png'
          }
        ]
      }
    }
  },
  computed: {
    itemSlideshow () {
      return [
        {
          title: this.$t('slide_1.title'),
          subtitle: this.$t('slide_1.subtitle'),
          description: this.$t('slide_1.description'),
          descriptionClass: 'max-w-md-2.5',
          animation: 'slide2',
          width: '37.188rem'
        }
      ]
    },

    howWeDoIt () {
      return {
        description: this.$t('howWeDoIt.description'),
        items: [
          {
            title: this.$t('value.title'),
            description: this.$t('value.description'),
            icon: 'bulb'
          },
          {
            title: this.$t('velocity.title'),
            description: this.$t('velocity.description'),
            icon: 'flash'
          },
          {
            title: this.$t('versatility.title'),
            description: this.$t('versatility.description'),
            icon: 'build'
          }
        ]
      }
    },

    currentSlide () {
      return this.itemSlideshow[this.slideshow.currentSlide]
    }
  }
}
</script>

<style scoped>
@screen lg {
  .slider {
    height: 38rem;
  }
}
</style>
