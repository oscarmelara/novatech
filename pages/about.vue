<template>
  <div class="py-32">
    <div class="flex-parent">
      <div class="flex">
        <div class="input-flex-container">
          <div class="input active">
            <span data-year="1910" data-info="" />
          </div>
          <div class="input">
            <span data-year="1920" data-info="" />
          </div>
          <div class="input">
            <span data-year="1930" data-info="" />
          </div>
          <div class="input">
            <span data-year="1940" data-info="" />
          </div>
          <div class="input">
            <span data-year="1950" data-info="" />
          </div>
        </div>
      </div>
      <div class="description-flex-container">
        <div class="active">
          <h1>Test 1</h1>
          <p>future Call of Duty players would thank them.</p>
        </div>
        <div>
          <h1>Test 2</h1>
          <p>future Call of Duty players would thank them.</p>
        </div>
        <div>
          <h1>Test 3</h1>
          <p>future Call of Duty players would thank them.</p>
        </div>
        <div>
          <h1>Test 4</h1>
          <p>future Call of Duty players would thank them.</p>
        </div>
        <div>
          <h1>Test 5</h1>
          <p>future Call of Duty players would thank them.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      element: ''
    }
  },
  mounted () {
    window.$(function () {
      const inputs = window.$('.input')
      const paras = window.$('.description-flex-container').find('div')
      inputs.click(function () {
        const t = window.$(this)
        const ind = t.index()
        const matchedPara = paras.eq(ind)
        console.log(matchedPara)
        t.add(matchedPara).addClass('active')
        inputs
          .not(t)
          .add(paras.not(matchedPara))
          .removeClass('active')
      })
    })
  },
  methods: {
    showSlide () {

    },
    next () {
      console.log('Siguiente')
    },
    previous () {
      console.log('Atras')
    }
  }
}
</script>

<style lang="sass" scoped>
$numDots: 10
$parentWidthBase: 0.8
$parentWidth: $parentWidthBase * 100vw
$parentMaxWidth: 1000px
$dotWidth: 15px
$dotWidthSm: 17px
$active: #2C3E50
$inactive: #AEB6BF

.flex-parent
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
.input-flex-container
    display: flex
    justify-content: space-around
    align-items: center
    width: $parentWidth
    height: 100px
    max-width: $parentMaxWidth
    position: relative
    z-index: 0
.input
    width: $dotWidth
    height: $dotWidth
    background-color: $active
    position: relative
    border-radius: 50%
    &:hover
        cursor: pointer
    &::before, &::after
        content: ''
        display: block
        position: absolute
        z-index: -1
        top: 50%
        transform: translateY(-50%)
        background-color: $active
        width: $parentWidth / $numDots
        height: 2px
        max-width: $parentMaxWidth / $numDots
    &::before
        left: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2})
    &::after
        right: calc(#{-$parentWidth / $numDots} + #{$dotWidth / 2})
    &.active
        background-color: $active
        &::before
            background-color: $active
        &::after
            background-color: $inactive
        span
            font-weight: 700
            &::before
                font-size: 13px
            &::after
                font-size: 15px
    &.active ~ .input
        &, &::before, &::after
            background-color: $inactive
    span
        width: 1px
        height: 1px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        visibility: hidden
        &::before, &::after
            visibility: visible
            position: absolute
            left: 50%
        &::after
            content: attr(data-year)
            top: 25px
            transform: translateX(-50%)
            font-size: 14px
        &::before
            content: attr(data-info)
            top: -65px
            width: 70px
            transform: translateX(-5px) rotateZ(-45deg)
            font-size: 12px
            text-indent: -10px
.description-flex-container
    width: $parentWidth
    font-weight: 400
    font-size: 22px
    margin-top: 100px
    max-width: $parentMaxWidth
    div
        margin-top: 0
        display: none
        &.active
            display: block
@media (min-width: $parentMaxWidth / $parentWidthBase)
    .input::before
        left: #{-($parentMaxWidth / $numDots) + ($dotWidth / 2)}
    .input::after
        right: #{-($parentMaxWidth / $numDots) + ($dotWidth / 2)}
@media (max-width: 850px)
    .input
        width: $dotWidthSm
        height: $dotWidthSm
        &::before, &::after
            height: 3px
        &::before
            left: calc(#{-$parentWidth / $numDots} + #{$dotWidthSm / 2})
        &::after
            right: calc(#{-$parentWidth / $numDots} + #{$dotWidthSm / 2})
//MOBILE
@media (max-width: 600px)
    .flex-parent
        justify-content: initial
    .input-flex-container
        flex-wrap: wrap
        justify-content: center
        width: 100%
        height: auto
        margin-top: 15vh
    .input
        width: 60px
        height: 60px
        margin: 0 10px 50px
        background-color: $inactive
        &::before, &::after
            content: none
        span
            width: 100%
            height: 100%
            display: block
            &::before
                top: calc(100% + 5px)
                transform: translateX(-50%)
                text-indent: 0
                text-align: center
            &::after
                top: 50%
                transform: translate(-50%, -50%)
                color: #ECF0F1
    .description-flex-container
        margin-top: 30px
        text-align: center

@media (max-width: 400px)
    body
        min-height: 950px //just so our links won't get in the way of our content
</style>
