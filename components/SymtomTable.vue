<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import hpWithFpJson from '~/assets/hp_with_fp.json'


const sort = ref({
  column: 'name',
  direction: 'asc'
})

const columns = [{
  key: 'id',
  label: 'HPO'
}, {
  key: 'name',
  label: 'Symptom'
}]

const symptoms = ref<Array<{ id: string, name: string }>>([])
const selected = ref<Array<{ id: string, name: string }>>([])
const q = ref('')

// Pagination state
const page = ref(1)
const itemsPerPage = ref(10)

// Load data and initialize symptoms
onMounted(() => {
  symptoms.value = hpWithFpJson.map(item => ({
    id: item.id,
    name: item.name
  }))
})

const filteredRows = computed(() => {
  let rows = symptoms.value

  if (q.value) {
    rows = rows.filter(symp => {
      return Object.values(symp).some(value => {
        return String(value).toLowerCase().includes(q.value.toLowerCase())
      })
    })
  }

  // Sorting logic
  if (sort.value.column) {
    rows.sort((a, b) => {
      const aValue = a[sort.value.column]
      const bValue = b[sort.value.column]
      if (aValue < bValue) return sort.value.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sort.value.direction === 'asc' ? 1 : -1
      return 0
    })
  }

  // Pagination logic
  const start = (page.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return rows.slice(start, end)
})

// Total number of pages
const pageCount = computed(() => {
  const totalRows = symptoms.value.filter(symp => {
    return !q.value || Object.values(symp).some(value => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  }).length

  return Math.ceil(totalRows / itemsPerPage.value)
})

function select(row) {
  const index = selected.value.findIndex(item => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}
</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" placeholder="Write a symptom..." class="w-96" />
    </div>
    <UTable v-model="selected" :columns="columns" :rows="filteredRows" :sort="sort" />
    <!-- Pagination Controls -->
    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination :model-value="page" :page-count="pageCount" :total="symptoms.length"
        @update:model-value="newPage => page = newPage" />
    </div>
  </div>
</template>
