<script setup lang="ts">
const columns = [{
  key: 'id',
  label: 'HPO'
}, {
  key: 'symptom',
  label: 'Symptom'
}]

const people = [{
  id: 'HP0002018',
  symptom: 'Nausea',
}, {
  id: 'HP0012538',
  symptom: 'Gluten intolerance',
}]
</script>

<template>
  <UTable :columns="columns" :rows="people" />
</template>