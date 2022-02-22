import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    srcDir: 'src/',
    publicRuntimeConfig: {
        API_URL: process.env.API_URL || 'https://blog.nerd.productions'
    },
    meta: {
        link: [
            { rel:"icon", type:"image/png", href:"/favicon.png"}
        ]
    },
    css: [
      'assets/style/main.scss'
    ]
})
