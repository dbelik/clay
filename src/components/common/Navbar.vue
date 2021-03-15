<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50 rounded-bl-lg rounded-br-lg">
        <content-container class="flex items-center justify-between md:justify-start h-navbar relative">
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9167 20.1214C16.3711 19.6791 19.8875 16.0481 20.1508 11.5432H11.9167V20.1214ZM21.9868 11.5432H22V11V0L11 9.61647e-07C4.92486 1.49275e-06 -5.31105e-07 4.92486 0 11C5.31105e-07 17.0751 4.92486 22 11 22C16.893 22 21.7036 17.366 21.9868 11.5432ZM11 1.83333C5.93739 1.83333 1.83333 5.93739 1.83333 11C1.83333 15.7532 5.45112 19.6615 10.0833 20.1214V9.70988H20.1667V1.83333H11Z" fill="#1B2437"/>
            </svg>
            
            <NavLinks spacing="30" class="ml-24 w-full overflow-hidden justify-center hidden md:flex" />

            <ul class="flex items-center overflow-hidden w-44 relative hidden md:flex">
                <li class="mr-16px flex items-center">
                    <button @click="showSearch" class="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.5" cy="8.5" r="7.5" stroke="#1B2437" stroke-width="2"/>
                            <path d="M15 15L22 22" stroke="#1B2437" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <h3 class="w-0 h-0 overflow-hidden text-black m-0 whitespace-nowrap">Search something</h3>
                </li>
                <li class="mx-16px">
                    <router-link to="/"><img class="h-icon" src="/img/icons/user.svg" alt="Profile" /></router-link>
                </li>
                <li class="ml-16px">
                    <router-link to="/"><img class="h-icon" src="/img/icons/cart.svg" alt="Cart" /></router-link>
                </li>
                <li class="absolute right-0 opacity-0 hidden">
                    <button @click="closeSearch">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.34314 6.34314L17.6568 17.6568" stroke="#EDA3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6568 6.34314L6.34314 17.6568" stroke="#EDA3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </li>
            </ul>

            <button class="md:hidden h-10 w-10 flex items-center justify-center z-20" @click="toggle">
                <svg class="w-8 h-8" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="25" y2="3" stroke="#1B2437" stroke-width="2"/>
                    <line y1="9" x2="25" y2="9" stroke="#1B2437" stroke-width="2"/>
                </svg>
            </button>
        </content-container>

        <content-container class="h-0 overflow-hidden md:block hidden">
            <input class="text-4xl w-full" placeholder="Search" style="caret-color: #EDA3B5;" />
        </content-container>

        <div class="w-screen h-screen top-0 bg-white absolute left-full overflow-hidden md:hidden">
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
                            <router-link to="/" class="relative">
                                <span v-if="this.$route.path === '/blog'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Blog
                            </router-link>
                        </h3>
                    </li>
                    <li>
                        <h3 class="m-0">
                            <router-link to="/" class="relative">
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
import NavLinks from "./NavLinks.vue"

export default {
    components: {
        ContentContainer,
        NavLinks,
    },
    data() {
        return {
            mobileActive: false
        }
    },
    methods: {
        showSearch(event) {
            const button = event.currentTarget;
            const searchTitle = button.parentNode.children[1];
            const nav = button.parentNode.parentNode.parentNode;
            const logo = button.parentNode.parentNode.parentNode.children[0];
            const logoPath = button.parentNode.parentNode.parentNode.children[0].children[0];
            const item1 = button.parentNode.parentNode.children[1];
            const item2 = button.parentNode.parentNode.children[2];
            const items = button.parentNode.parentNode;
            const navlinks = button.parentNode.parentNode.parentNode.children[1];
            const input = button.parentNode.parentNode.parentNode.parentNode.children[1];
            const cancel = button.parentNode.parentNode.children[3];

            gsap.to(nav, { color: "#ffffff", duration: .2 });
            gsap.to(logoPath, { opacity: 0, duration: .2 });
            gsap.to(item1, { opacity: 0, duration: .2 });
            gsap.to(item2, { opacity: 0, duration: .2 });

            gsap.to(items, { width: "100%", duration: .4, delay: .4 });
            gsap.to(navlinks, { width: 0, duration: .4, delay: .4, margin: "0" });
            gsap.to(logo, { width: 0, duration: .4, delay: .4 });
            gsap.to(searchTitle, { marginLeft: "24px", duration: 0, delay: .8 });
            gsap.to(searchTitle, { width: "100%", height: "100%", duration: .4, delay: .8 });
            gsap.to(input, { height: "90px", duration: .4, delay: .8 });
            gsap.to(cancel, { display: "block", duration: 0, delay: .8 });
            gsap.to(cancel, { opacity: 1, duration: .4, delay: .8 });
        },

        closeSearch(event) {
            const button = event.currentTarget;
            const searchTitle = button.parentNode.parentNode.children[0].children[1];
            const nav = button.parentNode.parentNode.parentNode;
            const logo = button.parentNode.parentNode.parentNode.children[0];
            const logoPath = button.parentNode.parentNode.parentNode.children[0].children[0];
            const item1 = button.parentNode.parentNode.children[1];
            const item2 = button.parentNode.parentNode.children[2];
            const items = button.parentNode.parentNode;
            const navlinks = button.parentNode.parentNode.parentNode.children[1];
            const input = button.parentNode.parentNode.parentNode.parentNode.children[1];
            const cancel = button.parentNode.parentNode.children[3];

            gsap.to(items, { width: "11rem", duration: .4, delay: .4 });
            gsap.to(navlinks, { width: "100%", duration: .4, delay: .4, margin: "5rem" });
            gsap.to(logo, { width: "22px", duration: .4, delay: .4 });
            gsap.to(searchTitle, { marginLeft: "0", duration: 0 });
            gsap.to(searchTitle, { width: "0px", height: "0px", duration: .4 });
            gsap.to(input, { height: "0", duration: .4 });
            gsap.to(cancel, { opacity: 0, duration: .4 });
            gsap.to(cancel, { display: "none", duration: 0, delay: .4 });

            gsap.to(nav, { color: "#1B2437", duration: .2, delay: .8 });
            gsap.to(logoPath, { opacity: 1, duration: .2, delay: .8 });
            gsap.to(item1, { opacity: 1, duration: .2, delay: .8 });
            gsap.to(item2, { opacity: 1, duration: .2, delay: .8 });
        },

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
            gsap.to(mobileLinks, { xPercent: -100, duration: .4, delay: .1 });
            gsap.to(links, { color: "#1B2437", duration: .3, delay: .6 });
        },

        toggleHide() {
            const button = event.currentTarget;
            const line1 = button.children[0].children[0];
            const line2 = button.children[0].children[1];
            const mobileLinks = button.parentNode.parentNode.children[2];
            const links = button.parentNode.parentNode.children[2].children[0].children[0];

            gsap.to(links, { color: "#ffffff", duration: .3 });
            gsap.to(mobileLinks, { xPercent: 0, duration: .4, delay: .4 });
            gsap.to(line1, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line2, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line1, { y: 0, duration: .1, delay: .5 });
            gsap.to(line2, { y: 0, duration: .1, delay: .5 });
        }
    }
}
</script>