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
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200..700',
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
        onlyOnRoot: true,
      },
      messages: {
        en: {
          logo: 'A',
          home: {
            title: 'Alireza Esfahani',
            subtitle: 'The true story of my life as a',
            job: 'Front-end developer',
          },
          menu: {
            articles: 'Articles',
            projects: 'Projects',
            github: 'Github',
            about: 'About',
            contact: 'Contact',
            switchLocale: 'فارسی',
          },
        },
        fa: {
          logo: 'ع',
          home: {
            title: 'علیرضا اصفهانی',
            subtitle: 'داستان واقعی زندگی من به عنوان یک',
            job: 'توسعه‌دهنده فرانت‌اند',
          },
          menu: {
            articles: 'نوشته‌ها',
            projects: 'پروژه‌ها',
            github: 'گیت‌هاب',
            about: 'درباره',
            contact: 'ارتباط',
            switchLocale: 'English',
          },
        },
      },
    },
  },
  env: {
    API_URL: process.env.API_URL || '',
  },
};
