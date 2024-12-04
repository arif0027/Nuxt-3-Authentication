<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input
              class="w-full p-3 text-sm border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500",
              :value="props.modelValue"
              @input="emit('update:modelValue', $event.target.value)"
            />
</template>