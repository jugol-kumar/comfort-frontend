<template>
    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
        <div class="product-card">
            <RouterLink :to="`/product-details/`" class="product-card__thumbnail">
                <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="" class="card-img-top" />
            </RouterLink>
            <div class="product-card__body">
                <RouterLink to="/product-details" class="product-card__body-title">Mid Back Ultimate Executive Office Chair</RouterLink>
                <h3 class="product-card__body-price">$8,499.00 <strike>$9,999.00</strike></h3>
                <div class="">
                    <RouterLink to="/cart" class="primary-button w-100 text-center">
                        <i class="bi bi-cart"></i> Add To Cart
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {info} = defineProps({
        info:{
            type:Object,
            required:true,
        }
    })
</script>