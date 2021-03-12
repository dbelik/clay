<template>
    <router-link @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="block relative rounded-lg" :style="`background-image: ${backgroundImage}`" :to="to">
    </router-link>
</template>
<script>
import { gsap } from 'gsap';

export default {
    props: ['to', 'backgroundImage', 'positionStart', 'positionStop'],
    methods: {
        interactStart(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundPosition: this.positionStart, duration: .2 });
        },
        interactStop(event) {
            const bg = event.target;
            gsap.to(bg, { backgroundPosition:  this.positionStop, duration: .2 });
        }
    }
}
</script>