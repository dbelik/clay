<template lang="">
      <div class="flex items-start justify-center flex-wrap">
          <card 
            background="url(/img/home/black_gucci.png)" 
            price=715
            title="Women's black vest Gucci"
            class="md:mr-24px mb-28px"
            style="width: 22.6rem; height: 34.7rem;"
          />
          <card 
            background="url(/img/home/red_dress.png)" 
            price=1610
            title="Red dress Valentino"
            class="md:mr-24px mb-28px"
            style="width: 22.6rem; height: 34.7rem;"
          />
          <card 
            background="url(/img/home/shiny_dress.png)" 
            price=540
            title="Shiny dress Givenchy"
            description="A shiny dress in the style of Lady Gaga, for bright events and cool parties…"
            class="mb-28px"
            style="width: 22.6rem; height: 34.7rem;"
          />
      </div>
</template>
<script>
import Card from '../common/Card.vue'

export default {
  components: {
    Card,
  },
  data() {
    return {
      options: {
        rewind : true,
        width : 1480,
        height: 560,
      }
    }
  }
}
</script>
<style>
    
</style>