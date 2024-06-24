<template>
  <div
    class="welcome-container flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800"
  >
    <h1 class="text-4xl font-bold mb-4">博客</h1>
    <p class="text-xl mb-6">本博客十分欢迎您的到来！</p>
    <button
      @click="$router.push('/posts')"
      class="blog-border px-4 py-2 bg-primary text-white rounded hover:opacity-70 transition"
    >
      点击进入
    </button>
  </div>
</template>
