import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    localLayerAliases: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'shadcn-nuxt',
  ],
  css: [resolve('./assets/scss/app.scss')],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },
})
