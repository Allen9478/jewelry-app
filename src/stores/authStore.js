import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '@/plugins/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  // 狀態
  const user = ref(null)

  // 計算屬性
  const isLoggedIn = computed(() => user.value !== null)
  const userName = computed(() => user.value?.displayName || user.value?.email || '')

  // 方法

  function init() {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        setUser(null)
      }
    })
  }

  function setUser(newUser) {
    user.value = newUser
  }

  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      throw err
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      throw err
    }
  }
  async function logout() {
    await signOut(auth)
    user.value = null
  }

  return {
    user,
    isLoggedIn,
    userName,
    setUser,
    register,
    login,
    logout,
    init,
  }
})
