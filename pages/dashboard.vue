<script setup>
    const auth = useAuthStore();

    definePageMeta({
      middleware: ["auth"]
    });
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div
            class="w-full p-4 text-center">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome to our Dashboard</h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">This is Dashboard</p>
            <p class="py-2">Name: <strong>{{ auth.getUser?.name }}</strong></p>
            <p class="py-2">Email: <strong>{{ auth.getUser?.email }}</strong></p>
        </div>
    </div>
</template>