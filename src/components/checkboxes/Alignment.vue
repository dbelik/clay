<template lang="">
    <button @click="toggle" class="h-8 w-16 border-2 border-grey-300 rounded-md flex items-center justify-center relative" title="Change layout">
        <svg class="w-1/2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C17.1046 0 18 0.89543 18 2V6C18 7.10457 17.1046 8 16 8H12C10.8954 8 10 7.10457 10 6V2C10 0.89543 10.8954 0 12 0H16ZM8 12C8 10.8954 7.10457 10 6 10H2C0.89543 10 0 10.8954 0 12V16C0 17.1046 0.89543 18 2 18H6C7.10457 18 8 17.1046 8 16V12ZM18 12C18 10.8954 17.1046 10 16 10H12C10.8954 10 10 10.8954 10 12V16C10 17.1046 10.8954 18 12 18H16C17.1046 18 18 17.1046 18 16V12ZM16 12H12V16H16V12ZM2 12H6V16H2V12ZM8 2C8 0.89543 7.10457 0 6 0H2C0.89543 0 0 0.89543 0 2V6C0 7.10457 0.89543 8 2 8H6C7.10457 8 8 7.10457 8 6V2ZM16 2H12V6H16V2ZM2 2H6V6H2V2Z" fill="#E5E5EA"/>
        </svg>
        <svg class="w-1/2" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1111 0C15.602 0 16 0.447715 16 1C16 1.51284 15.6569 1.93551 15.2148 1.99327L15.1111 2H0.888889C0.397969 2 0 1.55228 0 1C0 0.487164 0.343147 0.0644928 0.785226 0.00672773L0.888889 0H15.1111ZM15.1111 6C15.602 6 16 6.44772 16 7C16 7.51284 15.6569 7.93551 15.2148 7.99327L15.1111 8H0.888889C0.397969 8 0 7.55228 0 7C0 6.48716 0.343147 6.06449 0.785226 6.00673L0.888889 6H15.1111ZM16 13C16 12.4477 15.602 12 15.1111 12H0.888889L0.785226 12.0067C0.343147 12.0645 0 12.4872 0 13C0 13.5523 0.397969 14 0.888889 14H15.1111L15.2148 13.9933C15.6569 13.9355 16 13.5128 16 13Z" fill="#E5E5EA"/>
        </svg>

        <span class="inline-block absolute bg-white flex items-center justify-center rounded-md" style="width: 58%; height: 116%; top: -2px; left: -2px;">
            <svg v-if="active" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1111 0C15.602 0 16 0.447715 16 1C16 1.51284 15.6569 1.93551 15.2148 1.99327L15.1111 2H0.888889C0.397969 2 0 1.55228 0 1C0 0.487164 0.343147 0.0644928 0.785226 0.00672773L0.888889 0H15.1111ZM15.1111 6C15.602 6 16 6.44772 16 7C16 7.51284 15.6569 7.93551 15.2148 7.99327L15.1111 8H0.888889C0.397969 8 0 7.55228 0 7C0 6.48716 0.343147 6.06449 0.785226 6.00673L0.888889 6H15.1111ZM16 13C16 12.4477 15.602 12 15.1111 12H0.888889L0.785226 12.0067C0.343147 12.0645 0 12.4872 0 13C0 13.5523 0.397969 14 0.888889 14H15.1111L15.2148 13.9933C15.6569 13.9355 16 13.5128 16 13Z" fill="#EDA3B5"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C17.1046 0 18 0.89543 18 2V6C18 7.10457 17.1046 8 16 8H12C10.8954 8 10 7.10457 10 6V2C10 0.89543 10.8954 0 12 0H16ZM8 12C8 10.8954 7.10457 10 6 10H2C0.89543 10 0 10.8954 0 12V16C0 17.1046 0.89543 18 2 18H6C7.10457 18 8 17.1046 8 16V12ZM18 12C18 10.8954 17.1046 10 16 10H12C10.8954 10 10 10.8954 10 12V16C10 17.1046 10.8954 18 12 18H16C17.1046 18 18 17.1046 18 16V12ZM16 12H12V16H16V12ZM2 12H6V16H2V12ZM8 2C8 0.89543 7.10457 0 6 0H2C0.89543 0 0 0.89543 0 2V6C0 7.10457 0.89543 8 2 8H6C7.10457 8 8 7.10457 8 6V2ZM16 2H12V6H16V2ZM2 2H6V6H2V2Z" fill="#EDA3B5"/>
            </svg>
        </span>
    </button>
</template>
<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle(event) {
            this.active = !this.active;
            const button =event.currentTarget;
            const span = button.children[2];

            if (this.active) {
                gsap.to(span, { xPercent: 100, duration: .1 });
            } else {
                gsap.to(span, { xPercent: 0, duration: .1 });
            }
        }
    },
}
</script>