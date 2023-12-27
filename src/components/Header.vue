<template>
      <div>
        <div class="bg-info py-3 text-center">
          <router-link to="" class="text-white fs-3 fw-bold">***Super Holiday Savings! Shop Our Gift Guide***</router-link>
        </div> 
        <div class="bg-light">
          <div class="container-fluid">
            <ul class="d-flex items-center gap-4 py-2 list-unstyled">
              <li>
                <RouterLink to="" class="text-primary text-capitalize fs-4">Own a Franchise</RouterLink>
              </li>
              <li>
                <RouterLink to="" class="text-primary text-capitalize fs-4">Book A Virtual Appointment</RouterLink>
              </li>
              <li>
                <RouterLink to="" class="text-primary text-capitalize fs-4">Finance Options</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg flex-column p-0">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="/logo.png" alt="Comfort"/>
        </RouterLink>
        <div class="search d-flex align-items-center">
          <input type="text" placeholder="What are you looking for?">
          <button>
              <i class="bi bi-search"></i>
          </button> 
        </div>
        <RouterLink to="" class="find-store d-flex gap-2 align-items-center">
          <i class="bi bi-shop-window"></i>
          <div>
            <h4 class="text-capitalize">Find Your Local Store</h4>
            <p>Click Here</p>
          </div>
        </RouterLink>
        <div class="d-flex align-items-center gap-3">
          <RouterLink to="" class="d-flex align-items-center gap-2 fs-3 text-dark">
            <span class="fs-2">
              <i class="bi bi-person"></i>
            </span>
            <span>
              Login
            </span>
          </RouterLink>
          <RouterLink to="" class="text-dark fs-3">
            <i class="bi bi-heart"></i>
          </RouterLink>
          <RouterLink to="" class="text-dark fs-3">
            <i class="bi bi-cart"></i>
          </RouterLink>
        </div>
        <!-- <div class="order-lg-3 d-flex align-items-center">
          <div>
            <div class="d-flex align-items-center">
              <div class="dropdown me-2">
                <button class="btn btn-light btn-icon rounded-circle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                  <i class="bi theme-icon-active"></i>
                  <span class="visually-hidden bs-theme-text">Toggle theme</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
                  <li>
                    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                      <i class="bi theme-icon bi-sun-fill"></i>
                      <span class="ms-2">Light</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                      <i class="bi theme-icon bi-moon-stars-fill"></i>
                      <span class="ms-2">Dark</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                      <i class="bi theme-icon bi-circle-half"></i>
                      <span class="ms-2">Auto</span>
                    </button>
                  </li>
                </ul>
              </div>
              <a href="#" class="btn btn-outline-primary shadow-sm me-2 d-none d-md-block">Sign In</a>
              <a href="#" class="btn btn-primary d-none d-md-block me-2 me-lg-0">Sign Up</a>
            </div>
          </div>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="icon-bar top-bar mt-0"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </div> -->

        <!-- Collapse -->
        <!-- <div class="collapse navbar-collapse" id="navbar-default">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <RouterLink to="" class="nav-link">
                RECLINERS
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/products" class="nav-link">
                Products
              </RouterLink>
            </li>
          </ul>
        </div>  -->
      </div>
      <div class="container-fluid py-3">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbar-default">
          <ul class="navbar-nav gap-5">
            <li class="nav-item dropdown">
              <RouterLink to="" class="nav-link fs-3 text-uppercase">
                RECLINERS
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/products" class="nav-link dropdown-toggle fs-3 text-uppercase">
                PRODUCTS
              </RouterLink>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="" class="dropdown-item fs-3 fw-normal py-2">Product One</router-link>
                </li>
                <li>
                  <router-link to="" class="dropdown-item fs-3 fw-normal py-2">Product Two</router-link>
                </li>
                <li>
                  <router-link to="" class="dropdown-item fs-3 fw-normal py-2">Product Three</router-link>
                </li>
                <li>
                  <router-link to="" class="dropdown-item fs-3 fw-normal py-2">Product Four</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/" class="nav-link fs-3 text-uppercase">
                NEW ARRIVALS
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/" class="nav-link fs-3 text-uppercase">
                OFFICE
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink to="/" class="nav-link fs-3 text-uppercase">
                FITNESS & THERAPY 
              </RouterLink>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
</template>

<script setup>
  import {useCartStore} from "@/stores/useCartStore"
  const cartStore = useCartStore();

  cartStore.initCart();
</script>

<style>

</style>