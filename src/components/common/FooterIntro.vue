<template>
    <footer class="bg-white mt-8">
        <div class="flex items-center justify-center py-24px border-b border-grey-200">
            <NavLinks spacing="44" />
        </div>

        <content-container class="flex flex-wrap justify-center pt-36px pb-4">
            <div class="w-full mb-48px lg:mb-0 lg:w-2/5 flex justify-center lg:justify-start">
                <div class="w-full xs:w-3/5 md:w-2/5 lg:w-4/5 text-center sm:text-left">
                    <div class="flex items-center mb-24px justify-center sm:justify-start">
                        <img class="h-icon mr-16px" src="/img/icons/clay.svg" alt="Clay" />
                        <h3 class="m-0">Clay Shop</h3>
                    </div>
                    <p class="text-grey-600 w-full m-0">
                        Fashion is a popular aesthetic expression at a particular time, place and 
                        in a specific context, especially in clothing, footwear, lifestyle, 
                        accessories, makeup.
                    </p>
                </div>
            </div>

            <div class="w-full mb-48px sm:mb-0 text-center sm:text-left sm:w-1/3 lg:w-1/5">
                <h3 class="mb-24px">Hot links</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">Home</text-link></li>
                    <li class="mb-8px"><text-link to="/">Shop</text-link></li>
                    <li class="mb-8px"><text-link to="/">Blog</text-link></li>
                    <li><text-link to="/">Contact</text-link></li>
                </ul>
            </div>

            <div class="w-full mb-48px sm:mb-0 text-center sm:text-left sm:w-1/3 lg:w-1/5">
                <h3 class="mb-24px">More info</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">How it works</text-link></li>
                    <li class="mb-8px"><text-link to="/">About us</text-link></li>
                    <li class="mb-8px"><text-link to="/">Decline rules</text-link></li>
                    <li><text-link to="/">Terms & Conditions</text-link></li>
                </ul>
            </div>

            <div class="w-full mb-48px text-center sm:text-left sm:w-1/3 lg:w-1/5">
                <h3 class="mb-24px">Customer care</h3>
                <ul class="text-grey-600">
                    <li class="mb-8px"><text-link to="/">FAQ</text-link></li>
                    <li class="mb-8px"><text-link to="/">Terms of use</text-link></li>
                    <li><text-link to="/">Privacy Policy</text-link></li>
                </ul>
            </div>
        </content-container>
        <div class="bg-grey-200 py-26px">
            <content-container class="text-grey-600 flex items-center justify-between">
                <p class="m-0">© Clay Shop all rights reserved</p>
                <ul class="flex">
                    <li><a href="/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="1x" :style="{ color: '#1B2437' }"/></a></li>
                    <li class="mx-12"><a href="/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="1x" :style="{ color: '#1B2437' }"/></a></li>
                    <li><a href="/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="1x" :style="{ color: '#1B2437' }"/></a></li>
                </ul>
            </content-container>
        </div>
    </footer>
</template>
<script>
import ContentContainer from "./Container.vue"
import NavLinks from "./NavLinks.vue"

import TextLink from "../links/Text.vue"

export default {
  name: 'Footer',
  components: {
    ContentContainer,
    TextLink,
    NavLinks
  }
}
</script>