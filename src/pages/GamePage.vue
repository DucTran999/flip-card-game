<template>
  <GameHeader />
  <div>Game screen {{ matrixSize }}</div>
  <ImageCard />
</template>

<script setup lang="ts">
import useGameModeStore from '@/stores/gameStore'

// Component Injected
import GameHeader from '@/components/headers/GameHeader.vue'
import ImageCard from '@/components/cards/ImageCard.vue'

const gameStore = useGameModeStore()
const { matrixSize } = gameStore.$state
</script>

<style scoped></style>
