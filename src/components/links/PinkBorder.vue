<template>
    <a @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="inline-block overflow-hidden border-2 text-pink border-pink font-semibold border-opacity-100 rounded-lg py-11px px-32px text-xl relative" :href="{href}">
        <span class="absolute w-full h-full bg-pink top-full left-0 z-0 text-white flex items-center justify-center"><slot /></span>
        <span class="z-10"><slot /></span>
    </a>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: {
        href: String
    },
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