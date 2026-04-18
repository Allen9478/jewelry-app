import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//Pinia 掛載之後才能呼叫 store
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
authStore.init()

app.mount('#app')
