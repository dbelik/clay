<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50">
        <content-container class="flex items-center justify-start h-navbar relative">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9167 20.1214C16.3711 19.6791 19.8875 16.0481 20.1508 11.5432H11.9167V20.1214ZM21.9868 11.5432H22V11V0L11 9.61647e-07C4.92486 1.49275e-06 -5.31105e-07 4.92486 0 11C5.31105e-07 17.0751 4.92486 22 11 22C16.893 22 21.7036 17.366 21.9868 11.5432ZM11 1.83333C5.93739 1.83333 1.83333 5.93739 1.83333 11C1.83333 15.7532 5.45112 19.6615 10.0833 20.1214V9.70988H20.1667V1.83333H11Z" fill="#1B2437"/>
            </svg>
            
            <NavLinks spacing="24" class="ml-20 w-full overflow-hidden flex justify-center" />

            <ul class="flex items-center overflow-hidden w-44 relative">
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
        </content-container>

        <content-container class="h-0 overflow-hidden">
            <input class="text-4xl" placeholder="Search" style="caret-color: #EDA3B5;" />
        </content-container>
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
        }
    }
}
</script>