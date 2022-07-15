# signaturePad 签字板

签字板 主要适用于 电子签名，比如购买贵重物品的时候，可能就需要使用电子签名。使用效果如右方展示的，可以直接在上面进行手动签名，拿到签名信息后保存到服务器端。

::: tip
签字板组件主要是基于 [signature_pad](https://github.com/szimek/signature_pad) 封装的，canvas 去除周边留白是基于 [trim-canvas](https://github.com/agilgur5/trim-canvas#readme)。
:::

## signaturePad 组件介绍

signaturePad 组件放置于 `src/components/SignaturePad.vue` ，在需要使用的组件中局部注册使用。

### props

|参数|说明|类型|默认值|
|----|----|----|----|
|`toolShow`|是否展示上方工具栏，包含颜色切换、清除签名|`Boolean`|`true`|
|`colors`|用于工具栏中生成颜色列表，可用于切换画笔颜色|`Array`|`['#000', '#f00']`|
|`isTrimCanvas`|是否需要纯签名（去除周边留白）|`Boolean`|`true`|
|`downloadName`|下载图片的名称|`String`|`signature`|

### 方法

通过 `ref`` 可以获取到 SignaturePad 实例并调用实例方法。

|方法名|说明|参数|返回值|
|----|----|----|----|
|`getCanvas`|获取画板的canvas|--|--|
|`getTrimmedCanvas`|获取画板去除周边留白的canvas，`props.isTrimCanvas` 必须设置为 `true` |--|`canvas`|
|`getSignaturePad`|获取SignaturePad实例|--|`new SignaturePad()`|
|`clear`|清空画板|--|--|
|`isEmpty`|判断画板是否为空，Returns true if canvas is empty, otherwise returns false|--|`Boolean`|
|`changePenColor`|修改画笔颜色|`color`|--|
|`toDataURL`|[SignaturePad api](https://github.com/szimek/signature_pad#api)功能类似于 `canvas` 的 `toDataURL`||`String`|
|`fromDataURL`|[SignaturePad api](https://github.com/szimek/signature_pad#api)将 `toDataURL` 导入画板||--|
|`toData`|[SignaturePad api](https://github.com/szimek/signature_pad#api)获取每个笔画，得到的是一个数据||`Array`|
|`fromData`|[SignaturePad api](https://github.com/szimek/signature_pad#api)可以将 `toData` 得到的笔画数组导入画板，||--|
|`on`|[SignaturePad api](https://github.com/szimek/signature_pad#api)||--|
|`off`|[SignaturePad api](https://github.com/szimek/signature_pad#api)||--|
|`saveImage`|下载图片|`(downloadName: string, type: string)` `downloadName`下载图片的名称，优先级高于 `props.downloadName`，`type`下载图片类型，默认为`png`|--|
|`saveAsPng`|下载 png 图片|`downloadName: string` 下载图片的名称，优先级高于 `props.downloadName`|--|
|`saveAsJpg`|下载 jpg 图片|`downloadName: string` 下载图片的名称，优先级高于 `props.downloadName`|--|

## 签字板简单演示

```html
<signature-pad></signature-pad>
```

## 签字板获取纯签名演示/签字板演示

::: code-tabs#shopM

@tab js

```vue
<template>
  <div class="signature-pad">
    <div v-if="props.toolShow" class="signature-pad-header">
      <div class="color-box">
        <div v-for="item in props.colors" :key="item" class="color-item" :class="{ active: item === colorActive }" @click="changeColor(item)">
          <div class="color-item-inner" :style="{ background: item }"></div>
        </div>
      </div>
      <div class="handle-box">
        <div class="handle-item" @click="clearCanvas">
          <van-icon class="handle-item-icon" name="delete-o" />
        </div>
      </div>
    </div>
    <div class="signature-pad-canvas-box">
      <canvas class="signature-pad-canvas" ref="signaturePadCanvas" style="touch-action: none; user-select: none;"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Toast } from 'vant'
import SignaturePad from 'signature_pad'
import trimCanvas from 'trim-canvas'
import { download } from '@/utils'

const props = defineProps({
  // 是否展示上方工具栏颜色切换、清除签名
  toolShow: {
    type: Boolean,
    default: true
  },
  // 色组
  colors: {
    type: Array,
    default() {
      return ['#000', '#f00']
    }
  },
  // 是否需要纯签名（去除周边留白）
  isTrimCanvas: {
    type: Boolean,
    default: true
  },
  // 下载图片的名称
  downloadName: {
    type: String,
    default: 'signature'
  }
})

