<script setup>
import { ref } from 'vue'

defineProps({
  photo: {
    type: Object,
    required: true,
  },
})

const imageLoaded = ref(false)
</script>

<template>
  <RouterLink :to="`/gallery/${photo.id}`" class="group block">
    <div class="overflow-hidden bg-gray-100 aspect-square">
      <!-- 載入中的骨架 -->
      <div v-if="!imageLoaded" class="w-full h-full bg-gray-200 animate-pulse" />

      <img
        :src="photo.urls.regular"
        :alt="photo.alt_description || '珠寶作品'"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        :class="{ 'opacity-0': !imageLoaded }"
        @load="imageLoaded = true"
      />
    </div>

    <div class="mt-3 px-1">
      <p class="text-sm font-body text-dark-base truncate">
        {{ photo.alt_description || '珠寶作品' }}
      </p>
      <p class="text-xs text-gray-400 mt-1">by {{ photo.user.name }}</p>
    </div>
  </RouterLink>
</template>
