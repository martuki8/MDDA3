<script setup lang="ts">

import { useStorage } from '@vueuse/core'

const gender = useStorage("mdda-gender", "")
const age = useStorage("mdda-age", "")
const symptoms = useStorage("mdda-symptoms", [])

const requestBody = computed(() => {
  return `;${gender.value};${age.value};${symptoms.value.map((symptom) => symptom.id).join(";")};`
})


const response = await useFetch("http://147.83.75.14:6789/getdiseases", {
  method: "POST",
  body: requestBody.value
})


</script>

<template>

  <div>
    <UContainer>
      <UCard class="w-[800px]">
        <template #header>
          <div class="flex justify-between text-blue-900">
            Prediction results:
          </div>
        </template>
        <PredictionTable></PredictionTable>

        <template #footer>
          <div class="flex justify-center text-blue-900">
            Thank you for supporting the MDDA!
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>


</template>