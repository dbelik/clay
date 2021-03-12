<template>
  <content-container>
    <ul class="flex pt-24px pb-40px">
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
      <li>
        <label>Color</label>
      </li>
      <li>

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

  <div></div>
</template>

<script>
import ContentContainer from "../components/common/Container.vue"
import DefaultDropdown from "../components/dropdowns/Default.vue"

// import WhiteBorderLink from "../components/links/WhiteBorder.vue"
// import PinkBorderLink from "../components/links/PinkBorder.vue"
// import WhiteFillLink from "../components/links/WhiteFill.vue"

import Card from '../components/common/Card.vue'

export default {
  name: 'Shop',
  components: {
    Card,
    ContentContainer,
    DefaultDropdown
    // WhiteBorderLink,
    // PinkBorderLink,
    // WhiteFillLink,
  },
  data() {
    return {
      show: ["Popular", "Collection"],
      price: ["Low", "High"],
      brand: ["Gucci", "Adidas"],
    }
  }
}
</script>