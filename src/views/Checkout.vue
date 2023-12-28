<script setup>
import {ref} from "vue"
import { useCartStore } from "@/stores/useCartStore"
const cartStore = useCartStore();

const deliveryCharg = ref(10);

</script>

<template>
    <section class="checkout">
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="checkout__shipping-add">
                        <h3>Shipping Address</h3>
                        <form>
                            <div>
                                <input type="text" placeholder="Full Name" v-model="full_name">
                            </div>
                            <div>
                                <input type="text" placeholder="Address" v-model="full_name">
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <input type="text" placeholder="City" v-model="city">
                                <input type="text" placeholder="State" v-model="state">
                                <input type="text" placeholder="ZIP Code" v-model="zip_code">
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" v-model="phone_number">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <div class="row flex-column gap-3">
                        <div class="col-12">
                            <div class="checkout__product">
                                <div class="checkout__product-items">
                                    <div class="checkout__product-items__item" v-for="(item, i) in cartStore.getCartItems"
                                        :key="`checkout-item-${i}`">
                                        <div class="d-flex align-items-center">
                                            <img :src="`${$API_URL}/storage/uploads/${item?.selectSku?.image ?? item?.data?.images[0]?.image}`"
                                                alt="Chair" style="width: 70px;height: auto;">
                                            <div class="d-flex flex-column">
                                                <RouterLink to="/" class="text-capitalize fw-bold product-title">
                                                    <h2 class="fs-4">{{ item.data.title }}-{{item?.selectSku?.varient?.replace(/\//g, '-').slice(0, -1) }}</h2>
                                                </RouterLink>

                                                <small>Price : {{ item?.selectSku?.price }} $</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center gap-5">
                                            <div>
                                                <p>Qty:{{ item.selectSku?.selectQty }}</p>
                                            </div>
                                            <div>{{ item?.selectSku?.price * item.selectSku?.selectQty }} $</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="pt-3 text-end">{{ cartStore.getCartLength }} Items. Subtotal: 
                                        <span class="text-info">{{ cartStore.getCartTotalPrice }} $</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="checkout__payment">
                                <p class="text-dark fw-semibold fs-3">Order Summary</p>
                                <ul>
                                    <li>
                                        <span>Items Total</span>
                                        <span>{{ cartStore.getCartTotalPrice }} $</span>
                                    </li>
                                    <li>
                                        <span>Delivery Fee</span>
                                        <span>{{ deliveryCharg }} $</span>
                                    </li>
                                    <li class="border-top border-2">
                                        <strong>Total Payment</strong>
                                        <strong>{{  cartStore.getCartTotalPrice + deliveryCharg }} $</strong>
                                    </li>
                                </ul>
                                <RouterLink to="" class="primary-button text-center">Place Order</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>