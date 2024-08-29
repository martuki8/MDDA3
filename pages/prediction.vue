<script setup lang="ts">

import { useStorage } from '@vueuse/core'
import { string } from 'zod';

const gender = useStorage("mdda-gender", "")
const age = useStorage("mdda-age", "")
const symptoms = useStorage("mdda-symptoms", [])

const requestBody = computed(() => {
  return `;${gender.value};${age.value};${symptoms.value.map((symptom) => symptom.id).join(";")};`
})


const { data: predictionResponse, error, status } = await useFetch("http://147.83.75.14:6789/getdiseases", {
  method: "POST",
  body: requestBody.value,
  transform: (data) => {
    if (!data) return
    return data.map((item) => {
      console.log(item);
      if (item.length < 8)
        return

      const pvalue = item[0]
      const score = item[1]
      const mondo = item[2]
      const diseaseName = item[3]
      const diseaseDef = item[4]
      const genes = item[5]
      const hpoProf = item[6]
      const hpoNumBranch = item[7]

      return {
        pvalue, score, mondo, diseaseName, diseaseDef, genes, hpoProf, hpoNumBranch
      }
    })
  }
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
        <PredictionTable :data="predictionResponse"></PredictionTable>

        <template #footer>
          <div class="flex justify-center text-blue-900">
            Thank you for supporting the MDDA!
          </div>
        </template>
      </UCard>
    </UContainer>
  </div>


</template>