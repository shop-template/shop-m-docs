const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  base: '/shop-m-docs/',
  lang: 'zh_CN',
  title: 'shop-m使用文档',
  description: 'shop-m使用文档',
  head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
  markdown: {
  },
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.jpg',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/tabbar.md'
          ],
        },
      ]
    },
    repo: 'shop-template/shop-m',
    docsRepo: 'https://github.com/shop-template/shop-m-docs',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ]
}