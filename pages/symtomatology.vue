<template>

  <div>
    <UContainer>
      <UCard class="w-[800px]">
        <template #header>
          <div class="flex justify-between text-blue-900">
            Select from the list all the symtoms the patient describes. When all the symtoms are added, plase click on
            the 'Continue' button.
          </div>
        </template>
        <SymtomTable></SymtomTable>

        <template #footer>
          <Placeholder class="h-8" />
          <div class="flex justify-center">
            <UButton color="blue" class="flex justify-center py-2 px-4">
              Continue
            </UButton>
          </div>
        </template>




      </UCard>
    </UContainer>
  </div>



</template>