# 图片处理

项目中对图片处理采用 [compressorjs](https://fengyuanchen.github.io/compressorjs/) 插件，支持图片压缩、图片方向回正等功能。

项目中个人信息中 头像上传 则使用了 [compressorjs](https://fengyuanchen.github.io/compressorjs/) 插件，使用的是 [Uploader 文件上传组件](https://vant-contrib.gitee.io/vant/#/zh-CN/uploader)：

```html
<van-uploader
  ref="userImgUploader"
  :max-size="userImgMaxSize"
  :before-read="userImgBeforeRead"
  :after-read="userImgAfterRead"
  preview-size="68"
  @oversize="userImgOversize"
/>
```

::: code-tabs#shopM

@tab js

```js
// 头像上传最大 5M (图片经过 compressorjs 压缩之后的大小)
const userImgMaxSize = 5 * 1024 * 1024
const userImgUploader = ref()
function choseUserImgEvent () {
  userImgUploader.value.chooseFile()
}

function userImgBeforeRead (file) {
  const toast = Toast.loading({
    message: '文件压缩中...'
  })
  return new Promise((resolve) => {
    // compressorjs 默认开启 checkOrientation 选项、图片压缩
    new Compressor(file, {
      success: (res) => {
        toast.clear()
        resolve(res)
      },
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
    message: '文件上传中...'
  })
  setTimeout(() => {
    toast.clear()
    userStore.userInfo.headerImg = file.content
  }, 1000)
}
```

@tab ts

```ts
import type { UploaderInstance, UploaderFileListItem } from 'vant'

// 头像上传最大 5M (图片经过 compressorjs 压缩之后的大小)
const userImgMaxSize = 5 * 1024 * 1024
const userImgUploader = ref<UploaderInstance>()
function choseUserImgEvent() {
  userImgUploader.value?.chooseFile()
}

function userImgBeforeRead(file: File | File[]): Promise<File> {
  const toast = Toast.loading({
    message: '文件压缩中...',
  })
  return new Promise((resolve) => {
    // compressorjs 默认开启 checkOrientation 选项、图片压缩
    const curFile = file as File
    // eslint-disable-next-line no-new
    new Compressor(curFile, {
      success: (res) => {
        toast.clear()
        resolve(res as File)
      },
      error(err) {
        console.log(err.message)
      },
    })
  })
}

function userImgOversize(file: UploaderFileListItem | UploaderFileListItem[]) {
  Toast('文件大小不能超过 5M')
}
function userImgAfterRead(file: UploaderFileListItem | UploaderFileListItem[]) {
  console.log(file)
  const formData = new FormData()
  const curFile = file as UploaderFileListItem
  formData.append('file', curFile?.file as File)

  // 自行处理上传逻辑
  const toast = Toast.loading({
    message: '文件上传中...',
  })
  setTimeout(() => {
    toast.clear()
    userStore.userInfo.headerImg = curFile.content
  }, 1000)
}

```

:::
