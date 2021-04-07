<template>
  <div class="w-full">
    <!-- <section class="bg-gray-100 section-contact">
      <div class="bg-red-500 bg-contact-bottom" />
      <div class="container">
        <section class="flex justify-center bg-white card-contact">
          <div class="text-center card-content">
            <div class="text-4xl font-bold text-red-500">
              Contáctenos
            </div>
            <p class="text-xl font-medium leading-6 text-black card-description">
              Envíanos tu información de contacto y nosotros te abordamos para conocer tu necesidad tecnológica.
            </p>
            <a href="mailto:sales@novatechdev.com" class="px-16 py-2 text-xl card-download">Contactar</a>
          </div>
          <div class="flex items-center justify-center card-indicator">
            <img src="~/static/images/culture/icons/mouse-indicator.png" class="card-icon" alt="Icon Indicator">
          </div>
          <div class="side-images">
            <img src="~/static/images/culture/side-image-left.png" class="hidden md:block side-image-left" alt="Side Image">
            <img src="~/static/images/culture/side-image-right.png" class="hidden md:block side-image-right" alt="Side Image">
          </div>
        </section>
      </div>
    </section> -->
    <section class="w-full bg-gray-50 flex justify-between">
      <div class="w-1/2">
        <img class="w-64 xl:w-80" src="~/static/images/footer/left.png" alt="">
      </div>
      <div class="w-1/2 flex justify-end items-end">
        <img class="w-64 xl:w-80" src="~/static/images/footer/right.png" alt="">
      </div>
    </section>
    <div class="bg-black the-footer absolute -mt-10 w-full">
      <footer class="px-6 py-10 lg:py-20 lg:px-32">
        <div class="container mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="w-full px-3 mt-6 lg:w-1/3 lg:mt-0">
              <img class="mx-auto" src="~/static/images/white-logo.svg" alt>
            </div>
            <div class="w-full px-3 mt-6 lg:w-1/3 lg:mt-0">
              <p class="text-sm font-semibold text-white lg:text-lg">
                {{ $t('contact') }}
              </p>
              <div class="flex w-full mt-3">
                <div class="mr-3">
                  <img src="~/static/icons/footer/info/ubi.png" alt="">
                </div>
                <div class="mr-3">
                  <p class="text-sm font-semibold info lg:text-lg">
                    Boulevar Sergio Viera de Mello, Colonia San Benito, Edificio
                    Century Tower, Nivel 6
                  </p>
                </div>
              </div>
              <div class="flex w-full mt-3">
                <div class="mr-3">
                  <img class="w-5" src="~/static/icons/footer/info/tel.png" alt="">
                </div>
                <div>
                  <p class="text-sm font-semibold info lg:text-lg">
                    +503 21300865
                  </p>
                </div>
              </div>
              <div class="flex w-full mt-3">
                <div class="mr-3">
                  <img class="w-5" src="~/static/icons/footer/info/email.png" alt="">
                </div>
                <div>
                  <p class="text-sm font-semibold info lg:text-lg">
                    contactus@novatechdev.com
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-3 mt-6 lg:w-1/3 lg:mt-0">
              <ul class="w-full">
                <NuxtLink
                  class="block text-sm font-bold text-white lg:text-lg hover:text-cyan transition-500"
                  :to="localePath('/')"
                >
                  {{ $t('link_one') }}
                </NuxtLink>
                <NuxtLink
                  class="block mt-3 text-sm font-bold text-white lg:text-lg hover:text-cyan transition-500"
                  :to="localePath('/services')"
                >
                  {{ $t('link_two') }}
                </NuxtLink>
                <NuxtLink
                  class="block mt-3 text-sm font-bold text-white lg:text-lg hover:text-cyan transition-500"
                  :to="localePath('/culture')"
                >
                  {{ $t('link_three') }}
                </NuxtLink>
              </ul>
              <div class="flex flex-wrap justify-between w-48 mt-6">
                <a class="text-white" href="https://www.linkedin.com/company/novatechdev" target="_blank"><img class="w-6 lg:w-8" src="~/static/icons/footer/social/lk.png" alt=""></a>
                <a class="text-white" href="https://www.facebook.com/novatech.dev" target="_blank"><img class="w-6 lg:w-8" src="~/static/icons/footer/social/fb.png" alt=""></a>
                <a class="text-white" href="https://instagram.com/novatech.dev" target="_blank"><img class="w-6 lg:w-8" src="~/static/icons/footer/social/ig.png" alt=""></a>
                <a class="text-white" href="https://twitter.com/NovatechCo" target="_blank"><img class="w-6 lg:w-8" src="~/static/icons/footer/social/tw.png" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="w-full py-3 copyright">
        <div class="container mx-auto">
          <p class="text-sm font-semibold text-center info">
            © Novatech. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style sc>
