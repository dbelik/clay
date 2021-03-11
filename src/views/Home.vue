<template>
  <section class="bg-brown text-white min-h-section flex items-center justify-center">
    <content-container class="min-h-section flex items-center bg-no-repeat"
      style="background-image: url(/img/home/lines.svg), url(/img/home/intro.png); background-size: 70%, 40%; background-position: 100% bottom, 80% bottom;">
      <div class="w-96">
        <h1>Admire Stylish <br /> Dresses & Looks</h1>
        <p>
          If we wanted to build a human-level tool to offer 
          automated outfit advice, we needed to understand 
          people’s fashion taste. 
        </p>
        <white-border-link href="/">Show More</white-border-link>
      </div>
    </content-container>
  </section>

  <section>
    <content-container class="pt-32px pb-16px flex items-center justify-center">
      <div class="w-1/2 h-102 mr-20px rounded-lg p-26px text-white bg-no-repeat bg-center bg-cover" style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/collection.jpg);">
        <h2 class="w-1/3">Women Collection</h2>
        <p class="font-semibold text-xl">Spring 2020</p>
        <white-fill-link href="/">Popular</white-fill-link>
      </div>

      <div class="w-1/2 h-102 flex flex-col">
        <div class="flex items-center h-1/2 mb-20px rounded-lg">
          <div class="bg-grey-200 w-1/2 h-full mr-20px rounded-lg p-26px flex flex-col justify-end items-start">
            <p>24 items</p>
            <h2 class="m-0">Bestsellers</h2>
          </div>
          <div class="w-1/2 h-full rounded-lg p-26px bg-no-repeat bg-right text-white bg-cover flex flex-col items-start justify-between" style="background-image: linear-gradient(rgba(52, 52, 52, .004), rgba(52, 52, 52, .4)), url(/img/home/chris-henry.png);">
            <white-fill-link href="/">New</white-fill-link>
            <h2 class="m-0">Dresses</h2>
          </div>
        </div>
        
        <div class="h-1/2 bg-pink text-white rounded-lg p-26px bg-no-repeat bg-right bg-contain flex flex-col items-start justify-between m-0" style="background-image: linear-gradient(to right, #EDA3B5 49%, rgba(237, 163, 181, 0) 75%), url(/img/home/denim_jackets.png);">
          <white-fill-link href="/">New</white-fill-link>
          <h2>Denim Jackets</h2>
        </div>
      </div>
    </content-container>
  </section>

  <section>
    <content-container class="my-16px bg-white h-64 rounded-lg">

    </content-container>
  </section>

  <section>
    <content-container class="mt-32px">
      <h2>You may like</h2>

      <div class="flex items-center justify-between">
        <div class="w-full rounded-lg overflow-hidden">
          <div class="h-72 bg-cover bg-center bg-no-repeat" style="background-image: url(/img/home/black_gucci.png);"></div>
          <div class="h-72 bg-white p-32px flex flex-col items-between">
            <h2 class="w-4/5 h-full">Women's black vest Gucci</h2>
            <div class="flex items-center justify-between">
              <h2 class="m-0"><span class="text-2xl">$</span> 715</h2>
              <pink-border-link href="/">Shop now</pink-border-link>
            </div>
          </div>
        </div>
        <div class="ml-16px w-full rounded-lg overflow-hidden">
          <div class="h-72 bg-cover bg-center bg-no-repeat" style="background-image: url(/img/home/red_dress.png);"></div>
          <div class="h-72 bg-white p-32px flex flex-col items-between">
            <h2 class="w-4/5 h-full">Red dress Valentino</h2>
            <div class="flex items-center justify-between">
              <h2 class="m-0"><span class="text-2xl">$</span> 1610</h2>
              <pink-border-link href="/">Shop now</pink-border-link>
            </div>
          </div>

        </div>
        <div class="ml-16px w-full rounded-lg overflow-hidden">
          <div class="h-72 bg-cover bg-center bg-no-repeat" style="background-image: url(/img/home/shiny_dress.png);"></div>
          <div class="h-72 bg-white p-32px flex flex-col items-between">
            <h2 class="w-4/5 h-full">Shiny dress Givenchy</h2>
            <div class="flex items-center justify-between">
              <h2 class="m-0"><span class="text-2xl">$</span> 540</h2>
              <pink-border-link href="/">Shop now</pink-border-link>
            </div>
          </div>
        </div>
      </div>
    </content-container>
  </section>
</template>

<script>
import ContentContainer from "../components/common/Container.vue"

import WhiteBorderLink from "../components/links/WhiteBorder.vue"
import PinkBorderLink from "../components/links/PinkBorder.vue"
import WhiteFillLink from "../components/links/WhiteFill.vue"

export default {
  name: 'Home',
  components: {
    ContentContainer,
    WhiteBorderLink,
    PinkBorderLink,
    WhiteFillLink
  }
}
</script>
