<template>
    <nav class="fixed top-0 left-0 w-screen bg-white">
        <content-container class="flex items-center justify-between h-navbar">
            <img class="h-icon" src="/img/icons/clay.svg" alt="Clay" />
            
            <ul class="flex">
                <li class="mr-30px"><h3 class="m-0"><a href="/">Home</a></h3></li>
                <li class="mx-30px"><h3 class="m-0"><a href="/shop">Shop</a></h3></li>
                <li class="mx-30px"><h3 class="m-0"><a href="/blog">Blog</a></h3></li>
                <li class="ml-30px"><h3 class="m-0"><a href="/contact">Contact</a></h3></li>
            </ul>

            <ul class="flex">
                <li class="mr-16px">
                    <button><img class="h-icon" src="/img/icons/search.svg" alt="Search" /></button>
                </li>
                <li class="mx-16px">
                    <a href="/"><img class="h-icon" src="/img/icons/user.svg" alt="Profile" /></a>
                </li>
                <li class="ml-16px">
                    <a href="/"><img class="h-icon" src="/img/icons/cart.svg" alt="Cart" /></a>
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
    }
}
</script>