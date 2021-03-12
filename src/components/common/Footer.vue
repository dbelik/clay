<template>
    <footer class="bg-white mt-32px">
        <content-container class="flex py-48px">
            <div class="w-full">
                <h3 class="mb-24px">Hot links</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">Home</text-link></li>
                    <li class="mb-8px"><text-link to="/">Shop</text-link></li>
                    <li class="mb-8px"><text-link to="/">Blog</text-link></li>
                    <li><text-link to="/">Contact</text-link></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">More info</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">How it works</text-link></li>
                    <li class="mb-8px"><text-link to="/">About us</text-link></li>
                    <li class="mb-8px"><text-link to="/">Decline rules</text-link></li>
                    <li><text-link to="/">Terms & Conditions</text-link></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">Customer care</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">FAQ</text-link></li>
                    <li class="mb-8px"><text-link to="/">Terms of use</text-link></li>
                    <li><text-link to="/">Privacy Policy</text-link></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-30px">Get newsletter</h3>
                <p class="mb-30px text-grey-600">Get updates about style</p>
                <form class="text-grey-600 flex">
                    <default-input type="email" class="w-full pr-16" placeholder="Type your email..." />
                    <pink-fill-btn class="-ml-16">
                        <img class="h-20px" src="/img/icons/arrow.svg" alt="Subscribe" />
                    </pink-fill-btn>
                </form>
            </div>
        </content-container>
        <div class="bg-grey-200 py-26px">
            <content-container class="text-grey-600 flex items-center justify-between">
                <p class="m-0">© Clay Shop all rights reserved</p>
                <ul class="flex">
                    <li><a href="/"><img class="h-icon" src="/img/icons/socials/instagram.svg" alt="Instagram" /></a></li>
                    <li class="mx-24px"><a href="/"><img class="h-icon" src="/img/icons/socials/twitter.svg" alt="Twitter" /></a></li>
                    <li><a href="/"><img class="h-icon" src="/img/icons/socials/facebook.svg" alt="Facebook" /></a></li>
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