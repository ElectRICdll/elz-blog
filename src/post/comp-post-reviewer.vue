<template>
  <div>
    <article class="markdown line-height-normal" v-html="markdown"></article>
  </div>
</template>

<script lang="ts">
import { Post } from './post'

export default {
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  computed: {
    markdown() {
      return Post.rendContent(this.markdown)
    },
  },
}
</script>

<style lang="scss" scoped>
// global styles
.markdown {
  padding: 1em;
  color: map-get(theme.$current-theme, 'text');

  * {
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  .hljs {
    background-color: map-get(theme.$current-theme, 'bg-2');
    font-size: 14px;
    color: map-get(theme.$current-theme, 'text');
    padding: 1em;
    border-radius: 8px;
    overflow-x: auto;
  }
}
</style>
