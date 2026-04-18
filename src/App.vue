<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style lang="scss">
// 如果這裡能用 $color-gold 不報錯，SCSS 注入成功
.scss-test {
  color: $color-gold;
  font-family: $font-heading;
}
</style>
