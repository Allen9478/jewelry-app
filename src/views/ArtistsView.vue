<!-- 用途：建立藝術家列表頁，顯示可點擊的卡片清單 -->
<script setup>
import { artists } from '@/data/artists'
</script>

<template>
  <main class="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <!-- 頁面標題區 -->
    <section class="mx-auto mb-10 max-w-7xl">
      <p class="mb-3 text-sm uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
        Featured Artists
      </p>
      <h1
        class="mb-4 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl"
      >
        Discover Contemporary Jewelry Artists
      </h1>
      <p class="max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-300 sm:text-base">
        Explore selected artists and their signature visual language through a curated
        collection-inspired gallery.
      </p>
    </section>

    <!-- 藝術家卡片列表 -->
    <section class="mx-auto max-w-7xl">
      <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <li v-for="artist in artists" :key="artist.id" class="h-full">
          <article
            class="h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900"
          >
            <router-link
              :to="{ name: 'artist-detail', params: { slug: artist.slug } }"
              class="flex h-full flex-col"
            >
              <img
                :src="artist.coverImage"
                :alt="`${artist.name} cover artwork`"
                class="aspect-[4/5] w-full object-cover"
              />

              <div class="flex flex-1 flex-col p-5">
                <p
                  class="mb-2 text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400"
                >
                  {{ artist.country }}
                </p>

                <h2 class="mb-3 text-xl font-semibold text-stone-900 dark:text-stone-100">
                  {{ artist.name }}
                </h2>

                <p class="mb-4 text-sm leading-6 tex    t-stone-600 dark:text-stone-300">
                  {{ artist.bio }}
                </p>

                <div class="mt-auto flex flex-wrap gap-2">
                  <span
                    v-for="tag in artist.style"
                    :key="tag"
                    class="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-stone-800 dark:text-amber-300"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </router-link>
          </article>
        </li>
      </ul>
    </section>
  </main>
</template>
