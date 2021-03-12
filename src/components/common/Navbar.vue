<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50">
        <content-container class="flex items-center justify-between h-navbar">
            <img class="h-icon" src="/img/icons/clay.svg" alt="Clay" />
            
            <ul class="flex">
                <li class="mr-30px">
                    <h3 class="m-0">
                        <router-link to="/" class="relative">
                            <span v-if="this.$route.path === '/'" class="absolute border-t-2 border-black w-full h-1 top-1/2" />
                            Home
                        </router-link>
                    </h3>
                </li>
                <li class="mx-30px">
                    <h3 class="m-0">
                        <router-link to="/shop" class="relative">
                            <span v-if="this.$route.path === '/shop'" class="absolute border-t-2 border-black w-full h-1 top-1/2" />
                            Shop
                        </router-link>
                    </h3>
                </li>
                <li class="mx-30px">
                    <h3 class="m-0">
                        <router-link to="/blog" class="relative">
                            <span v-if="this.$route.path === '/blog'" class="absolute border-t-2 border-black w-full h-1 top-1/2" />
                            Blog
                        </router-link>
                    </h3>
                </li>
                <li class="ml-30px">
                    <h3 class="m-0">
                        <router-link to="/contact" class="relative">
                            <span v-if="this.$route.path === '/contact'" class="absolute border-t-2 border-black w-full h-1 top-1/2" />
                            Contact
                        </router-link>
                    </h3>
                </li>
            </ul>

            <ul class="flex">
                <li class="mr-16px">
                    <button><img class="h-icon" src="/img/icons/search.svg" alt="Search" /></button>
                </li>
                <li class="mx-16px">
                    <router-link to="/"><img class="h-icon" src="/img/icons/user.svg" alt="Profile" /></router-link>
                </li>
                <li class="ml-16px">
                    <router-link to="/"><img class="h-icon" src="/img/icons/cart.svg" alt="Cart" /></router-link>
                </li>
            </ul>
        </content-container>
    </nav>
</template>

<script>
import ContentContainer from "./Container.vue"

export default {
    components: {
        ContentContainer
    },
}
</script>