defineExpose({
  getCanvas,
  getTrimmedCanvas,
  getSignaturePad,
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColor,
  fromDataURL,
  toDataURL,
  fromData,
  toData,
  on: signaturePadOn,
  off: signaturePadOff,
  saveImage,
  saveAsPng,
  saveAsJpg
})

const colorActive = ref(props.colors[0])
const signaturePadCanvas = ref()
let signaturePad = null
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: props.isTrimCanvas ? 'rgba(255,255,255,0)' : 'rgb(255,255,255)'
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio =  Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext('2d').scale(ratio, ratio)
  signaturePad.clear()
}

useEventListener(window, 'resize', (evt) => { resizeCanvas() })

function getCanvas() {
  return signaturePadCanvas.value
}

function getTrimmedCanvas() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  } else {
    let copy = document.createElement('canvas')
    copy.width = signaturePadCanvas.value.width
    copy.height = signaturePadCanvas.value.height
    copy.getContext('2d').drawImage(signaturePadCanvas.value, 0, 0)
    return trimCanvas(copy)
  }
}

function getSignaturePad() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  }
  return signaturePad
}

// 清空canvas
function clearCanvas() {
  signaturePad.clear()
}

// 判断canvas是否为空
function isEmptyCanvas() {
  return signaturePad.isEmpty()
}

// 更改画笔颜色
function changePenColor(color) {
  signaturePad.penColor = color
}

function fromDataURL(dataURL, options) {
  return signaturePad.fromDataURL(dataURL, options)
}

function toDataURL(type, encoderOptions) {
  return signaturePad.toDataURL(type, encoderOptions)
}

function fromData(pointGroups) {
  return signaturePad.fromData(pointGroups)
}

function toData() {
  return signaturePad.toData()
}

function signaturePadOn() {
  return signaturePad.on()
}

function signaturePadOff() {
  return signaturePad.off()
}

function changeColor(color) {
  colorActive.value = color
  changePenColor(color)
}

// 保存为png图片
function saveImage(downloadName, type = 'png') {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = props.isTrimCanvas ? getTrimmedCanvas().toDataURL() : signaturePad.toDataURL()
    if (type === 'png') {
      download(dataURL, `${downloadName || props.downloadName}.png`)
    } else {
      download(dataURL, `${downloadName || props.downloadName}.jpg`)
    }
  }
}

function saveAsPng(downloadName) {
  saveImage(downloadName, 'png')
}

