<template>
  <div class="row menu">
    <div class="menu__header">Choose the level</div>
    <div class="col-xs-12 col-md-4 col-cent" v-for="option in options">
      <OptionButton :option="option" :setup="setupMatch" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/animation.css'
import useGameModeStore from '@/stores/gameStore'
import arrayHelper from '@/utils/arrayHelper'

// Components Injected
import OptionButton from '@/components/buttons/OptionButton.vue'

const options = [
  { title: 'easy', description: 'Size 2 x 4', size: 4, turn: 12 },
  { title: 'moderate', description: 'Size 3 x 4', size: 6, turn: 25 },
  { title: 'hard', description: 'Size 4 x 4', size: 8, turn: 30 }
]

const gameStore = useGameModeStore()

const setupMatch = (size: number, turn: number, timeLimit: number) => {
  const array: number[] = [...Array(8).keys()]
  const elements: number[] = arrayHelper.sample(array, size)
  let matrix = [...elements, ...elements]
  matrix = arrayHelper.shuffle(matrix)

  gameStore.createMatch(size, matrix, turn, timeLimit)
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles' as s;
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oleo+Script:wght@700&display=swap');
.col-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 1em;
  border: 0.2em solid var(--green-fade-clr);
  animation: fadeIn 0.5s;

  &__header {
    width: 100%;
    text-align: center;
    font-size: 6rem;
    padding: 0.5em 0;

    user-select: none;
    color: var(--primary-opacity-clr);
    animation: flyUp 0.8s ease-in-out;

    font-family: 'Oleo Script', cursive;
  }

  @include s.breakpoint(lg) {
    width: 80%;
  }
}
</style>
