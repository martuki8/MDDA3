<script setup lang="ts">
const items = [
  [{
    label: 'Neonatal period: Birth to 28 days.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Infancy: 1 month to 1 year.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Toddlerhood: 1 to 3 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Preschool age: 3 to 5 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'School age: 6 to 12 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Adolescence: 13 to 18 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Young adulthood: 19 to 39 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Middle adulthood: 40 to 64 years.',
    icon: 'i-heroicons-face-smile-20-solid'
  }, {
    label: 'Late adulthood: 65 years and older.',
    icon: 'i-heroicons-face-smile-20-solid'
  }

  ]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start'}" class="custom-dropdown">
    <UButton color="white" label="Choose the patient age" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

<style>
.custom-dropdown {
  width: w-300;
}
</style>
