# 登录、注册、忘记密码

针对 登录、注册、忘记密码 常用功能，本项目提供了对应现成的封装页面，只需要自行将接口对接。

## 登录

登录页面待接口联调：

1. 发送短信验证码 `sendSmsEvent` 函数，
2. 登录功能接口 `onSubmit` 函数。

## 注册

注册页面待接口联调：

1. 发送短信验证码 `sendSmsEvent` 函数，
2. 登录功能接口 `onSubmit` 函数。

## 忘记密码

忘记密码页面待接口联调：

1. 发送短信验证码 `sendSmsEvent` 函数，
2. 登录功能接口 `onSubmit` 函数。

::: tip
关于密码正则的验证，请自行根据自己的实际情况在 `src/utils/formPattern` 文件中添加对应正则，使用方法参照如下：
:::

```html
<van-field
  v-model="phone"
  name="phone"
  label="手机号"
  required
  clearable
  center
  autocomplete="tel"
  placeholder="请输入手机号"
  :rules="[{ required: true, message: '请输入手机号' }, { pattern: phonePattern, message: '手机号格式有误' }]"
/>
```

```js
import { phonePattern, smsPattern } from '@/utils'
```
