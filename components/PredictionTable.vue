<script setup lang="ts">

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

//rows
const diseases = [{
    prob: "High",
    diseaseName: 'developmental and epileptic encephalopathy, 25',
    mondo: 'MONDO:0014392'
}, {
    prob: "High",
    diseaseName: 'lymphatic malformation 4',
    mondo: 'MONDO:0014393'
}, {
    prob: "Medium",
    diseaseName: 'Diamond-Blackfan anemia 13',
    mondo: 'MONDO:0014394'
}, {
    prob: "Low",
    diseaseName: 'frontotemporal dementia and/or amyotrophic lateral sclerosis 2',
    mondo: 'MONDO:0014395'
}]

// Probability - no he conseguit encara que funcioni
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

</script>

<template>
    <UTable :columns="columns" :rows="diseases" />
</template>