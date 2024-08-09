<template>
  <div>
      <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" class="w-32 h-10" /></ColorScheme>
  </div>
  <div class="flex justify-center">
    Select from the following list all the symtoms the patient describes
  </div>
  <div>
    <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          Aqui posaré el buscador
        </div>
      </template>
      <SymtomTable></SymtomTable>
    </UCard>
  </UContainer>
  </div>
</template>