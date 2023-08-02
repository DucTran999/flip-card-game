<template>
  <div class="col-xs-3 col-cent">
    <div class="card" :class="{ disable: isDisable }">
      <div class="card__inner" :class="{ 'is-flipped': isBack }" @click="onClickFlipCard">
        <div class="card__face card__face--front">
          <img class="card__face--img" :src="`${IMAGES[card.imgId]}`" alt="img-num" />
        </div>
        <div class="card__face card__face--back">
          <div class="card__face--title">Halloween</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IMAGES from '@/assets/images'

interface Card {
  cardId: number
  imgId: number
}

const props = defineProps<{ card: Card }>()
const emit = defineEmits(['childrenSent'])
const isBack = ref(true)
const isDisable = ref(false)

/** Handle flip the card on click */
const onClickFlipCard = (): void => {
  // Not do anything
  if (isDisable.value) return

  // Flip the card
  isBack.value = !isBack.value
  let { cardId, imgId } = props.card
  emit('childrenSent', cardId, imgId)
}

/** Auto to flip back the card */
const onFlipBack = (): void => {
  isBack.value = true
  isDisable.value = false
}

/** Keep the card visible by disabling click event*/
const onVisible = (): void => {
  isDisable.value = true
  console.log('run')
}

defineExpose({ onFlipBack, onVisible })
</script>

<style lang="scss" scoped>
.col-cent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.card {
  display: inline-block;
  margin: 1rem;
  margin-bottom: 1rem;
  width: 6em;
  height: 8em;
  background: transparent;
  border: none;

  &.disable {
    pointer-events: none;
    user-select: none;
  }

  &__inner {
    position: relative;

    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;

    &.is-flipped {
      transform: rotateY(-180deg);
    }
  }

  &__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    padding: 1rem;
    box-shadow: 0 3px 10px var(--primary-clr);

    &--back {
      background-color: var(--darkest-black-clr);
      transform: rotateY(-180deg);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &--title {
      color: var(--gold-clr);
      user-select: none;
    }

    &--img {
      position: relative;
      width: 100%;
      height: 100%;
    }

    &--front {
      background-color: var(--light-grey-clr);
      box-shadow: none;
      padding: 0;
    }
  }
}
</style>
