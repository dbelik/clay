<template>
  <section id="intro-section" class="bg-brown text-white min-h-section flex items-center justify-center">
    <content-container class="min-h-section flex items-center justify-center md:justify-start text-center md:text-left bg-no-repeat">
      <div class="max-w-md">
        <h1 class="mt-4">Admire Stylish <br /> Dresses & Looks</h1>
        <p class="leading-7 mb-6">
          If we wanted to build a human-level tool to offer 
          automated outfit advice, we needed to understand 
          people’s fashion taste. 
        </p>
        <white-border-link to="/">Show More</white-border-link>
      </div>
    </content-container>
  </section>

  <section class="mt-3 mb-6">
    <content-container class="pt-32px pb-16px flex flex-wrap md:flex-nowrap items-center justify-center">
      <div 
        class="w-full sm:w-3/4 md:w-1/2 h-433px mb-20px md:mb-0 md:mr-7 rounded-lg text-white bg-no-repeat bg-center bg-cover px-7 py-8" 
        style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/collection.jpg);"
      >
        <h2 class="w-1/3">Women Collection</h2>
        <h4 class="font-semibold text-xl">Spring 2020</h4>
        <white-fill-link to="/">Popular</white-fill-link>
      </div>

      <div class="w-full sm:w-3/4 md:w-1/2 xs:h-433px flex flex-col">
        <div class="flex flex-wrap xs:flex-nowrap items-center h-1/2 mb-7 rounded-lg">
          <div class="bg-grey-200 w-full xs:w-1/2 h-48 xs:h-full mb-7 xs:mb-0 xs:mr-7 rounded-lg p-7 flex flex-col justify-end items-start">
            <p>24 items</p>
            <h2 class="m-0">Bestsellers</h2>
          </div>
          <div
            class="w-full xs:w-1/2 h-48 xs:h-full rounded-lg p-7 bg-no-repeat bg-right text-white bg-cover flex flex-col items-start justify-between"
            style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/chris-henry.png);"
          >
            <white-fill-link to="/">New</white-fill-link>
            <h2 class="m-0">Dresses</h2>
          </div>
        </div>
        
        <div 
          class="h-48 xs:h-1/2 bg-pink text-white rounded-lg p-7 bg-no-repeat bg-right bg-cover flex flex-col items-start justify-between m-0" 
          style="background-image: url(/img/home/denim_jackets.png);"
        >
          <white-fill-link to="/">New</white-fill-link>
          <h2 class="mb-0">Denim Jackets</h2>
        </div>
      </div>
    </content-container>
  </section>

  <section>
    <content-container class="my-16px rounded-lg">
      <products-slider />
    </content-container>
  </section>

  <section>
    <content-container>
      <h2 class="mb-9 mt-11">You may like</h2>

      <cards-slider />
    </content-container>
  </section>
</template>

<script>
import ProductsSlider from '../components/sliders/Products.vue'
import CardsSlider from '../components/sliders/Cards.vue'

import ContentContainer from "../components/common/Container.vue"

import WhiteBorderLink from "../components/links/WhiteBorder.vue"
import WhiteFillLink from "../components/links/WhiteFill.vue"

export default {
  name: 'Home',
  components: {
    ContentContainer,
    WhiteBorderLink,
    WhiteFillLink,
    ProductsSlider,
    CardsSlider
  }
}
</script>

<style>
  @media (min-width: 768px) {
    #intro-section > div {
      background-image: url(/img/home/lines.svg), url(/img/home/intro.png); 
      background-size: 70%, 450px; 
      background-position: 100% bottom, 80% bottom;
    }
  }
</style>