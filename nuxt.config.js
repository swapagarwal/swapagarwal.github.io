module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Swapnil Agarwal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '127.0.0.1 sweet 127.0.0.1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://raw.githubusercontent.com/lipis/bootstrap-social/gh-pages/bootstrap-social.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
      { innerHTML: 'window.$crisp=[];window.CRISP_WEBSITE_ID="aaab99fd-2762-42bc-9da0-71e2da456ac4";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();', type: 'text/javascript', charset: 'utf-8'}
    ],
    __dangerouslyDisableSanitizers: ['script']
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
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-disqus']
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-111629208-1'
    }]
  ],
  plugins: [
    { src: '~/plugins/vue-disqus', ssr: false }
  ]
}
