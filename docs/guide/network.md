# network 无网样式

当没有网络的时候会在页面上方以 [Notify 消息提示](https://vant-contrib.gitee.io/vant/#/zh-CN/notify) 形式展示。方法定义在 `src/app.vue` 中：

```js
import { useOnline } from '@vueuse/core'

// 网络监听，当断网时自动提示
// https://vueuse.org/core/useOnline/
const online = useOnline()
watchEffect(() => {
  if (!online.value) {
    Notify({ type: 'danger', message: '您当前处于断网，请联网后使用', duration: 0 })
  } else {
    Notify.clear()
  }
})
```
