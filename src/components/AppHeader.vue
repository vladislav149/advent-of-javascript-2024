<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__inner container">
      <RouterLink :to="{ name: 'home' }">Advent of JavaScript 2024</RouterLink>
      <a
        href="https://store.selfteach.me/view/courses/advent-of-javascript-2024"
        target="_blank"
      >
        Задачи
      </a>
    </div>
  </header>
</template>

<style>
.header {
  padding: 2rem 0;
  background-color: teal;
  font-size: 1.5rem;
  line-height: 2rem;
  color: whitesmoke;
}

.header__inner {
  display: flex;
  justify-content: space-between;
}
</style>
