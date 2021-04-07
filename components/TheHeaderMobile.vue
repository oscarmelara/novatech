<template id="slidemenu">
  <div class="absolute top-0 z-50 w-full px-4 py-5 menu">
    <div class="w-1/2 pl-3 my-2">
      <NuxtLink :to="localePath('/')">
        <img v-if="updateName === 'index___en' || updateName === 'index___es'" src="~/static/images/white-logo.svg" alt>
        <img v-else src="~/static/images/red-logo.svg" alt>
      </NuxtLink>
    </div>
    <div
      class="h-10 cursor-pointer"
      :class="['menu__burger', { 'menu__burger--open': open }]"
      @click="toggleNav"
    >
      <span v-if="updateName === 'index___en' || updateName === 'index___es'" class="menu__burger__span" />
      <span v-else class="menu__burger__span__red" />
    </div>

    <nav
      class="fixed top-0 left-0 w-screen h-screen bg-red-500"
      style="touch-action: none;"
      :class="['menu__nav', { 'menu__nav--open': open }]"
    >
      <div
        class="flex items-center justify-start w-full h-full px-6 py-4 menu-container "
      >
        <ul class="flex flex-col my-auto text-2xl menu-wrapper w-full">
          <NuxtLink
            class="mb-10 text-5xl font-extrabold text-white hover:text-black"
            :to="localePath('/')"
          >
            <div @click="closeLink">
              {{ $t('link_one') }}
            </div>
          </NuxtLink>
          <NuxtLink
            class="mb-10 text-5xl font-extrabold text-white hover:text-black"
            :to="localePath('/services')"
          >
            <div @click="closeLink">
              {{ $t('link_two') }}
            </div>
          </NuxtLink>
          <NuxtLink
            class="mb-8 text-5xl font-extrabold text-white hover:text-black"
            :to="localePath('/culture')"
          >
            <div @click="closeLink">
              {{ $t('link_three') }}
            </div>
          </NuxtLink>
          <hr style="border-color: #DB3B31;" class=" border-1 w-full mb-8">
          <div class="dropdown">
            <div class="dropdown__header flex justify-start items-center" @click="isHiddenMobile = !isHiddenMobile">
              <span class="text-5xl font-extrabold text-white ">{{ $t('textLang') }}</span>
              <img class="ml-2" src="~/static/icons/down-white.png" alt="">
            </div>

            <div v-if="!isHiddenMobile" class="dropdown__content flex flex-col mt-4">
              <div @click="closeLink">
                <nuxt-link class="text-2xl font-extrabold " :class="[$i18n.locale === 'es' ? 'text-black' : 'text-white']" :to="switchLocalePath('es')">
                  <img class=" inline-block w-6" src="~/static/icons/flags/ES.png" alt=""> (ES) Español
                </nuxt-link>
              </div>
              <div class="mt-4" @click="closeLink">
                <nuxt-link class="text-2xl font-extrabold" :class="[$i18n.locale === 'en' ? 'text-black' : 'text-white']" :to="switchLocalePath('en')">
                  <img class=" inline-block w-6" src="~/static/icons/flags/GB.png" alt=""> (EN) English
                </nuxt-link>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SliderMenu',
  data: () => ({
    open: false,
    isHiddenMobile: true,
    items: [{ name: 'Home', to: '/' }]
  }),
  computed: {
    updateName () {
      return this.$nuxt.$route.name
    }
  },
  methods: {
    toggleNav () {
      this.open = !this.open
      this.$emit('toggle', this.open)
    },
    closeLink () {
      // eslint-disable-next-line no-console
      console.log('Hola')
      this.open = false
    },
    showDrop () {
      document.getElementById('myDropdown').classList.toggle('show_list')
    },
    toogleActiveClass (e) {
      // eslint-disable-next-line no-unused-vars
      const { target } = e
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        return
      }
      Array.from(
        document.querySelectorAll('.has-dropdown .dropdown-trigger')
      ).forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
    }
  },
  template: '#slidemenu'
}
</script>

<style lang="scss" scoped>
.menu-container {
  .menu-item {
    &:hover,
    & .active-link {
      color: #1d42b1;
    }
  }
  .has-dropdown {
    .sub-menu-wrapper {
      max-height: 0;
      overflow: hidden;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
    .dropdown-trigger.active {
      color: #1d42b1;
    }
    .dropdown-trigger.active ~ .sub-menu-wrapper {
      max-height: 500px;
    }
    .drop-arrow {
      font-size: 0.6em;
      color: #1d42b1;
      padding-left: 1em;
    }
  }
}
.show_list {
  display: flex !important;
}
.dropdown-content {
  display: none;
}
.menu {
  $root: &;
  &__burger {
    $burger: #{$root}__burger;
    width: 40px;
    right: 20px;
    top: 40px;
    position: absolute;
    cursor: pointer;
    z-index: 200;
    &__span {
      position: absolute;
      height: 3px;
      width: inherit;
      background-color: white;
      transition: all 0.2s;
      &:before {
        @extend #{$burger}__span;
        content: '';
        top: -10px;
      }
      &:after {
        @extend #{$burger}__span;
        content: '';
        top: 10px;
      }
    }
    &__span__red {
      position: absolute;
      height: 3px;
      width: inherit;
      background-color: #ff4c41;
      transition: all 0.2s;
      &:before {
        @extend #{$burger}__span__red;
        content: '';
        top: -10px;
      }
      &:after {
        @extend #{$burger}__span__red;
        content: '';
        top: 10px;
      }
    }
    &--open {
      #{$burger}__span {
        background-color: transparent;
        &:before,
        &:after {
          background-color: white;
          transform-origin: 0 50%;
        }
        &:before {
          transform: translateX(7px) translateY(-5px) rotate(45deg);
        }
        &:after {
          transform: translateX(7px) translateY(3px) rotate(-45deg);
        }
      }
    }
    &--open {
      #{$burger}__span__red {
        background-color: transparent;
        &:before,
        &:after {
          background-color: white;
          transform-origin: 0 50%;
        }
        &:before {
          transform: translateX(7px) translateY(-5px) rotate(45deg);
        }
        &:after {
          transform: translateX(7px) translateY(3px) rotate(-45deg);
        }
      }
    }
  }
}
.menu__nav {
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: 100;
  &--open {
    display: inline-grid;
    overflow: scroll;
    transform: translateX(0);
  }
}
.nuxt-link-exact-active {
    color: #1F2234;
}

</style>
