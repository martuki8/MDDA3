<template>
    <div>
        <MainHeader>
            
        </MainHeader>
    </div>
    <div > <!--contenedor-->
        <BreadCrumb>
        </BreadCrumb>
        <main class="flex flex-col w-full h-[100dvh]"> <!--responsive-->
            <slot> <!--contenido de todas las pg-->
            </slot>
        </main>
    </div>
    
</template>