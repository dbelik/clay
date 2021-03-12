<template>
  <content-container>
    <ul class="flex items-end justify-between pt-24px pb-40px">
      <li class="flex flex-col w-42 mr-24px">
        <label class="mb-8px">Show</label>
        <default-dropdown class="w-full" :items="show"></default-dropdown>
      </li>
      <li class="flex flex-col w-42 mr-24px">
        <label class="mb-8px">Price</label>
        <default-dropdown class="w-full" :items="price"></default-dropdown>
      </li>
      <li class="flex flex-col w-42">
        <label class="mb-8px">Brand</label>
        <default-dropdown class="w-full" :items="brand"></default-dropdown>
      </li>
      <li>
        <label>Size</label>
      </li>
      <li>
        <label>Size Guide</label>
      </li>
      <li class="flex flex-col">
        <label class="mb-12px">Color</label>
        <colors-dropdown :items="colors"></colors-dropdown>
      </li>
      <li>
        <alignment-checkbox />
      </li>
    </ul>
  </content-container>

  <div>
    <content-container class="flex flex-wrap">
      <card 
        background="url(/img/shop/womens_costume.jpg)" 
        price=540
        title="Women's costume Yves Saint Laurent"
        description="Fashion is something we deal with everyday. Even people who say t…"
        class="mr-24px mb-24px" style="width: calc(33% - 48px/3)" />
        
      <card 
        background="url(/img/shop/mens_black_hat.png)" 
        price=540
        title="Men’s black hat Gucci"
        description="The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroidered label de..."
        class="mr-24px mb-24px" style="width: calc(33% - 48px/3)" />
        
      <card 
        background="url(/img/shop/dress_karl.png)" 
        price=540
        title="Dress Karl Lagerfeld"
        description="Another masterpiece from the legendary designer. He designed new dress dev…"
        class="mb-24px" style="width: calc(33% - 48px/3)" />
        
      <card 
        background="url(/img/shop/mens_black_tie.jpg)" 
        price=540
        title="Men’s black tie Valentino"
        description="Jacquard Valentino tie with Valentino logo motif."
        class="mr-24px" style="width: calc(33% - 48px/3)" />
        
      <card 
        background="url(/img/shop/mens_jacket.jpg)" 
        price=540
        title="Men’s jacket Off- white"
        description="Off-White scuffed denim jacket. Faded effect, baggy cut, pointed collar, clasp…"
        class="mr-24px" style="width: calc(33% - 48px/3)" />
        
      <card 
        background="url(/img/shop/cotton_blouse.jpg)" 
        price=540
        title="Cotton blouse Dries van noten"
        description="The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroidered label de..."
        style="width: calc(33% - 48px/3)" />
    </content-container>
  </div>

  <content-container class="flex items-center justify-between mt-48px mb-16px">
    <shift-background-link class="h-8 w-8" backgroundImage="url(/img/shop/arrow-left.svg);" to="/" positionStart="-32px 0px" positionStop="0px 0px"></shift-background-link>
    <ul class="flex items-center justify-center">
      <li><pink-fill-interact-link to="/">1</pink-fill-interact-link></li>
      <li><pink-fill-interact-link to="/">2</pink-fill-interact-link></li>
      <li><pink-fill-interact-link to="/">3</pink-fill-interact-link></li>
      <li><pink-fill-link to="/">4</pink-fill-link></li>
      <li><pink-fill-interact-link to="/">5</pink-fill-interact-link></li>
      <li><pink-fill-interact-link to="/">6</pink-fill-interact-link></li>
      <li><pink-fill-interact-link to="/">7</pink-fill-interact-link></li>
      <li><pink-fill-interact-link to="/">8</pink-fill-interact-link></li>
      <li class="text-xl">...</li>
      <li><pink-fill-interact-link to="/">231</pink-fill-interact-link></li>
    </ul>
    <shift-background-link class="h-8 w-8" backgroundImage="url(/img/shop/arrow-right.svg);" to="/" positionStart="32px 0px" positionStop="0px 0px"></shift-background-link>
  </content-container>
</template>

<script>
import ContentContainer from "../components/common/Container.vue"
import DefaultDropdown from "../components/dropdowns/Default.vue"
import ColorsDropdown from "../components/dropdowns/Colors.vue"

import AlignmentCheckbox from "../components/checkboxes/Alignment.vue"

import PinkFillInteractLink from "../components/links/PinkFillInteract.vue"
import PinkFillLink from "../components/links/PinkFill.vue"
import ShiftBackgroundLink from "../components/links/ShiftBackground.vue"

import Card from '../components/common/Card.vue'

export default {
  name: 'Shop',
  components: {
    Card,
    ContentContainer,
    DefaultDropdown,
    PinkFillInteractLink,
    ShiftBackgroundLink,
    PinkFillLink,
    AlignmentCheckbox,
    ColorsDropdown
  },
  data() {
    return {
      show: ["Popular", "Collection"],
      price: ["Low", "High"],
      brand: ["Gucci", "Adidas"],
      colors: [
        "rgb(27, 36, 55)", "rgb(18, 118, 129)", "rgb(50, 224, 196)", 
        'rgb(243, 198, 35)', 'rgb(245, 66, 145)', 'rgb(255, 211, 225)', 
        'rgb(39, 73, 109)', 'rgb(82, 45, 91)',
        "rgb(92, 42, 157)", "rgb(125, 90, 90)", "rgb(192, 96, 161)"
      ]
    }
  }
}
</script>