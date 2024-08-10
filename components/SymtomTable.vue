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


function select(row) {
  const index = selected.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}

const selected = ref([symptoms[1]])

const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return symptoms
  }

  return symptoms.filter((symp) => {
    return Object.values(symp).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})


</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" placeholder="Filter symptoms..." />
    </div>
    <UTable v-model="selected" :columns="columns" :rows="filteredRows" :sort="sort" />
  </div>

</template>
