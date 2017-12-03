const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}
// export `createClient` to use it in page components
module.exports = {
  createClient () {
    console.log('loading client contentful')
    return contentful.createClient(config)
  }
}
// console.log('loading contentful')
// console.log('contentful config: ', config)
// window.client = contentful.createClient(config)
// console.log('window.client -> loaded')
// window.client.getEntries({
//   'content_type': 'social-icons'
// })
