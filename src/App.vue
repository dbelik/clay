<template>
  <div class="flex flex-col justify-between h-full w-full" style="min-height: calc(100vh - 64px);">
    <NavbarIntro v-if="this.$route.path === '/'" />
    <Navbar v-else />

    <main :class="`h-full w-full ${this.$route.path === '/' ? 'mt-6 md:mt-30' : ''}`">
      <transition name="transition">
        <router-view />
      </transition>
    </main>

    <FooterIntro v-if="this.$route.path === '/'" />
    <Footer v-else />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import NavbarIntro from './components/common/NavbarIntro.vue'
import Footer from './components/common/Footer.vue'
import FooterIntro from './components/common/FooterIntro.vue'

export default {
  components: {
    Navbar,
    Footer,
    NavbarIntro,
    FooterIntro
  }
}
</script>