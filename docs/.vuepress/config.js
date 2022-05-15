const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  base: '/shop-m-docs/',
  lang: 'zh-CN',
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
    repo: 'shop-template/shop-m',
    editLinkText: '编辑此页',
    docsRepo: 'https://github.com/shop-template/shop-m-docs',
    docsDir: 'docs',
    lastUpdatedText: '最新更新时间',
    contributorsText: '贡献者列表'
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ]
}