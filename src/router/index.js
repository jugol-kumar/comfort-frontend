import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue"
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Products.vue')
    },
    {
      path: '/product-detials/:id',
      name: 'productDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
    }
  ]
})

export default router
