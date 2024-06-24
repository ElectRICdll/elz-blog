<template>
  <div class="h-screen p-10 flex flex-col items-center gap-10">
    <el-button class="self-end" @click="$router.push('/posts/0/edit')"
      >新建</el-button
    >
    <div class="flex flex-wrap gap-3">
      <PostCard
        v-for="(post, index) in posts"
        :post="post"
        @click="$router.push(`/posts/${post.id}`)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { default as PostCard } from './card-post.vue'
import { Post } from './post'
import { Api } from '@blog/utils'

onMounted(() => {
  fetchPosts()
})

const posts = ref<Array<Post>>([])

const fetchPosts = async () => {
  try {
    const response = await Api.get('/posts')
    posts.value = response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
</script>
