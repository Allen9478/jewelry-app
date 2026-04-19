<script setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
}
</script>

<template>
  <header class="w-full sticky top-0 z-50 bg-cream border-b border-gold/20">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- 品牌名稱 -->
      <RouterLink
        to="/"
        class="font-heading text-2xl text-gold tracking-widest hover:text-gold-dark transition-colors"
      >
        AURUM
      </RouterLink>

      <!-- 導覽連結 -->
      <ul class="flex items-center gap-8">
        <li>
          <RouterLink
            to="/"
            class="text-sm tracking-wider text-dark-base hover:text-gold transition-colors"
            active-class="text-gold"
          >
            首頁
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/gallery"
            class="text-sm tracking-wider text-dark-base hover:text-gold transition-colors"
            active-class="text-gold"
          >
            作品集
          </RouterLink>
        </li>
        <li>
          <!-- 登入狀態：未登入顯示「登入」，已登入顯示頭像或名字 -->
          <template v-if="!authStore.isLoggedIn">
            <RouterLink
              to="/auth"
              class="text-sm tracking-wider px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-cream transition-colors"
            >
              登入
            </RouterLink>
          </template>
          <template v-else>
            <button
              @click="handleLogout"
              class="text-sm tracking-wider text-dark-base hover:text-gold transition-colors"
            >
              登出（{{ authStore.userName }}）
            </button>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style></style>
