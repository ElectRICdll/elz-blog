<template>
  <div class="relative">
    <div
      :style="{ width: width }"
      class="blog-border blog-rd flex flex-row items-center px-2 gap-2 h-7.5 hover:border-color-primary"
      @click="activateDropdown"
    >
      <i class="fa-solid fa-magnifying-glass top-1 left-2.5"></i>
      <input
        v-model="searchTerm"
        class="border-none w-100% focus-outline-none"
        placeholder="Search..."
      />
    </div>
    <ul v-if="activating" class="absolute top-8 left-0 w-full bg-white shadow">
      <li v-for="result in searchResults" :key="result.id">
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Api } from '@blog/utils'

const props = defineProps({
  width: String,
})

const activating = ref(false)
const searchTerm = ref('')
const searchResults = ref([])

const activateDropdown = () => {
  activating.value = true
}

watch(searchTerm, async (newValue, oldValue) => {
  setTimeout(() => {
    activating.value = true
  }, 500)

  if (newValue.trim() === '') {
    searchResults.value = []
    return
  }

  try {
    const response = await Api.get('/posts', {
      params: {
        search: newValue.trim(),
      },
    })
    searchResults.value = response.data
  } catch (error) {
    console.error('Error fetching search results:', error)
  }
})
</script>
