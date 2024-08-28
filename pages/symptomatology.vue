<script lang="ts" setup>
const isSymptomTableValid = ref(false)

</script>

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
        <SymtomTable v-model="isSymptomTableValid"></SymtomTable>

        <template #footer>
          <div class="flex justify-center">
            <NuxtLink to="/prediction" v-if="isSymptomTableValid">
              <UButton color="blue" class="flex justify-center py-2 px-4">
                Continue
              </UButton>
            </NuxtLink>

            <UButton v-else color="blue" class="flex justify-center py-2 px-4" disabled>
              Continue
            </UButton>

          </div>
        </template>
      </UCard>
    </UContainer>
  </div>



</template>