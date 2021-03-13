<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50">
        <content-container class="flex items-center justify-between py-24px">
            <div class="flex items-center">
                <img class="h-icon mr-16px" src="/img/icons/clay.svg" alt="Clay" />
                <h3 class="m-0">Clay Shop</h3>
            </div>
            
            <ul class="hidden md:flex items-center justify-center">
                <li class="mr-48px flex items-center">
                    <a class="inline-block" href="/"><img src="/img/icons/socials/instagram.svg" alt="Instagram" /></a>
                </li>
                <li class="mr-48px flex items-center">
                    <a class="inline-block" href="/"><img src="/img/icons/socials/twitter.svg" alt="Twitter" /></a>
                </li>
                <li class="flex items-center">
                    <a class="inline-block" href="/"><img src="/img/icons/socials/facebook.svg" alt="Facebook" /></a>
                </li>
            </ul>

            <ul class="hidden md:flex">
                <li class="mr-16px">
                    <button class="flex items-center"><img class="h-icon" src="/img/icons/search.svg" alt="Search" /></button>
                </li>
                <li class="ml-16px">
                    <router-link to="/"><img class="h-icon" src="/img/icons/cart.svg" alt="Cart" /></router-link>
                </li>
            </ul>

            <button class="md:hidden h-10 w-10 flex items-center justify-center" @click="toggle">
                <svg class="w-8 h-8" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="25" y2="3" stroke="#1B2437" stroke-width="2"/>
                    <line y1="9" x2="25" y2="9" stroke="#1B2437" stroke-width="2"/>
                </svg>
            </button>
        </content-container>
            
        <content-container class="mt-32px hidden md:block">
            <ul class="flex items-center justify-center ">
                <li class="mr-30px">
                    <h3 class="m-0">
                        <router-link to="/" class="relative inline-block pb-32px">
                            <span v-if="this.$route.path === '/'" class="absolute border-l-3 border-black w-full h-20px bottom-0 left-1/2 transform -translate-1/2" />
                            Home
                        </router-link>
                    </h3>
                </li>
                <li class="mx-30px">
                    <h3 class="m-0">
                        <router-link to="/shop" class="relative inline-block pb-32px">
                            <span v-if="this.$route.path === '/shop'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Shop
                        </router-link>
                    </h3>
                </li>
                <li class="mx-30px">
                    <h3 class="m-0">
                        <router-link to="/blog" class="relative inline-block pb-32px">
                            <span v-if="this.$route.path === '/blog'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Blog
                        </router-link>
                    </h3>
                </li>
                <li class="ml-30px">
                    <h3 class="m-0">
                        <router-link to="/contact" class="relative inline-block pb-32px">
                            <span v-if="this.$route.path === '/contact'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Contact
                        </router-link>
                    </h3>
                </li>
            </ul>
        </content-container>

        <div class="w-screen bg-white absolute left-0 overflow-hidden h-0 md:hidden" style="top: 64px;">
            <content-container>
                <ul class="flex items-center flex-col mt-20 text-white">
                    <li class="mb-16px">
                        <h3 class="m-0">
                            <router-link to="/" class="relative">
                                <span v-if="this.$route.path === '/'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Home
                            </router-link>
                        </h3>
                    </li>
                    <li class="mb-16px">
                        <h3 class="m-0">
                            <router-link to="/shop" class="relative">
                                <span v-if="this.$route.path === '/shop'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Shop
                            </router-link>
                        </h3>
                    </li>
                    <li class="mb-16px">
                        <h3 class="m-0">
                            <router-link to="/blog" class="relative">
                                <span v-if="this.$route.path === '/blog'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Blog
                            </router-link>
                        </h3>
                    </li>
                    <li>
                        <h3 class="m-0">
                            <router-link to="/contact" class="relative">
                                <span v-if="this.$route.path === '/contact'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Contact
                            </router-link>
                        </h3>
                    </li>
                </ul>
            </content-container>
        </div>
    </nav>
</template>

<script>
import gsap from 'gsap'
import ContentContainer from "./Container.vue"

export default {
    components: {
        ContentContainer
    },
    data() {
        return {
            mobileActive: false
        }
    },
    methods: {
        toggle(event) {
            this.mobileActive = !this.mobileActive;
            if (this.mobileActive) this.toggleShow(event);
            else this.toggleHide(event);
        },

        toggleShow(event) {
            const button = event.currentTarget;
            const line1 = button.children[0].children[0];
            const line2 = button.children[0].children[1];
            const mobileLinks = button.parentNode.parentNode.children[2];
            const links = button.parentNode.parentNode.children[2].children[0].children[0];

            gsap.to(line1, { y: 3, duration: .1 });
            gsap.to(line2, { y: -3, duration: .1 });
            gsap.to(line1, { rotation: 45, duration: .1, delay: .1, transformOrigin: "center center" });
            gsap.to(line2, { rotation: -45, duration: .1, delay: .1, transformOrigin: "center center" });
            gsap.to(mobileLinks, { height: "calc(100vh - 64px)", duration: .4, delay: .1 });
            gsap.to(links, { color: "#1B2437", duration: .3, delay: .6 });
        },

        toggleHide() {
            const button = event.currentTarget;
            const line1 = button.children[0].children[0];
            const line2 = button.children[0].children[1];
            const mobileLinks = button.parentNode.parentNode.children[2];
            const links = button.parentNode.parentNode.children[2].children[0].children[0];

            gsap.to(links, { color: "#ffffff", duration: .3 });
            gsap.to(mobileLinks, { height: "0", duration: .4, delay: .4 });
            gsap.to(line1, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line2, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line1, { y: 0, duration: .1, delay: .5 });
            gsap.to(line2, { y: 0, duration: .1, delay: .5 });
        }
    }
}
</script>