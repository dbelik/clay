<template>
    <button class="inline-block text-white font-bold rounded-md py-8px px-22px text-sm bg-pink" :href="{href}">
        <slot />
    </button>
</template>
<script>
export default {
    props: {
        href: String
    }
}
</script>