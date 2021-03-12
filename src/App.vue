<template>
  <div class="flex flex-col justify-between h-full w-full" style="min-height: calc(100vh - 64px);">
    <Navbar />

    <main class="h-full w-full">
      <transition name="transition">
        <router-view />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>