<template>
  <div class="theme">
    <slot name="page__inner"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/styles' as s;

.theme {
  background-image: url('@/assets/images/background/halloween_theme.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
