# vconsole 移动端控制台

进入项目默认是不会打开 vconsole 的，可以通过在链接上添加 `?vconsole=true` 来自动添加 vconsole ，在 `src/app.vue` 中：

```js
import VConsole from 'vconsole'

const Route = useRoute()
// 当 Route.query.vconsole 存在时，初始化 vconsole
watchEffect(() => {
  if (Route.query.vconsole) {
    new VConsole()
  }
})
```

或者是自行调用 vconsole 的初始化和销毁：

```js
import VConsole from 'vconsole'

let vConsole

function addVconsoleEvent () {
  vConsole = new VConsole()
}

function destroyVconsoleEvent () {
  if (!vConsole) {
    vConsole = new VConsole()
  }
  vConsole.destroy()
}
```
