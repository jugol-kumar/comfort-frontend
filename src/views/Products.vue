<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">

            <!-- Breadcrumb -->
            <Breadcrumb />

            <div class="row">
                <div class="col-lg-2 col-12">

                    <!-- Product Filter -->
                    <ProductFilter />
                </div>
                <div class="col-lg-10 col-12">
                    <div class="products">
                        <div class="row">
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                            <SingleProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {onMounted, ref} from 'vue'

    import SingleProductCard from "@/components/SingleProductCard.vue";
    import Breadcrumb from "@/components/Breadcrumb.vue";
    import ProductFilter from "@/components/ProductFilter.vue"
    import useAxios from "@/composables/useAxios"
    const { loading, error, sendRequest } = useAxios();
    const data = ref(null);

    onMounted(async () => {
      const responseData = await sendRequest({
        method: 'get',
        url: '/api/product-with-variations',
      });
      data.value = responseData;
      console.log(responseData)
    });
</script>

<style>

</style>