function saveAsJpg(downloadName) {
  saveImage(downloadName, 'jpg')
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
@canvas-height: 250px;
.signature-pad {
  background-color: #fff;
}
.signature-pad-header {
  .display-flex-between();
  padding: @padding-small;
}
.color-box,
.handle-box {
  .display-flex-center();
}
.color-item {
  background-color: #fff;
  border-radius: 50%;
  padding: @padding-mini;
  &.active {
    background-color: #dde1e3;
  }
}
.color-item-inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.color-item + .color-item {
  margin-left: @margin-mini;
}
.handle-item {
  box-sizing: border-box;
  border: 1px solid #dde1e3;
  border-radius: 50%;
  .display-flex-center();
  width: calc(30px + @padding-mini * 2);
  height: calc(30px + @padding-mini * 2);
  .handle-item-icon {
    font-size: 20px;
  }
}
.signature-pad-canvas-box {
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 0;
}
.signature-pad-canvas {
  width: 100%;
  height: @canvas-height;
}
</style>
```

@tab ts

```vue
<template>
  <div class="block" style="margin-left: 0; margin-right: 0">
    <div class="block-title van-hairline--bottom">签字板简单演示</div>
    <div class="block-body" style="padding: 0">
      <signature-pad></signature-pad>
    </div>
  </div>
  <div class="block" style="margin-left: 0; margin-right: 0; background: rgba(0, 0, 0, 0)">
    <div class="block-title van-hairline--bottom" style="background: #fff">签字板获取纯签名演示</div>
    <div class="block-body" style="padding: 0">
      <signature-pad ref="signaturePad1" :is-trim-canvas="true" download-name="签名"></signature-pad>
      <div class="pdt-small pdl-middle pdb-mini">
        <van-button type="success" @click="getIsEmpty1">画板是否为空</van-button>
        <van-button type="default" @click="clear1">清空画板</van-button>
        <van-button type="warning" @click="changeColor1">修改画笔颜色</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="danger" @click="download1">下载签名（png）</van-button>
        <van-button type="primary" @click="getSignature1">获取纯签名</van-button>
      </div>
      <div class="pdl-middle">
        <div class="pdt-small pdb-small">纯签名：</div>
        <img v-if="canvasDataURL1" :src="canvasDataURL1" style="width: 100px" />
      </div>
    </div>
  </div>
  <div class="block" style="margin-left: 0; margin-right: 0; background: rgba(0, 0, 0, 0)">
    <div class="block-title van-hairline--bottom" style="background: #fff">签字板演示</div>
    <div class="block-body" style="padding: 0">
      <signature-pad ref="signaturePad2" :colors="colors" :is-trim-canvas="false" download-name="签名2"></signature-pad>
      <div class="pdt-small pdl-middle pdb-mini">
        <van-button type="success" @click="getIsEmpty2">画板是否为空</van-button>
        <van-button type="default" @click="clear2">清空画板</van-button>
        <van-button type="warning" @click="changeColor2">修改画笔颜色</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="danger" @click="download2">下载签名（jpg）</van-button>
        <van-button type="danger" @click="download2png">下载签名（png）</van-button>
      </div>
      <div class="pdt-mini pdl-middle pdb-small">
        <van-button type="primary" @click="getSignature2">获取签名</van-button>
      </div>
      <div class="pdl-middle">
        <div class="pdt-small pdb-small">签名：</div>
        <img v-if="canvasDataURL2" :src="canvasDataURL2" style="width: 100px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from 'vant'
import SignaturePad from '@/components/SignaturePad.vue'

const signaturePad1 = ref<InstanceType<typeof SignaturePad>>()
const canvasDataURL1 = ref('')
const signaturePad2 = ref<InstanceType<typeof SignaturePad>>()
const canvasDataURL2 = ref('')
const colors = ['#000', '#aaa', '#f00', '#0f0', '#00f']

const getIsEmpty1 = () => {
  Toast(signaturePad1.value?.isEmpty() ? '画板为空' : '画板不为空')
}

const clear1 = () => {
  signaturePad1.value?.clear()
}

const changeColor1 = () => {
  // eslint-disable-next-line radix
  signaturePad1.value?.changePenColor(colors[parseInt(String(Math.random() * 1000)) % colors.length])
}

const download1 = () => {
  signaturePad1.value?.saveAsPng('纯签名')
}

const getSignature1 = () => {
  const canvas = signaturePad1.value?.getTrimmedCanvas()
  if (canvas) {
    canvasDataURL1.value = canvas.toDataURL()
  }
}

const getIsEmpty2 = () => {
  Toast(signaturePad2.value?.isEmpty() ? '画板为空' : '画板不为空')
}

const clear2 = () => {
  signaturePad2.value?.clear()
}

const changeColor2 = () => {
  // eslint-disable-next-line radix
  signaturePad2.value?.changePenColor(colors[parseInt(String(Math.random() * 1000)) % colors.length])
}

const download2 = () => {
  signaturePad2.value?.saveAsJpg()
}
const download2png = () => {
  signaturePad2.value?.saveAsPng('download2png')
}

const getSignature2 = () => {
  const canvas = signaturePad2.value?.getSignaturePad()
  if (canvas) {
    canvasDataURL2.value = canvas.toDataURL()
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/demo.less';
</style>
```

:::

## 签字板组件源码

::: details 签字板组件源码

::: code-tabs#shopM

@tab js

```vue
<template>
  <div class="signature-pad">
    <div v-if="props.toolShow" class="signature-pad-header">
      <div class="color-box">
        <div v-for="item in props.colors" :key="item" class="color-item" :class="{ active: item === colorActive }" @click="changeColor(item)">
          <div class="color-item-inner" :style="{ background: item }"></div>
        </div>
      </div>
      <div class="handle-box">
        <div class="handle-item" @click="clearCanvas">
          <van-icon class="handle-item-icon" name="delete-o" />
        </div>
      </div>
    </div>
    <div class="signature-pad-canvas-box">
      <canvas class="signature-pad-canvas" ref="signaturePadCanvas" style="touch-action: none; user-select: none;"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Toast } from 'vant'
import SignaturePad from 'signature_pad'
import trimCanvas from 'trim-canvas'
import { download } from '@/utils'

const props = defineProps({
  // 是否展示上方工具栏颜色切换、清除签名
  toolShow: {
    type: Boolean,
    default: true
  },
  // 色组
  colors: {
    type: Array,
    default() {
      return ['#000', '#f00']
    }
  },
  // 是否需要纯签名（去除周边留白）
  isTrimCanvas: {
    type: Boolean,
    default: true
  },
  // 下载图片的名称
  downloadName: {
    type: String,
    default: 'signature'
  }
})

defineExpose({
  getCanvas,
  getTrimmedCanvas,
  getSignaturePad,
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColor,
  fromDataURL,
  toDataURL,
  fromData,
  toData,
  on: signaturePadOn,
  off: signaturePadOff,
  saveImage,
  saveAsPng,
  saveAsJpg
})

const colorActive = ref(props.colors[0])
const signaturePadCanvas = ref()
let signaturePad = null
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: props.isTrimCanvas ? 'rgba(255,255,255,0)' : 'rgb(255,255,255)'
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio =  Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext('2d').scale(ratio, ratio)
  signaturePad.clear()
}

useEventListener(window, 'resize', (evt) => { resizeCanvas() })

function getCanvas() {
  return signaturePadCanvas.value
}

function getTrimmedCanvas() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  } else {
    let copy = document.createElement('canvas')
    copy.width = signaturePadCanvas.value.width
    copy.height = signaturePadCanvas.value.height
    copy.getContext('2d').drawImage(signaturePadCanvas.value, 0, 0)
    return trimCanvas(copy)
  }
}

