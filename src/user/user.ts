import { ElMessage } from 'element-plus'
import { Api } from '@blog/utils'
import { Ref } from 'vue'

export interface User {
  id: number
  username: string
  email: string
  avatar: string
}

export interface Admin {
  id: number
  user: User
}

export type Author = Admin

export function getCurrentUser(): User | null {
  const userData = localStorage.getItem('currentUser')
  if (userData) {
    return JSON.parse(userData)
  }
  return null
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await Api.post(`/users/login/`, {
      email: email,
      password: password,
    })
    localStorage.setItem('currentUser', JSON.stringify(response.data.user))
    localStorage.setItem('jwtToken', response.data.token)
    ElMessage.success('登录成功')
    return false
  } catch (error) {
    ElMessage.error('登录出错')
    return true
  }
}

export async function register(
  email: string,
  username: string,
  password: string
): Promise<boolean> {
  try {
    await Api.put(`/users/reg`, {
      email: email,
      username: username,
      password: password,
    })
    ElMessage.success('注册成功')
    return true
  } catch (error) {
    ElMessage.error('注册出错')
    return false
  }
}

export async function userInfo(id: number): Promise<User> {
  try {
    const response = await Api.get(`/user/${id}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export function logout(): void {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('currentUser')
  ElMessage.success('已登出')
}
