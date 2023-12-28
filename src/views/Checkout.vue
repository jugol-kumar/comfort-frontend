<script setup></script>

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
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div>
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center gap-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div>
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center gap-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="pt-3 text-end">2 Items. Subtotal: <span class="text-info">$498</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="checkout__payment">
                                <p class="text-dark fw-semibold fs-3">Order Summary</p>
                                <ul>
                                    <li>
                                        <span>Items Total</span>
                                        <span>$498</span>
                                    </li>
                                    <li>
                                        <span>Delivery Fee</span>
                                        <span>$69</span>
                                    </li>
                                    <li>
                                        <span>Total Payment</span>
                                        <span>$567</span>
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