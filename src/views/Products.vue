<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container">
            <!-- Breadcrumb -->
            <Breadcrumb />
          <div class="w-100 mb-4 d-flex justify-content-end">
            <button class="d-flex align-items-center gap-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <span class="primary-button d-none d-lg-block">Filters</span>
              <span class="primary-button p-1 p-lg-2">
                <i class="bi bi-funnel fs-3"></i>
              </span>
            </button>
          </div>
            <div class="row row-cols-2 row-cols-lg-5">
                <SingleProductCard />
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
    </section>


  <div class="offcanvas offcanvas-start bg-white border-none shadow" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title fw-semibold" id="offcanvasScrollingLabel">Product Filters</h3>
      <button data-bs-dismiss="offcanvas">
        <i class="bi bi-x-lg primary-color fs-3"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="product-filters">
        <h3 class="text-start fw-semibold mb-2">Price</h3>
        <div class="product-filter__price">
          <div class="d-flex gap-2 align-items-center">
            <label for="min" class="primary-color">$</label>
            <input type="number" name="min" v-model="min" class="primary-border-1" placeholder="Min">
          </div>
          <div class="d-flex gap-2 align-items-center">
            <label for="max" class="primary-color">$</label>
            <input type="number" name="max" v-model="max" class="primary-border-1" placeholder="Max">
          </div>
        </div>
        <h3 class="text-start fw-semibold mb-2 mt-4">Brand</h3>
        <ul class="product-filter__brand">
          <li>
            <label for="andrew_leblanc">
              <input type="checkbox" name="andrew_leblanc" id="andrew_leblanc" v-model="andrew_leblanc">
              <span>Andrew Leblanc</span>
            </label>
          </li>
          <li>
            <label for="cozzia">
              <input type="checkbox" name="cozzia" id="cozzia"  v-model="cozzia">
              <span>Cozzia</span>
            </label>
          </li>
          <li>
            <label for="flexsteel">
              <input type="checkbox" name="flexsteel" id="flexsteel"  v-model="flexsteel">
              <span>Flexsteel</span>
            </label>
          </li>
          <li>
            <label for="golden_technologies">
              <input type="checkbox" name="golden_technologies" id="golden_technologies"  v-model="golden_technologies">
              <span>Golden Technologies</span>
            </label>
          </li>
        </ul>

        <h3 class="text-start fw-semibold mb-2 mt-4">Categories</h3>
        <ul class="product-filter__brand">
          <li>
            <label for="accessories">
              <input type="checkbox" name="accessories" id="accessories" v-model="andrew_leblanc">
              <span>Accessories</span>
            </label>
          </li>
          <li>
            <label for="back_cover">
              <input type="checkbox" name="back_cover" id="back_cover"  v-model="back_cover">
              <span>Back Cover</span>
            </label>
          </li>
          <li>
            <label for="lift_chair">
              <input type="checkbox" name="lift_chair" id="lift_chair" v-model="lift_chair">
              <span>Lift Chair</span>
            </label>
          </li>
          <li>
            <label for="zero_gravity_chairs">
              <input type="checkbox" name="zero_gravity_chairs" id="zero_gravity_chairs"  v-model="zero_gravity_chairs">
              <span>Zero Gravity Chairs</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center gap-2 mt-4">
        <button class="primary-button primary-button--outline rounded-0">Reset</button>
        <button class="primary-button  rounded-0">Search</button>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {onMounted, ref} from 'vue'

    import SingleProductCard from "@/components/SingleProductCard.vue";
    import Breadcrumb from "@/components/Breadcrumb.vue";
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

<style scoped>
.offcanvas {
  width: 260px;
}
</style>