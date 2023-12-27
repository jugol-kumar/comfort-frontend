<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">
            <nav aria-label="breadcrumb" class="my-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/" class="fs-4">Home</RouterLink></li>
                    <li class="breadcrumb-item active fs-4" aria-current="page">Recliners</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-lg-2 col-12">
                    <div class="product-filter">
                        <h3>Filters</h3>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Price
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    ....
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Brand
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">...</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Product Type
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-10 col-12">
                    <div class="products">
                        <div class="row">
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