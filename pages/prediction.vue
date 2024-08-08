<template>
    <div>
        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" class="w-32 h-10" /></ColorScheme>



    </div>
    <div>
      <UContainer>
      <UCard class="mt-10">
        <template #header>
          <div class="flex justify-between">
            <h1>Welcome to Nuxt UI Starter</h1>
          </div>
        </template>
        <SymtomTable></SymtomTable>
      </UCard>
    </UContainer>
    </div>
  </template>