function getSignaturePad() {
  return signaturePad
}

// 清空canvas
function clearCanvas() {
  signaturePad.clear()
}

// 判断canvas是否为空
function isEmptyCanvas() {
  return signaturePad.isEmpty()
}

// 更改画笔颜色
function changePenColor(color) {
  signaturePad.penColor = color
}

function fromDataURL(dataURL, options) {
  return signaturePad.fromDataURL(dataURL, options)
}

function toDataURL(type, encoderOptions) {
  return signaturePad.toDataURL(type, encoderOptions)
}

function fromData(pointGroups) {
  return signaturePad.fromData(pointGroups)
}

function toData() {
  return signaturePad.toData()
}

function signaturePadOn() {
  return signaturePad.on()
}

function signaturePadOff() {
  return signaturePad.off()
}

function changeColor(color) {
  colorActive.value = color
  changePenColor(color)
}

// 保存为png图片
function saveImage(downloadName, type = 'png') {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = props.isTrimCanvas ? getTrimmedCanvas().toDataURL() : signaturePad.toDataURL()
    if (type === 'png') {
      download(dataURL, `${downloadName || props.downloadName}.png`)
    } else {
      download(dataURL, `${downloadName || props.downloadName}.jpg`)
    }
  }
}

function saveAsPng(downloadName) {
  saveImage(downloadName, 'png')
}

function saveAsJpg(downloadName) {
  saveImage(downloadName, 'jpg')
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
@canvas-height: 250px;
.signature-pad {
  background-color: #fff;
}
.signature-pad-header {
  .display-flex-between();
  padding: @padding-small;
}
.color-box,
.handle-box {
  .display-flex-center();
}
.color-item {
  background-color: #fff;
  border-radius: 50%;
  padding: @padding-mini;
  &.active {
    background-color: #dde1e3;
  }
}
.color-item-inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.color-item + .color-item {
  margin-left: @margin-mini;
}
.handle-item {
  box-sizing: border-box;
  border: 1px solid #dde1e3;
  border-radius: 50%;
  .display-flex-center();
  width: calc(30px + @padding-mini * 2);
  height: calc(30px + @padding-mini * 2);
  .handle-item-icon {
    font-size: 20px;
  }
}
.signature-pad-canvas-box {
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 0;
}
.signature-pad-canvas {
  height: @canvas-height;
}
</style>
```

@tab ts

```vue
<template>
  <div class="signature-pad">
    <div v-if="props.toolShow" class="signature-pad-header">
      <div class="color-box">
        <div
          v-for="item in props.colors"
          :key="item"
          class="color-item"
          :class="{ active: item === colorActive }"
          @click="changeColor(item)"
        >
          <div class="color-item-inner" :style="{ background: item }"></div>
        </div>
      </div>
      <div class="handle-box">
        <div class="handle-item" @click="clearCanvas">
          <van-icon class="handle-item-icon" name="delete-o" />
        </div>
      </div>
    </div>
    <div class="signature-pad-canvas-box">
      <canvas
        ref="signaturePadCanvas"
        class="signature-pad-canvas"
        style="touch-action: none; user-select: none"
      ></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Toast } from 'vant'
