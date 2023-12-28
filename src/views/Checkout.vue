<script setup></script>

<template>
    <section class="checkout">
        <div class="container-fluid my-5">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="checkout__shipping-add">
                        <h3>Shipping Address</h3>
                        <div class="d-flex flex-wrap created-address">
                            <div class="col-md-6 col-12 pe-2">
                                <!-- Home Address -->
                                <input type="radio" name="address" id="add-1" value="1" class="address-radio address-radio--one">
                                <label for="add-1" role="button">
                                    <h3>Home Address</h3>
                                    <div>
                                        <p class="mb-2">Dhaka, merul badda , dit road, tolarbag , #4 road, 2012</p>
                                        <p>home@mail.com</p>
                                        <p class="mb-2">01200000000</p>
                                        <p>Area: Dhaka & Delivery Charge: 50$</p>
                                    </div>
                                </label>
                            </div>
                            <div class="col-md-6 col-12 ps-2">
                                <!-- Office Address -->
                                <input type="radio" name="address" id="add-2" value="2" class="address-radio address-radio--two">
                                <label  for="add-2"  role="button">
                                    <h3>Office Address</h3>
                                    <div>
                                        <p class="mb-2">Dhaka, merul badda , dit road, tolarbag , #4 road, 2012</p>
                                        <p>office@mail.com</p>
                                        <p class="mb-2">01200000000</p>
                                        <p>Area: Dhaka & Delivery Charge: 90$</p>
                                    </div>
                                </label>
                            </div>
                            <div class="col-md-6 col-12 pe-2">
                                <button class="add-new-add" @click="toggleAddressForm()">
                                    <div class="d-flex flex-column align-items-center">
                                        <i class="bi bi-plus"></i>
                                        Add New Address
                                    </div>
                                </button>
                            </div>
                        </div>
                        <!-- <div class="py-5">
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
                        </div> -->
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
                                            <div class="pe-2">
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div class="pe-2">
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div class="pe-2">
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div class="pe-2">
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                    <div class="checkout__product-items__item">
                                        <div class="d-flex align-items-center">
                                            <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Mid Back Ultimate Executive Office Chair" style="width: 70px;height: auto;">
                                            <div class="pe-2">
                                                <p>Mid Back Ultimate Executive Office Chair</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: 1</p>
                                            </div>
                                            <div>$249</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="pt-3 text-end">5 Items. Subtotal: <span class="text-info">$498</span></p>
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