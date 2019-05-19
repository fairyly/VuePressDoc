const sidebarConfig = require('../config/sidebars')

module.exports = {
  title: '大前端',
  description: '大前端',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: '前端',
        items: [
          { text: '面试', link: '/interview/' }
        ]
      },
      {
        text: 'Blog',
        items: [
          { text: '2019', link: '/blog/2019/' },
          { text: '2018', link: '/blog/2018/' },
          { text: '2017', link: '/blog/2017/' },
          { text: '2016', link: '/blog/2016/' }
        ]
      },
      {
        text: '选择语言',
        items: [
          { text: '中文', link: '/guide/' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      { text: 'Github', link: 'https://github.com/fairyly/VuePressDoc' },
    ],
    sidebar: sidebarConfig
}
};