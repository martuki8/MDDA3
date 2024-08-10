<template>
    <div>
        <UContainer>
            <UCard class="w-[800px]">
                <template #header>
                    <div class="flex justify-between text-blue-900">
                        To start the prediction process select the patient sex and age. Then click the 'Continue
                        button'.
                    </div>
                </template>

                <div class="m-2 flex justify-center">
                    <RadioButtonGender class="px-10 flex justify-center" />
                </div>

                <SelectorAge class="pt-6 flex justify-center py-6"></SelectorAge>

                <template #footer>

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