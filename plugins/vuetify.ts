import { createVuetify, ThemeDefinition } from "vuetify";
import "vuetify/styles";

const DarkTheme: ThemeDefinition ={
    dark: true,
    colors: {
        background: '#0c0c0d',
        primary: '#00dc82',
        surface: '#121213',
    }
}
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        defaults:{
            global: {
                flat: true,
                hideDetails: true
            },
            VSheet: {
                rounded: "lg"
            },
            VBtn: {
                variant: "flat"
            },
            VTextarea:{
                variant:"outlined"
            },
            VTextField:{
                variant:"outlined"
            }
        },
        theme: {
            defaultTheme: "DarkTheme",
            themes: {
                DarkTheme
            }
        }
    });

    nuxtApp.vueApp.use(vuetify);
});
