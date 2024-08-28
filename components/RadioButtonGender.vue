<script setup lang="ts">
const options = [{
  value: "HP:0012954",
  label: 'Female'
}, {
  value: "HP:0012955",
  label: 'Male'
}]

const selected = defineModel("HP:0012954") //female
</script>

<template>
  <URadioGroup v-model="selected" legend="Select the patient gender" color="blue" :options="options" />
</template>
