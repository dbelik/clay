<template>
    <router-link
        @mouseenter="interactStart"
        @mouseleave="interactStop"
        @focusin="interactStart"
        @focusout="interactStop"
        class="inline-block text-white font-bold rounded-md py-2 px-7 text-sm bg-transparent-white"
        :to="to"
    >
        <slot />
    </router-link>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: ['to'],
    methods: {
        interactStart(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundColor: "rgba(255, 255, 255, .5)", duration: .2 });
        },
        interactStop(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundColor: "rgba(255, 255, 255, .2)", duration: .2 });
        }
    }
}
</script>