<template>
  <game-header />
  <div>Game screen {{ JSON.stringify(matrix) }}</div>
  <div class="container">
    <div class="row matrix-row">
      <image-card
        v-for="(imgId, idx) in matrix"
        ref="itemRefs"
        :key="idx"
        :card="{ cardId: idx, imgId: imgId }"
        @childrenSent="flipCardProcessor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import useGameModeStore from '@/stores/gameStore'

// Components Injected
import ImageCard from '@/components/cards/ImageCard.vue'
import GameHeader from '@/components/headers/GameHeader.vue'

interface Card {
  cardId: number
  face: number
}

const gameStore = useGameModeStore()
let { matrix } = gameStore.$state
if (!matrix.length) router.replace('/')

let turn = 12
let cardPairs: Array<Card> = []
let itemRefs = ref<Array<typeof ImageCard>>([])

const flipCardProcessor = (cardId: number, face: number): void => {
  cardPairs.push({ cardId: cardId, face: face })

  //Compare face
  if (cardPairs.length === 2) {
    const firstCard = cardPairs[0]
    const secondCard = cardPairs[1]

    // If different flip down these cards
    if (firstCard.face !== secondCard.face) {
      console.log('diff')
      setTimeout(() => {
        itemRefs.value[firstCard.cardId].onFlipBack()
        itemRefs.value[secondCard.cardId].onFlipBack()
      }, 800)
    } else {
      console.log('same')
      itemRefs.value[firstCard.cardId].onVisible()
      itemRefs.value[secondCard.cardId].onVisible()
    }
    // Reset user selection
    cardPairs = []
  }

  turn--
  if (!turn) router.replace('/')
}
</script>

<style lang="scss" scoped>
.matrix-row {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
}
</style>
