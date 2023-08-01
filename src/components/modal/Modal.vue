<template>
  <div class="overlay">
    <div class="modal">
      <slot name="modal__body"> </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--black-half-opacity-clr);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  display: block;
  background: var(--dark-black-clr);
  opacity: 1;
  box-shadow: 2px 2px 20px 1px;
  color: var(--primary-clr);
  max-width: 25em;
  height: fit-content;
}
</style>
