<template>
  <div class="line-height-relaxed font-custom">
    <Navigation />
    <RouterView class="py-10" />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { Footer, Navigation } from '@blog/universal'
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

.blog-rd {
  border-radius: 8px;
}

.font-custom {
  :not(i) {
    font-family: Consolas, 'Microsoft YaHei';
  }
}
</style>
