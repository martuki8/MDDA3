<template>
    <header class="border-b border-blue-800 border-opacity-10 flex justify-between py-4 px-4">
        <AppLogo class="scale-50 w-3">
        </AppLogo>

        <div class="flex items-center ">
            <NuxtLink class="mr-4 font-semibold text-blue-700 dark:text-blue-200" to="/">Home</NuxtLink>
        </div>

        <div class="flex items-center gap-3">
            <NuxtLink to="https://github.com/martuki8/MDDA3" class="flex items-center text-blue-700 dark:text-blue-200">
                <GitHubIcon></GitHubIcon>
            </NuxtLink>
            <ColourSwitch class="flex items-center"></ColourSwitch>
        </div>

    </header>
</template>