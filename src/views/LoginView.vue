<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const name = ref('')
const pws = ref('')
const router = useRouter()
const errorMessage = ref('')
async function handleLogin() {
  try {
    await authStore.login(name.value, pws.value)
    router.push('/')
  } catch (err) {
    errorMessage.value = '帳號或密碼錯誤，請重試'
  }
}

async function handleRegister() {
  try {
    await authStore.register(name.value, pws.value)
    router.push('/')
  } catch (err) {
    errorMessage.value = '格式錯誤，請重試'
  }
}
</script>

<template>
  <main class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-sm">
      <form
        class="flex flex-col p-4 space-y-3 rounded-md border-solid border-2 border-sky-500"
        @submit.prevent="handleLogin"
      >
        <label for="userEmail">帳號</label>
        <input
          id="userEmail"
          class="rounded-md border-solid border-2 px-3 py-1"
          type="email"
          placeholder="Email"
          v-model.trim="name"
        />
        <label for="userPassword">密碼</label>
        <input
          id="userPassword"
          class="rounded-md border-solid border-2 px-3 py-1"
          type="password"
          placeholder="Password"
          v-model.trim="pws"
        />
        <div class="button-group flex justify-around">
          <button
            class="px-4 py-2 font-semibold text-sm bg-gold text-cream rounded-full shadow-sm"
            type="submit"
          >
            Login
          </button>
          <button
            class="px-4 py-2 font-semibold text-sm bg-gold text-cream rounded-full shadow-sm"
            type="button"
            @click="handleRegister"
          >
            Register
          </button>
        </div>

        <p v-if="errorMessage" class="text-red-400 text-sm mt-2">{{ errorMessage }}</p>
      </form>
    </div>
  </main>
</template>

<style></style>
