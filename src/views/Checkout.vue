<script>
export default {
    data() {
        return {
            newAddress: false
        }
    }
}
</script>

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
                                <button class="add-new-add" v-show="!newAddress" @click="newAddress = true">
                                    <div class="d-flex flex-column align-items-center">
                                        <i class="bi bi-plus"></i>
                                        Add New Address
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div v-if="newAddress"  class="checkout__shipping-add-wrapper">
                            <div class="checkout__shipping-add-wrapper-new" >
                                <h3>New Address</h3>
                                <form @submit.prevent="">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" v-model="full_name">
                                        <label for="floatingInput">Full Name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Address" v-model="address">
                                        <label for="floatingInput">Address</label>
                                    </div>
                                    <div class="d-flex align-items-center gap-3">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Add New City</option>
                                            <option value="1">Dhaka</option>
                                            <option value="2">Rajshahi</option>
                                            <option value="3">Pabna</option>
                                        </select>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="State" v-model="state">
                                            <label for="floatingInput">State</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="ZIP Code" v-model="zip_code">
                                            <label for="floatingInput">ZIP Code</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Phone Number" v-model="phone_number">
                                            <label for="floatingInput">Phone Number</label>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end gap-3">
                                        <button class="primary-button" type="submit">Save</button>
                                        <button class="secondary-button" @click="newAddress = !newAddress">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
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