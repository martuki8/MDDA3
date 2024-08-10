<script setup lang="ts">

const route = useRoute();

const links = [{
  label: 'Patient data',
  to: '/'
}, {
  label: 'Symptomatology',
  to: '/symtomatology'
}, {
  label: 'Prediction',
  to: '/prediction'
}]

function isActive(link) {
  return route.path === link.to
}

</script>


<template>
  <ul class="flex items-center justify-center gap-5">
    <li v-for="(link, index) in links" :key="link.to">
      <UAvatar :alt="(index + 1).toString()" :ui="{
        background: isActive(link) ? 'bg-primary-500 dark:bg-primary-400' : undefined,
        placeholder: isActive(link) ? 'text-white dark:text-gray-900' : !!link.to ? 'group-hover:text-gray-700 dark:group-hover:text-gray-200' : ''
      }" size="xs" />

      <span class="font-semibold ml-2" :class="isActive(link) ? 'text-primary-500' : 'text-gray-500'">
        {{ link.label }}
      </span>
    </li>
  </ul>
</template>
