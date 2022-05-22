# tabbar 使用演示

使用 tabbar 前请先查看 [vant tabbar](https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar) 使用文档。

tabbar 组件封装在根目录 `src/components/LayoutTabbar.vue` ，控制 tabbar 的全局状态放在根目录 `src/store/layoutTabbar.js` 文件中。

## 使用

首先需要在 `src/store/layoutTabbar.js` 文件中配置 tabbar:

```js
export const useLayoutTabbar = defineStore('layoutTabbar', {
  state: () => {
    return {
      show: true, // 可以控制 tabbar 是否显示
      active: 0, // tabbar 当前选中项
      tabbarProps: { // tabbar 的 props，https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbar-props
        fixed: true,
        border: true,
        'z-index': 100,
        route: true,
        placeholder: true,
        'safe-area-inset-bottom': true
      },
      tabbar: [ // tabbaritem 的 props， https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props
        {
          name: 0,
          title: '首页',
          icon: 'home-o',
          dot: false,
          badge: '',
          to: '/',
          replace: true
        }
      ]
    }
  }
  ...
})
```

在文件 `src/components/LayoutTabbar.vue` 中，控制了 tabbar 的 `active` 和 `show`:

```js
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutTabbar } from '@/store'

const route = useRoute()
const layoutTabbar = useLayoutTabbar()

watch(
  route,
  () => {
    // 切换 tabbar 的 active
    layoutTabbar.active = layoutTabbar.pathToName(route.path)
    // 默认只有配置在 layoutTabbar 中的 tabbar 才会展示
    layoutTabbar.show = layoutTabbar.tabbarToList.includes(route.path)
  },
  {
    deep: true,
    immediate: true
  }
)
```

并且在 `src/store/layoutTabbar.js` 中还封装了一些公用方法，在使用公用方法前，需要把 `src/store/layoutNavbar.js` 引入文件：

```js
import { useLayoutTabbar } from '@/store'
const layoutTabbar = useLayoutTabbar()
```

### setTabBarItem

`setTabBarItem` 设置 tabbar 的单个项，参数为 `{ index: 设置项的索引值, detail: 设置项的具体内容 }` ， detail 参考 <https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props>。例如：

```js
// 设置首页
function setTabBarItemEvent () {
  layoutTabbar.setTabBarItem({
    index: 0,
    detail: {
      icon: 'wap-home-o',
      title: 'home',
      dot: true
    }
  })
}
```

### addTabbar

`addTabbar` 添加 tabbar，参数为 `{ index: 要添加位置的索引值, detail: 设置项的具体内容 }` ， detail 参考 <https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#tabbaritem-props>。。例如：

```js
// 新增列表
function addTabbarEvent () {
  layoutTabbar.addTabbar({
    index: 1,
    detail: {
      icon: 'bar-chart-o',
      title: '列表',
      to: '/list',
      badge: 10
    }
  })
}
```

### removeTabbar

`removeTabbar` 删除 tabber 的某一项，参数为 `删除 tabber 的某一项索引值或者路由path`。例如：

```js
// 删除(1)
function removeTabbarEvent () {
  layoutTabbar.removeTabbar(1)
}

// 删除（/shopping-cart）
function removeTabbarEvent2 () {
  layoutTabbar.removeTabbar('/shopping-cart')
}
```

### hideTabbar

`hideTabbar` 隐藏tabbar。例如：

```js
// 隐藏tabbar
function hideTabbarEvent () {
  layoutTabbar.hideTabbar()
}
```

### showTabbar

`showTabbar` 显示tabbar。例如：

```js
// 显示tabbar
function showTabbarEvent () {
  layoutTabbar.showTabbar()
}
```
