<template>
  <div class="container">
    <div
      class="nav blog-border z-999 px-10 flex flex-row items-center justify-between h-60px w-100% fixed"
    >
      <div class="b text-2xl cursor-pointer" @click="$router.push('/home')">
        Blog
      </div>
      <Explorer width="600px" />
      <el-menu class="h-100%" mode="horizontal" router :ellipsis="false">
        <el-menu-item index="/posts">文章</el-menu-item>
        <el-menu-item index="/docs">文档</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
      <div class="flex flex-row gap-5 items-center">
        <i class="fa-solid fa-circle-half-stroke hover:text-gray-400"></i>
        <i class="fa-solid fa-language hover:text-gray-400"></i>

        <Login v-if="isLogin" />
        <div v-else class="flex flex-row items-center">
          <BlogUserCard :user="getCurrentUser" />
          <a class="underline cursor-pointer" @click="logout">登出</a>
        </div>
      </div>
    </div>
    <div class="nav h-60px w-100%" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Explorer } from '@blog/universal'
import { Login, BlogUserCard, getCurrentUser } from '@blog/user'

let isLogin = ref(getCurrentUser != null ? true : false)

onBeforeRouteUpdate((to, from, next) => {
  isLogin = ref(getCurrentUser != null ? true : false)
})

const logout = () => {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('currentUser')
  ElMessage.success('已登出')
  isLogin.value = false
}
</script>

<style lang="scss" scoped>
.nav {
  background-color: map-get(theme.$light, bg);
}
</style>
