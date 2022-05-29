# permission 权限

由于本项目的定位是类似于商场购物的项目，所以权限方面比较简单，仅区分是否需要身份验证，需要在 `src/router/index.js` 中配置对应权限，如下所示：

```js
{
  path: '/user',
  name: 'user',
  component: UserPage,
  meta: {
    requiresAuth: false, // 配置权限
    title: '我的'
  }
},
{
  path: '/userInfo',
  name: 'userInfo',
  component: UserInfoPage,
  meta: {
    requiresAuth: true, // 配置权限
    title: '个人信息'
  }
}
```

对应的路由守卫在 `src/router/permission.js` ：

```js
export default function (router) {
  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth) {
      // 需要身份验证
      const token = cookie.get(import.meta.env.VITE_token)
      if (!token) {
        // 本地 token 不存在，则跳转到登录页
        return { name: 'login', query: { from: to.name } }
      } else {
        const userStore = useUserStore()
        if (!userStore.isLogin) {
          // 未登录时，先获取用户信息，再跳转
          userStore.getUserInfoFn().then(res => {
            return true
          })
        } else {
          return true
        }
      }
    } else {
      return true
    }
  })
}
```

::: tip
关于在浏览器中查看的 token 名称由两处合成

1. 名称前缀， `.env` 文件中的 `VITE_prefix`，
2. 名称，`.env` 文件中的 `VITE_token`,
3. 浏览器中查看到的名称 `${import.meta.env.VITE_prefix}_${import.meta.env.VITE_token}`。
:::
