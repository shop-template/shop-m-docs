# cookie 封装

项目中使用的 cookie 插件为 [universal-cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie#readme) ，为了方便使用，对 universal-cookie 进行了简单的二次封装：

```js
import { getPrefix, getType } from '@/utils'
import dayjs from 'dayjs'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

// https://www.npmjs.com/package/universal-cookie
export default {
  set(name, value, options) {
    // 对 options 中 expires 参数的简化使用，当设置为 Number 类型的时候，对应的几天，其他情况请自行传入 Date
    if (options && options.expires && getType(options.expires) === 'Number') {
      cookies.set(getPrefix(name), value, {
        ...options,
        expires: dayjs().add(7, 'day').toDate()
      })
    } else {
      cookies.set(getPrefix(name), value, options)
    }
  },
  get(name, options) {
    return cookies.get(getPrefix(name), options)
  },
  getAll(options) {
    return cookies.getAll(options)
  },
  remove(name, options) {
    cookies.remove(getPrefix(name), options)
  },
  cookiesInstance: cookies
}
```
