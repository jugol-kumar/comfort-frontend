<template>
  <div>
    <div class="bg-info py-3 text-center">
      <router-link to="" class="text-white text-capitalize fs-5 fs-md-4 fw-bold">***Super Holiday Savings! Shop Our Gift Guide***</router-link>
    </div> 
    <div class="bg-light">
      <div class="container-fluid">
        <ul class="top_nav d-flex items-center gap-4 py-2 list-unstyled">
          <li>
            <RouterLink to="" class="text-capitalize fs-4 top_nav-link">Own a Franchise</RouterLink>
          </li>
          <li>
            <RouterLink to="" class="text-capitalize fs-4 top_nav-link">Book A Virtual Appointment</RouterLink>
          </li>
          <li>
            <RouterLink to="" class="text-capitalize fs-4 top_nav-link">Finance Options</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Mobile Nav -->

  <nav class="navbar bg-body-tertiary d-lg-none">
    <div class="container-fluid px-0">
      <RouterLink to="/" class="navbar-brand">
        <img src="/logo.png" alt="Comfort" />
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="#0FA5E9" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>
        </span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <RouterLink to="" class="login d-flex align-items-center gap-1">
              <i class="bi bi-person"></i>Login
          </RouterLink>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New Arrivals</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Sleep</a></li>
                <li><a class="dropdown-item" href="#">Office</a></li>
                <li><a class="dropdown-item" href="#">Massage</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                Wishlist <i class="bi bi-heart"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="/cart">
                Cart <i class="bi bi-cart"></i>
              </a>
            </li>
          </ul>
          <RouterLink to="" class="find-store d-flex gap-2 align-items-center my-5">
            <i class="bi bi-shop-window"></i>
            <div>
              <h4 class="text-capitalize">Find Your Local Store</h4>
              <p>Click Here</p>
            </div>
          </RouterLink>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>

  <!-- Desktop Nav -->

  <nav class="navbar navbar-expand-lg flex-column p-0 d-none d-lg-flex">
    <div class="container-fluid my-3">
      <RouterLink class="navbar-brand" to="/">
        <img src="/logo.png" alt="Comfort"/>
      </RouterLink>
      <div class="d-flex align-items-center">
        <form>
          <div class="search">
            <input type="text" placeholder="What are you looking for?">
            <button>
                <i class="bi bi-search"></i>
            </button> 
          </div>
        </form>
      </div>
      <RouterLink to="" class="find-store d-flex gap-2 align-items-center">
        <i class="bi bi-shop-window"></i>
        <div>
          <h4 class="text-capitalize">Find Your Local Store</h4>
          <p>Click Here</p>
        </div>
      </RouterLink>
      <div class="d-flex align-items-center gap-3">
        <RouterLink to="" class="login d-flex align-items-center gap-1">
            <i class="bi bi-person"></i>Login
        </RouterLink>
        <RouterLink to="" class="wish">
          <span>0</span>
          <i class="bi bi-heart"></i>
        </RouterLink>
        <RouterLink to="/cart" class="cart">
          <span>{{ cartStore.getCartLength }}</span>
          <i class="bi bi-cart"></i>
        </RouterLink>
      </div>
    </div>
    <div class="container-fluid py-3">
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="navbar-default">
        <ul class="navbar-nav gap-5">
          <li class="nav-item dropdown">
            <RouterLink to="" class="nav-link text-uppercase">
              RECLINERS
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink to="/products" class="nav-link dropdown-toggle text-uppercase">
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
            <RouterLink to="/" class="nav-link text-uppercase">
              NEW ARRIVALS
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink to="/" class="nav-link  text-uppercase">
              OFFICE
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink to="/" class="nav-link text-uppercase">
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