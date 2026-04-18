import { ref } from 'vue'

const BASE_URL = 'https://api.unsplash.com'
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export function useUnsplash() {
  const photos = ref([])
  const photo = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  // 共用的 fetch 函式
  async function fetchFromUnsplash(endpoint, params = {}) {
    isLoading.value = true
    error.value = null

    try {
      const url = new URL(`${BASE_URL}${endpoint}`)

      // 把 params 物件轉成 query string
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })

      // ❌ 錯誤：不檢查 HTTP 狀態就直接 .json()
      // const data = await res.json()

      // ✅ 正確：先確認 response 是成功的
      if (!res.ok) {
        throw new Error(`API 錯誤：${res.status} ${res.statusText}`)
      }

      return await res.json()
    } catch (err) {
      error.value = err.message
      return null
    } finally {
      isLoading.value = false
    }
  }

  // 搜尋珠寶圖片（給 GalleryView 用）
  async function searchJewelry(query = 'jewelry', page = 1, perPage = 12) {
    const data = await fetchFromUnsplash('/search/photos', {
      query,
      page,
      per_page: perPage,
      orientation: 'squarish',
    })

    if (data) {
      photos.value = data.results
    }
  }

  // 抓單一圖片（給 DetailView 用）
  async function getPhoto(id) {
    const data = await fetchFromUnsplash(`/photos/${id}`)
    if (data) {
      photo.value = data
    }
  }

  return {
    photos,
    photo,
    isLoading,
    error,
    searchJewelry,
    getPhoto,
  }
}
