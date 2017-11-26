const config = require('./.contentful.json')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** ENV (contentul)
  */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'jeffancel.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jeff Ancel\'s Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      const fileLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      console.log(fileLoader)

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Additional modules https://github.com/nuxt-community/awesome-nuxt#modules
  */
  modules: [
    'bootstrap-vue/nuxt',
  ],
  /*
  ** CSS Configurations
  */
  css: [
    {src: 'roboto-fontface', lang: 'scss'},
    {src: '@/less/theme-8/styles.less', lang: 'less'}
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
}

// module.exports = {
//   css: [
//     // Load a node module directly (here it's a SASS file)
//     'bulma',
//     // CSS file in the project
//     '@/assets/css/main.css',
//     // SCSS file in the project
//     '@/assets/css/main.scss'
//   ]
// }
