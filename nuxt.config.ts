// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
import {process} from "unenv/runtime/node/process/_process";
export default defineNuxtConfig({
    ssr: false,
    app:{
      baseURL:'/vpnxton'
    },
    runtimeConfig: {
        public: {
            baseURL: 'https://vpnxton.def.team/'
        },
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
