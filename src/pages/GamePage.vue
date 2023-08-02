<template>
  <HalloweenTheme #page__inner>
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
        <img
          v-if="!gameStore.$state.match.result"
          class="dialog__img"
          :src="IMAGES['lost']"
          alt="game-result"
        />
        <img v-else class="dialog__img" :src="IMAGES['win']" alt="game-result" />
        <div class="dialog__message" :class="{ 'is-win': gameStore.$state.match.result }">
          {{ gameStore.$state.match.result ? 'You win' : 'You lost' }}
        </div>
        <div class="dialog__btn--close" @click="onCloseModal">Play again</div>
      </div>
    </modal>
  </HalloweenTheme>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import IMAGES from '@/assets/images'
import useGameModeStore from '@/stores/gameStore'

// Components Injected
import HalloweenTheme from '@/layout/HalloweenTheme.vue'
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
  itemRefs.value[cardId].onVisible()

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
@use '@/assets/styles' as s;
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
  padding: 1.5em 0;

  &__img {
    display: none;
    position: absolute;
    top: 20%;
    left: 4%;
    width: 6em;
    animation: upAndDown 1s infinite;

    @include s.breakpoint(md) {
      display: block;
    }
  }

  &__message {
    font-size: 5rem;
    margin-bottom: 0.2em;
    text-align: center;
    user-select: none;
    color: var(--primary-opacity-clr);

    &.is-win {
      color: var(--gold-clr);
    }
  }

  &__btn--close {
    width: fit-content;
    margin: 0 auto;
    padding: 0.3em 1em;
    color: var(--darkest-black-clr);
    background-color: var(--light-grey-clr);
    cursor: pointer;

    font-size: 2rem;
    border: 1px solid transparent;

    &:hover {
      color: var(--primary-opacity-clr);
      border: 1px solid var(--primary-opacity-clr);
      background-color: var(--darkest-black-clr);
      transition: 0.5s;
    }
  }
}
</style>
