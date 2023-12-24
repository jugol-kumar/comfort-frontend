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
          <img src="/logo.png" alt="Comfort" style="width:75%"/>
        </RouterLink>
        <div class="d-flex align-items-center shadow-sm">
          <input type="text" class="p-3 border border-secondary-subtle" style="width:500px" placeholder="What are you looking for?">
          <button class="bg-info border-0 p-3 rounded-end">
              <i class="bi bi-search"></i>
          </button> 
        </div>
        <RouterLink to="" class="d-flex gap-3 align-items-center">
          <svg class="icon-store " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">      <path d="M39.875 23.375V39.875C39.875 40.6043 39.5853 41.3038 39.0695 41.8195C38.5538 42.3353 37.8543 42.625 37.125 42.625H6.875C6.14565 42.625 5.44618 42.3353 4.93046 41.8195C4.41473 41.3038 4.125 40.6043 4.125 39.875V23.375" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M38.7713 1.375H5.22867C4.91571 1.37495 4.61208 1.48151 4.3678 1.67714C4.12352 1.87276 3.95317 2.14577 3.88483 2.45117L1.375 13.75C1.375 14.844 1.8096 15.8932 2.58318 16.6668C3.35677 17.4404 4.40598 17.875 5.5 17.875C6.59402 17.875 7.64323 17.4404 8.41682 16.6668C9.1904 15.8932 9.625 14.844 9.625 13.75C9.625 14.844 10.0596 15.8932 10.8332 16.6668C11.6068 17.4404 12.656 17.875 13.75 17.875C14.844 17.875 15.8932 17.4404 16.6668 16.6668C17.4404 15.8932 17.875 14.844 17.875 13.75C17.875 14.844 18.3096 15.8932 19.0832 16.6668C19.8568 17.4404 20.906 17.875 22 17.875C23.094 17.875 24.1432 17.4404 24.9168 16.6668C25.6904 15.8932 26.125 14.844 26.125 13.75C26.125 14.844 26.5596 15.8932 27.3332 16.6668C28.1068 17.4404 29.156 17.875 30.25 17.875C31.344 17.875 32.3932 17.4404 33.1668 16.6668C33.9404 15.8932 34.375 14.844 34.375 13.75C34.375 14.844 34.8096 15.8932 35.5832 16.6668C36.3568 17.4404 37.406 17.875 38.5 17.875C39.594 17.875 40.6432 17.4404 41.4168 16.6668C42.1904 15.8932 42.625 14.844 42.625 13.75L40.1133 2.45117C40.0457 2.14576 39.8758 1.8726 39.6317 1.6769C39.3877 1.48121 39.0841 1.3747 38.7713 1.375Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M34.375 30.25C34.375 28.7913 33.7955 27.3924 32.7641 26.3609C31.7326 25.3295 30.3337 24.75 28.875 24.75C27.4163 24.75 26.0174 25.3295 24.9859 26.3609C23.9545 27.3924 23.375 28.7913 23.375 30.25V42.625H34.375V30.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M9.625 28.875H17.875V37.125H9.625V28.875Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <div>
            <h4 class="font-bold m-0 text-dark">Find Your Local Store</h4>
            <p class="m-0 text-dark">Click Here</p>
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

</script>

<style>

</style>