<template>
  <div class="absolute top-0 z-10 w-full py-10 md:px-20">
    <div class="container flex items-center justify-between px-10">
      <div>
        <NuxtLink :to="localePath('/')">
          <img
            v-if="updateName === 'index___en' || updateName === 'index___es'"
            src="~/static/images/white-logo.svg"
            alt
          >
          <img v-else src="~/static/images/red-logo.svg" alt>
        </NuxtLink>
      </div>
      <div
        v-if="updateName === 'index___en' || updateName === 'index___es'"
        class="justify-between hidden w-1/3 md:flex"
      >
        <div v-for="(link, index) in navLinks" id="test" :key="index" class="link">
          <NuxtLink
            :class="[
              updateName !== 'index___en' && updateName !== 'index___es'
                ? 'text-black hover:text-red-500'
                : 'text-white hover:text-black'
            ]"
            :to="localePath(link.path)"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <!--  <div class="link">
          <img class="w-6 inline-block" src="~/static/icons/globe-white.png" alt="">
          <nuxt-link v-if="$i18n.locale !== 'en'" class="text-white" :to="switchLocalePath('en')">
            En
          </nuxt-link>

          <nuxt-link v-if="$i18n.locale !== 'es'" class="text-white" :to="switchLocalePath('es')">
            Es
          </nuxt-link>
        </div> -->

        <div class="dropdown">
          <div class="dropdown__header flex justify-between items-center" @click="isHidden = !isHidden">
            <img class="w-5 inline-block" src="~/static/icons/globe-white.png" alt="">
            <span v-if="$i18n.locale !== 'en'" class="text-white text-lg mx-1">ES</span>
            <span v-if="$i18n.locale !== 'es'" class="text-white text-lg mx-1">EN</span>
            <img class="w-2 inline-block" src="~/static/icons/down-white.png" alt="">
          </div>

          <div v-if="!isHidden" class="dropdown__content shadow-lg flex flex-col py-6 px-6 -ml-24 mt-5">
            <div @click="isHidden = true">
              <nuxt-link class="text-gray-300 text-sm " :class="[$i18n.locale === 'es' ? 'text-red-500' : 'text-gray-300']" :to="switchLocalePath('es')">
                <img class=" inline-block w-6" src="~/static/icons/flags/ES.png" alt=""> (ES) Español
              </nuxt-link>
            </div>
            <div class="mt-4" @click="isHidden = true">
              <nuxt-link class="text-gray-300 text-sm" :class="[$i18n.locale === 'en' ? 'text-red-500' : 'text-gray-300']" :to="switchLocalePath('en')">
                <img class=" inline-block w-6" src="~/static/icons/flags/GB.png" alt=""> (EN) English
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="justify-between hidden w-1/3 md:flex">
        <div
          v-for="(link, index) in navLinks"
          id="test"
          :key="index"
          class="link-red"
        >
          <NuxtLink
            :class="[
              updateName != 'index'
                ? 'text-black hover:text-red-500'
                : 'text-white hover:text-black'
            ]"
            :to="localePath(link.path)"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="dropdown">
          <div class="dropdown__header flex justify-between items-center" @click="isHidden = !isHidden">
            <img class="w-5 inline-block" src="~/static/icons/globe-red.png" alt="">
            <span v-if="$i18n.locale !== 'en'" class="text-red-500 text-lg mx-1">ES</span>
            <span v-if="$i18n.locale !== 'es'" class="text-red-500 text-lg mx-1">EN</span>
            <img class="w-2 inline-block" src="~/static/icons/down-red.png" alt="">
          </div>

          <div v-if="!isHidden" class="dropdown__content shadow-lg flex flex-col py-6 px-6 -ml-24 mt-5">
            <div @click="isHidden = true">
              <nuxt-link class="text-gray-300 text-sm " :class="[$i18n.locale === 'es' ? 'text-red-500' : 'text-gray-300']" :to="switchLocalePath('es')">
                <img class=" inline-block w-6" src="~/static/icons/flags/ES.png" alt=""> (ES) Español
              </nuxt-link>
            </div>
            <div class="mt-4" @click="isHidden = true">
              <nuxt-link class="text-gray-300 text-sm" :class="[$i18n.locale === 'en' ? 'text-red-500' : 'text-gray-300']" :to="switchLocalePath('en')">
                <img class=" inline-block w-6" src="~/static/icons/flags/GB.png" alt=""> (EN) English
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <button>Abrir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isHidden: true
    }
  },
  computed: {
    updateName () {
      return this.$nuxt.$route.name
    },
    navLinks () {
      return [
        { name: this.$t('link_one'), path: '/' },
        { name: this.$t('link_two'), path: '/services' },
        { name: this.$t('link_three'), path: '/culture' }
      ]
    }
  },
  created () {
  },
  methods: {
    toggleDropdown () {
      this.isClose = true
    }
  }
}
</script>

<style lang="scss" scoped>
.link .nuxt-link-exact-active {
  color: #1f2234;
}
.link-red .nuxt-link-exact-active {
  color: #ff4c41;
}
.dropdown {
        &__header {
            cursor: pointer;
            position: relative;
            i.fa {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                transition: opacity .3s;
                &.fa-angle-up {
                    opacity: 0;
                }
            }
            &.is-active {
                i.fa {
                    &.fa-angle-up {
                        opacity: 1;
                    }
                    &.fa-angle-down {
                        opacity: 0;
                    }
                }
                + .dropdown__content {
                    height: auto;
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        &__content {
            position: absolute;
            height: auto;
            transition: opacity .3s;
            background-color: white;
            border-radius: 5px;
            &::before {
              content: "";
              position: absolute;
              top: -8px;
              right: 20px;
              width: 0;
              height: 0;
              border-left: 13px solid transparent;
              border-right: 13px solid transparent;
              border-bottom: 20px solid white;
            }

        }
    }
</style>
