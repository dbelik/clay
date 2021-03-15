<template>
  <section id="intro-section" class="bg-brown text-white min-h-section flex items-center justify-center">
    <intro-content-container class="min-h-section flex items-center justify-center md:justify-start text-center md:text-left bg-no-repeat">
      <div class="max-w-md">
        <h1 class="mt-4">Admire Stylish <br /> Dresses & Looks</h1>
        <p class="leading-7 mb-6">
          If we wanted to build a human-level tool to offer 
          automated outfit advice, we needed to understand 
          people’s fashion taste. 
        </p>
        <white-border-link to="/123">Show More</white-border-link>
      </div>
    </intro-content-container>
  </section>

  <section class="mt-3 mb-8">
    <intro-content-container class="pt-32px pb-16px flex flex-wrap md:flex-nowrap items-center justify-center">
      <div 
        class="w-full sm:w-3/4 md:w-1/2 h-490px mb-20px md:mb-0 md:mr-7 rounded-lg text-white bg-no-repeat bg-center bg-cover px-9 py-11" 
        style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/collection.jpg);"
      >
        <h2 class="w-1/3">Women Collection</h2>
        <h4 class="font-semibold text-xl">Spring 2020</h4>
        <white-fill-link to="/123">Popular</white-fill-link>
      </div>

      <div class="w-full sm:w-3/4 md:w-1/2 xs:h-490px flex flex-col">
        <div class="flex flex-wrap xs:flex-nowrap items-center h-1/2 mb-7 rounded-lg">
          <div class="bg-grey-200 w-full xs:w-1/2 h-48 xs:h-full mb-7 xs:mb-0 xs:mr-7 rounded-lg p-9 flex flex-col justify-end items-start">
            <p>24 items</p>
            <h2 class="m-0">Bestsellers</h2>
          </div>
          <div
            class="w-full xs:w-1/2 h-48 xs:h-full rounded-lg p-9 bg-no-repeat bg-right text-white bg-cover flex flex-col items-start justify-between"
            style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/chris-henry.png);"
          >
            <white-fill-link to="/">New</white-fill-link>
            <h2 class="m-0">Dresses</h2>
          </div>
        </div>
        
        <div 
          class="h-48 xs:h-1/2 bg-pink text-white rounded-lg p-9 bg-no-repeat bg-right bg-contain flex flex-col items-start justify-between m-0" 
          style="background-image: linear-gradient(to right, #EDA3B5 49%, rgba(237, 163, 181, 0) 75%), url(/img/home/denim_jackets.png);"
        >
          <white-fill-link to="/">New</white-fill-link>
          <h2 class="mb-0">Denim Jackets</h2>
        </div>
      </div>
    </intro-content-container>
  </section>

  <section>
    <intro-content-container
      class="my-16px bg-white rounded-lg"
      style="height: 347px"
    >
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
    </intro-content-container>
  </section>

  <section>
    <intro-content-container class="mt-32px">
      <h2 class="mb-9 mt-11">You may like</h2>

      <div class="flex items-start justify-center flex-wrap">
        <card 
          background="url(/img/home/black_gucci.png)" 
          price=715
          title="Women's black vest Gucci"
          class="md:mr-7 mb-24px"
          style="width: 24.6rem; height: 38.93rem;"
        />
        <card 
          background="url(/img/home/red_dress.png)" 
          price=1610
          title="Red dress Valentino"
          class="md:mr-7 mb-24px"
          style="width: 24.9rem; height: 38.93rem;"
        />
        <card 
          background="url(/img/home/shiny_dress.png)" 
          price=540
          title="Shiny dress Givenchy"
          description="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
          style="width: 25rem; height: 38.93rem;"
        />
      </div>
    </intro-content-container>
  </section>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import IntroContentContainer from "../components/common/ContainerIntro.vue"

import WhiteBorderLink from "../components/links/WhiteBorder.vue"
import WhiteFillLink from "../components/links/WhiteFill.vue"

import Card from '../components/common/Card.vue'

export default {
  name: 'Home',
  components: {
    IntroContentContainer,
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
      background-size: 70%, 500px; 
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