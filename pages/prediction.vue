<template>
    <div>
        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" class="w-32 h-10" /></ColorScheme>



    </div>
    <div>
      <UContainer>
      <UCard class="mt-10">
        resultats
      </UCard>
    </UContainer>
    </div>
  </template>