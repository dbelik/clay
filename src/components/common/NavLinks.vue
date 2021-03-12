<template>
    <ul class="flex">
        <li :class="`mr-${spacing}px`">
            <h3 class="m-0">
                <router-link to="/" class="relative">
                    <span v-if="this.$route.path === '/'" class="absolute border-t border-black w-full h-1 top-1/2" />
                    Home
                </router-link>
            </h3>
        </li>
        <li :class="`mx-${spacing}px`">
            <h3 class="m-0">
                <router-link to="/shop" class="relative">
                    <span v-if="this.$route.path === '/shop'" class="absolute border-t border-black w-full h-1 top-1/2" />
                    Shop
                </router-link>
            </h3>
        </li>
        <li :class="`mx-${spacing}px`">
            <h3 class="m-0">
                <router-link to="/blog" class="relative">
                    <span v-if="this.$route.path === '/blog'" class="absolute border-t border-black w-full h-1 top-1/2" />
                    Blog
                </router-link>
            </h3>
        </li>
        <li :class="`ml-${spacing}px`">
            <h3 class="m-0">
                <router-link to="/contact" class="relative">
                    <span v-if="this.$route.path === '/contact'" class="absolute border-t border-black w-full h-1 top-1/2" />
                    Contact
                </router-link>
            </h3>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['spacing']
}
</script>