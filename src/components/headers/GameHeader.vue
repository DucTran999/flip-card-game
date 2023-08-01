<template>
  <div class="container">
    <div class="row">
      <div class="col col-cent header-util">Hi, {{ username }}</div>
      <div class="col col-cent header-util">Turn: {{ gameStore.$state.match.turn }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/userStore'
import useGameModeStore from '@/stores/gameStore'

const userStore = useUserStore()
const gameStore = useGameModeStore()
const { username } = userStore.$state
</script>

<style scoped lang="scss">
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
