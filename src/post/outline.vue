<template>
  <el-aside>
    <el-tree
      :data="outlineData"
      :props="{ children: 'children', label: 'title' }"
      :render-after-expand="false"
      :default-expand-all="true"
    ></el-tree>
  </el-aside>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Post } from './post'

const props = defineProps<{
  markdown: string
}>()

type Index = string

const outlineData = ref<Post.Outline>(Post.rendHeadings(props.markdown))
const current = ref<Index>('')

watch(
  () => props.markdown,
  (newer) => {
    outlineData.value = Post.rendHeadings(newer)
    current.value = ''
  }
)

const locate = (title: string) => {
  const heading = document.getElementById(title)
  if (heading) {
    heading.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
