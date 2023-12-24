<template>
    <!-- Page header -->
    <section class="py-8">
        <div class="container">
            <div class="row">
                <div class="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
                    <div class="text-center mb-5">
                        <h1 class="display-2 fw-bold">Welcome to Comfort Zone.</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <h2 class="text-center text-uppercase fs-2 mb-5">SHOP OUR HOLIDAY SPECIALS</h2>
            <div class="row">

                <SingleProductCardVue v-for="item in data" :key="`product-${item.id}`" :info="item"/>
                <!-- Buttom -->
                <div v-if="loading" class="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
                    <a href="#" class="btn btn-primary">
                        <div class="spinner-border spinner-border-sm me-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        Load More
                    </a>
                </div>            
            </div>
        </div>
    </section>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import SingleProductCardVue from "@/components/SingleProductCard.vue";
    import useAxios from "@/composables/useAxios"
    const { loading, error, sendRequest } = useAxios();
    const data = ref(null);

    onMounted(async () => {
      const res = await sendRequest({
        method: 'get',
        url: '/api/product-with-variations',
      });
      data.value = res.data
    });
</script>
