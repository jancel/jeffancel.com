<template>
  <header class="header">
    <div class="top-bar container-fluid">
        <div class="actions">
            <a class="btn d-none d-md-inline-block" href="mailto:jancel@gmail.com"><font-awesome-icon icon="paper-plane" /> Contact</a>
            <!-- <a class="btn" href="#"><font-awesome-icon icon="download" /> Download My Resume</a> -->
        </div><!--//actions-->
        <ul class="social list-inline">
          <li v-for="socialIcon in socialIcons" class="list-inline-item">
            <SocialIcon :socialLink="socialIcon.fields.socialLink" :icon="socialIcon.fields.faName" />
          </li>
        </ul><!--//social-->
    </div><!--//top-bar-->

    <div class="intro">
        <div class="container text-center">
            <img class="profile-image" :src="siteLogo.file.url" alt="Logo">
            <h1 class="name mx-auto">{{ siteInfo.name }}</h1>
            <div class="title">{{ siteInfo.title }}</div>
            <div class="profile">
                <vue-markdown>{{ siteInfo.introduction }}</vue-markdown>
            </div><!--//profile-->
        </div><!--//container-->
    </div><!--//intro-->

    <div class="contact-info">
        <div class="container text-center">
            <ul class="list-inline">
                <li v-for="contactInfo in contactInfos" class="list-inline-item">
                  <contact-link :contactInfo="contactInfo.fields" />
                </li>
            </ul>
        </div><!--//container-->
    </div><!--//contact-info-->

    <!-- <div class="page-nav-space-holder d-none d-md-block">
        <div id="page-nav-wrapper" class="page-nav-wrapper text-centerd">
            <div class="container">
                <ul id="page-nav" class="nav page-nav list-inline">
                    <li class="nav-item"><a class="scrollto nav-link" href="#experiences-section">Experiences</a></li>
                    <li class="nav-item"><a class="scrollto nav-link" href="#education-section">Education</a></li>
                    <li class="nav-item"><a class="scrollto nav-link" href="#skills-section">Skills</a></li>
                    <li class="nav-item"><a class="scrollto nav-link" href="#testimonials-section">Testimonials</a></li>
                    <li class="nav-item"><a class="scrollto nav-link" href="#portfolio-section">Portfolio</a></li>
                    <li class="nav-item"><a class="scrollto nav-link" href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    </div> -->
  </header>
</template>

<script>
  import fontawesome from '@fortawesome/fontawesome'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPaperPlane } from '@fortawesome/fontawesome-free-solid'
  import SocialIcon from '~/components/SocialIcon.vue'
  import ContactLink from '~/components/ContactLink.vue'
  import VueMarkdown from 'vue-markdown'

  fontawesome.library.add(faPaperPlane)

  export default {
    props: ['socialIcons', 'siteLogo', 'siteInfo', 'contactInfos'],
    components: {
      FontAwesomeIcon,
      SocialIcon,
      VueMarkdown,
      ContactLink
    }
  }
</script>

<style lang="less">
    .border-radius (@radius: 5px) {
        -webkit-border-radius: @radius;
        -moz-border-radius:    @radius;
        border-radius:         @radius;

        -moz-background-clip:    padding;
        -webkit-background-clip: padding-box;
        background-clip:         padding-box;
    }

    .profile-image {
        .border-radius(100px);
    }
</style>
