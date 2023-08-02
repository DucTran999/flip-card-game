<template>
  <HalloweenTheme #page__inner>
    <div class="message">404! Page not found</div>
    <span class="btn-back" @click="onBackHome">Go home</span>
  </HalloweenTheme>
</template>

<script setup lang="ts">
import router from '@/router'
import HalloweenTheme from '@/layout/HalloweenTheme.vue'

const onBackHome = () => {
  router.replace('/')
}
</script>

<style scoped lang="scss">
.message {
  font-size: 4rem;
  user-select: none;
}

.btn-back {
  margin-top: 1em;
  font-size: 3rem;
  border: 0.1em solid var(--primary-clr);
  padding: 0.5em 1em;
  border-radius: 20px;
  background-color: var(--dark-black-clr);

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
