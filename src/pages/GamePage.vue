<template>
  <game-header />
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
  <modal #modal__body v-if="isShowModal">
    <div class="dialog">
      <div class="dialog__message">
        {{ gameStore.$state.match.result ? 'You win' : 'You lost' }}
      </div>
      <div class="dialog__btn--close" @click="onCloseModal">Play again</div>
    </div>
  </modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import useGameModeStore from '@/stores/gameStore'

// Components Injected
import Modal from '@/components/modal/Modal.vue'
import ImageCard from '@/components/cards/ImageCard.vue'
import GameHeader from '@/components/headers/GameHeader.vue'

interface Card {
  cardId: number
  face: number
}

const gameStore = useGameModeStore()
const isShowModal = ref<boolean>(false)
let { matrix } = gameStore.$state.match
if (!matrix.length) router.replace('/')

let cardPairs: Array<Card> = []
let itemRefs = ref<Array<typeof ImageCard>>([])
const cardsOpen: number[] = []

const onShowModal = () => {
  isShowModal.value = true
}

const onCloseModal = () => {
  isShowModal.value = false
  router.replace('/menu')
}

const trackResult = () => {
  // Decrease turn
  gameStore.decreaseTurn()

  // If all card pairs match
  if (cardsOpen.length === matrix.length) {
    gameStore.updateResult(true)
    onShowModal()
    return
  }

  // The turn run out end the match
  if (!gameStore.$state.match.turn) {
    onShowModal()
    return
  }
}

const flipCardProcessor = (cardId: number, face: number): void => {
  cardPairs.push({ cardId: cardId, face: face })

  //Compare face
  if (cardPairs.length === 2) {
    const firstCard = cardPairs[0]
    const secondCard = cardPairs[1]

    // If different flip down these cards
    if (firstCard.face !== secondCard.face) {
      setTimeout(() => {
        itemRefs.value[firstCard.cardId].onFlipBack()
        itemRefs.value[secondCard.cardId].onFlipBack()
      }, 800)
    } else {
      itemRefs.value[firstCard.cardId].onVisible()
      itemRefs.value[secondCard.cardId].onVisible()
      cardsOpen.push(firstCard.cardId)
      cardsOpen.push(secondCard.cardId)
    }
    // Reset user selection
    cardPairs = []
  }

  // Tracking match result each time user flip a card
  trackResult()
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oleo+Script:wght@700&display=swap');

.matrix-row {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
}

.dialog {
  display: flex;
  flex-direction: column;

  &__message {
    font-size: 5rem;
    text-align: center;
    user-select: none;
    color: var(--primary-clr);

    font-family: 'Oleo Script', cursive;
  }

  &__btn--close {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5em 1em;
    border: 1px solid var(--primary-clr);

    cursor: pointer;
    &:hover {
      background-color: aqua;
    }
  }
}
</style>
