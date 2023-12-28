<script setup>
import SingleProductCard from '@/components/SingleProductCard.vue'
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="wish-list">
                <h3 class="text-semibold fs-2 py-3">Wishlist</h3>
                <div class="px-0 px-md-8">
                    <div class="border-bottom  mb-4 d-flex align-items-center justify-content-between">
                        <h3 class="text-capitalize fs-4 py-4">My Wishlist</h3>
                        <RouterLink to="/" class="d-inline-block">
                            <i class="bi bi-three-dots-vertical"></i>
                        </RouterLink>
                    </div>
                    <div class="row">
                        <SingleProductCard />
                        <SingleProductCard />
                        <SingleProductCard />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>