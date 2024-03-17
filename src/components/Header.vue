<template>
  <div>
<!--    <div class="bg-info py-3 text-center">-->
<!--      <router-link to="/super-holiday" class="text-white text-capitalize fs-4 fw-bold">***Super Holiday Savings! Shop Our-->
<!--        Gift Guide***</router-link>-->
<!--    </div>-->
    <div class="primary-bg">
      <div class="container">
        <ul class="top_nav d-flex align-items-center justify-content-center justify-content-lg-start gap-2 gap-lg-3 py-2 list-unstyled">
          <li>
            <RouterLink to="/franchise" class="text-capitalize fs-4 top_nav-link">Own a Franchise</RouterLink>
          </li>
          <li>
            <RouterLink to="/virtual-appointment" class="text-capitalize fs-4 top_nav-link">Book A Virtual Appointment
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/finance-option" class="text-capitalize fs-4 top_nav-link">Finance Options</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Mobile Nav -->

  <nav class="navbar mobile-navbar d-lg-none">
    <div class="container-fluid px-0">
      <RouterLink to="/" class="navbar-brand">
        <img src="/logo.png" alt="Comfort" />
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <i class="bi bi-list primary-color fs-2"></i>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <RouterLink to="/login" class="login d-flex align-items-center gap-1">
              <i class="bi bi-person"></i>Login
            </RouterLink>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="primary-button" type="submit">Search</button>
          </form>
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item dropdown" v-for="link in links" :key="link.id">
              <RouterLink to="/products" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <span v-html="link.icon"></span>
                {{ link.label }}
              </RouterLink>
              <ul class="dropdown-menu bg-transparent" v-if="link.sublinks">
                <li v-for="item in link.sublinks">
                  <RouterLink to="" class="dropdown-item d-flex align-items-start gap-1">
                    <span v-html="item.icon"></span>
                    {{ item.label }}
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink to="/customer/wishlist" class="nav-link d-flex align-items-center gap-2">
                Wishlist <i class="bi bi-heart"></i>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/customer/cart" class="nav-link d-flex align-items-center gap-2">
                Cart <i class="bi bi-cart"></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Desktop Nav -->

  <nav :class="'navbar navbar-desktop navbar-expand-lg flex-column p-0 d-none d-lg-flex'">
    <div class="container-fluid py-4">
      <RouterLink class="navbar-brand" to="/">
        <img src="/logo.png" alt="Comfort" />
      </RouterLink>
      <div class="d-flex align-items-center gap-8">
        <div class="d-flex align-items-center">
          <form>
            <div class="search">
              <input type="text" placeholder="What are you looking for?">
              <button>
                search
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="d-flex align-items-center gap-3">
          <RouterLink v-if="authStore.isLoggedIn" :to="{ name: 'dashboard' }"
            class="login d-flex align-items-center gap-1">
            <i class="bi bi-person"></i>Profile
          </RouterLink>
          <RouterLink v-else to="/login" class="login d-flex align-items-center gap-1">
            <i class="bi bi-person"></i>Login
          </RouterLink>
          <RouterLink to="/customer/wishlist" class="wish">
            <span>0</span>
            <i class="bi bi-heart fs-3"></i>
          </RouterLink>
          <RouterLink to="/customer/cart" class="cart">
            <span>{{ cartStore.getCartLength }}</span>
            <i class="bi bi-cart fs-3"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import { useCartStore } from "@/stores/useCartStore";
import {demoLinks } from "@/navlinks";

const links = demoLinks;

const cartStore = useCartStore();
cartStore.initCart();

const authStore = useAuthStore();

</script>

<script>
  export default {
    data() {
      return {
        isFixed: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        if (window.scrollY >= 100) {
          this.isFixed = true
        }
        else {
          this.isFixed = false
        }
      }
    },
  }
</script>
