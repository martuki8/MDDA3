<template>
    <div>
        <header class="border-b-2 flex justify-center py-4 px-4">
            <NuxtLink class="mr-4" to="/">Home</NuxtLink>
            <NuxtLink to="https://github.com/martuki8/MDDA3">GitHub</NuxtLink>
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