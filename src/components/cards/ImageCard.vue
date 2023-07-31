<template>
  <div class="col-md-3 col-cent">
    <div class="card" :class="{ disable: isDisable }">
      <div class="card__inner" :class="{ 'is-flipped': isBack }" @click="onClickFlipCard">
        <div class="card__face card__face--front">
          <!-- <img v-bind:src="IMAGES[1]" alt="jerry" /> -->
          <div>{{ card.imgId }}</div>
        </div>
        <div class="card__face card__face--back">
          <div>Back</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IMAGES from '@/assets/images/'

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
}

/** Keep the card visible by disabling click event*/
const onVisible = (): void => {
  isDisable.value = true
}

defineExpose({ onFlipBack, onVisible })
</script>

<style lang="scss" scoped>
.col-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: inline-block;
  margin: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;
  background: var(--medium-black-clr);
  border: none;

  &.disable {
    cursor: default;
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
    }

    &--front {
      background-color: var(--light-grey-clr);
      box-shadow: none;
    }
  }
}
</style>
