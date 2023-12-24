<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                    <!-- Flush Nav -->
                    <div class="flush-nav">
                        <nav class="nav">
                            <a class="nav-link active ps-0" href="#">All</a>
                            <a class="nav-link" href="blog-category.html">Courses</a>
                            <a class="nav-link" href="blog-category.html">Workshop</a>
                            <a class="nav-link" href="blog-category.html">Tutorial</a>
                            <a class="nav-link" href="blog-category.html">Company</a>
                        </nav>
                    </div>
                </div>

                <div v-if="loading">
                    loading Component
                </div>

                <div v-if="error">
                    {{  error  }}
                </div>

                <SingleProductCardVue v-else v-for="i in data" :key="i"/>

                <!-- Buttom -->
                <div class="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
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