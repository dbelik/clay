<template>
  <section id="intro-section" class="bg-brown text-white min-h-section flex items-center justify-center">
    <content-container class="min-h-section flex items-center justify-center md:justify-start text-center md:text-left bg-no-repeat">
      <div class="max-w-sm">
        <h1>Admire Stylish <br /> Dresses & Looks</h1>
        <p>
          If we wanted to build a human-level tool to offer 
          automated outfit advice, we needed to understand 
          people’s fashion taste. 
        </p>
        <white-border-link to="/123">Show More</white-border-link>
      </div>
    </content-container>
  </section>

  <section>
    <content-container class="pt-32px pb-16px flex flex-wrap md:flex-nowrap items-center justify-center">
      <div class="w-full sm:w-3/4 md:w-1/2 h-102 mb-20px md:mb-0 md:mr-20px rounded-lg p-26px text-white bg-no-repeat bg-center bg-cover" style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/collection.jpg);">
        <h2 class="w-1/3">Women Collection</h2>
        <p class="font-semibold text-xl">Spring 2020</p>
        <white-fill-link to="/123">Popular</white-fill-link>
      </div>

      <div class="w-full sm:w-3/4 md:w-1/2 xs:h-102 flex flex-col">
        <div class="flex flex-wrap xs:flex-nowrap items-center h-1/2 mb-20px rounded-lg">
          <div class="bg-grey-200 w-full xs:w-1/2 h-48 xs:h-full mb-20px xs:mb-0 xs:mr-20px rounded-lg p-26px flex flex-col justify-end items-start">
            <p>24 items</p>
            <h2 class="m-0">Bestsellers</h2>
          </div>
          <div class="w-full xs:w-1/2 h-48 xs:h-full rounded-lg p-26px bg-no-repeat bg-right text-white bg-cover flex flex-col items-start justify-between" style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/chris-henry.png);">
            <white-fill-link to="/">New</white-fill-link>
            <h2 class="m-0">Dresses</h2>
          </div>
        </div>
        
        <div class="h-48 xs:h-1/2 bg-pink text-white rounded-lg p-26px bg-no-repeat bg-right bg-contain flex flex-col items-start justify-between m-0" style="background-image: linear-gradient(to right, #EDA3B5 49%, rgba(237, 163, 181, 0) 75%), url(/img/home/denim_jackets.png);">
          <white-fill-link to="/">New</white-fill-link>
          <h2>Denim Jackets</h2>
        </div>
      </div>
    </content-container>
  </section>

  <section>
    <content-container class="my-16px bg-white h-64 rounded-lg">
      <!--<carousel :items-to-show="1.5" class="h-full">
        <slide v-for="slide in 10" :key="slide" class="h-58">
          <div class="h-full">123123</div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
      -->
    </content-container>
  </section>

  <section>
    <content-container class="mt-32px">
      <h2>You may like</h2>

      <div class="flex items-start justify-center flex-wrap">
        <card 
          background="url(/img/home/black_gucci.png)" 
          price=715
          title="Women's black vest Gucci"
          class="md:mr-24px mb-24px w-88" />
        <card 
          background="url(/img/home/red_dress.png)" 
          price=1610
          title="Red dress Valentino"
          class="md:mr-24px mb-24px w-88" />
        <card 
          background="url(/img/home/shiny_dress.png)" 
          price=540
          title="Shiny dress Givenchy"
          class="w-88" />
      </div>
    </content-container>
  </section>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import ContentContainer from "../components/common/Container.vue"

import WhiteBorderLink from "../components/links/WhiteBorder.vue"
import WhiteFillLink from "../components/links/WhiteFill.vue"

import Card from '../components/common/Card.vue'

export default {
  name: 'Home',
  components: {
    ContentContainer,
    WhiteBorderLink,
    WhiteFillLink,
    Card
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
}
</script>

<style>
  @media (min-width: 768px) {
    #intro-section > div {
      background-image: url(/img/home/lines.svg), url(/img/home/intro.png); 
      background-size: 70%, 51vh; 
      background-position: 100% bottom, 80% bottom;
    }
  }

  .carousel__icon {
    fill: #D1D1D6;
  }

  .carousel__next {
    background: transparent;
    right: 40px;
  }
  .carousel__prev {
    background: transparent;
    left: 40px;
  }

  .carousel__pagination-button {
    background: #767c87;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .carousel__pagination-button--active {
    background: #1b2437;
  }
  
</style>