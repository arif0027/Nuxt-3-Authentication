<script setup>
    const auth = useAuthStore();
    const token = useTokenStore();
    const form = reactive({
        email: 'test@gmail.com',
        password: 'password',
    });

    const errors = ref([]);
    const handleSubmit = async() =>{
        try {
            await auth.login(form);
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
          Welcome Back!
        </h2>
        <p class="mb-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Please login to your account
        </p>
        <!-- {{ token.getToken }} {{ token.getStatus }} -->
        <form @submit.prevent="handleSubmit">
          <!-- Email Input -->
          <div class="mb-4">
            <FormLabel for="email">Email</FormLabel>
            <FormTextInput id="email" type="email" placeholder="name@example.com" v-model=" form.email"/>
            <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span>
          </div>
          <!-- Password Input -->
          <div class="mb-4">
            <FormLabel for="password">Password</FormLabel>
            <FormTextInput id="password" type="password" placeholder="password" v-model=" form.password"/> 
            <span v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</span>
          </div>
          <!-- Remember Me Checkbox -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input
                id="remember"
                type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="remember" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Remember Me
              </label>
            </div>
            <a href="#" class="text-sm text-blue-600 hover:underline dark:text-blue-400">
              Forgot Password?
            </a>
          </div>
          <ButtonPrimary>Login</ButtonPrimary>
        </form>
        <!-- <ButtonPrimary class="mt-3" @click.prevent="token.removeToken()">Remove Token</ButtonPrimary> -->
        <SocialLogin/>
        <!-- Footer Links -->
        <p class="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account? 
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  </template>
  