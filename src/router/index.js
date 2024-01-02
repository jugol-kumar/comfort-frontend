import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue"
import authMiddleware from '@/middleware/auth';
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
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/Checkout.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      children: [
        {
          path: '/dashboard',
          name: "dashboard",
          component: () => import("@/views/customer/Dashboard.vue"),
        },
        {
          path: '/checkout',
          name: 'wish',
          component: () => import('@/views/Checkout.vue')
        },
        {
          path:'/payment',
          name: 'payment',
          props:true,
          component: ()=> import('@/views/customer/Payment.vue')
        },
        {
          path: '/order-complate',
          name: 'ordercomplate',
          component: () => import('@/views/customer/OrderComplate.vue')
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
          path: '/order',
          name: 'customer.order',
          component: () => import('@/views/customer/Order.vue')
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

      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import("@/views/Error.vue")
    },
  ],
})



router.beforeEach(authMiddleware)
export default router
