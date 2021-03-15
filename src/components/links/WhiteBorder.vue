<template>
    <router-link
        @mouseenter="interactStart"
        @mouseleave="interactStop"
        @focusin="interactStart"
        @focusout="interactStop"
        class="inline-block relative overflow-hidden border-3 text-white font-semibold rounded-lg px-5 pt-2 pb-2.5 xl:px-7"
        style="font-size: 22px; border-color: rgba(255, 255, 255, .2);"
        :to="to"
    >
        <span
            class="absolute w-full h-full bg-white top-full left-0 z-0 text-pink flex items-center justify-center"
        >
            <slot />
        </span>
        <span class="z-10"><slot /></span>
    </router-link>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: ['to'],
    methods: {
        interactStart(event) {
            const bg = event.target.children[0];
            gsap.to(bg, { yPercent: -100, duration: .2 });
        },
        interactStop(event) {
            const bg = event.target.children[0];
            gsap.to(bg, { yPercent: 0, duration: .2 });
        }
    }
}
</script>