<script setup lang="ts">
const options = [{
  value: 'female',
  label: 'Female'
}, {
  value: 'male',
  label: 'Male'
}]

const selected = ref('female')
</script>

<template>
  <URadioGroup v-model="selected" legend="Select the patient gender" color="#49a0fd" :options="options" />
</template>

