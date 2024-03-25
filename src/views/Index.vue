<template>
    <!-- Page header -->
    <section>
        <div class="container-fluid">
            <div class="row">
                <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <RouterLink to="">
                                <img src="https://relaxtheback.com/cdn/shop/files/GiftsOfComfortAndJoy-DesktopBanner_HOLIDAY_2023_1_2588x771.jpg?v=1703010563"
                                    class="d-block w-100" alt="..." />
                            </RouterLink>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <RouterLink to="">
                                <img src="https://relaxtheback.com/cdn/shop/files/Gravis_Save_500_Desktop_Homepage_Banner_2023_83c52d95-9199-4a2c-b2e6-fd76495c96e3_1348x400.png?v=1698875670"
                                    class="d-block w-100" alt="..." />
                            </RouterLink>

                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <RouterLink to="">
                                <img src="https://relaxtheback.com/cdn/shop/files/Qi_XE_Pro_Save_500_Desktop_Banner_HOLIDAY_2023_1_1348x400.png?v=1699299403"
                                    class="d-block w-100" alt="..." />
                            </RouterLink>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-fluid py-8">
            <h2 class="py-5">OUR LATEST PRODUCTS</h2>
            <div class="row row-cols-5 match-height" v-if="data?.length > 0">
                <SingleProductCardVue v-for="item in data" :key="`product-${item.id}`" :info="item" />
            </div>
            <div v-else-if="loading">
                <div class="row  row-cols-5 match-height">
                    <PlaceholderProdctCard v-for="i in 25" :key="`place-image-${i}`" />
                </div>
            </div>
            <div v-else>
                <h2>No product found search query</h2>
            </div>
        </div>
    </section>


    <section v-for="(category, i) in categories" :key="`cat-products-${i}`">
        <div class="container-fluid">
            <div class="new-arrivals">
                <RouterLink to="" class="new-arrivals__content">
                    <img :src="`${$API_URL}/storage/${category?.photo}`" alt="">
                    <div class="new-arrivals__content__text">
                        <h2>{{ category?.name }}</h2>
                        <p>This season give the gift of wellness. A gift that offers relief, recovery, or relaxation for
                            you or someone you care about.</p>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="container-fluid py-8">
            <!-- <h2 class="py-5">SHOP OUR HOLIDAY SPECIALS</h2> -->
            <div class="row row-cols-5 match-height" v-if="category?.products?.length > 0">
                <SingleProductCardVue v-for="item in category?.products" :key="`product-${item.id}`" :info="item" />
            </div>
            <div v-else>
                <h2>No product found search query</h2>
            </div>
        </div>


    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SingleProductCardVue from "@/components/SingleProductCard.vue";
import BlogCard from "@/components/BlogCard.vue";
import useAxios from "@/composables/useAxios"
import PlaceholderProdctCard from '@/components/PlaceholderProdctCard.vue';
const { loading, error, sendRequest } = useAxios();
const data = ref(null);

const categories = ref(null)


const getProducts = async () => {
    const res = await sendRequest({
        method: 'get',
        url: '/api/product-with-variations',
    });
    data.value = res.data

}

const getCategories = async () => {
    const res = await sendRequest({
        method: 'get',
        url: '/api/home-categories',
    });
    categories.value = res.data
}

onMounted(async () => {
    await getProducts();
    await getCategories();
});
</script>
