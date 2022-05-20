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
    '@vuepress/google-analytics',
    {
      ga: 'G-1SM39X20B1',
    },
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
    sidebar: [
      {
        title: 'General',
        children: CONST.GeneralList,
      },
      {
        title: 'MSA',
        children: CONST.MSAList,
      },
      {
        title: 'vscode',
        children: CONST.vscodeList,
      },
      {
        title: 'ETC',
        children: CONST.ETCList,
      },
    ],
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/0ams/',
      },
      {
        text: 'Blog',
        link: 'https://0ams.wordpress.com/',
      },
    ],
  },
  ga: 'G-1SM39X20B1',
};
