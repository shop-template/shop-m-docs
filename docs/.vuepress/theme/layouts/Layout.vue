<script setup>
import { watch, ref, nextTick } from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { useRouter, useRoute } from 'vue-router'
import pathList from './../pathList.js'

const route = useRoute()
const iframeId = ref(null)
const iframeBaseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:3000/shop-m/#' : 'https://shop-template.github.io/shop-m/#'
const iframeUrl = ref(iframeBaseUrl)

//给子页面发消息
function setChildrenInfo(path) {
  iframeId.value && iframeId.value.contentWindow.postMessage(
    {
      cmd: 'setPath', 
      res: {
        path
      }
    },
    '*'
  )
}

// 根据父 path 拿到 子 path
function parentPathToChildrenPath(parentPath) {
  const cur = pathList.find(x => x.parentPath === parentPath)
  return cur ? cur.childrenPath : ''
}

// 首次设置 iframe 的链接
iframeUrl.value = `${iframeBaseUrl}${parentPathToChildrenPath(route.path)}`

let osEnd = ref('pc')
// 获取是移动端还是PC，摘自：https://tim.qq.com/
const OS = function() {
  var a = navigator.userAgent,
      b = /(?:Android)/.test(a),
      d = /(?:Firefox)/.test(a),
      e = /(?:Mobile)/.test(a),
      f = b && e,
      g = b && !f,
      c = /(?:iPad.*OS)/.test(a),
      h = !c && /(?:iPhone\sOS)/.test(a),
      k = c || g || /(?:PlayBook)/.test(a) || d && /(?:Tablet)/.test(a),
      a = !k && (b || h || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(a) || d && e);
  return {
      android: b,
      androidPad: g,
      androidPhone: f,
      ipad: c,
      iphone: h,
      tablet: k,
      phone: a
  }
}();
if (OS.phone || OS.ipad) {
  osEnd.value = 'phone'
}
watch(
  route,
  async (val) => {
    await nextTick()
    const childrenPath = parentPathToChildrenPath(val.path)
    if (childrenPath) setChildrenInfo(childrenPath)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <ParentLayout>
    <!-- 因为page每次都重新渲染，所以pc端放在 navbar-after ，但移动端为了放置位置，所以放在 page-bottom -->
    <template #navbar-after>
      <div v-if="osEnd === 'pc'" class="docs-box">
        <iframe :src="iframeUrl" frameborder="0" ref="iframeId"></iframe>
      </div>
    </template>
    <template #page-bottom>
      <div v-if="osEnd === 'phone'" class="docs-box">
        <iframe :src="iframeUrl" frameborder="0" ref="iframeId"></iframe>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.docs-box {
  position: fixed;
  top: calc(var(--navbar-height) + 50px);
  right: 68px;
  width: 360px;
  height: 640px;
  z-index: 1000;
  background-color: #fff;
}
.docs-box iframe {
  display: block;
  width: 100%;
  height: 640px;
}
.page {
  position: relative;
  padding-right: 450px;
}
@media (max-width: 1344px) {
  .page {
    padding-right: 380px;
  }
  .docs-box {
    position: fixed;
    top: calc(var(--navbar-height) + 50px);
    right: 20px;
    width: 360px;
    height: 640px;
    z-index: 1000;
    background-color: #fff;
  }
}
@media (max-width: 719px) {
  .page {
    padding-right: 0;
  }
  .docs-box {
    position: inherit;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: 360px;
    height: 640px;
    z-index: 5;
    background-color: #fff;
  }
}
.theme-container.no-sidebar .docs-box {
  display: none;
}
:root {
  --sidebar-width: 15rem;
  --content-width: auto;
}
</style>