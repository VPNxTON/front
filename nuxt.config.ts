// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
import {process} from "unenv/runtime/node/process/_process";
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            baseURL: 'https://vpnxton.def.team/'
        },
    },
    app:{
      head:{
          link:[
              { referrerpolicy: 'no-referrer', crossorigin:'anonymous',rel: 'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css'}
          ]
      }
    },
    build: {
        transpile: ["vuetify"]
    },
    router: {
        options:{
            hashMode:true
        }
    },
    modules:[
        '@pinia/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", config => config.plugins.push(
                vuetify()
            ))
        }
    ],
    pinia: {
        autoImports: [
            'defineStore', // import { defineStore } from 'pinia'
        ],
    },
})
