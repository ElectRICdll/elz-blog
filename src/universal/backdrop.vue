<template>
  <div
    v-if="activate"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    @click.self="close"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  activate: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(['update:visible'])

const close = () => {
  emits('update:visible', false)
}
</script>
