# cssVar 主题颜色

使用前请先查看 [ConfigProvider 全局配置](https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider) 使用文档。

自定义主题颜色，采用直接在代码中覆盖 CSS 变量，约定**覆盖 css 基础变量放置在 `src/styles/van/index.less` 文件中，组件变量需要放置在 `src/styles/van/` 下对应组件的 less 文件中**。例如我们需要将 [dialog](https://vant-contrib.gitee.io/vant/#/zh-CN/dialog) 组件的确认按钮颜色设置为 `--van-blue` 。

`src/styles/van/dialog.less` 文件：

```less
body {
  --van-dialog-confirm-button-text-color: var(--van-blue);
}
```

项目采用将 css 变量定义在 `body` 上覆盖 `:root` ，在代码中可以通过如下方是获取定义的 css 变量及设置：

```js
import { useCssVar } from '@vueuse/core'

// https://vueuse.org/core/useCssVar/
// 使用 useCssVar 读取 css 变量 --van-dialog-confirm-button-text-color
const dialogConfirmButtonTextColor = useCssVar('--van-dialog-confirm-button-text-color', document.body)

function changeDialogConfirmButtonTextColorEvent () {
  // 注意：这里加 .trim() 是为了兼容 chrome 在某些情况下 window.getComputedStyle(document.body).getPropertyValue('--van-dialog-confirm-button-text-color') = '  #1989fa' 的问题
  if (dialogConfirmButtonTextColor.value.trim() === '#1989fa') {
    dialogConfirmButtonTextColor.value = '#f00'
  } else {
    dialogConfirmButtonTextColor.value = '#1989fa'
  }
  nextTick(() => {
    openDialogEvent()
  })
}
```
