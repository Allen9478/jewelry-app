// src/stores/jewelryStore.js ✅
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUnsplash } from '@/composables/useUnsplash'

export const useJewelryStore = defineStore('jewelry', () => {
  const photos = ref([])
  const currentPhoto = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  const currentPage = ref(1)
  const searchQuery = ref('jewelry')

  async function fetchPhotos(query = 'jewelry', page = 1) {
    const { searchJewelry, photos: result, isLoading: loading, error: err } = useUnsplash()

    isLoading.value = true
    await searchJewelry(query, page)

    photos.value = result.value
    isLoading.value = loading.value
    error.value = err.value
    currentPage.value = page
    searchQuery.value = query
  }

  async function fetchPhotoById(id) {
    const { getPhoto, photo: result, isLoading: loading, error: err } = useUnsplash()

    isLoading.value = true
    await getPhoto(id)

    currentPhoto.value = result.value
    isLoading.value = loading.value
    error.value = err.value
  }

  return {
    photos,
    currentPhoto,
    isLoading,
    error,
    currentPage,
    searchQuery,
    fetchPhotos,
    fetchPhotoById,
  }
})
