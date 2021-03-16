<template>
    <button @mouseenter="interactStart" @focusin="interactStart" @mouseleave="interactStop" @focusout="interactStop" class="inline-block text-white font-bold rounded-md py-2 px-5 text-sm bg-pink" :href="{href}">
        <slot />
    </button>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: {
        href: String
    },
    methods: {
        interactStart(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundColor: "#D68A9C", duration: .2 });
        },
        interactStop(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundColor: "#EDA3B5", duration: .2 });
        }
    }
}
</script>