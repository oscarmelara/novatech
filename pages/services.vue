<template>
  <div class="w-full">
    <main>
      <div class="container relative flex flex-col justify-between h-full px-6 py-16 lg:flex-row lg:pr-0 lg:p-28">
        <div class="flex flex-col max-w-xl text-white mt-14">
          <h1 class="text-4xl leading-tight text-red-500 xl:text-7xl">
            {{ $t('headerText') }}
          </h1>
          <p
            class="max-w-lg mt-8 text-base font-semibold leading-tight text-gray-400 lg:text-lg"
          >
            {{ $t('headerDescription') }}
          </p>
        </div>
        <div class="right-0 max max-w-5xl 2xl:max-w-5xl lg:absolute phone-section">
          <img src="~/static/images/services/header.png" alt="">
        </div>
      </div>
    </main>
    <section class="bg-white">
      <div class="container flex flex-col items-center px-6 py-16 lg:flex-row lg:pt-56 lg:pb-24 lg:pr-10 lg:pl-28">
        <div class="w-full lg:w-2/5 lg:px-3">
          <h2 class="text-left text-4xl lg:text-6.5xl">
            Staff Augmentation
          </h2>
          <h4 class="mt-4 font-medium text-purple-500">
            {{ $t('services.staff.subtitle') }}
          </h4>
          <p class="max-w-sm mt-4 font-normal text-real-black" style="font-size: 13px;">
            {{ $t('services.staff.description') }}
          </p>
        </div>
        <div class="w-full max-w-2xl px-0 mx-auto mt-10 lg:mt-0 lg:w-3/5 lg:px-3">
          <img src="~/static/images/services/options/staff.png" alt="">
        </div>
      </div>
    </section>
    <section>
      <div class="container flex flex-col-reverse items-center px-6 py-16 lg:flex-row lg:flex-reverse lg:py-24 lg:pl-10 lg:pr-28">
        <div class="w-full max-w-2xl mx-auto mt-10 lg:mt-0 lg:w-3/5 lg:px-3">
          <img src="~/static/images/services/options/products.png" alt="">
        </div>
        <div class="w-full lg:w-2/5 lg:px-3">
          <h2 class="text-left text-4xl lg:text-6.5xl">
            {{ $t('services.develop.title') }}
          </h2>
          <h4 class="mt-4 font-medium text-purple-500">
            {{ $t('services.develop.subtitle') }}
          </h4>
          <p class="max-w-md mt-4 font-normal text-real-black" style="font-size: 13px;">
            {{ $t('services.develop.description') }}
            <br>
            <span class="font-bold text-real-black text-base">
              {{ $t('services.develop.phrase') }}
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@media (min-width: 1200px) {
  .phone-section {
    @apply max-w-3xl;
    @apply mt-28;
  }
}
@media (min-width: 1366px) {
  .phone-section {
    @apply max-w-4xl;
    @apply mt-0;
  }
}
@media (min-width: 1400px) {
  .phone-section {
    @apply max-w-5xl;
    @apply mt-0;
  }
}
</style>
