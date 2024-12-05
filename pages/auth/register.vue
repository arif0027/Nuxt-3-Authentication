<script setup>

    definePageMeta({
      middleware: ["guest"]
    });

    const auth = useAuthStore();
    const token = useTokenStore();
    const form = reactive({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    });

    const errors = ref([]);
    const handleSubmit = async() =>{
        try {
            await auth.register(form);
        } catch (error) {
          errors.value = error.data.errors;
        }
    }; 
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 class="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create Your Account
        </h2>
        <p class="mb-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Please fill in the form to get started
        </p>
        <form @submit.prevent="handleSubmit">
          <!-- Full Name -->
          <div class="mb-4">
            <FormLabel for="name">Name</FormLabel>
            <FormTextInput id="name" type="text" placeholder="your name" v-model=" form.name"/>
            <span v-if="errors.name" class="text-red-500">{{ errors.name[0] }}</span>
          </div>
          <!-- Email Address -->
          <div class="mb-4">
            <FormLabel for="email">Email</FormLabel>
            <FormTextInput id="email" type="email" placeholder="name@example.com" v-model=" form.email"/>
            <!-- <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span> -->
          </div>
          <!-- Password -->
          <div class="mb-4">
            <FormLabel for="password">Password</FormLabel>
            <FormTextInput id="password" type="password" placeholder="......." v-model=" form.password"/> 
            <span v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</span>
          </div>
          <!-- Confirm Password -->
          <div class="mb-4">
            <FormLabel for="password">Confirm Password</FormLabel>
            <FormTextInput id="password_confirmation" type="password" placeholder="re-type password" v-model=" form.password_confirmation"/> 
            <span v-if="errors.password_confirmation" class="text-red-500">{{ errors.password_confirmation[0] }}</span>
          </div>
          
          <!-- Register Button -->
          <ButtonPrimary>Register</ButtonPrimary>
        </form>
        <!-- Footer Links -->
        <p class="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Already have an account? 
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">
            Login here
          </a>
        </p>
      </div>
    </div>
  </template>
  