export default {
  head: {
    title: 'Alireza Esfahani',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Alireza Esfahani website',
      },
      { name: 'apple-mobile-web-app-title', content: 'Alireza Esfahani' },
      { name: 'application-name', content: 'Alireza Esfahani' },
      { name: 'msapplication-TileColor', content: '#C62641' },
      { name: 'theme-color', content: '#C62641' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#C62641' },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  loading: { color: '#C62641' },
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
  modules: ['nuxt-i18n'],
  i18n: {
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'fa',
        iso: 'fa-IR',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true, // recommended
      },
      messages: {
        en: {
          alirezaEsfahani: 'Alireza Esfahani',
          frontendDeveloper: 'Front-end developer',
          switchLocale: 'فارسی',
          articles: 'Articles',
        },
        fa: {
          alirezaEsfahani: 'علیرضا اصفهانی',
          frontendDeveloper: 'توسعه‌دهنده فرانت‌اند',
          switchLocale: 'English',
          articles: 'نوشته‌ها',
        },
      },
    },
  },
  env: {
    API_URL: process.env.API_URL || '',
  },
};
