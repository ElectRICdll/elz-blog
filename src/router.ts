import { createRouter, createWebHistory } from 'vue-router'
import { AboutPage, HomePage } from '@blog/home'
import { PostPage, PostDetailPage, PostEditorPage } from '@blog/post'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/posts', component: PostPage },
    { path: '/posts/:id', component: PostDetailPage },
    { path: '/posts/:id/edit', component: PostEditorPage },
    { path: '/about', component: AboutPage },
  ],
})

export default router
