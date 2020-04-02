export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Haja Randriakoto",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Haja Randriakoto - Designer & Developer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-96x96.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Sarala:400,700|Yeseva+One&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/visibility.js",
    "~/plugins/vue-scrollactive.js",
    "~/plugins/ga.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    ["vue-scrollto/nuxt", { duration: 700 }]
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
