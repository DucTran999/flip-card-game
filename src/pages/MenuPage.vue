<template>
  <HalloweenTheme #page__inner>
    <div class="container">
      <div class="row row-cent greeting">Hi, {{ username }}</div>
      <MainMenu />
    </div>
  </HalloweenTheme>
</template>

<script setup lang="ts">
import router from '@/router'
import useUserStore from '@/stores/userStore'
import stringFormatter from '@/utils/stringFormatter'

// Component Injected
import MainMenu from '@/components/menu/MainMenu.vue'
import HalloweenTheme from '@/layout/HalloweenTheme.vue'

const userStore = useUserStore()
const username = stringFormatter.formatToCapitalize(userStore.$state.username)
if (!username) {
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.row-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.greeting {
  font-size: 5rem;
  color: var(--primary-opacity-clr);
  margin-bottom: 1em;
}
</style>
