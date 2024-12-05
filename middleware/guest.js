export default defineNuxtRouteMiddleware((to, from) => {
    const tokenStore = useTokenStore();
    if (tokenStore.getStatus) {
      return navigateTo('/dashboard');
    }
  })
  