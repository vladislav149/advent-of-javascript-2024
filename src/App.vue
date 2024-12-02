<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppAside from '@/components/AppAside.vue'
</script>

<template>
  <AppHeader />
  <div class="wrapper container">
    <AppAside />
    <div class="wrapper__right">
      <RouterView />
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
}

.wrapper__right {
  padding: 2rem;
}
</style>
