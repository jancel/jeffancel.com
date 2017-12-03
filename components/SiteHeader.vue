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
            <img class="profile-image" src="~/assets/images/profile.jpg" alt="">
            <h1 class="name mx-auto">Jeff Ancel</h1>
            <div class="title">Sr. Manager | Full Stack Engineer | Entrepreneur</div>
            <div class="profile">
                <p>Entrepreneur minded professional with passion for problem solving. Engaging in discussions, whiteboard sessions and reflection to bring forward flexible, cloud-driven foundations that can be built upon. Having been a Principal Engineer building complete technical companies to a Sr. Manager building teams to help enterprises leap forward in capability, I find the sweet spot is somewhere in the middle. Thought Leadership is a primary goal; Open Source software is important to everything we do.</p>
            </div><!--//profile-->
        </div><!--//container-->
    </div><!--//intro-->

    <div class="contact-info">
        <div class="container text-center">
            <ul class="list-inline">
                <li class="email list-inline-item"><a href="mailto:jancel@gmail.com"><font-awesome-icon icon="envelope" /> jancel@gmail.com</a></li>
                <li class="list-inline-item"><a href="tel: 3147038829"><font-awesome-icon icon="phone" /> (314) 703-8829</a></li>
                <li class="website list-inline-item"><a href="http://jancel.net" target="_blank"><font-awesome-icon icon="globe" /> jancel.net (blog)</a></li>
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
  import brands from '@fortawesome/fontawesome-free-brands'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faPaperPlane, faDownload, faEnvelope, faPhone, faGlobe } from '@fortawesome/fontawesome-free-solid'
  import SocialIcon from '~/components/SocialIcon.vue'

  fontawesome.library.add(brands, faPaperPlane, faDownload, faEnvelope, faPhone, faGlobe)

  export default {
    props: ['socialIcons'],
    components: {
      FontAwesomeIcon,
      SocialIcon
    }
    // data () {
    //   return { person: {},
    //     socialIcons:
    //     [{
    //       'sys': {
    //         'space': {
    //           'sys': {
    //             'type': 'Link',
    //             'linkType': 'Space',
    //             'id': 'fvabrd2mg82q'
    //           }
    //         },
    //         'id': '32dMxVtrbOAuy0Y86EWyqk',
    //         'type': 'Entry',
    //         'createdAt': '2017-11-20T03:28:20.391Z',
    //         'updatedAt': '2017-11-20T03:28:20.391Z',
    //         'revision': 1,
    //         'contentType': {
    //           'sys': {
    //             'type': 'Link',
    //             'linkType': 'ContentType',
    //             'id': 'socialIcons'
    //           }
    //         },
    //         'locale': 'en-US'
    //       },
    //       'fields': {
    //         'faName': 'linkedin',
    //         'faPack': 'fab',
    //         'socialLink': 'https://www.linkedin.com/in/jancel/'
    //       }
    //     },
    //     {
    //       'sys': {
    //         'space': {
    //           'sys': {
    //             'type': 'Link',
    //             'linkType': 'Space',
    //             'id': 'fvabrd2mg82q'
    //           }
    //         },
    //         'id': '2VWDsSUf166iYwe4kIA68O',
    //         'type': 'Entry',
    //         'createdAt': '2017-11-20T03:29:26.475Z',
    //         'updatedAt': '2017-11-20T03:29:26.475Z',
    //         'revision': 1,
    //         'contentType': {
    //           'sys': {
    //             'type': 'Link',
    //             'linkType': 'ContentType',
    //             'id': 'socialIcons'
    //           }
    //         },
    //         'locale': 'en-US'
    //       },
    //       'fields': {
    //         'faName': 'twitter',
    //         'faPack': 'fab',
    //         'socialLink': 'https://twitter.com/jancel'
    //       }
    //     }]
    //   }
    // }
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
