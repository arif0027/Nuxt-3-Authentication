<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div
            class="w-full p-4 text-center">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome to our homepage</h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">This is Homapage.</p>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Get started</p>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" @click="counter.increment()">
                Count {{ counter.count }} - {{ counter.doubleCount }}
            </p>
        </div>
    </div>
</template>

<script setup>
    const counter = useCounterStore();
</script>