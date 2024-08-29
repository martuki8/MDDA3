<script setup lang="ts">
interface PredictionResponse {
    pvalue: string
    score: string
    mondo: string
    diseaseName: string
    diseaseDef: string
    genes: string
    hpoProf: string
    hpoNumBranch: string
}
const props = defineProps<{ data: PredictionResponse[] }>()


// columns
const columns = [{
    key: 'pvalue',
    label: 'Probability'
}, {
    key: 'diseaseName',
    label: 'Disease',
}, {
    key: 'mondo',
    label: 'MONDO Id'
}]



// Probability statuses
const probStatus = [{
    key: 'high',
    label: 'High',
    value: true
}, {
    key: 'medium',
    label: 'Medium',
    value: false
}, {
    key: 'low',
    label: 'Low',
    value: false
}]

// Pagination state
const page = ref(1)
const itemsPerPage = ref(10)

const paginatedFilteredRows = computed(() => {
    if (!props.data || !props.data.length) return []
    let rows = props.data

    // Pagination logic
    const start = (page.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return rows.slice(start, end)
})


// Probability color class mapping
function getProbabilityClasses(prob?: string) {
    if (!prob)
        return {
            background: 'bg-blue-300',
            text: 'text-blue-900'
        }
    switch (prob.toLowerCase()) {
        case "high":
            return {
                background: 'bg-green-300',
                text: 'text-green-900'
            }
        case "medium":
            return {
                background: 'bg-yellow-300',
                text: 'text-yellow-900'
            }
        case "low":
            return {
                background: 'bg-red-300',
                text: 'text-red-900'
            }
        default:
            return {
                background: 'bg-blue-300',
                text: 'text-blue-900'
            }
    }
}

// response pvalue status mapping
function getPvalueLabel(pvalue: string) {
    if (!pvalue) return
    try {
        const pvalueNumber = parseFloat(pvalue)

        if (pvalueNumber > 0.05) {
            return "Low"
        }
        else if (0.001 < pvalueNumber && pvalueNumber <= 0.05) {
            return "Medium"
        }
        else if (pvalueNumber <= 0.001) {
            return "High"
        }

    } catch (e) {
        console.error(e)
        return
    }
}



</script>

<template>
    <div>
        <UTable :columns="columns" :rows="paginatedFilteredRows">
            <template #pvalue-data="{ row }">
                <div class="flex w-full justify-center">
                    <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-center"
                        :class="[getProbabilityClasses(getPvalueLabel(row.pvalue)).background, getProbabilityClasses(getPvalueLabel(row.pvalue)).text]">
                        {{ getPvalueLabel(row.pvalue) }}
                    </span>
                </div>
            </template>
            <template #expand="{ row }">
                <div class="p-4 gap-3 flex flex-col text-sm">
                    <div class="flex gap-2">
                        <span v-for="(gene, index) in row.genes.split(' ')" :key="`${row.pvalue}-${gene}-${index}`"
                            class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-center bg-blue-300 text-blue-900">
                            {{ gene }}
                        </span>
                    </div>
                    <p> {{ row.diseaseDef }}</p>
                </div>

            </template>
        </UTable>
        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination :model-value="page" :page-count="itemsPerPage" :total="data?.length || 0"
                @update:model-value="newPage => page = newPage" />
        </div>
    </div>

</template>