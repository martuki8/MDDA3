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

const symptoms = [{
  id: 'HP0002018',
  symptom: 'Nausea',
}, {
  id: 'HP0012538',
  symptom: 'Gluten intolerance',
}]
</script>

<template>
  <UTable :columns="columns" :rows="symptoms" :sort="sort" />
</template>