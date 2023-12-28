
<template>
    <div class="quantity">
        <button @click="decrement()">&mdash;</button>
            <input type="text" :value="quantity" readonly>
        <button @click="increment()">&#xff0b;</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const quantity = ref(1);

const increment = () => {
    quantity.value++;
};
const decrement = () => {
    if (quantity.value === 1) {
        alert('Negative quantity not allowed');
    } else {
        quantity.value--;
    }
};
</script>
<style lang="scss" scoped>
    .quantity {
        border: 1px solid #C1CDDD;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            border: 0;
            max-width: 70px;
            min-width: 70;
            border-left: 1px solid #C1CDDD;
            border-right: 1px solid #C1CDDD;
            padding: 15px;
            text-align: center;
        }

        button {
            padding: 15px;
        }
    }
</style>