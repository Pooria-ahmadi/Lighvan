import { Property } from "grapesjs";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'خرید پنیر لیقوان',
    htmlAttrs: {
      lang: 'fa',
      dir:'rtl',
    },
    bodyAttrs: {
      class: 'overflow-x-html'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'فروشگاه دلیان عرضه کننده پنیر لیقوان درجه' },
      { hid: 'og:description', name: 'og:description',property: 'og:description', content: 'فروشگاه دلیان عرضه کننده پنیر لیقوان درجه' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet' ,href:'https://use.fontawesome.com/releases/v5.15.4/css/all.css' ,integrity:'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm', crossorigin:'anonymous'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma/css/bulma.min.css',
    'main/css/style.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/animate.js', mode: 'client' },
    { src: '~/plugins/aos.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  
  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
