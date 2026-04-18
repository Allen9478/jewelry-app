import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: '/jewelry-app/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ✅ 每個 <style lang="scss"> 都能直接用 $color-gold，不用 import
        additionalData: `@use "@/assets/styles/_variables.scss" as *;`,
      },
    },
  },
})
