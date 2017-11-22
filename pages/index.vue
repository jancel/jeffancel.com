<template>
  <div>
    <site-header />
    <home-page />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteHeader from '~/components/SiteHeader.vue'
import HomePage from '~/components/HomePage.vue'

export default {
  components: {
    Logo,
    SiteHeader,
    HomePage
  }
}
</script>

<style>

</style>
