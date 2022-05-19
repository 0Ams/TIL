var CONST = require('./const');

module.exports = {
  title: `Today Eddie Learned`,
  description: `Eddie's Personal Wiki (Today I Learned)`,
  base: '/TIL/',
  dest: 'build',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png',
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'MSA',
        children: CONST.MSAList,
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
};
