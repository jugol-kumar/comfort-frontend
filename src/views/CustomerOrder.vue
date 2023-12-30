<script setup></script>
<template>
    <section class="customer-section">
        <div class="container">
            <div class="dashboard-user">
                <div class="dashboard-user__icon">
                    <i class="bi bi-person"></i>
                </div>
                <div>
                    <p>Hello,</p>
                    <h3 class="text-capitalize">Tushar Imran</h3>
                </div>
            </div>
            <div class="order py-5">
                <div class="order-head">
                    <RouterLink to="/dashboard">
                        <i class="bi bi-arrow-left"></i>
                    </RouterLink>
                    <h3>Order History</h3>
                </div>
                <div class="order-items row flex-column gap-5 mt-4">
                    <div class="order-items__item">
                        <div class="order-items__item-head border-bottom">
                            <div>
                                <h3 class="text-capitalize fs-3 fw-semibold">Order #4</h3>
                                <p>Order Date: 4-10-2023</p>
                            </div>
                            <p class="pending">
                                <i class="bi bi-check2-circle"></i> Pending
                            </p>
                        </div>
                        <div class="order-items__item-body">
                            <div class="thumbnail">
                                <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="">
                            </div>
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <div>
                                    <h3 class="title">Mid Back Ultimate Executive Office Chair</h3>
                                    <p>+ 1 item(s)</p>
                                </div>
                                <p class="fw-semibold fs-3">$8,499.00</p>
                                <div>
                                    <RouterLink to="" class="primary-button">View</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-items__item">
                        <div class="order-items__item-head border-bottom">
                            <div>
                                <h3 class="text-capitalize fs-3 fw-semibold">Order #4</h3>
                                <p>Order Date: 4-10-2023</p>
                            </div>
                            <p class="pending">
                                <i class="bi bi-check2-circle"></i> Pending
                            </p>
                        </div>
                        <div class="order-items__item-body">
                            <div class="thumbnail">
                                <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="">
                            </div>
                            <div class="d-flex justify-content-between align-items-center w-100">
                                <div>
                                    <h3 class="title">Mid Back Ultimate Executive Office Chair</h3>
                                    <p>+ 1 item(s)</p>
                                </div>
                                <p class="fw-semibold fs-3">$8,499.00</p>
                                <div>
                                    <RouterLink to="" class="primary-button">View</RouterLink>
                                </div>
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
        </div>
    </section>
</template>