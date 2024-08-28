<script setup lang="ts">
const options = [{
  value: 'HP:0012952',
  label: 'Female'
}, {
  value: 'HP:0012952',
  label: 'Male'
}]

const selected = defineModel('HP:0012952') //female
</script>

<template>
  <URadioGroup v-model="selected" legend="Select the patient gender" color="blue" :options="options" />
</template>
