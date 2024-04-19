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
  <UDropdown :items="items" :popper="{ placement: 'bottom-start'}" class="custom-dropdown">
    <UButton color="white" label="Choose the patient gener" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

<style>
.custom-dropdown {
  width: 'w-60';
}
</style>

