<template>
  <div>
    <site-header />
    <!-- <home-page /> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SiteHeader from '~/components/SiteHeader.vue'
import HomePage from '~/components/HomePage.vue'
import $ from 'jquery'

export default {
  mounted: () => {
    // $('body').scrollspy({target: '#page-nav-wrapper', offset: 100})
    $('.scrollto').on('click', function (e) {
      var target = this.hash
      e.preventDefault()
      $('body').scrollTo(target, 800, {offset: -60, 'axis': 'y'})
    })
  },
  components: {
    Logo,
    SiteHeader,
    HomePage
  }
}
</script>

<style>

</style>
