<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50 md:h-180px">
        <content-container 
            class="flex items-center justify-between md:justify-start py-6"
            style="max-width: 1340px"
        >
            <div class="flex items-center overflow-hidden whitespace-nowrap w-44">
                <img width="22" height="22" class="h-icon mr-4" src="/img/icons/clay.svg" alt="Clay" />
                <h3 class="m-0">Clay Shop</h3>
            </div>
            
            <ul class="hidden md:flex items-center justify-center w-4/5 text-xl">
                <li class="mr-12 flex items-center" style="margin-left: -86px">
                    <a href="/" class="block" title="Instagram"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="1x"/></a>
                </li>
                <li class="mr-12 flex items-center">
                    <a href="/" class="block" title="Twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="1x"/></a>
                </li>
                <li class="flex items-center">
                    <a href="/" class="block" title="Facebook"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="1x"/></a>
                </li>
            </ul>

            <ul class="hidden md:flex relative">
                <li class="mr-4 flex items-center justify-start">
                    <button title="Search" @click="showSearch" class="flex items-center"><img width="24" height="24" class="h-icon" src="/img/icons/search.svg" alt="Search" /></button>
                    <h3 class="w-0 h-0 overflow-hidden text-black m-0 whitespace-nowrap">Search something</h3>
                </li>
                <li class="ml-4">
                    <router-link to="/"><img width="24" height="24" class="h-icon" src="/img/icons/cart.svg" alt="Cart" /></router-link>
                </li>
                <li class="absolute right-0 opacity-0 hidden">
                    <button title="Close search" @click="closeSearch">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.34314 6.34314L17.6568 17.6568" stroke="#EDA3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6568 6.34314L6.34314 17.6568" stroke="#EDA3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </li>
            </ul>

            <button title="Open menu" class="md:hidden h-10 w-10 flex items-center justify-center z-40" @click="toggle">
                <svg class="w-8 h-8" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="25" y2="3" stroke="#1B2437" stroke-width="2"/>
                    <line y1="9" x2="25" y2="9" stroke="#1B2437" stroke-width="2"/>
                </svg>
            </button>
        </content-container>

        <content-container class="h-0 overflow-hidden md:block hidden" style="max-width: 1340px;">
            <input class="text-4xl w-full" placeholder="Search" style="caret-color: #EDA3B5;" />
        </content-container>
            
        <content-container class="mt-8 hidden md:block overflow-hidden">
            <ul class="flex items-center justify-center mt-1">
                <li class="mr-11">
                    <h3 class="m-0">
                        <router-link to="/" class="relative inline-block pb-7">
                            <span v-if="this.$route.path === '/'" class="absolute border-l-3 border-black w-full h-5 bottom-0 left-1/2 transform -translate-1/2" />
                            Home
                        </router-link>
                    </h3>
                </li>
                <li class="mx-11">
                    <h3 class="m-0">
                        <router-link to="/shop" class="relative inline-block pb-7">
                            <span v-if="this.$route.path === '/shop'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Shop
                        </router-link>
                    </h3>
                </li>
                <li class="mx-11">
                    <h3 class="m-0">
                        <router-link to="/" class="relative inline-block pb-7">
                            <span v-if="this.$route.path === '/blog'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Blog
                        </router-link>
                    </h3>
                </li>
                <li class="ml-11">
                    <h3 class="m-0">
                        <router-link to="/" class="relative inline-block pb-7">
                            <span v-if="this.$route.path === '/contact'" class="absolute border-t border-black w-full h-1 top-1/2" />
                            Contact
                        </router-link>
                    </h3>
                </li>
            </ul>
        </content-container>

        <div class="w-screen h-screen bg-white absolute left-full top-0 overflow-hidden md:hidden">
            <content-container>
                <ul class="flex items-center flex-col mt-20 text-white">
                    <li class="mb-4">
                        <h3 class="m-0">
                            <router-link to="/" class="relative">
                                <span v-if="this.$route.path === '/'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Home
                            </router-link>
                        </h3>
                    </li>
                    <li class="mb-4">
                        <h3 class="m-0">
                            <router-link to="/shop" class="relative">
                                <span v-if="this.$route.path === '/shop'" class="absolute border-t border-black w-full h-1 top-1/2" />
                                Shop
                            </router-link>
                        </h3>
                    </li>
                    <li class="mb-4">
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
            const mobileLinks = button.parentNode.parentNode.children[3];
            const links = button.parentNode.parentNode.children[3].children[0].children[0];

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
            const mobileLinks = button.parentNode.parentNode.children[3];
            const links = button.parentNode.parentNode.children[3].children[0].children[0];

            gsap.to(links, { color: "#ffffff", duration: .3 });
            gsap.to(mobileLinks, { xPercent: 0, duration: .4, delay: .4 });
            gsap.to(line1, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line2, { rotation: 0, duration: .1, transformOrigin: "center center", delay: .4 });
            gsap.to(line1, { y: 0, duration: .1, delay: .5 });
            gsap.to(line2, { y: 0, duration: .1, delay: .5 });
        },
        
        showSearch(event) {
            const button = event.currentTarget;
            const li = button.parentNode;
            const ul = button.parentNode.parentNode;
            const searchTitle = button.parentNode.children[1];
            const logo = button.parentNode.parentNode.parentNode.children[0];
            const item1 = button.parentNode.parentNode.children[1];
            const socLinks = button.parentNode.parentNode.parentNode.children[1];
            const navlinks = button.parentNode.parentNode.parentNode.parentNode.children[2];
            const input = button.parentNode.parentNode.parentNode.parentNode.children[1];
            const cancel = button.parentNode.parentNode.children[2];

            gsap.to(logo, { opacity: 0, duration: .2 });
            gsap.to(item1, { opacity: 0, duration: .2 });
            gsap.to(socLinks, { opacity: 0, duration: .2 });
            gsap.to(navlinks, { color: "#ffffff", duration: .2});

            gsap.to(logo, { width: 0, duration: .4, delay: .4 });
            gsap.to(socLinks, { width: 0, duration: .4, delay: .4, margin: "0" });
            gsap.to(li, { width: "100%", duration: 0, delay: .8 });
            gsap.to(ul, { width: "100%", duration: 0, delay: .8 });
            gsap.to(searchTitle, { marginLeft: "24px", duration: 0, delay: .8 });
            gsap.to(searchTitle, { width: "100%", duration: .4, delay: .8 });
            gsap.to(searchTitle, { height: "100%", duration: 0, delay: .8 });
            gsap.to(input, { height: "80px", duration: .4, delay: .8 });
            gsap.to(navlinks, { height: "0", marginTop: "9px", duration: .4, delay: .8 });
            gsap.to(cancel, { display: "block", duration: 0, delay: .8 });
            gsap.to(cancel, { opacity: 1, duration: .4, delay: .8 });
        },

        closeSearch(event) {
            const button = event.currentTarget;
            const li = button.parentNode.parentNode.children[0];
            const ul = button.parentNode.parentNode;
            const searchTitle = button.parentNode.parentNode.children[0].children[1];
            const logo = button.parentNode.parentNode.parentNode.children[0];
            const item1 = button.parentNode.parentNode.children[1];
            const socLinks = button.parentNode.parentNode.parentNode.children[1];
            const navlinks = button.parentNode.parentNode.parentNode.parentNode.children[2];
            const input = button.parentNode.parentNode.parentNode.parentNode.children[1];
            const cancel = button.parentNode;

            gsap.to(cancel, { opacity: 0, duration: .4 });
            gsap.to(cancel, { display: "block", duration: 0, delay: .4 });
            gsap.to(searchTitle, { width: "0", duration: .4 });
            gsap.to(searchTitle, { marginLeft: "0", duration: 0, delay: .4 });
            gsap.to(searchTitle, { height: "0", duration: 0, delay: .4 });
            gsap.to(input, { height: "0", duration: .4 });
            gsap.to(navlinks, { height: "68px", marginTop: "2rem", marginBottom: "0", duration: .4 });

            gsap.to(navlinks, { color: "#1B2437", duration: .2, delay: .8 });
            gsap.to(logo, { width: "11rem", duration: .4, delay: .4 });
            gsap.to(socLinks, { width: "80%", duration: .4, delay: .4 });
            gsap.to(li, { width: "auto", duration: .4, delay: .4 });
            gsap.to(ul, { width: "auto", duration: .4, delay: .4 });

            gsap.to(logo, { opacity: 1, duration: .2, delay: .8 });
            gsap.to(socLinks, { opacity: 1, duration: .2, delay: .8 });
            gsap.to(item1, { opacity: 1, duration: .2, delay: .8 });
        },
    }
}
</script>