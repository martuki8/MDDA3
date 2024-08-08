<script setup lang="ts">

const sort = ref({
  column: 'symptom',
  direction: 'asc'
})

const columns = [{
  key: 'symptom',
  label: 'Symptom'
}, {
  key: 'id',
  label: 'HPO'
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
  <UTable :columns="columns" :rows="people" :sort="sort" />
</template>