# 图片处理

项目中对图片处理采用 [compressorjs](https://fengyuanchen.github.io/compressorjs/) 插件，支持图片压缩、图片方向回正等功能。

项目中个人信息中 头像上传 则使用了 [compressorjs](https://fengyuanchen.github.io/compressorjs/) 插件，使用的是 [Uploader 文件上传组件](https://vant-contrib.gitee.io/vant/#/zh-CN/uploader)：

```html
<van-uploader v-show="!userInfo.headerImg" ref="userImgUploader" :max-size="userImgMaxSize" @oversize="userImgOversize" :before-read="userImgBeforeRead" :after-read="userImgAfterRead" preview-size="68" />
```

```js
// 头像上传最大 5M (图片经过 compressorjs 压缩之后的大小)
const userImgMaxSize = 5 * 1024 * 1024
const userImgUploader = ref()
function choseUserImgEvent () {
  userImgUploader.value.chooseFile()
}
function userImgBeforeRead (file) {
  Toast('文件压缩中...')
  return new Promise((resolve) => {
    // compressorjs 默认开启 checkOrientation 选项、图片压缩
    new Compressor(file, {
      success: resolve,
      error(err) {
        console.log(err.message);
      },
    })
  })
}
function userImgOversize (file) {
  Toast('文件大小不能超过 5M')
}
function userImgAfterRead (file) {
  console.log(file)
  const formData = new FormData()
  formData.append('file', file.file)

  // 自行处理上传逻辑
  const toast = Toast.loading({
    message: '上传中...'
  })
  setTimeout(() => {
    toast.clear()
    userStore.userInfo.headerImg = file.content
  }, 1000)
}
```
