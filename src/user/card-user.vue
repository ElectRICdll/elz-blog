<template>
  <div class="blog-border-t flex items-center gap-4 p-2">
    <el-avatar :src="user.avatar" alt="Avatar" />
    <div class="flex flex-row items-center">
      <span class="font-bold">{{ user.username }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { User } from './user'

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
})
</script>
