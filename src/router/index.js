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
      name: 'products',
      meta: (route) => ({ 
        title: 'Team Member'
      }),
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Products.vue')
    },
    {
      path: '/product-details',
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
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/Checkout.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue')
    },
    {
      path: '/customer/order',
      name: 'customer.order',
      component: () => import('@/views/CustomerOrder.vue')
    },
    {
      path: '/customer/address',
      name: 'customer.address',
      component: () => import('@/views/CustomerAddress.vue')
    },
    {
      path: '/customer/profile',
      name: 'customer.profile',
      component: () => import('@/views/CustomerProfile.vue')
    },
    {
      path: '/customer/reset-password',
      name: 'customer.reset.password',
      component: () => import('@/views/CustomerPasswordReset.vue')
    },
    {
      path: '/customer/wishlist',
      name: 'customer.wishlist',
      component: () => import('@/views/CustomerWishlist.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/Payment.vue')
    }
  ]
})

export default router
