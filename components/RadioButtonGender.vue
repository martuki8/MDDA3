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
    Select the patient gender
  <URadioGroup v-model="selected" legend="Choose something" :options="options" />
</template>

