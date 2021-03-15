<template>
    <div class="relative inline-block text-left">
        <div class="flex">
            <button 
                v-for="item in items.slice(0, 3)" :key="item" 
                @click="chooseElem" 
                :class="`inline-block relative rounded-md ${item !== items[0] ? 'ml-4' : ''} z-20 w-18 h-11 flex items-center justify-center border-2 w-16 w-11 ${
                    !selectedElem && items[0] === item || selectedElem && selectedElem.innerText === item ? 'bg-pink text-white border-pink' : 'bg-transparent border-grey-300'
                }`" 
            >
                {{ item }}
            </button>

            <button @click="toggle">
                <svg class="-mr-1 ml-4 h-5 w-5 relative" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.39673L9 9.39673L17 1.39673" stroke="#D1D1D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div v-if="active" 
            class="origin-top-left absolute -ml-1 mt-1 rounded-md bg-white focus:outline-none overflow-hidden p-1 z-30" 
            role="menu" 
            aria-orientation="vertical" 
            aria-labelledby="options-menu" 
            style="left: -4px;"
        >
            <div class="flex flex-wrap">
                <button
                    v-for="item in items.slice(3)" 
                    :key="item" 
                    @click="chooseElem" 
                    :class="`block relative rounded-md m-1 mr-3 z-20 w-18 h-11 flex items-center justify-center border-2 w-16 w-11 ${
                        !selectedElem && items[0] === item || selectedElem && selectedElem.innerText === item ? 'bg-pink text-white border-pink' : 'bg-transparent border-grey-300'
                    }`"
                >
                    {{ item }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            active: false,
            selectedElem: null,
        }
    },
    props: {
        items: Array
    },
    methods: {
      toggle (event) {
        this.active = !this.active;
        if (this.active) gsap.to(event.currentTarget.children[0], { rotation: 180, duration: .2, transformOrigin: "center center" });
        else gsap.to(event.currentTarget.children[0], { rotation: 0, duration: .2, transformOrigin: "center center" });
      },
      chooseElem(event) {
        const button = event.currentTarget;
        if (this.selectedElem === button) return;
        this.active = false;
        this.selectedElem = button;
      },

      interactStart(event) {
        gsap.to(event.currentTarget, { backgroundColor: "#F6F6F6", fontWeight: "bold", color: "#EDA3B5", duration: .2 });
      },
      interactStop(event) {
        gsap.to(event.currentTarget, { backgroundColor: "#ffffff", fontWeight: "normal", color: "#1B2437", duration: .2 });
      }
    },
}
</script>