<template>
    <footer class="bg-white" style="margin-top: 42px">
        <content-container class="flex flex-wrap justify-center align-center py-48px text-center sm:text-left">
            <div class="w-full sm:w-1/2 md:w-1/3 mb-48px lg:mb-0 lg:w-1/4">
                <h3>Hot links</h3>
                <ul class="text-grey-600">
                    <li class="mb-1"><text-link to="/">Home</text-link></li>
                    <li class="mb-1"><text-link to="/">Shop</text-link></li>
                    <li class="mb-1"><text-link to="/">Blog</text-link></li>
                    <li><text-link to="/">Contact</text-link></li>
                </ul>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 mb-48px lg:mb-0 lg:w-1/4">
                <h3>More info</h3>
                <ul class="text-grey-600">
                    <li class="mb-1"><text-link to="/">How it works</text-link></li>
                    <li class="mb-1"><text-link to="/">About us</text-link></li>
                    <li class="mb-1"><text-link to="/">Decline rules</text-link></li>
                    <li><text-link to="/">Terms & Conditions</text-link></li>
                </ul>
            </div>

            <div class="w-full sm:w-1/2 mb-48px lg:mb-0 md:w-1/3 lg:w-1/4">
                <h3>Customer care</h3>
                <ul class="text-grey-600">
                    <li class="mb-1"><text-link to="/">FAQ</text-link></li>
                    <li class="mb-1"><text-link to="/">Terms of use</text-link></li>
                    <li><text-link to="/">Privacy Policy</text-link></li>
                </ul>
            </div>

            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <h3 class="mb-9">Get newsletter</h3>
                <p class="mb-11 text-grey-600">Get updates about style</p>
                <form class="text-grey-600 flex justify-center sm:justify-start">
                    <default-input type="email" class="w-full pr-16 max-w-xs" placeholder="Type your email..." />
                    <pink-fill-btn class="-ml-16">
                        <img width="20" height="20" class="h-20px" src="/img/icons/arrow.svg" alt="Subscribe" />
                    </pink-fill-btn>
                </form>
            </div>
        </content-container>
        <div class="bg-grey-200 py-26px">
            <content-container class="text-grey-600 flex items-center justify-between">
                <p class="m-0">© Clay Shop all rights reserved</p>
                <ul class="flex">
                    <li><a href="/" title="Instagram"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="1x" :style="{ color: '#1B2437' }" /></a></li>
                    <li class="mx-12"><a href="/" title="Twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="1x" :style="{ color: '#1B2437' }" /></a></li>
                    <li><a href="/" title="Facebook"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="1x" :style="{ color: '#1B2437' }" /></a></li>
                </ul>
            </content-container>
        </div>
    </footer>
</template>
<script>
import ContentContainer from "./Container.vue"

import DefaultInput from "../inputs/Default.vue"
import TextLink from "../links/Text.vue"
import PinkFillBtn from "../buttons/PinkFill.vue"

export default {
  name: 'Footer',
  components: {
    ContentContainer,
    DefaultInput,
    PinkFillBtn,
    TextLink
  }
}
</script>