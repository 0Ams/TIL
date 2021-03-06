var CONST = require('./const');

module.exports = {
  title: `Today Eddie Learned`,
  description: `Eddie's Personal Wiki (Today I Learned)`,
  base: '/TIL/',
  dest: 'build',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/active-header-links',
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-1SM39X20B1',
      },
    ],
    [
      'md-enhance',
      {
        presentation: true,
        mermaid: true,
        container: true,
        mark: true,
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/10ms_logo.png',
      },
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-1SM39X20B1',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1SM39X20B1');",
      ],
    ],
  ],
  themeConfig: {
    sidebar: CONST.sideBarList,
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/0ams/',
      },
      {
        text: 'mysetting',
        link: 'https://mysetting.io/u/0Ams',
      },
    ],
  },
  ga: 'G-1SM39X20B1',
  mdEnhance: {
    enableAll: true,
    presentation: {
      plugins: ['highlight', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard'],
    },
  },
};
