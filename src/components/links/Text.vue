<template>
    <router-link @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="inline-block relative overflow-hidden" :to="to">
        <span class="absolute border-t-2 w-full bottom-0 transform" style="transform: translateX(-100%);"></span>
        <slot />
    </router-link>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: ['to'],
    methods: {
        interactStart(event) {
            const bg = event.target.children[0];
            gsap.to(bg, { xPercent: 100, duration: .2 });
        },
        interactStop(event) {
            const bg = event.target.children[0];
            gsap.to(bg, { xPercent: 0, duration: .2 });
        }
    }
}
</script>