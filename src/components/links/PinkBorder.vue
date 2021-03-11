<template>
    <a class="inline-block border-2 text-pink border-pink font-semibold border-opacity-100 rounded-lg py-11px px-32px text-xl" :href="{href}">
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