import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue"
import { authMiddleware } from '@/middleware/auth';
import { useAuthStore } from '@/stores/useAuthStore';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/products',
      name: 'about',
      meta: (route) => ({ 
        title: 'Team Member'
      }),
      component: () => import('@/views/Products.vue')
    },
    {
      path: '/product-detials/:id',
      name: 'productDetails',
      component: () => import('@/views/ProductDetails.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/wish',
      name: 'wish',
      component: () => import('@/views/Wish.vue')
    },
    {
      path: '/checkout',
      name: 'wish',
      component: () => import('@/views/Checkout.vue')
    },
    {
      path:"/customer",
      name:"custoemr",
      children: [
        {
          path: '/dashboard',
          name:"dashboard",
          meta: {
            requiresAuth: true
          },
          component: () => import("@/views/customer/Dashbaord.vue"),
        },
      ],
    }
  ],
})



router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isLoggedIn) {
      next({ name: 'login' })
    }else if(authStore.is){

    } else {
      next()
    }
  } else {
    next()
  }
})



export default router
