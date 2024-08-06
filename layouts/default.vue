<template>
    <div>
        <header class="border-b-2 flex justify-center py-4 px-4">
            <NuxtLink to="/">Home</NuxtLink>

        </header>
    </div>
    <div > <!--contenedor-->
        <BreadCrumb class="flex justify-center py-10 px-4">
        </BreadCrumb>
        <main class="flex flex-col w-full h-[100dvh]"> <!--responsive-->
            <slot> <!--contenido de todas las pg-->
            </slot>
        </main>
    </div>
    
</template>