<template>
    <a @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="inline-block text-white font-bold rounded-md py-8px px-22px text-sm bg-transparent-white" :href="{href}">
        <slot />
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