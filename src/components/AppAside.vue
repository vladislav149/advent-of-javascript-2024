<script setup lang="ts"></script>

<template>
  <nav class="aside-nav">
    <ul class="aside-nav__list">
      <li>
        <RouterLink :to="{ name: 'challenge 1' }">Challenge 1</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.aside-nav {
  padding: 1rem;
  min-width: 10rem;
  border-right: 1px solid black;
  min-height: calc(100vh - 6rem);
}

.aside-nav__list {
  font-size: 1.5rem;

  & a {
    transition: color 0.3s;
    &:hover {
      color: teal;
    }
  }

  & .router-link-active {
    color: teal;
  }
}
</style>
