<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">

            <!-- Breadcrumb -->
            <Breadcrumb />


            <div class="row">
                <!-- <div class="col-lg-2 col-12">
                    <ProductFilter />
                </div> -->
                <div class="col-lg-12 col-12">

                    <div class="products">
                        <div class="row  row-cols-6 match-height" v-if=" data?.data?.length > 0">
                            <SingleProductCard v-for="(info, i) in data?.data" :key="`single-f-p-${i}`" :info="info"/>
                        </div>
                        <div v-else-if="loading">
                            <div class="row  row-cols-5 match-height">
                                <PlaceholderProdctCard v-for="i in 25" :key="`place-image-${i}`"/>
                            </div>
                        </div>
                        <div v-else>
                            <h2>No product found search query</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import PlaceholderProdctCard from "@/components/PlaceholderProdctCard.vue"
    import SingleProductCard from "@/components/SingleProductCard.vue";
    import Breadcrumb from "@/components/Breadcrumb.vue";
    import ProductFilter from "@/components/ProductFilter.vue"
    import useAxios from "@/composables/useAxios"
    import { useRoute } from 'vue-router';
import PlaceholderProdctCardVue from '@/components/PlaceholderProdctCard.vue';
    const { loading, error, sendRequest } = useAxios();
    const data = ref(null);
    const route = useRoute();


    onMounted(async () => {
        const queryString = Object.keys(route.query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(route.query[key])}`)
        .join('&');
        const responseData = await sendRequest({
            method: 'get',
            url: `/api/product-filter?${queryString}`,
        });
        data.value = responseData?.data;
    });
</script>

<style>

</style>