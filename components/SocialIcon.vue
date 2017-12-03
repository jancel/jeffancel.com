<template>
  <a :href="socialLink"><font-awesome-icon :icon="['fab', icon]" /></a>
</template>

<script>
  import fontawesome from '@fortawesome/fontawesome'
  import brands from '@fortawesome/fontawesome-free-brands'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  
  fontawesome.library.add(brands)

  export default {
    props: ['socialLink', 'icon'],
    components: {
      FontAwesomeIcon
    }
  }
</script>