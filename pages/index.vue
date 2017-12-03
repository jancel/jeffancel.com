<template>
  <div>
    <site-header :socialIcons="socialIcons" />
    <!-- <home-page /> -->
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Logo from '~/components/Logo.vue'
import SiteHeader from '~/components/SiteHeader.vue'
import HomePage from '~/components/HomePage.vue'
import $ from 'jquery'

const client = createClient()

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
  },
  // `env` is available in the context object
  asyncData (context) {
    const env = context.env
    return Promise.all([
      // fetch the owner
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all social icons sorted by creation date
      client.getEntries({
        'content_type': env.CTF_SOCIAL_ICON_TYPE_ID,
        order: 'sys.createdAt'
      })
    ]).then(([entries, socialIcons]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items[0],
        socialIcons: socialIcons.items
      }
    }).catch(console.error)
  }

}
</script>

<style>

</style>
