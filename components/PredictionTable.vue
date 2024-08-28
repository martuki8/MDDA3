<script setup lang="ts">

// columns
const columns = [{
    key: 'prob',
    label: 'Probability'
}, {
    key: 'diseaseName',
    label: 'Disease'
}, {
    key: 'mondo',
    label: 'MONDO Id'
}]

// rows
const diseases = [{
    prob: "high",
    diseaseName: 'developmental and epileptic encephalopathy, 25',
    mondo: 'MONDO:0014392'
}, {
    prob: "high",
    diseaseName: 'lymphatic malformation 4',
    mondo: 'MONDO:0014393'
}, {
    prob: "medium",
    diseaseName: 'Diamond-Blackfan anemia 13',
    mondo: 'MONDO:0014394'
}, {
    prob: "low",
    diseaseName: 'frontotemporal dementia and/or amyotrophic lateral sclerosis 2',
    mondo: 'MONDO:0014395'
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
function getProbabilityClasses(prob: string) {
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

</script>

<template>
    <UTable :columns="columns" :rows="diseases">
        <template #prob-data="{ row }">
            <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-center"
                :class="[getProbabilityClasses(row.prob).background, getProbabilityClasses(row.prob).text]">
                {{ row.prob }}
            </span>
        </template>
    </UTable>
</template>