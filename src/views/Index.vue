<template>
    <!-- Page header -->
    <section>
        <div class="container-fluid">
            <div class="row">
              <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                <span class="placeholder col-12 rounded-lg" style="height: 40vh"></span>
              </p>

              <div v-else id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button v-for="(item, index) in sliders?.data" :key="index" type="button" data-bs-target="#carouselExampleDark"
                          :data-bs-slide-to="index" :class="{ 'active': index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
                </div>

                <div class="carousel-inner">
                  <div v-for="(item, index) in sliders?.data" :key="index" class="carousel-item" :class="{ 'active': index === 0 }"
                       :data-bs-interval="5000">
                    <a :href="item.link">
                      <img :src="$API_URL+'/storage/'+item.image" class="d-block w-100" :alt="'Slide ' + (index + 1)" />
                    </a>
                  </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container-fluid py-3 py-md-8">
            <h2 class="py-5">OUR LATEST PRODUCTS</h2>
            <div class="row row-cols-md-5 row-cols-2 match-height" v-if="data?.length > 0">
                <SingleProductCardVue v-for="item in data" :key="`product-${item.id}`" :info="item" />
            </div>
            <div v-else-if="loading">
                <div class="row row-cols-2 row-cols-md-5 match-height">
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
                        <p class="text-capitalize">{{ category?.description }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="container-fluid py-8">
            <!-- <h2 class="py-5">SHOP OUR HOLIDAY SPECIALS</h2> -->
            <div class="row row-cols-2 row-cols-md-5 match-height" v-if="category?.products?.length > 0">
                <SingleProductCardVue v-for="item in category?.products" :key="`product-${item.id}`" :info="item" />
            </div>
            <div v-else>
                <h2>No product found search query</h2>
            </div>
        </div>


    </section>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import SingleProductCardVue from "@/components/SingleProductCard.vue";
import useAxios from "@/composables/useAxios"
import PlaceholderProdctCard from '@/components/PlaceholderProdctCard.vue';

const { loading, error, sendRequest } = useAxios();
const data = ref(null);

const categories = ref(null)
const sliders = ref(null)

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


const getAllSliders = async () => {
  sliders.value = await sendRequest({
      method: 'get',
      url: '/api/sliders',
    })
}

onMounted(async () => {
    await getProducts();
    await getCategories();
    await getAllSliders();
});
</script>
