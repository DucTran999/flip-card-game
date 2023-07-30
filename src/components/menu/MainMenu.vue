<template>
  <div class="row menu">
    <div class="menu__header">Choose the level</div>
    <div class="col col-cent" v-for="option in options">
      <OptionButton v-bind:option="option" />
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/animation.css'
import OptionButton from '@/components/buttons/OptionButton.vue'

const options = [
  { title: 'easy', description: 'Size 2 x 2', size: 2 },
  { title: 'moderate', description: 'Size 3 x 3', size: 3 },
  { title: 'hard', description: 'Size 4 x 4', size: 4 }
]
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oleo+Script:wght@700&display=swap');
.col-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  position: relative;
  width: 80%;
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
}
</style>
