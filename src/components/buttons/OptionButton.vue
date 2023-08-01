<template>
  <div class="btn-wrap" @click="onModeSelected">
    <span class="btn-title">{{ title }}</span>
    <span class="btn-description">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import '@/assets/styles/animation.css'

import router from '@/router'
import stringFormatter from '@/utils/stringFormatter'

interface Option {
  title: string
  description: string
  size: number
  turn: number
}
const props = defineProps<{ option: Option; setup: Function }>()

let { title, description, size, turn } = props.option
title = stringFormatter.formatToCapitalize(title)
description = stringFormatter.formatToCapitalize(description)

const onModeSelected = () => {
  props.setup(size, turn)
  router.push('/game')
}
</script>

<style lang="scss" scoped>
.btn-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: var(--dark-black-clr);
  width: 60%;
  margin-bottom: 2em;

  cursor: pointer;
  animation: slideIn 0.8s;
  font-family: 'Oleo Script', cursive;

  border-left: 0.2em solid var(--primary-opacity-clr);
  border-right: 0.2em solid var(--primary-opacity-clr);
  border-top: 0.2em solid transparent;
  border-bottom: 0.2em solid transparent;

  &:hover {
    transition: 0.5s;
    border-left: 0.2em solid transparent;
    border-right: 0.2em solid transparent;
    border-top: 0.2em solid var(--primary-opacity-clr);
    border-bottom: 0.2em solid var(--primary-opacity-clr);
  }
}

.btn-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--primary-opacity-clr);

  padding: 1em 0;
  user-select: none;
}

.btn-description {
  padding-bottom: 1em;
  user-select: none;
}
</style>
