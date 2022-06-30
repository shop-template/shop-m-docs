const { searchPlugin } = require('@vuepress/plugin-search')
const { defineUserConfig } = require('vuepress')
const { localTheme } = require('./theme')
const { copyCodePlugin } = require('vuepress-plugin-copy-code2')

module.exports = defineUserConfig({
  base: '/shop-m-docs/',
  lang: 'zh_CN',
  title: 'shop-m使用文档',
  description: 'shop-m使用文档',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    [
      'script', {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?454c6dc05706491a69cab2760aa22b88";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  markdown: {
  },
  theme: localTheme({
    // 默认主题配置
    logo: '/images/logo.jpg',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '插件',
        link: '/plugins/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/cssVar.md',
            '/guide/navBar.md',
            '/guide/tabbar.md',
            '/guide/network.md',
            '/guide/vconsole.md',
            '/guide/login.md',
            '/guide/userInfo.md',
            '/guide/permission.md',
            '/guide/404.md'
          ],
        },
      ],
      '/plugins/': [
        {
          text: '插件',
          children: [
            '/plugins/README.md',
            '/plugins/cookie.md',
            '/plugins/compressorjs.md',
            '/plugins/signaturePad.md'
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
    copyCodePlugin({
      showInMobile: true,
      locales: {
        copy: "复制成功",
        hint: "复制代码"
      }
    })
  ]
})