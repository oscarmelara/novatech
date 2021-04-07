<template>
  <div class="container px-6 py-16 lg:pt-56 lg:pb-24 lg:pr-10 lg:pl-28">
    <div class=" max-w-5xl mx-auto">
      <div class="py-10 relative w-full flex justify-between items-center" style="text-align:center; max-width: 1000px;">
        <a class="prev text-black" @click="plusSlides(-1)">
          <img src="~/static/icons/timeline/preview.png" alt="">
        </a>
        <div class="w-full flex justify-around">
          <div class="dot" @click="currentSlide(1)">
            <span data-year="2020" />
          </div>
          <div class="dot" @click="currentSlide(2)">
            <span data-year="2020" />
          </div>
          <div class="dot" @click="currentSlide(3)">
            <span data-year="2020" />
          </div>
          <div class="dot" @click="currentSlide(4)">
            <span data-year="2020" />
          </div>
          <div class="dot" @click="currentSlide(5)">
            <span data-year="2020" />
          </div>
        </div>
        <a class="next text-black" @click="plusSlides(1)">
          <img src="~/static/icons/timeline/next.png" alt="">
        </a>
      </div>
      <br>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="text text-black">
            <h1 class="text-red-500">
              Lorem ipsum 1
            </h1>
            <span class="text-purple-500 text-xl font-bold py-5 block">- Febrero 20, 2020</span>
            <p class="font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum ipsum, rutrum ut sem sit amet, ultrices suscipit mauris. Sed et eros tincidunt, placerat velit eget, suscipit nisl. Nunc ac gravida lorem.</p>
          </div>
        </div>

        <div class="mySlides fade">
          <div class="text text-black">
            <h1 class="text-red-500">
              Lorem ipsum 2
            </h1>
            <span class="text-purple-500 text-xl font-bold py-5 block">- Febrero 20, 2020</span>
            <p class="font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum ipsum, rutrum ut sem sit amet, ultrices suscipit mauris. Sed et eros tincidunt, placerat velit eget, suscipit nisl. Nunc ac gravida lorem.</p>
          </div>
        </div>

        <div class="mySlides fade">
          <div class="text text-black">
            <h1 class="text-red-500">
              Lorem ipsum 3
            </h1>
            <span class="text-purple-500 text-xl font-bold py-5 block">- Febrero 20, 2020</span>
            <p class="font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum ipsum, rutrum ut sem sit amet, ultrices suscipit mauris. Sed et eros tincidunt, placerat velit eget, suscipit nisl. Nunc ac gravida lorem.</p>
          </div>
        </div>
        <div class="mySlides fade">
          <div class="text text-black">
            <h1 class="text-red-500">
              Lorem ipsum 4
            </h1>
            <span class="text-purple-500 text-xl font-bold py-5 block">- Febrero 20, 2020</span>
            <p class="font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum ipsum, rutrum ut sem sit amet, ultrices suscipit mauris. Sed et eros tincidunt, placerat velit eget, suscipit nisl. Nunc ac gravida lorem.</p>
          </div>
        </div>
        <div class="mySlides fade">
          <div class="text text-black">
            <h1 class="text-red-500">
              Lorem ipsum 5
            </h1>
            <span class="text-purple-500 text-xl font-bold py-5 block">- Febrero 20, 2020</span>
            <p class="font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum ipsum, rutrum ut sem sit amet, ultrices suscipit mauris. Sed et eros tincidunt, placerat velit eget, suscipit nisl. Nunc ac gravida lorem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideIndex: 1
    }
  },
  mounted () {
    this.showSlides(this.slideIndex)
  },
  methods: {
    showSlides (n) {
      let i
      const slides = document.getElementsByClassName('mySlides')
      const dots = document.getElementsByClassName('dot')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    },

    plusSlides (n) {
      this.showSlides((this.slideIndex += n))
    },

    currentSlide (n) {
      this.showSlides((this.slideIndex = n))
    }
  }
}
</script>

<style lang="scss" scoped>

$numDots: 10;
$parentWidthBase: 0.8;
$parentWidth: $parentWidthBase * 100vw;
$parentMaxWidth: 1000px;
$dotWidth: 15px;
$dotWidthSm: 17px;
$active: #FF4C41;
$inactive: gray;

.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  top: 50%;
  width: auto;
  padding: 16px;
  /* margin-top: -22px; */
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 14px;
  width: 14px;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  transition: background-color 0.6s ease;
  border: 2px solid #FF4C41;
  &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: $active;
        width: $parentWidth / $numDots;
        height: 2px;
        max-width: $parentMaxWidth / $numDots;
        }
  &::before {
    left: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2});
  }
  &::after {
    right: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2});
  }
}

.active,
.dot:hover {
  @apply bg-red-500;

  &::before {
            background-color: $active
            }
  &::after {
      background-color: $inactive
    }
  span {
    font-weight: 700;
    &::before {
      font-size: 13px;
              }
    &::after {
      font-size: 15px;
      }
    }
}

span {
        width: 1px;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
        &::before, &::after {
            visibility: visible;
            position: absolute;
            left: 50%;
          }
        &::after {
            content: attr(data-year);
            top: 25px;
            transform: translateX(-50%);
            font-size: 14px;
            }
        &::before {
            content: attr(data-info);
            top: -65px;
            width: 70px;
            transform: translateX(-5px) rotateZ(-45deg);
            font-size: 12px;
            text-indent: -10px;
          }
      }
/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
