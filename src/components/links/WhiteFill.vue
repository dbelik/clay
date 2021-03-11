<template>
    <a class="inline-block text-white font-bold rounded-md py-8px px-22px text-sm bg-transparent-white" :href="{href}">
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