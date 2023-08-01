<template>
  <div class="container">
    <div class="row">
      <PrimaryHeader />
    </div>
    <div class="row row-cent">
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryHeader from '@/components/headers/PrimaryHeader.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<style scoped>
.row-cent {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
