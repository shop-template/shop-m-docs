# 快速上手

## 依赖环境

- [Vue3](https://v3.cn.vuejs.org/)
- [Vue Router](https://router.vuejs.org/zh/index.html)
- [pinia](https://pinia.vuejs.org/)
- [Vant 3](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [Vite](https://vitejs.cn/)
- [Vue Devtools](https://devtools.vuejs.org/)（可选）

## 编辑器

- [VSCode](https://code.visualstudio.com/)

建议安装扩展：

- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
- [Vue language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 安装

从 GitHub 仓库中直接安装最新的脚手架代码。

```sh
git clone --depth=1 https://github.com/shop-template/shop-m.git my-project

cd my-project

删除 .git 文件夹

git init
git remote add origin 新的远程库地址
```

## 目录结构

我们已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

```
├── .github
│   └── workflows
│       └── docs.yml         # github action 配置，不需要的可以删除
├── public
│   └── favicon.ico          
├── src
│   ├── api                  # Api ajax 等
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── router               # Vue-Router
│   ├── store                # pinia
│   ├── styles               # less样式
│   ├── utils                # 工具库
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.js              # Vue 入口 JS
├── index.html               # Vue 入口模板
├── package.json
├── postcss.config.js        # postcss 配置
├── README.md
└── vite.config.js           # Vite 配置
```

1. 特别提示：使用本项目，请仔细查阅 src/main.js 中引入哪些依赖
2. 特别提示：本项目使用了按需加载，部分组件没用到没引入到项目中，当你遇到提示无注册组件时，应当自行引入！！

### demo 目录

项目中的 demo 演示目录如下，可以自行删除。

```
...
├── src
│   ├── router               # Vue-Router
|       └── demo.js          # demo 演示 router
│   └── views                # 业务页面入口和常用模板
|       └── demo             # demo 演示页面
...
```
