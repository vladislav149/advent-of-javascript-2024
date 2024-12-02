<script setup lang="ts">
import { computed, ref } from 'vue'
import EyeIcon from '@/assets/icons/eye.svg'
import LockIcon from '@/assets/icons/lock.svg'

const isVisible = ref(false)
const inputType = computed(() => (isVisible.value === true ? 'text' : 'password'))

function toggleVisible() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div
    class="challenge1"
    :class="{ 'challenge1--visible': isVisible }"
  >
    <LockIcon
      class="challenge1__lock"
      :class="{ 'challenge1__lock--visible': isVisible }"
    />
    <input
      class="challenge1__input"
      :class="{ 'challenge1__input--visible': isVisible }"
      :type="inputType"
    />
    <button
      class="challenge1__button"
      @click="toggleVisible"
    >
      <EyeIcon
        class="challenge1__eye"
        :class="{ 'challenge1__eye--closed': isVisible }"
      />
    </button>
  </div>
</template>

<style>
.challenge1 {
  display: flex;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    left: -10px;
    top: -10px;
    width: 120%;
    height: 120%;
    background-color: #26c9c3;
    z-index: -2;
  }

  &::after {
    position: absolute;
    content: '';
    right: 1rem;
    top: 50%;
    translate: 0 -50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #1e3a8a;
    z-index: -1;
    border-radius: 50%;
    transition: scale 0.3s;
  }
}

.challenge1--visible {
  &::after {
    scale: 25 3;
  }
}

.challenge1__lock {
  width: 1.5rem;
  margin-right: 1rem;
  color: #1e3a8a;
}

.challenge1__lock--visible {
  color: #26c9c3;
}

.challenge1__input {
  min-width: 14rem;
  border-left: 1px solid white;
  padding: 0 0.5rem;
  outline: 0;
  color: #1e3a8a;
}

.challenge1__input--visible {
  color: white;
}

.challenge1__button {
  width: 2rem;
  padding: 0.5rem 0.5rem 0 0;
}

.challenge1__eye {
  color: #26c9c3;
  & path {
    transition:
      d 0.3s,
      opacity 0.1s ease-in-out;
  }
}

.svg-eye-top {
  d: path('M105 70C105 70 82.6142 39 55 39C27.3858 39 5 70 5 70');
}

.svg-eyelash-left {
  d: path('M9 21L18.6856 34.971');
}

.svg-eyelash-middle {
  d: path('M55 22.5V5.5');
}

.svg-eyelash-right {
  d: path('M91 35L100 21');
}

.challenge1__eye--closed {
  & .svg-eye-top {
    d: path('M105 71C105 71 82.6142 102 55 102C27.3858 102 5 71 5 71');
  }

  & .svg-eyelash-left {
    d: path('M9 121L18.6856 110.971');
  }

  & .svg-eyelash-middle {
    d: path('M55 135.5V117.5');
  }

  & .svg-eyelash-right {
    d: path('M91 114L100 131');
  }

  & .svg-eye-pupil {
    opacity: 0;
  }
}
</style>
