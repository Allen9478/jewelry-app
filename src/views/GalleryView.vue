<script setup>
import { ref, onMounted } from 'vue'
import { useJewelryStore } from '@/stores/jewelryStore'
import JewelryCard from '@/components/jewelry/JewelryCard.vue'

const jewelryStore = useJewelryStore()
const query = ref('jewelry')

async function handleSearch() {
  await jewelryStore.fetchPhotos(query.value, 1)
}

// 進入頁面自動載入
onMounted(() => {
  handleSearch()
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="font-heading text-4xl text-dark-base mb-2 tracking-wider">作品集</h1>
    <p class="text-gray-400 mb-10 text-sm tracking-widest uppercase">Gallery</p>

    <!-- 搜尋列 -->
    <div class="flex gap-3 mb-10">
      <input
        v-model="query"
        type="text"
        placeholder="搜尋主題，例如：gold ring、diamond..."
        class="flex-1 px-4 py-2 border border-gold/30 bg-transparent text-sm focus:outline-none focus:border-gold transition-colors"
        @keydown.enter="handleSearch"
      />
      <button
        @click="handleSearch"
        class="px-6 py-2 bg-gold text-cream text-sm tracking-wider hover:bg-gold-dark transition-colors"
      >
        搜尋
      </button>
    </div>

    <!-- 載入中 -->
    <div v-if="jewelryStore.isLoading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="n in 12" :key="n" class="aspect-square bg-gray-200 animate-pulse" />
    </div>

    <!-- 錯誤訊息 -->
    <div v-else-if="jewelryStore.error" class="text-center py-20">
      <p class="text-red-400 text-sm">{{ jewelryStore.error }}</p>
      <button @click="handleSearch" class="mt-4 text-gold text-sm underline">重試</button>
    </div>

    <!-- 圖片列表 -->
    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <JewelryCard v-for="photo in jewelryStore.photos" :key="photo.id" :photo="photo" />
    </div>
  </main>
</template>
