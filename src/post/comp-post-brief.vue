<template>
  <div
    class="blog-border bg-bg w-49% min-h-60 flex flex-col justify-between rounded-lg shadow-lg p-4 transition-transform duration-100 ease-in-out hover:transform hover:shadow-xl"
  >
    <div class="flex justify-between items-center">
      <h2 class="m-0 text-xl">{{ post.title }}</h2>
      <p class="text-sm">{{ post.created_at }}</p>
    </div>
    <div class="mt-2 mb-4">
      <p>{{ post.preview }}...</p>
    </div>
    <BlogUserCard :user="post.author.user" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { BlogUserCard } from '@blog/user'
import { Post } from './post'

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
})
</script>
