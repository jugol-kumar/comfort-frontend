<template>
    <!-- Page header -->
    <section class="py-3">
        <div class="container">
            <div class="row h-100">
                <div class="w-20 d-none d-lg-block">
                    <div class="dropDown position-relative">
                        <ul class="d-flex flex-column bg-white rounded shadow h-100 border vh-25 vh-lg-45 overflow-y-scroll">
                            <li class="dropDownLink" v-for="link in links" :key="link.id">
                                <RouterLink to="/" class="navLink">
                                  <span class="navIcon" v-html="link.icon"></span>
                                  {{ link.label }}
                                </RouterLink>
                                <div v-if="link.sublinks" class="dropDownHoverItems">
                                    <ul class="navItems rounded shadow border">
                                        <li v-for="(item, i) in link.sublinks" :key="`single-item-${i}`">
                                            <RouterLink to="/" class="navLink navLink--Sub">
                                              <span class="navIcon" v-if="item.icon" v-html="item.icon"></span>
                                              {{ item.label }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div class="w-100 w-lg-80">
                    <div id="carouselExampleDark" class="carousel slide vh-25 vh-lg-45">
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner h-100">
                          <div class="carousel-item active h-100" data-bs-interval="10000">
                              <RouterLink to="" class="h-100">
                                  <img src="@/assets/images/carousel/1101.png" class="d-block rounded w-100 h-100" alt="..." />
                              </RouterLink>
                          </div>
                          <div class="carousel-item h-100" data-bs-interval="2000">
                              <RouterLink to="">
                                  <img src="@/assets/images/carousel/1100.png" class="d-block w-100 rounded h-100" alt="..." />
                              </RouterLink>

                          </div>
                          <div class="carousel-item h-100">
                              <RouterLink to="">
                                  <img src="https://relaxtheback.com/cdn/shop/files/Qi_XE_Pro_Save_500_Desktop_Banner_HOLIDAY_2023_1_1348x400.png?v=1699299403" class="d-block w-100 h-100 rounded" alt="..." />
                              </RouterLink>
                          </div>
                        </div>
                        <button class="carousel-control-prev primary-bg top-50 rounded-5" style="width: 40px;height: 40px; transform: translateY(-50%); left: 10px;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next primary-bg top-50 rounded-5" style="width: 40px;height: 40px; transform: translateY(-50%); right: 10px;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
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
                    <img :src="`${$API_URL}${category?.photo}`" alt="">
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