.section-contact {
  padding-bottom: 200px;
  position: relative;
  z-index: 1;
}

.section-contact .container {
  padding-top: 100px;
}

.section-contact .bg-contact-bottom {
  bottom: 0;
  height: 65%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.section-contact .card-contact {
  border: 6px solid #1F2234;
  border-radius: 20px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  width: 100%;
  max-width: 900px;
}

.section-contact .card-contact:before {
  --distance-card-content: 40px;
  --tw-bg-opacity: 1;

  background-color: rgba(255, 76, 65, 1);
  border: 6px solid #1F2234;
  border-radius: 20px;
  content: '';
  height: 100%;
  left: var(--distance-card-content);
  position: absolute;
  top: var(--distance-card-content);
  width: 100%;
  z-index: -1;
}

.section-contact .card-content {
  margin-bottom: 60px;
  margin-top: 50px;
  max-width: 520px;
}

.section-contact .card-description {
  margin-bottom: 45px;
  margin-top: 20px;
}

.section-contact .card-download {
  background-color: #703EFF;
  border-radius: 40px;
  color: white;
  display: inline-block;
  transition: all .2s linear;
}

.section-contact .card-download:hover {
  opacity: .75;
}

.section-contact .card-indicator {
  --distance-card-icon: -50px;
  --tw-bg-opacity: 1;

  background-color: rgba(255, 76, 65, 1);
  border: 5px solid #000;
  border-radius: 10px;
  bottom: var(--distance-card-icon);
  height: 100px;
  position: absolute;
  right: var(--distance-card-icon);
  width: 115px;
}

.section-contact .card-indicator:before {
  --distance-before-card-icon: 20px;

  background-color: white;
  border: 5px solid #000;
  border-radius: 10px;
  content: '';
  height: 100%;
  left: var(--distance-before-card-icon);
  position: absolute;
  top: var(--distance-before-card-icon);
  width: 100%;
  z-index: -1;
}

.section-contact .side-images {
  --side-distance: calc(-513px - 4px);
}

.section-contact .side-images .side-image-left,
.section-contact .side-images .side-image-right {
  position: absolute;
  top: calc(-50% - 20px);
}

.section-contact .side-images .side-image-left {
  left: var(--side-distance);
}

.section-contact .side-images .side-image-right {
  right: calc(-513px + 58px);
  z-index: -1;
}

.the-footer .info {
  color: #bdbdbd;
}
.the-footer .copyright{
  background-color: #1B1E2D;
}

@media (max-width: 1100px) {
  .section-contact .container {
    padding-left: 50px;
    padding-right: 80px;
  }
}

@media (max-width: 768px) {
  .section-contact {
    padding-bottom: 120px;
  }

  .section-contact .card-content {
    margin-bottom: 30px;
    margin-top: 20px;
  }

  .section-contact .card-content .text-4xl {
    font-size: 2rem;
  }

  .section-contact .card-content p {
    font-size: 1rem;
  }

  .section-contact .card-contact:before {
    --distance-card-content: 25px;
  }

  .section-contact .card-indicator {
    height: 80px;
    width: 85px;
  }

  .section-contact .card-indicator .card-icon {
    max-width: 45%;
  }

  .section-contact .card-indicator:before {
    --distance-before-card-icon: 15px;
  }

  .section-contact .card-download {
    font-size: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
