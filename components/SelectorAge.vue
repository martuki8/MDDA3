<script setup lang="ts">

const model = defineModel()

const people = [{
    id: 1,
    name: 'Neonatal period: Birth to 28 days.',
    value: "HP:0003674"
}, {
    id: 2,
    name: 'Infancy: 1 month to 1 year.',
    value: "HP:0003674"
}, {
    id: 3,
    name: 'Toddlerhood: 1 to 3 years.',
    value: "HP:0003674"
}, {
    id: 4,
    name: 'Preschool age: 3 to 5 years.',
    value: "HP:0003674"
},
{
    id: 5,
    name: 'School age: 6 to 12 years.',
    value: "HP:0003674"
},
{
    id: 6,
    name: 'Adolescence: 13 to 18 years.',
    value: "HP:0003674"
},
{
    id: 7,
    name: 'Young adulthood: 19 to 39 years.',
    value: "HP:0003674"
},
{
    id: 8,
    name: 'Middle adulthood: 40 to 64 years.',
    value: "HP:0003674"
},
{
    id: 9,
    name: 'Late adulthood: 65 years and older.',
    value: "HP:0003674"
}

]

const selected = ref<number | null>(null); // Inicialitza amb null perque el placeholder es mostri
</script>

<template>
    <USelectMenu v-model="model" :options="people" placeholder="Select the patient age" value-attribute="value"
        option-attribute="name" />
</template>