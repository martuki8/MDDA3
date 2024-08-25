<template>
    <span :class="badgeClasses">
      {{ text }}
    </span>
  </template>

<script>
export default {
    name: 'UBadge',
    props: {
        status: {
            type: String,
            default: 'Low'
        },
        ui: {
            type: Object,
            default: () => ({ rounded: 'rounded-full' })
        }
    },
    computed: {
        badgeClasses() {
            return [
                'inline-flex items-center px-3 py-1 text-sm font-medium text-white',
                this.ui.rounded,
                this.statusColor
            ];
        },
        statusColor() {
            const colorMap = {
                High: 'bg-green-500',
                Medium: 'bg-yellow-500',
                Low: 'bg-red-500'
            };
            return colorMap[this.status] || 'bg-gray-500'; // Default color if status is not recognized
        },
        text() {
            return this.status;
        }
    }
}
</script>

<template>
    <div>
        <UBadge status="High" />
        <UBadge status="Medium" />
        <UBadge status="Low" />
    </div>
</template>

<script>
  import UBadge from '~/components/UBadge.vue';
  
  export default {
    components: {
      UBadge
    }
  }
  </script>