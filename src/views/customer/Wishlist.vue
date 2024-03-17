<script scoped>
</script>

<template>
    <section class="customer-section">
        <div class="container">
            <div class="dashboard-user mb-5">
                <div class="dashboard-user__icon">
                    <i class="bi bi-person"></i>
                </div>
                <div>
                    <p>Hello,</p>
                    <h3 class="text-capitalize">Tushar Imran</h3>
                </div>
            </div>
            <div class="order-head">
                <RouterLink to="/dashboard">
                    <i class="bi bi-arrow-left"></i>
                </RouterLink>
                <h3>My Wishlist</h3>
            </div>
            <div class="product-cart__items mb-0 pb-0">
                <div class="product-cart__items-item bg-white">
                    <div class="left">
                        <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Chair">
                    </div>
                    <div class="right">
                        <div class="d-flex flex-column justify-content-center" style="max-width: 300px;">
                            <RouterLink to="/product-details" class="d-inline-block product-title">PERFECT CHAIR® CLASSIC ZERO GRAVITY POWER RECLINER CHAIR</RouterLink>
                            <p><strong>Price</strong> $2,799.00</p>
                        </div>
                    
                        <div class="d-flex align-items-center  justify-content-lg-around w-100">
                            <div>
                                <RouterLink to="/cart" class="primary-button">Add To Cart</RouterLink>
                            </div>
                            <RouterLink to="" class="cancel-button">
                                <i class="bi bi-x-lg"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="product-cart__items-item bg-white">
                    <div class="left">
                        <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="Chair">
                    </div>
                    <div class="right">
                        <div class="d-flex flex-column justify-content-center" style="max-width: 300px;">
                            <RouterLink to="/product-details" class="d-inline-block product-title">PERFECT CHAIR® CLASSIC ZERO GRAVITY POWER RECLINER CHAIR</RouterLink>
                            <p><strong>Price</strong> $2,799.00</p>
                        </div>
                
                        <div class="d-flex align-items-center justify-content-lg-around w-100">
                            <div>
                                <RouterLink to="/cart" class="primary-button">Add To Cart</RouterLink>
                            </div>
                            <RouterLink to="" class="cancel-button">
                                <i class="bi bi-x-lg"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-footer">
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
            </div>
        </div>
    </section>
</template>