import { useAuthStore } from '@/stores/useAuthStore';

export function authMiddleware(to, from, next) {
  const authStore = useAuthStore();


  console.log('user', authStore.user)
  console.log('login', authStore.isLoggedIn)

  if (authStore.isLoggedIn) {
    next();
  } else {
    next({ name: 'login' });
  }
}