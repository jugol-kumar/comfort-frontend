<script setup>
import { onMounted, ref } from 'vue';
import { useCartStore } from "@/stores/useCartStore";
import useAxios from "@/composables/useAxios"
import { useAuthStore } from "@/stores/useAuthStore";
import {useRouter, useRoute} from "vue-router"

const cartStore = useCartStore();
const authStore = useAuthStore();
const { loading, error, sendRequest } = useAxios();
const router = useRouter()
const route = useRoute();

const newAddress = ref(false)
const deliveryCharg = ref({
    setDeliveryAddress:false,
    setDesiveryCharge:0,
    addressId:null,
})

const addresses = ref(null);

const checkoutData = ref(null);
const setDeliveryAddress = (event) => {
    deliveryCharg.value.setDeliveryAddress = true;
    deliveryCharg.value.setDesiveryCharge = event.order_area?.delivery_charge;
    deliveryCharg.value.addressId = event.id
}

const payment = () =>{
    if(deliveryCharg.value.setDeliveryAddress){
        router.push({
            name:"payment",
            query: { 
                addressId: deliveryCharg.value.addressId
            }
        })
    }else{
        $toast.error("Please Select Your Delivery Address...")
    }
}

onMounted(async () => {
    const token = await authStore.getToken();
    const data = await sendRequest({
        method: 'get',
        url: "/api/address",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    addresses.value = data?.data?.addresses

    if(route.query.invalidAddressId){
        $toast.error("Please Select Your Shipping Details Before Payment.")
    }
})

</script>

<template>
    <section class="checkout">
        <div class="container-fluid my-5">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="checkout__shipping-add">
                        <h3>Shipping Address</h3>
                        <div class="d-flex flex-wrap created-address">
                            <div class="col-md-6 col-12 pe-2" v-for="(address, i) in addresses" :key="`add-${i}`">
                                <!-- Home Address -->
                                <input type="radio" name="address" :id="`add-${i}`" @input="setDeliveryAddress(address)"
                                    :value="i" class="address-radio address-radio--one">
                                <!-- when set default enabled -->
                                <!-- :checked="address?.set_default" -->
                                <label :for="`add-${i}`" role="button">
                                    <h3>{{ address?.title }}</h3>
                                    <div>
                                        <p class="mb-2">{{ address?.address }}</p>
                                        <p>{{ address?.email }}</p>
                                        <p class="mb-2">{{ address?.phone }}</p>
                                        <p>Area: {{ address?.order_area?.area_name }} & Delivery Charge: {{
                                            address?.order_area?.delivery_charge }} $</p>
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
                        <div v-if="newAddress" class="checkout__shipping-add-wrapper">
                            <div class="checkout__shipping-add-wrapper-new">
                                <h3>New Address</h3>
                                <form @submit.prevent="">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Full Name"
                                            v-model="full_name">
                                        <label for="floatingInput">Full Name</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Address"
                                            v-model="address">
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
                                            <input type="text" class="form-control" id="floatingInput" placeholder="State"
                                                v-model="state">
                                            <label for="floatingInput">State</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="ZIP Code" v-model="zip_code">
                                            <label for="floatingInput">ZIP Code</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="Phone Number" v-model="phone_number">
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
                                    <div class="checkout__product-items__item" v-for="(item, i) in cartStore.getCartItems"
                                        :key="`cart-item-${i}`">
                                        <div class="d-flex align-items-center">

                                            <img :src="`${$API_URL}/storage/uploads/${item?.selectSku?.image ?? item?.data?.images[0]?.image}`"
                                                style="width: 70px;height: auto;" alt="Chair">

                                            <div class="pe-2">
                                                <p>{{ item?.data?.title }}</p>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between w-50 ps-5">
                                            <div>
                                                <p>Qty: {{ item.selectSku?.selectQty }}</p>
                                            </div>
                                            <div>$ {{ item.selectSku?.price * item.selectSku?.selectQty }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="pt-3 text-end fw-bold">{{ cartStore.getCartLength }} Items. Subtotal: <span
                                            class="text-info">$ {{ cartStore.getCartTotalPrice }}</span></p>
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
                                        <span>{{ deliveryCharg?.setDesiveryCharge }} $</span>
                                    </li>
                                    <li class="border-top border-2">
                                        <strong>Total Payment</strong>
                                        <strong>{{ cartStore.getCartTotalPrice + deliveryCharg?.setDesiveryCharge }} $</strong>
                                    </li>
                                </ul>
                                <button @click="payment" class="primary-button text-center">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>