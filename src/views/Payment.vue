<script setup>
</script>
<template>
    <section class="customer-section">
        <div class="container">
            <h3 class="text-capitalize fw-semibold fs-3">Select Your Payment Method</h3>
            <div class="method row flex-wrap mt-5">
                <div class="col-lg-6">
                    <div class="row flex-wrap">
                        <div class="col-6">
                            <input type="radio" name="payment" id="cash_on_delivery" class="method-radio">
                            <label for="cash_on_delivery" class="method-item" role="button">
                                <i class="bi bi-cash-coin"></i>
                                <p>Cash On Delivery</p>
                            </label>
                        </div>
                        <div class="col-6">
                            <input type="radio" name="payment" id="credit_card" class="method-radio">
                            <label for="credit_card" class="method-item" role="button">
                                <i class="bi bi-credit-card"></i>
                                <p>Credit/Debit Card</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="method-item align-items-start">
                        <h3 class="text-start fw-semibold">Order Summary</h3>
                        <ul class="w-100 mb-4">
                            <li class="d-flex align-items-center justify-content-between mb-3">
                                <p class="fs-5">Subtotal (1 Items and shipping fee included)</p>
                                <p>$ 479</p>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                <p class="fs-3">Total Amount</p>
                                <p class="fs-3 text-info">$ 479</p>
                            </li>
                        </ul>
                        <button class="primary-button">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.method {
    &-item {
        
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: center;
        padding: 30px;
        i {
            font-size: 28px;
        }
        p {
            font-weight: 500;
        }
    }
}
.method-radio {
    display: none;
}
.method-radio:checked + label{
    background: #0FA5E9;
    i,p {
        color: #fff;
    }
}
</style>