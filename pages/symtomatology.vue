<template>

  <div>
    <UContainer>
      <UCard class="w-[800px]">
        <template #header>
          <div class="flex justify-between">
            Aqui posaré el buscador
          </div>
        </template>
        <SymtomTable></SymtomTable>
      </UCard>
    </UContainer>
  </div>

  <div class="flex justify-center mt-6">
    Select from the list all the symtoms the patient describes. When all the symtoms are added, plase click on the
    Continue button
  </div>

</template>