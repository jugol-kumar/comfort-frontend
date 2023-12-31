<template>
    
    <div class="d-flex align-items-center justify-content-center" style="min-height: 100vh;">

        <div class="" v-for="item in paymentMethods" :key="item.value">
            <label :for="item.value">{{  item.name }}</label>
            <input type="radio" name="payment-method" v-model="order.paymentMethod" :value="item.value" :id="item.value" class="form-control-checkbox">
        </div>

        <button class="btn btn-lg btn-info">
            Order By Cache On Delivery

        </button>

        
    </div>
</template>

<script setup>

import { useCartStore } from '@/stores/useCartStore';
import { ref } from 'vue';
import {  useRoute } from 'vue-router';
const route = useRoute();
const cartStore = useCartStore();

const order = ref({
    addressId:route.query.addressId,
    orders: cartStore.getCartItems,
    paymentMethod:'cod'
})

const paymentMethods = ref([
    {
        name: 'Cash On Delivery',
        value: 'cod'
    },
    {
        name: 'Stripe',
        value: 'strip'
    },
    {
        name: 'Paypal',
        value: 'paypal'
    },
    {
        name: 'Others',
        value: 'other'
    },

])

const setPaymentMethod = (event) => order.value.paymentMethod = event.target.value

const makePayment = () => {
    //
}

</script>

