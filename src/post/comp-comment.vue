<template>
  <div class="blog-border-l p-4 blog-rd shadow-md flex flex-col gap-2 w-100">
    <div class="flex items-center gap-2">
      <el-avatar :src="comment.author.avatar" size="medium"></el-avatar>
      <div>
        <h4 class="font-bold">{{ comment.author.username }}</h4>
        <span class="text-gray-500 text-sm">{{ comment.created_at }}</span>
      </div>
    </div>
    <p class="mt-2">{{ comment.content }}</p>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Comment } from './comment'

const props = defineProps({
  comment: {
    type: Object as PropType<Comment>,
    required: true,
  },
})
</script>
