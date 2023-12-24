<template>
    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
        <div class="card border position-relative">
            <RouterLink to="/product-detials">
                <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_FacingForward-Display_WEB_clip-j_456x456.jpg?v=1663823010" alt="" class="card-img-top" />
            </RouterLink>
            <div class="card-body">
                <span class="border-0 py-1 px-3 text-white bg-danger fs-4 mb-2">Sale</span>
                <RouterLink to="/product-detials" class="card-title text-dark fs-3 fw-semibold d-inline-block">Mid Back Ultimate Executive Office Chair</RouterLink>
                <s class="card-text fs-4">$8,499.00</s>
                <p class="card-text fs-3 text-danger">$7,999.00</p>
                <p class="card-text fs-3">MSRP at 10.499.00</p>
                <div class="card-btns d-flex align-item-center gap-3">
                    <button class="border-0  py-2 px-3 fs-5">QUICK VIEW</button>
                    <button class="border-0 bg-info text-white py-2 px-3 fs-5">CHOOSE OPTION</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .card-btns {
        position: relative;
        opacity: 0;
        transform: translateY(-20px) !important;
        transition: all ease-in-out 0.4s;
    }
    .card:hover .card-btns {
        display: flex;
        opacity: 1;
        transform: translateY(0px) !important;
        transition: all ease-in-out 0.4s;
    }
</style>