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