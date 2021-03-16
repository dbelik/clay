<template>
  <div class="card-slider">
    <splide :options="options">
      <splide-slide>
        <div class="flex items-start justify-center flex-wrap">
          <card 
            background="url(/img/home/black_gucci.png)" 
            price=715
            title="Women's black vest Gucci"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-1"
          />
          <card 
            background="url(/img/home/red_dress.png)" 
            price=1610
            title="Red dress Valentino"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-2"
          />
          <card 
            background="url(/img/home/shiny_dress.png)" 
            price=540
            title="Shiny dress Givenchy"
            description="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
            class="mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-3"
          />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="flex items-start justify-center flex-wrap">
          <card 
            background="url(/img/home/black_gucci.png)" 
            price=715
            title="Women's black vest Gucci"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-1"
          />
          <card 
            background="url(/img/home/red_dress.png)" 
            price=1610
            title="Red dress Valentino"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-2"
          />
          <card 
            background="url(/img/home/shiny_dress.png)" 
            price=540
            title="Shiny dress Givenchy"
            description="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
            class="mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-3"
          />
        </div>
      </splide-slide>
      <splide-slide>
        <div class="flex items-start justify-center flex-wrap">
          <card 
            background="url(/img/home/black_gucci.png)" 
            price=715
            title="Women's black vest Gucci"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-1"
          />
          <card 
            background="url(/img/home/red_dress.png)" 
            price=1610
            title="Red dress Valentino"
            class="mr-6 mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-2"
          />
          <card 
            background="url(/img/home/shiny_dress.png)" 
            price=540
            title="Shiny dress Givenchy"
            description="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
            class="mb-7"
            style="width: 22.6rem; height: 34.7rem;"
            id="card-3"
          />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Card from '../common/Card.vue'

export default {
  components: {
    Splide,
    SplideSlide,
    Card,
  },
  data() {
    return {
      options: {
        rewind : true,
        width : 1480,
        height: 560,
        autoplay: true,
        pauseOnHover: true,
        gap: '1.5rem'
      }
    }
  },
  created() {
    const prevArrow = document.querySelector('.card-slider .splide__arrow--prev');
    console.log(prevArrow)
  }
}
</script>

<!-- NOTE: Scoped styles cannot be used with dynamic content, so use global styles instead. -->
<style>
  .card-slider .splide__pagination {
    top: -62px;
    transform: unset;
    bottom: unset;
    right: 48px;
    left: unset;
    width: auto;
  }

  .card-slider .splide__arrows {
    display: flex;
  }

  .card-slider .splide__arrow {
    width: 40px;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    top: -32px;
  }

  .card-slider .splide__arrow--next {
    top: -58px;
    right: 0px;
  }

  .card-slider .splide__arrow--prev {
    top: -58px;
    right: 125px;
    left: unset;
  }

  .card-slider .splide__arrow svg {
    fill: #D1D1D6;
    width: 20px;
  }

  .card-slider .splide__arrow svg:hover, .splide__arrow svg:focus {
    fill: #D1D1D6;
  }

  .card-slider .splide__pagination > li {
    display: flex;
    align-items: center;
  }

  .card-slider .splide__pagination__page {
    width: 9px;
    height: 9px;
    background: #1B2437;
    opacity: .6;
    margin: 0px 6px;
    position: relative;
  }

  .card-slider .splide__pagination__page:focus, .splide__pagination__page:hover {
    background: #1B2437;
    opacity: 1;
  }

  .card-slider .splide__pagination__page.is-active {
    background: #1B2437;
    opacity: 1;
    transform: scale(1);
  }

  .card-slider .splide__pagination__page.is-active::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(27, 36, 55, .4);
    border-radius: 50%;
  }

  @media (max-width: 1164px) {
    .card-slider #card-3 { display: none; }
    .card-slider #card-2 { margin-right: 0px; }
  }

  @media (max-width: 780px) {
    .card-slider #card-2 { display: none; }
    .card-slider #card-1 { margin-right: 0px; }
  }
</style>