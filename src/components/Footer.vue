<template>
    <footer class="footer border-top">
        <div class="container-fluid position-relative z-10">
            <div class="row justify-content-between g-0 py-2">
                <div class="col-xl-4 col-md-6">
                    <div class="pe-md-5">
                        <div class="logo pb-3">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <h3 class="fw-semibold">About Us</h3>
                        <p class="fs-4" style="text-align: justify">Comfort Wing’s is our registered Brand. Our main activities are building & developing new innovative products in specific category semi Healthcare products.</p>
<!--                        <div class="mb-5">-->
<!--                            <form>-->
<!--                                <div class="py-3">-->
<!--                                    <input type="email" name="newsletter_email" id="newsletter_email"-->
<!--                                        v-model="newsletter_email" placeholder="Email Address" class="w-100 p-2 border">-->
<!--                                </div>-->
<!--                                <button type="submit" class="newsletter_submit primary-button">SIGN UP</button>-->
<!--                            </form>-->
<!--                        </div>-->

                        <div class="mt-5">
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

                <div class="col-xl-2 col-md-6" v-for="setting in settings">
                    <div>
                        <h3 class="fw-semibold">{{ setting?.title }}</h3>
                        <ul>
                            <li v-for="page in setting?.pages">
                                <RouterLink :to="`/page/${page?.slug}`" class="footer-link">{{ page?.title }}</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5  d-block" style="background: #f5f5f5;">
            <div class="container-fluid">
                <p class="m-0">Copyright © 2023 Comfort Wings</p>
            </div>
        </div>
    </footer>
</template>

<script setup>

import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";

const {sendRequest, loading, error} = useAxios();

const settings = ref([])

onMounted(async () => {
  const response = await sendRequest('/api/get-footer-settings');
  settings.value = response?.data;
})

</script>
