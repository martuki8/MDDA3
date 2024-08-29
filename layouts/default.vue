<template>

    <BaseHeader></BaseHeader>

    <div> <!--contenedor-->
        <BreadCrumb class="flex justify-center py-10 px-4">
        </BreadCrumb>

        <main class="flex flex-col w-full h-full items-center px-6"> <!--responsive-->
            <slot> <!--contenido de todas las pg-->
            </slot>
        </main>
    </div>

</template>