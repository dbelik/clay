<template>
  <div class="products-slider">
    <splide :options="options">
      <splide-slide>
        <div class="w-full h-full flex">
          <div class="w-full md:w-1/2 lg:w-1/4 h-full flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/louis_vouiton.png" alt="Louis Vouiton" />
              <h4 class="mb-5 mt-7 font-bold">Louis Vouiton</h4>
          </div>

          <div class="w-1/2 lg:w-1/4 h-full hidden sm:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dolce&gabbana.png" alt="Dolce&Gabbana" />
              <h4 class="mb-7 mt-7 font-bold">Dolce&Gabbana</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/gucci.png" alt="Gucci" />
              <h4 class="mb-0 mt-11 font-bold">Gucci</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dries_van_noten.png" alt="Dries van Noten" />
              <h4 class="mb-5 mt-7 font-bold">Dries van Noten</h4>
          </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="w-full h-full flex">
          <div class="w-full md:w-1/2 lg:w-1/4 h-full flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/louis_vouiton.png" alt="Louis Vouiton" />
              <h4 class="mb-5 mt-7 font-bold">Louis Vouiton</h4>
          </div>

          <div class="w-1/2 lg:w-1/4 h-full hidden sm:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dolce&gabbana.png" alt="Dolce&Gabbana" />
              <h4 class="mb-7 mt-7 font-bold">Dolce&Gabbana</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/gucci.png" alt="Gucci" />
              <h4 class="mb-0 mt-11 font-bold">Gucci</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dries_van_noten.png" alt="Dries van Noten" />
              <h4 class="mb-5 mt-7 font-bold">Dries van Noten</h4>
          </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="w-full h-full flex">
          <div class="w-full md:w-1/2 lg:w-1/4 h-full flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/louis_vouiton.png" alt="Louis Vouiton" />
              <h4 class="mb-5 mt-7 font-bold">Louis Vouiton</h4>
          </div>

          <div class="w-1/2 lg:w-1/4 h-full hidden sm:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dolce&gabbana.png" alt="Dolce&Gabbana" />
              <h4 class="mb-7 mt-7 font-bold">Dolce&Gabbana</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/gucci.png" alt="Gucci" />
              <h4 class="mb-0 mt-11 font-bold">Gucci</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dries_van_noten.png" alt="Dries van Noten" />
              <h4 class="mb-5 mt-7 font-bold">Dries van Noten</h4>
          </div>
        </div>
      </splide-slide>
      <splide-slide>
        <div class="w-full h-full flex">
          <div class="w-full md:w-1/2 lg:w-1/4 h-full flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/louis_vouiton.png" alt="Louis Vouiton" />
              <h4 class="mb-5 mt-7 font-bold">Louis Vouiton</h4>
          </div>

          <div class="w-1/2 lg:w-1/4 h-full hidden sm:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dolce&gabbana.png" alt="Dolce&Gabbana" />
              <h4 class="mb-7 mt-7 font-bold">Dolce&Gabbana</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/gucci.png" alt="Gucci" />
              <h4 class="mb-0 mt-11 font-bold">Gucci</h4>
          </div>

          <div class="w-1/4 h-full hidden lg:flex flex-col items-center justify-center text-center">
              <img class="select-none" src="/img/home/slider/slide_1/dries_van_noten.png" alt="Dries van Noten" />
              <h4 class="mb-5 mt-7 font-bold">Dries van Noten</h4>
          </div>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind : true,
        width : 1480,
        height: 316,
        autoplay: true,
        pauseOnHover: true,
      },
    }
  }
}
</script>

<!-- NOTE: Scoped styles cannot be used with dynamic content, so use global styles instead. -->
<style>
  .products-slider .splide {
    background-color: white;
    border-radius: 16px;
  }

  .products-slider .splide__arrow svg {
    fill: #D1D1D6;
    width: 20px;
  }

  .products-slider .splide__arrow svg:hover, .splide__arrow svg:focus {
    fill: #D1D1D6;
  }

  .products-slider .splide__arrow--prev {
    left: 3rem;
    top: 44%;
  }

  .products-slider .splide__arrow--next {
    right: 3rem;
    top: 44%;
  }

  .products-slider .splide__pagination {
    margin-bottom: 23px;
  }

  @media(min-width: 480px) {
    .products-slider .splide__slide {
      padding: 0px 90px;
    }
  }

  .products-slider .splide__pagination > li {
    display: flex;
    align-items: center;
  }

  .products-slider .splide__pagination__page {
    width: 9px;
    height: 9px;
    background: #1B2437;
    opacity: .6;
    margin: 0px 6px;
    position: relative;
  }

  .products-slider .splide__pagination__page:focus, .splide__pagination__page:hover {
    background: #1B2437;
    opacity: 1;
  }

  .products-slider .splide__pagination__page.is-active {
    background: #1B2437;
    opacity: 1;
    transform: scale(1);
  }

  .products-slider .splide__pagination__page.is-active::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(27, 36, 55, .4);
    border-radius: 50%;
  }
</style>