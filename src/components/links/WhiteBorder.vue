<template>
    <a class="inline-block border-2 text-white border-white font-semibold border-opacity-20 rounded-lg py-11px px-26px text-xl" :href="{href}">
        <slot />
    </a>
</template>
<script>
export default {
    props: {
        href: String
    }
}
</script>