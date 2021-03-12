<template>
    <router-link @mouseenter="interactStart" @mouseleave="interactStop" @focusin="interactStart" @focusout="interactStop" class="inline-block relative overflow-hidden text-white bg-pink font-bold rounded-md px-11px py-3px text-xl" :to="to">
        <slot />
    </router-link>
</template>