import SignaturePad from 'signature_pad'
import trimCanvas from 'trim-canvas'
import { download } from '@/utils'

interface Props {
  toolShow?: boolean
  colors?: string[]
  isTrimCanvas?: boolean
  downloadName?: string
}

const props = withDefaults(defineProps<Props>(), {
  // 是否展示上方工具栏颜色切换、清除签名
  toolShow: true,
  // 色组
  colors: () => ['#000', '#f00'],
  // 是否需要纯签名（去除周边留白）
  isTrimCanvas: true,
  // 下载图片的名称
  downloadName: 'signature',
})

defineExpose({
  getCanvas,
  getTrimmedCanvas,
  getSignaturePad,
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColor,
  fromDataURL,
  toDataURL,
  fromData,
  toData,
  on: signaturePadOn,
  off: signaturePadOff,
  saveImage,
  saveAsPng,
  saveAsJpg,
})

const colorActive = ref(props.colors[0])
const signaturePadCanvas: any = ref(null)
let signaturePad: any = null
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: props.isTrimCanvas ? 'rgba(255,255,255,0)' : 'rgb(255,255,255)',
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext('2d').scale(ratio, ratio)
  signaturePad.clear()
}

useEventListener(window, 'resize', (evt) => {
  resizeCanvas()
})

function getCanvas() {
  return signaturePadCanvas.value
}

function getTrimmedCanvas(): any {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  }
  const copy = document.createElement('canvas')
  copy.width = signaturePadCanvas.value.width
  copy.height = signaturePadCanvas.value.height
  copy?.getContext('2d')?.drawImage(signaturePadCanvas.value, 0, 0)
  return trimCanvas(copy)
}

function getSignaturePad() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  }
  return signaturePad
}

// 清空canvas
function clearCanvas() {
  signaturePad.clear()
}

// 判断canvas是否为空
function isEmptyCanvas() {
  return signaturePad.isEmpty()
}

// 更改画笔颜色
function changePenColor(color: string) {
  signaturePad.penColor = color
}

function fromDataURL(dataURL: string, options: any) {
  return signaturePad.fromDataURL(dataURL, options)
}

function toDataURL(type: string, encoderOptions: any) {
  return signaturePad.toDataURL(type, encoderOptions)
}

function fromData(pointGroups: any) {
  return signaturePad.fromData(pointGroups)
}

function toData() {
  return signaturePad.toData()
}

function signaturePadOn() {
  return signaturePad.on()
}

function signaturePadOff() {
  return signaturePad.off()
}

function changeColor(color: string) {
  colorActive.value = color
  changePenColor(color)
}

// 保存为png图片
function saveImage(downloadName: string, type = 'png') {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = props.isTrimCanvas ? getTrimmedCanvas().toDataURL() : signaturePad.toDataURL()
    if (type === 'png') {
      download(dataURL, `${downloadName || props.downloadName}.png`)
    } else {
      download(dataURL, `${downloadName || props.downloadName}.jpg`)
    }
  }
}

function saveAsPng(downloadName?: string) {
  saveImage(downloadName as string, 'png')
}

function saveAsJpg(downloadName?: string) {
  saveImage(downloadName as string, 'jpg')
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
@canvas-height: 250px;
.signature-pad {
  background-color: #fff;
}
.signature-pad-header {
  .display-flex-between();
  padding: @padding-small;
}
.color-box,
.handle-box {
  .display-flex-center();
}
.color-item {
  background-color: #fff;
  border-radius: 50%;
  padding: @padding-mini;
  &.active {
    background-color: #dde1e3;
  }
}
.color-item-inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.color-item + .color-item {
  margin-left: @margin-mini;
}
.handle-item {
  box-sizing: border-box;
  border: 1px solid #dde1e3;
  border-radius: 50%;
  .display-flex-center();
  width: calc(30px + @padding-mini * 2);
  height: calc(30px + @padding-mini * 2);
  .handle-item-icon {
    font-size: 20px;
  }
}
.signature-pad-canvas-box {
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 0;
}
.signature-pad-canvas {
  width: 100%;
  height: @canvas-height;
}
</style>
```

:::
