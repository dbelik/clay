<template>
    <div class="relative inline-block text-left">
        <div>
            <button @click="toggle" type="button" class="inline-flex text-grey-500 justify-between w-full rounded-md border-2 border-gray-300 h-10 flex items-center px-13px text-sm focus:outline-none" >
                {{ selectedElem ? selectedElem.innerText : items[0] }}

                <svg class="-mr-1 ml-2 h-5 w-5 relative" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.39673L9 9.39673L17 1.39673" stroke="#D1D1D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div v-if="active" class="origin-top-left absolute left-0 w-full rounded-md bg-white focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="py-1" role="none">
                <button v-for="item in items" :key="item" @click="chooseElem" @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="block w-full text-left m-0 px-4 py-2 text-sm bg-white text-black relative z-20">
                    {{ item }}
                    <img v-if="!selectedElem && items[0] === item || selectedElem && item.trim() === selectedElem.innerText.trim()" class="absolute right-3 top-1/2 transform -translate-y-1/2" src="/img/icons/selected.svg" />
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
        if (this.active) gsap.to(event.target.children[0], { rotation: 180, duration: .2, transformOrigin: "center center" });
        else gsap.to(event.target.children[0], { rotation: 0, duration: .2, transformOrigin: "center center" });
      },
      chooseElem(event) {
        if (this.selectedElem === event.target) return;
        this.active = false;
        this.selectedElem = event.target;
      },

      interactStart(event) {
        gsap.to(event.target, { backgroundColor: "#F6F6F6", duration: .2 });
        gsap.to(event.target, { fontWeight: "bold", color: "#EDA3B5", duration: 0 });
      },
      interactStop(event) {
        gsap.to(event.target, { backgroundColor: "#ffffff", duration: .2 });
        gsap.to(event.target, { fontWeight: "normal", color: "#1B2437", duration: 0 });
      }
    },
}
</script>