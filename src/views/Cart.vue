<script setup>
</script>

<template>
    <section>
        <div class="product-cart container-fluid py-5">
            <div class="d-flex align-items-center gap-2 py-8">
                <img src="https://pdpone.syfpos.com/cs/groups/public/documents/et_imagetype/etimg063608.png" alt="..." style="width:70px;">
                <p>Interest-free. $117/mo with 24-month financing.<RouterLink to="" class="text-danger fw-semibold"> Learn how</RouterLink> </p>
            </div>
            <div class="product-cart__head d-flex align-items-center justify-content-between">
                <h2>Your Cart</h2>
                <div class="d-flex align-items-center gap-3">
                    <div>
                        <p>Subtotal</p>
                        <h3>$5,598.00</h3>
                    </div>
                    <RouterLink to="" class="primary-button">
                        <i class="bi bi-cart"></i> Check Out
                    </RouterLink>
                </div>
            </div>
            <div class="product-cart__items">
                <div class="product-cart__items-item">
                    <div class="left">
                        <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_FacingForward-Display_WEB_clip-j_456x456.jpg?v=1663823010" alt="Chair">
                    </div>
                    <div class="right">
                        <div class="d-flex flex-column justify-content-center">
                            <RouterLink to="/product-details" class="d-inline-block product-title">PERFECT CHAIR® CLASSIC ZERO GRAVITY POWER RECLINER CHAIR</RouterLink>
                            <p><strong>Price</strong> $2,799.00</p>
                        </div>
                        
                        <div class="d-flex align-items-center gap-5">
                            <div>
                                Quantity
                            </div>
                            <p>$2,799.00</p>
                            <RouterLink to="" class="cancel-button">
                                <i class="bi bi-x-lg"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="product-cart__items-item">
                    <div class="left">
                        <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_FacingForward-Display_WEB_clip-j_456x456.jpg?v=1663823010" alt="Chair">
                    </div>
                    <div class="right">
                        <div class="d-flex flex-column justify-content-center">
                            <RouterLink to="/product-details" class="d-inline-block product-title">PERFECT CHAIR® CLASSIC ZERO GRAVITY POWER RECLINER CHAIR</RouterLink>
                            <p><strong>Price</strong> $2,799.00</p>
                        </div>
                    
                        <div class="d-flex align-items-center gap-5">
                            <div>
                                Quantity
                            </div>
                            <p>$2,799.00</p>
                            <RouterLink to="" class="cancel-button">
                                <i class="bi bi-x-lg"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-cart__footer border-top pt-5">
                <div class="d-flex align-items-center justify-content-between py-3">
                    <p class="fs-3 fw-medium text-capitalize">Subtotal</p>
                    <p class="fs-3 fw-medium">$5,598.00</p>
                </div>
                <p class="text-secondary mb-3">Taxes and shipping calculated at checkout</p>
                <RouterLink to="" class="primary-button px-8">
                    <i class="bi bi-cart"></i> Check Out
                </RouterLink>
                <div class="d-flex justify-content-center mt-8">
                    <RouterLink to="" class="text-dark fs-4 d-flex align-items-center gap-2">
                        Continue Shopping <i class="bi bi-arrow-right"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
