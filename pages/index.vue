<script setup lang="ts">
import { z } from 'zod'
import type { FormError, FormSubmitEvent } from '#ui/types'

const router = useRouter()

const state = reactive({
    SelectorAge: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.SelectorAge) errors.push({ path: 'SelectorAge', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)
    router.push("/symptomatology")
}
</script>



<template>
    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
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
                    <UFormGroup name="SelectorAge" :ui="{
                        error: 'mt-2 red'

                    }">
                        <SelectorAge class="pt-6 flex justify-center" v-model="state.SelectorAge"></SelectorAge>
                    </UFormGroup>



                    <template #footer>
                        <div class="flex justify-center">
                            <UButton color="blue" class="flex justify-center py-2 px-4" type="submit">
                                Continue
                            </UButton>
                        </div>
                    </template>

                </UCard>
            </UContainer>
        </div>
    </UForm>

</template>