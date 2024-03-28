<script setup>

import {useWishListStore} from "@/stores/useWishListStore.js";
import {onMounted} from "vue";
import CustomerUser from "@/components/CustomerUser.vue";

const store = useWishListStore();


onMounted(()=>{
  store.initWishList();
})

</script>

<template>


  <section class="customer-section">
    <div class="container">
      <CustomerUser/>
      <div class="order-head">
        <RouterLink to="/dashboard">
          <i class="bi bi-arrow-left"></i>
        </RouterLink>
        <h3>My Wishlist</h3>
      </div>
      <div class="product-cart__items mb-0 pb-0" v-for="item in store.getWishListItems">
        <div class="product-cart__items-item bg-white justify-content-between">
          <div class="left">
            <img :src="`${$API_URL}/storage/uploads/${item?.images[0]?.image}`" alt="Chair">
          </div>
          <div class="right">
            <div class="d-flex flex-column justify-content-center" style="max-width: 300px;">
              <RouterLink to="/product-details" class="d-inline-block product-title">{{ item?.title }}</RouterLink>
              <p><strong>Price</strong> $ {{ item?.showPrice }}</p>
            </div>

            <div class="d-flex align-items-center  justify-content-around w-100">
              <button @click="store.removeFromWishList(item)" class="cancel-button">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>


      </div>
<!--      <div class="order-footer">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>-->
    </div>
  </section>

</template>


