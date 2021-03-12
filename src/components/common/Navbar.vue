<template>
    <nav class="fixed top-0 left-0 w-screen bg-white z-50">
        <content-container class="flex items-center justify-between h-navbar">
            <img class="h-icon" src="/img/icons/clay.svg" alt="Clay" />
            
            <NavLinks spacing="24" />

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
import NavLinks from "./NavLinks.vue"

export default {
    components: {
        ContentContainer,
        NavLinks
    },
}
</script>