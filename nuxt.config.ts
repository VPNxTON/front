// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
    ssr: false,
    app:{
      baseURL:'/vpnxton'
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
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", config => config.plugins.push(
                vuetify()
            ))
        }
    ]
})
