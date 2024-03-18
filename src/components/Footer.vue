<template>
    <footer class="footer border-top">
        <div class="container position-relative z-10">
            <div class="row justify-content-between g-0 py-2">
                <div class="col-xl-4 col-md-6 col-12 mb-3">
                    <div class="pe-md-5">
                        <div class="logo pb-3">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <h3 class="fw-semibold">SIGN UP FOR OUR NEWSLETTER</h3>
                        <p>Join our email list to get access to exclusive offers and notifications of new
                            product launches.</p>
                        <div class="mb-5">
                            <form>
                                <div class="py-3 d-flex align-items-center">
                                    <input type="email" name="newsletter_email" id="newsletter_email"
                                        v-model="newsletter_email" placeholder="Email Address" class="border">
                                  <button type="submit" class="primary-button">SIGN UP</button>
                                </div>

                            </form>
                        </div>
                        <div>
                            <ul class="list-unstyled d-flex align-items-center gap-3 mb-4 footer-socials">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bi bi-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bi bi-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6 col-12 mb-3">
                    <div>
                        <h3 class="fw-semibold">WE'RE HERE TO HELP</h3>
                        <ul>
                            <li>
                                <RouterLink to="/contact" class="footer-link">Contact Us</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Track Your Order</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Shipping</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Returns & Exchanges</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">FAQ</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6 col-12 mb-3">
                    <div>
                        <h3 class="fw-semibold">OUR COMPANY</h3>
                        <ul>
                            <li>
                                <RouterLink to="/about" class="footer-link">About Us</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Find a Store</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Own a Franchise</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Careers</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6 col-12 mb-3">
                    <div>
                        <h3 class="fw-semibold">PRIVACY & USE</h3>
                        <ul>
                            <li>
                                <RouterLink to="/" class="footer-link">Terms & Conditions</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Privacy Policy</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5  d-block" style="background: #222836;">
            <div class="container">
              <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between mt-2">
                <p class="text-center text-lg-start">&copy; {{ new Date().getFullYear() }}
                  <RouterLink to='/' class="primary-color">Comfort Wings</RouterLink>
                  All rights reserved.</p>
                <p class="text-center text-lg-start">
                  <a href="https://creativetechpark.com" target="_blank" class="primary-color">Web Development Company </a>
                  Creative Tech Park.
                </p>
              </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
</script>
