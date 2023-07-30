<template>
  <div class="card">
    <div class="card__inner" :class="{ 'is-flipped': isBack }" @click="onClickFlipCard">
      <div class="card__face card__face--front">
        <!-- <img v-bind:src="IMAGES[1]" alt="jerry" /> -->
        <div>Front</div>
      </div>
      <div class="card__face card__face--back">
        <div>Back</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IMAGES from '@/assets/images/'

const isBack = ref(false)

const onClickFlipCard = () => {
  isBack.value = !isBack.value
  console.log(isBack.value)
}
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  margin: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 120px;

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
  }
}
</style>
