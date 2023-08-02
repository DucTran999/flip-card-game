<template>
  <div class="logo">Flip Card</div>
</template>

<style scoped lang="scss">
@use '@/assets/styles' as s;

.logo {
  font-size: 4em;
  font-weight: normal;
  text-align: center;
  color: var(--primary-opacity-clr);

  user-select: none;
  @include s.breakpoint(md) {
    font-size: 6em;
  }

  @include s.breakpoint(lg) {
    font-size: 10em;
  }
}
</style>
