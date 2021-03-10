<template>
    <footer class="bg-white mt-32px">
        <content-container class="flex pt-48px pb-32px">
            <div class="w-full">
                <h3 class="mb-24px">Hot links</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a>Home</a></li>
                    <li class="mb-12px"><a>Shop</a></li>
                    <li class="mb-12px"><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">More info</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a>How it works</a></li>
                    <li class="mb-12px"><a>About us</a></li>
                    <li class="mb-12px"><a>Decline rules</a></li>
                    <li><a>Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-24px">Customer care</h3>
                <ul class="text-grey-600">
                    <li class="mb-12px"><a>FAQ</a></li>
                    <li class="mb-12px"><a>Terms of use</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>

            <div class="w-full">
                <h3 class="mb-30px">Get newsletter</h3>
                <p class="mb-30px text-grey-600">Get updates about style</p>
                <form class="text-grey-600">
                    <input placeholder="Type your email..." />
                    <button><img src="" alt="Subscribe" /></button>
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

export default {
  name: 'Footer',
  components: {
    ContentContainer
  }
}
</script>