<template>
    <div class="col mb-3">
        <div class="product-card card">
            <RouterLink :to="`/product-details/${info?.id}`" class="product-card__thumbnail">
                <img :src="info.photo" alt="" class="card-img-top" />
            </RouterLink>
            <div class="product-card__body card-body">
                <div class="mb-2">
                    <RouterLink :to="`/product-details/${info?.id}`" class="product-card__body-title">{{ info.title }}</RouterLink>
                    <s>${{ info.selling_price}}</s>
                    <p>${{ info.buying_price}}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <RouterLink to="/" class="primary-button cart-button">Add To Cart</RouterLink>
                  <RouterLink to="/" class="add-to-wish">
                    <i class="bi bi-heart"></i>
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
            default:{},
            required:false,
        }
    })
</script>

<style lang="scss" scoped>
    .card {
        &:hover {
            .card-btns {
                opacity: 1;
                transition: all ease-in-out 0.4s;
            }
        }
    }
    .card-btns {
        opacity: 0;
        transition: all ease-in-out 0.4s;
    }

    
</style>
