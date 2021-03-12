<template>
    <div class="rounded-lg overflow-hidden">
        <div class="h-72 bg-cover bg-center bg-no-repeat" :style="`background-image: ${background};`"></div>
        <div class="h-72 bg-white px-32px py-24px flex flex-col items-between justify-between">
          <div class="flex flex-col justify-start items-start">
            <h2 class="h-full">{{ title }}</h2>
            <p class="m-0 text-grey-600 h-48px">{{ description }}</p>
          </div>
          <div class="flex items-center justify-between">
              <h2 class="m-0"><span class="text-2xl">$</span> {{ price }}</h2>
              <pink-border-link to="/">Shop now</pink-border-link>
          </div>
        </div>
    </div>
</template>

<script>
import PinkBorderLink from "../links/PinkBorder.vue"
export default {
  components: {
    PinkBorderLink,
  },
  props: {
    background: String,
    title: String,
    description: String,
    price: Number,
  }
}
</script>