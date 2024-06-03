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
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('@/views/ForgotPassword.vue')
    },
    {
      path: '/new-given-password',
      name: 'newGivenPassword',
      component: ()=>import("@/views/NewPassword.vue")
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
      path: '/product-details/:id',
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
      component: () => import('@/views/customer/Checkout.vue')
    },
    {
      path:'/page/:slug',
      name: 'SinglePage',
      component: () => import('@/views/SinglePage.vue')
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
          component: () => import('@/views/customer/Checkout.vue')
        },
        {
          path:'/payment',
          name: 'payment',
          props:true,
          component: ()=> import('@/views/customer/Payment.vue')
        },
        {
          path: '/order-complete',
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
          component: () => import('@/views/customer/Address.vue')
        },
        {
          path: '/customer/profile',
          name: 'customer.profile',
          component: () => import('@/views/customer/Profile.vue')
        },
        {
          path: '/customer/reset-password',
          name: 'customer.reset.password',
          component: () => import('@/views/customer/PasswordReset.vue')
        },
        {
          path: '/customer/wishlist',
          name: 'customer.wishlist',
          component: () => import('@/views/customer/Wishlist.vue')
        },

      ]
    },
    {
      path: '/order-invoice/:id',
      name: 'orderInvoice',
      component: () => import('@/views/Invoice.vue')
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
