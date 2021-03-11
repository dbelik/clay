<template>
    <footer class="bg-white mt-32px">
        <content-container class="flex py-48px">
            <div class="w-full">
                <h3 class="mb-24px">Hot links</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a href="/">Home</a></li>
                    <li class="mb-12px"><a href="/">Shop</a></li>
                    <li class="mb-12px"><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">More info</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a href="/">How it works</a></li>
                    <li class="mb-12px"><a href="/">About us</a></li>
                    <li class="mb-12px"><a href="/">Decline rules</a></li>
                    <li><a href="/">Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">Customer care</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a href="/">FAQ</a></li>
                    <li class="mb-12px"><a href="/">Terms of use</a></li>
                    <li><a href="/">Privacy Policy</a></li>
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
                    <li><a><img class="h-icon" src="/img/icons/socials/instagram.svg" alt="Instagram" /></a></li>
                    <li class="mx-24px"><a><img class="h-icon" src="/img/icons/socials/twitter.svg" alt="Twitter" /></a></li>
                    <li><a><img class="h-icon" src="/img/icons/socials/facebook.svg" alt="Facebook" /></a></li>
                </ul>
            </content-container>
        </div>
    </footer>
</template>
<script>
import ContentContainer from "./Container.vue"

import DefaultInput from "../inputs/Default.vue"
import PinkFillBtn from "../buttons/PinkFill.vue"

export default {
  name: 'Footer',
  components: {
    ContentContainer,
    DefaultInput,
    PinkFillBtn
  }
}
</script>