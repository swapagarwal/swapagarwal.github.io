module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Swapnil Agarwal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Swapnil is an Entrepreneur, Developer, and Public Speaker. He has worked as a Software Developer at Amazon and as a Product Manager at Meesho in the past.' },
      { hid: 'og:title', property: 'og:title', content: 'Swapnil Agarwal' },
      { hid: 'og:description', property: 'og:description', content: 'Swapnil is an Entrepreneur, Developer, and Public Speaker. He has worked as a Software Developer at Amazon and as a Product Manager at Meesho in the past.' },
      { hid: 'og:image', property: 'og:image', content: 'https://swapnil.net/avatar.jpg' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      // { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }, #social-links
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css' }, #github
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }, #vue-fab
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }, #vue-fab
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }, #social-links
      // { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }, #social-links
      { src: 'https://unpkg.com/commentbox.io/dist/commentBox.min.js' },
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
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vue-fab'
    ],
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-111629208-1'
    }],
    'vue-github-buttons/nuxt'
  ],
  plugins: [
    { src: '~/plugins/vue-fab', ssr: false },
    { src: '~/plugins/vue-typer', ssr: false }
  ],
  generate: {
    fallback: true
  },
}
