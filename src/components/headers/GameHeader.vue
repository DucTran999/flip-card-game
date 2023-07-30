<template>
  <div class="container">
    <div class="row">
      <div class="col col-cent header-util">Hi, {{ username }}</div>
      <div class="col col-cent header-util">Time</div>
      <div class="col col-cent header-util">Turn</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/userStore'

const userStore = useUserStore()
const { username } = userStore.$state
</script>

<style scoped>
.col-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-util {
  font-weight: 500;
  font-size: 2.5rem;
  color: var(--primary-opacity-clr);
}
</style>
