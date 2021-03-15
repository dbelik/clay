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
        <white-border-link to="/">Show More</white-border-link>
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
        <white-fill-link to="/">Popular</white-fill-link>
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
      class="my-16px rounded-lg"
    >
      <splide :options="options">
        <splide-slide>
          <div class="w-full h-full flex">
            <div class="w-1/4 h-full flex flex-col items-center justify-center">
              <img src="/img/home/slider/slide_1/louis_vouiton.png" alt="Louis Vouiton" />
              <h4 class="mb-4 mt-12 font-bold">Louis Vouiton</h4>
            </div>

            <div class="w-1/4 h-full flex flex-col items-center justify-center">
              <img src="/img/home/slider/slide_1/dolce&gabbana.png" alt="Dolce&Gabbana" />
              <h4 class="mb-6 mt-10 font-bold">Dolce&Gabbana</h4>
            </div>

            <div class="w-1/4 h-full flex flex-col items-center justify-center">
              <img src="/img/home/slider/slide_1/gucci.png" alt="Gucci" />
              <h4 class="mb-0 mt-16 font-bold">Gucci</h4>
            </div>

            <div class="w-1/4 h-full flex flex-col items-center justify-center">
              <img src="/img/home/slider/slide_1/dries_van_noten.png" alt="Dries van Noten" />
              <h4 class="mb-5 mt-12 font-bold">Dries van Noten</h4>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          Slide 2
        </splide-slide>
        <splide-slide>
          Slide 3
        </splide-slide>
        <splide-slide>
          Slide 4
        </splide-slide>
      </splide>
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
          class="mb-24px"
          style="width: 25rem; height: 38.93rem;"
        />
      </div>
    </intro-content-container>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import IntroContentContainer from "../components/common/ContainerIntro.vue"

import WhiteBorderLink from "../components/links/WhiteBorder.vue"
import WhiteFillLink from "../components/links/WhiteFill.vue"

import Card from '../components/common/Card.vue'

export default {
  name: 'Home',
  components: {
    Splide,
    SplideSlide,
    IntroContentContainer,
    WhiteBorderLink,
    WhiteFillLink,
    Card
  },
  data() {
    return {
        options: {
          rewind : true,
          width : 1480,
          height: 347,
          gap : '1rem',
        },
    }
  }
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

  .splide {
    background-color: white;
    border-radius: 16px;
  }

  .splide__arrow svg {
    fill: #D1D1D6;
    width: 20px;
  }

  .splide__arrow svg:hover, .splide__arrow svg:focus {
    fill: #D1D1D6;
  }

  .splide__arrow--prev {
    left: 3rem;
    top: 44%;
  }

  .splide__arrow--next {
    right: 3rem;
    top: 44%;
  }

  .splide__pagination {
    margin-bottom: 23px;
  }

  .splide__slide {
    padding: 0px 100px;
  }

  .splide__pagination > li {
    display: flex;
    align-items: center;
  }

  .splide__pagination__page {
    width: 9px;
    height: 9px;
    background: #1B2437;
    opacity: .6;
    margin: 0px 6px;
    position: relative;
  }

  .splide__pagination__page:focus, .splide__pagination__page:hover {
    background: #1B2437;
    opacity: 1;
  }

  .splide__pagination__page.is-active {
    background: #1B2437;
    opacity: 1;
    transform: scale(1);
  }

  .splide__pagination__page.is-active::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(27, 36, 55, .4);
    border-radius: 50%;
  }
</style>