<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import useUserStore from '@/stores/userStore'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

const message = ref('')
const userStore = useUserStore()

const handleSubmit = () => {
  userStore.update(String(message.value))
  router.push('/menu')
}
</script>

<template>
  <form class="form-signin" v-on:submit.prevent="handleSubmit">
    <div class="input-box">
      <input
        id="name"
        class="form-input"
        v-model="message"
        maxlength="30"
        autocomplete="off"
        required
      />
      <label for="name" class="form-label">Your name</label>
      <div class="active-bar"></div>
    </div>
    <SubmitButton :message="message" />
  </form>
</template>

<style lang="scss" scoped>
.form-signin {
  position: relative;
  width: 40%;

  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-box {
  width: 100%;
  position: relative;
}

.form-label {
  position: absolute;
  z-index: 1;
  top: 2em;
  left: 0;
}

.form-input {
  position: relative;
  width: 100%;

  border: none;
  border-bottom: 0.1em solid var(--light-grey-clr);
  outline: none;
  font-size: 2rem;
  background: transparent;
  color: var(--primary-opacity-clr);

  margin: 1em 0;
  padding: 0.3em 0;

  &:focus + .form-label,
  &:valid + .form-label {
    top: 0;
    font-size: 1.4rem;
    transition: 0.5s;
  }

  &:invalid + .form-label {
    transition: 0.5s;
  }

  &:focus ~ .active-bar {
    width: 100%;
    transition: 0.5s;
  }
}

.active-bar {
  position: absolute;
  width: 0%;
  left: 0;
  transition: 0.5s;
  bottom: 1.2em;
  border-bottom: 0.2em solid var(--primary-opacity-clr);
}
</style>
