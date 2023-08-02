<script setup lang="ts">
defineProps({
  message: String
})
</script>

<template>
  <button class="submit" :class="{ active: message !== '' }">Play now</button>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oleo+Script:wght@700&display=swap');

.submit {
  width: 80%;
  border: none;
  outline: none;

  padding: 0.2em 1em;
  margin: 1em;

  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-opacity-clr);
  background: var(--dark-black-clr);
  border-radius: 20px;
  border: 0.1em solid var(--primary-opacity-clr);

  font-family: 'Oleo Script', cursive;
  &.active {
    animation: zoomInZoomOut 1s infinite;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
