<template>
  <div>
    <site-header :siteLogo="logo" :socialIcons="socialIcons" :siteInfo="siteInfo" :contactInfos="contactInfo" />
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
    window.client = client
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
  asyncData () {
    let siteLogo = client.getAssets().then((assets) => { return assets.items.filter(logo => logo.fields.title === 'Logo').slice(-1)[0].fields })
    // let siteInfo = client.getEntry(env.SITE_ENTRY_ID).then((siteInfo) => { return siteInfo })
    return Promise.all([
      // fetch the owner
      siteLogo,
      // fetch all social icons sorted by creation date
      client.getEntries({
        'content_type': 'socialIcons',
        order: 'sys.createdAt'
      }),
      // siteInfo
      // fetch siteInfo
      client.getEntry('u4rwFdNsI0Iw8ayyw4Yi6'),
      client.getEntries({
        'content_type': 'contactInfo'
      })
    ]).then(([logo, socialIcons, siteInfo, contactInfo]) => {
      // return site logo (last contentful Logo upload)
      console.log('logo', logo)
      console.log('socialIcons', socialIcons)
      console.log('contactInfo', contactInfo.items)
      console.log('siteInfo', siteInfo.fields)
      // let siteLogo = assets.items.filter(logo => logo.fields.title === 'Logo').slice(-1)[0].fields
      return {
        logo: logo,
        socialIcons: socialIcons.items,
        siteInfo: siteInfo.fields,
        contactInfo: contactInfo.items
      }
    }).catch(console.error)
  }

}
</script>

<style>

</style>
