<script setup lang="ts">
const items = [
  [{
    label: 'Female',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Male',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Choose the patient gener" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

