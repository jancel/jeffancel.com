<template>
  <a :href="contactInfo.link"><font-awesome-icon :icon="contactInfo.faIcon" /> {{ contactInfo.linkText }}</a>
</template>

<script>
  import fontawesome from '@fortawesome/fontawesome'
  import fas from '@fortawesome/fontawesome-free-solid'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  
  // Since brands are dynamic, we will import them all
  fontawesome.library.add(fas)

  export default {
    props: ['contactInfo'],
    components: {
      FontAwesomeIcon
    }
  }
</script>