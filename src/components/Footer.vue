<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row justify-content-between g-0 py-2">
                <div class="col-xl-3 col-md-6">
                    <div class="pe-md-5">
                        <h3>SIGN UP FOR OUR NEWSLETTER</h3>
                        <p class="fs-4">Join our email list to get access to exclusive offers and notifications of new
                            product launches.</p>
                        <div class="mb-5">
                            <form>
                                <div class="py-3">
                                    <input type="email" name="newsletter_email" id="newsletter_email"
                                        v-model="newsletter_email" placeholder="Email Address" class="w-100 p-2 border-0">
                                </div>
                                <button type="submit" class="newsletter_submit primary-button">SIGN UP</button>
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
                <div class="col-xl-2 col-md-6">
                    <div>
                        <h3>WE'RE HERE TO HELP</h3>
                        <ul>
                            <li>
                                <RouterLink to="/" class="footer-link">Contact Us</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Book a Virtual Appointment</RouterLink>
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
                <div class="col-xl-2 col-md-6">
                    <div>
                        <h3>OUR COMPANY</h3>
                        <ul>
                            <li>
                                <RouterLink to="/" class="footer-link">About Us</RouterLink>
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
                <div class="col-xl-2 col-md-6">
                    <div>
                        <h3>RESOURCES & OFFERS</h3>
                        <ul>
                            <li>
                                <RouterLink to="/" class="footer-link">Browse Our Current Catalog</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Request a Catalog</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Blog</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Financing Options</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Store Sitemap</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="footer-link">Reviews</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-md-6">
                    <div>
                        <h3>PRIVACY & USE</h3>
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
            <div class="my-5  d-inline-block">
                <p class="m-0">Copyright © 2023 Comfort Wings</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>
