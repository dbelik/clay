<template>
    <router-link 
        @mouseenter="interactStart"
        @mouseleave="interactStop"
        @focusin="interactStart"
        @focusout="interactStop"
        class="inline-block relative overflow-hidden text-white bg-pink font-bold rounded-md text-xl"
        style="padding: 1px 10px;"
        :to="to"
    >
        <slot />
    </router-link>
</template>