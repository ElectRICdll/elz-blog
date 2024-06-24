<template>
  <div>
    <el-button @click="shouldLogin = true">登录</el-button>
    <el-dialog
      v-model="shouldLogin"
      :title="title"
      class="blog-rd w-120 h-80 flex flex-col justify-between"
      align-center
    >
      <el-form :model="userForm" ref="form" label-width="70px">
        <el-form-item label="邮箱">
          <el-input
            v-model="userForm.email"
            placeholder="输入邮箱..."
            type="email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="!loginMode" label="用户名">
          <el-input
            v-model="userForm.username"
            placeholder="输入昵称..."
            type="username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="userForm.password"
            placeholder="输入密码..."
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="!loginMode" label="确认密码 ">
          <el-input
            v-model="userForm.confirmPassword"
            placeholder="确认密码..."
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="flex flex-row gap-4 items-center justify-center">
          <el-button type="primary" @click="submit">{{
            loginMode ? '登录' : '注册'
          }}</el-button>
          <a class="underline cursor-pointer" @click="switchLoginMode">{{
            loginMode ? '创建一个新账户!' : '返回登录'
          }}</a>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { login, register } from '@blog/user'

defineProps({
  isLogined: {
    type: Object,
  },
})

const userForm = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
})

const shouldLogin = ref(false)
const loginMode = ref(true)
const title = ref(loginMode ? '登录' : '新账户')

const switchLoginMode = () => {
  loginMode.value = !loginMode.value
  title.value = loginMode.value ? '登录' : '新账户'
}

const submit = async () => {
  loginMode.value
    ? login(userForm.email, userForm.password).then((res: boolean) => {
        shouldLogin.value = res
      })
    : register(userForm.email, userForm.username, userForm.password).then(
        (res: boolean) => {
          loginMode.value = res
        }
      )
}
</script>
