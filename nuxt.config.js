export default {

  // Target Deployment
  target: 'server',

  // SSR
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-cms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' }
    ],
    script: [
      { src: '/js/jquery/jquery.min.js' },
      { src: '/js/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/js/adminlte.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fontawesome-free/css/all.min.css',
    '@/assets/css/adminlte.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    //https://github.com/maulayyacyber/nuxt-vue-multiselect
    'nuxt-multiselect',
    //https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt',
  ],

  auth: {
    strategies: {
        local: {
            token: {
                property: 'token',
                required: true,
                type: 'Bearer'
            },
            user: {
                property: 'user',
                // autoFetch: true
            },
            endpoints: {
                login: {
                    url: '/api/admin/login',
                    method: 'post'
                },
                logout: {
                    url: '/api/admin/logout',
                    method: 'post'
                },
                user: {
                    url: '/api/admin/user',
                    method: 'get'
                }
            }
        }
    },
    redirect: {
        login: '/login',
        logout: '/login',
        callback: '/login',
        home: '/admin/dashboard'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://petanee.webdinamis.id'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // babel: {
    //   presets({isServer}) {
    //     const targets = isServer ? { node: 'current' } : { ie: 11 }
    //     return [
    //       [ require.resolve("@babel/preset-env"), { targets }  ]
    //     ]
    //   },
    //   plugins: [
    //     "@babel/syntax-dynamic-import",
    //     "@babel/transform-runtime",
    //     "@babel/transform-async-to-generator"
    //   ]
    // },
  }
}
