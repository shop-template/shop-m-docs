# navBar

使用 navBar 前请先查看 [vant navBar](https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar) 使用文档。

navBar 组件封装在根目录 `src/components/LayoutNavbar.vue` ，控制 tabbar 的全局状态放在根目录 `src/store/layoutNavbar.js` 文件中。

## 使用

首先需要在 `src/store/layoutNavbar.js` 文件中配置 navBar:

```js
export const useLayoutNavbar = defineStore('layoutNavbar', {
  state: () => {
    return {
      show: true,  // 可以控制 navbar 是否显示
      navbarProps: { // navbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#props
        title: '',
        'left-text': '',
        'left-arrow': true,
        border: true,
        fixed: true,
        placeholder: true,
        'z-index': 100,
        'safe-area-inset-top': true
      },
      // 配置不显示 navbar 的 route.path
      dontShowList: []
    }
  }
  ...
})
```

在文件 `src/components/LayoutNavbar.vue` 中，控制了 tabbar 的 `show` 和 `title` 以及定义了左侧点击返回上一页:

```js
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLayoutNavbar } from '@/store'

const router = useRouter()
const route = useRoute()
const layoutNavbar = useLayoutNavbar()

watch(
  route,
  (value) => {
    layoutNavbar.show = layoutNavbar.getNavbarShow(route.path)
    document.title = value.meta.title
    layoutNavbar.navbarProps.title = value.meta.title
  },
  {
    deep: true,
    immediate: true
  }
)

function onClickLeft () {
  router.go(-1)
}
```

并且在 `src/store/layoutNavbar.js` 中还封装了一些公用方法，在使用公用方法前，需要把 `src/store/layoutNavbar.js` 引入文件：

```js
import { useLayoutNavbar } from '@/store'
const layoutNavbar = useLayoutNavbar()
```

### setNavbar

`setNavbar` 设置导航栏，参数参考 <https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#props>。例如：

```js
function setNavbarEvent () {
  layoutNavbar.setNavbar({
    title: '标题',
    'left-text': '返回'
  })
}
```

### hideNavbar

`hideNavbar` 隐藏navbar。例如：

```js
function hideNavbarEvent () {
  layoutNavbar.hideNavbar()
}
```

### showNavbar

`showNavbar` 显示navbar。例如：

```js
function showNavbarEvent () {
  layoutNavbar.showNavbar()
}
```

### dontShowListAdd

`dontShowListAdd` 为不显示 navbar 的列表中新添项，参数为 `path` 。例如：

```js
function dontShowListAddEvent () {
  layoutNavbar.dontShowListAdd('/navBar')
}
```

### dontShowListRemove

`dontShowListRemove` 为不显示 navbar 的列表中删除项，参数为 `path` 。例如：

```js
function dontShowListRemoveEvent () {
  layoutNavbar.dontShowListRemove('/navBar')
}
```

### getNavbarShow

`getNavbarShow` 获取某个 path 是否显示 navbar，参数为 `path` 。例如：

```js
function getNavbarShowEvent () {
  layoutNavbar.show = layoutNavbar.getNavbarShow('/navBar')
}
```

navBar 组件只是为了通用显示 标题、左侧返回 ，如果需要定制化特殊处理，可以使用以下方式：

### 定制化 navBar

通过配置 `src/store/layoutNavbar.js` 文件中的 `dontShowList` ，例如 `/detail` 页面不想显示 navBar：

```js
export const useLayoutNavbar = defineStore('layoutNavbar', {
  state: () => {
    return {
      show: true,  // 可以控制 navbar 是否显示
      navbarProps: { // navbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/nav-bar#props
        title: '',
        'left-text': '',
        'left-arrow': true,
        border: true,
        fixed: true,
        placeholder: true,
        'z-index': 100,
        'safe-area-inset-top': true
      },
      // 配置不显示 navbar 的 route.path
      dontShowList: [`/detail`]
    }
  }
  ...
})
```

然后在 `/detail` 页面内自定义 navBar 。