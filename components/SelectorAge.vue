<script setup lang="ts">
const people = [{
    id: 1,
    name: 'Neonatal period: Birth to 28 days.'
}, {
    id: 2,
    name: 'Infancy: 1 month to 1 year.'
}, {
    id: 3,
    name: 'Toddlerhood: 1 to 3 years.'
}, {
    id: 4,
    name: 'Preschool age: 3 to 5 years.'
},
{
    id: 5,
    name: 'School age: 6 to 12 years.'
},
{
    id: 6,
    name: 'Adolescence: 13 to 18 years.'
},
{
    id: 7,
    name: 'Young adulthood: 19 to 39 years.'
},
{
    id: 8,
    name: 'Middle adulthood: 40 to 64 years.'
},
{
    id: 9,
    name: 'Late adulthood: 65 years and older.'
}

]

const selected = ref(people[0].id)
</script>

<template>
    <USelectMenu v-model="selected" :options="people" placeholder="Select the patient age" value-attribute="id"
        option-attribute="name" />
</template>