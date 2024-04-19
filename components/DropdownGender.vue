<script setup lang="ts">
const items = [
  [{
    label: 'Female',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Male',
    icon: 'i-heroicons-face-smile-20-solid'
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Choose the patient gener" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

