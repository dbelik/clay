<template>
    <input class="border-2 rounded-md p-3 border-grey-300 focus:border-pink text-sm" :placeholder="placeholder" />
</template>
<script>
export default {
    props: {
        placeholder: String
    }
}
</script>