<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="docs-box">
        <iframe src="https://shop-template.github.io/shop-m/#/" frameborder="0"></iframe>
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
:root {
  --sidebar-width: 15rem;
  --content-width: auto;
}
</style>