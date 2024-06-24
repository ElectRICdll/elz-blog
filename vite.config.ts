import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import UnoCSS from '@unocss/vite'

export default defineConfig({
  plugins: [Vue(), UnoCSS({})],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./theme.config.scss" as theme;`,
      },
    },
  },
  server: {
    proxy: {
      '/apis': {
        target: 'http://127.0.0.1:8000',
      },
    },
  },
  resolve: {
    alias: {
      '@blog': resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js', '.vue'],
  },
  build: {
    outDir: 'lib',
  },
})
