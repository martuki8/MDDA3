<template>
    <div>
        <BaseHeader></BaseHeader>
    </div>
    <div> <!--contenedor-->
        <MainStepper class="flex justify-center py-10 px-4">
        </MainStepper>

        <main class="flex flex-col w-full h-full items-center px-6"> <!--responsive-->
            <slot> <!--contenido de todas las pg-->
            </slot>
        </main>
    </div>

</template>