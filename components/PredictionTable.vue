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
    label: 'Disease'
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
    <UTable :columns="columns" :rows="data">
        <template #pvalue-data="{ row }">
            <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-center"
                :class="[getProbabilityClasses(getPvalueLabel(row.pvalue)).background, getProbabilityClasses(getPvalueLabel(row.pvalue)).text]">
                {{ getPvalueLabel(row.pvalue) }}
            </span>
        </template>
    </UTable>
</template>