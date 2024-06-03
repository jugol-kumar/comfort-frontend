<script setup>
import SingleProductCard from '@/components/SingleProductCard.vue'
import ProductReviewQuestion from '@/components/ProductReviewQuestion.vue'
import QuantityCounter from '@/components/QuantityCounter.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'


import { onMounted, ref, watch } from 'vue'
import useAxios from "@/composables/useAxios"
import { useCartStore } from "@/stores/useCartStore"
const cartStore = useCartStore();

import { useRoute } from 'vue-router'
import {useWishListStore} from "@/stores/useWishListStore.js";

const { params } = useRoute();

const { loading, error, sendRequest } = useAxios();
const data = ref(null);


const selectVarient = ref([]);
const getThambImage = ref(null)

const setThambImage = (image) => {
    getThambImage.value = {
        id: image.id,
        img: image.image
    }
}

const buyQty = ref(1)
const varientPrice = ref(0)
const selectVarientProduct = ref({});
watch([selectVarient, buyQty], ([item, qty]) => {
    varientPrice.value = 10 * qty
    const title = item.map(item => item.selectVariant).join('/') + "/";
    const selectVarient = data?.value?.stocks?.filter(item => {
        if (item.varient === title) {
            return item;
        }
    })[0]
    selectVarientProduct.value = { ...selectVarient, totalPrice: selectVarient?.price * qty }
}, { deep: true })


const qtyUp = () => {
    if (buyQty.value < 10) {
        buyQty.value++
    }
}

const qtyDown = () => {
    if (buyQty.value > 1) {
        buyQty.value--
    }
}


onMounted(async () => {
    const res = await sendRequest({
        method: 'get',
        url: `/api/product/${params.id}`,
    });

    selectVarient.value = res?.data?.attributes
    data.value = res?.data
    getThambImage.value = {
        id: res.data?.images[0]?.id,
        img: res.data?.images[0]?.image
    }

    document.title = "The title property sets or returns the title of the document."
});


const addToCart = () => {
    cartStore.addToCart({ data, selectSku: { ...selectVarientProduct.value, selectQty: buyQty.value } })
}

const wishListStore = useWishListStore();

const addWishlist =() => {
  wishListStore.initWishList();
  wishListStore.addToWishList(data.value)
}
const removeFormWishlist =() => {
  wishListStore.initWishList();
  wishListStore.removeFromWishList(data.value)
}
const location = ref(window?.location?.href)
</script>

<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">
            <!-- Breadcrumb -->
            <Breadcrumb :data="data"/>

            <div class="row">
              <div class="col-md-6">
                <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                  <span class="placeholder col-12 rounded-lg" style="height: 40vh"></span>
                </p>
                <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                  <span class="placeholder col-12 rounded-lg" style="height: 40vh"></span>
                </p>
                <div v-if="!loading" class="row">
                  <div class="col-3 col-md-2 image-slider-scroll d-flex flex-column gap-2">
                      <templatel v-for="(img, i) in data?.images" :key="`image-${i}`">
                          <img :src="`${$API_URL}/storage/uploads/${img.image}`" alt="" class="w-100"
                              @click="setThambImage(img)" :class="getThambImage.id === img.id ? 'selected-image' : 'not-selected-image'">
                      </templatel>
                  </div>
                  <div class="col-7 col-md-10">
                      <div>
                          <img :src="`${$API_URL}/storage/uploads/${getThambImage?.img}`" alt="" class="w-100 h-auto">
                      </div>
                  </div>
                </div>
                <div  class="py-3" v-if="data?.video_url && !loading">
                  <iframe class="video-ifream" :src="`${data?.video_url}?controls=0&autoplay=0&mute=1&loop=1&playsinline=1`"></iframe>
                </div>
              </div>

                <div class="col-md-6 col-12">

                  <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                    <span class="placeholder col-12 rounded-lg" style="height: 3rem"></span>
                    <span class="placeholder col-12 rounded-lg mt-2" style="height: 5rem"></span>
                    <span class="placeholder col-12 rounded-lg mt-2" style="height: 1rem"></span>
                  </p>

                  <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                    <span class="placeholder col-12 rounded-lg" style="height: 15rem"></span>
                  </p>

                  <p v-if="loading" class="placeholder-glow mt-3 rounded-lg">
                    <span class="placeholder col-12 rounded-lg" style="height: 50vh"></span>
                  </p>

                  <div v-if="!loading" class="product-detail">
                        <h2 class="product-title text-capitalize">{{ data?.title }} - {{ selectVarientProduct.varient?.replace(/\//g, '-').slice(0, -1) }}</h2>
                        <p class="fs-3 text-secondary">by <RouterLink to="" class="fw-semibold text-dark text-capitalize">{{
                            data?.category?.name }}</RouterLink>
                        </p>
                        <div class="product-review d-flex align-items-center gap-1">
                            <div class="fs-3 text-dark">
                              <i class="bi" :class="data?.avarageRating < star ? 'bi-star' : 'bi-star-fill'" v-for="star in 5"></i>
                            </div>
                            <span class="fs-4 text-secondary">{{ data?.totalRating }} Review</span>
                        </div>


                        <div class="text-center bg-danger p-3 rounded text-white fw-semibold fs-3 mb-4">
                            {{ data?.showPrice }}
                        </div>
                        <div class="pricing-new p-4 rounded border border-secondary d-flex align-items-center justify-content-between">

                            <div class="compare-at-pricing-new text-center">
                                <p class="m-0 fs-3 fw-semibold text-dark">ONE TIME PAYMENT</p>
                                <h2 class="m-0 fs-2 fw-semibold text-dark">{{ selectVarientProduct.totalPrice }} $</h2>
                            </div>
                            <div class="qr-divider"></div>
                            <div class="compare-at-pricing-new text-center">
                              <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${location}`" style="width:100px;">
                            </div>
<!--                            <div class="or-new d-flex align-items-center justify-content-center h-100">-->
<!--                                <span>OR</span>-->
<!--                            </div>-->
<!--                            <div class="interest-new d-flex align-items-center gap-2">-->
<!--                                <div>-->
<!--                                    <img-->
<!--                                        src="https://pdpone.syfpos.com/cs/groups/public/documents/et_imagetype/etimg063608.png" style="width:100px;">-->
<!--                                </div>-->
<!--                                <div class="text-uppercase text-dark fw-semibold fs-5 text-center">-->
<!--                                    Interest-free. $167/mo with 48-month financing.&nbsp;-->
<!--                                    <RouterLink to="" class="text-danger fw-semibold">Learn How</RouterLink>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>

                        <div class="d-flex align-items-center gap-3 bg-light p-3 rounded my-4">
                            <i class="bi bi-box-seam text-dark fs-3"></i>
                            <p class="fs-5 fw-semibold text-dark m-0">Choose Your variation For Buy</p>
                        </div>


                        <template v-if="selectVarient.length > 0">
                            <div v-for="(varient, i) in selectVarient" :key="`varient-${i}`">
                                <div class="d-flex flex-column align-items-start gap-3 bg-light p-3 rounded my-4">
                                    <p class="m-0 text-capitalize fw-bolder">{{ varient?.option?.name }}</p>

                                    <select v-model="varient.selectVariant" class="form-control">
                                        <option value="null" disabled>Select {{ varient?.option?.name }} Option</option>
                                        <option v-for="(item, j) in varient?.tags" :key="`option-${j}`" :value="item">
                                            {{ item }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </template>



                        <div class="product-form">
                            <!-- Product Form -->
                        </div>
                        <div class="product-form-action mt-4">
                            <div class="quantity-selector">
                                <label for="quantity-selector-input" class="fs-3 text-dark fw-semibold">Quantity</label>
                                <div class="d-flex align-items-center flex-wrap flex-md-nowrap gap-3 py-3">
                                    <div>
                                        <!-- QuantityCounter -->
                                        <QuantityCounter v-model="buyQty"/>
                                    </div>
                                    <div class="w-100">
                                        <button class="secondary-button text-dark fw-medium fs-3 w-100 d-inline-block text-center" @click="addToCart">ADD TO CART</button>
                                    </div>
                                    <div>

                                        <button v-if="wishListStore.getWishListItems?.includes(data)" @click="removeFormWishlist" class="d-flex align-items-center justify-content-center p-0 border-0 rounded">
                                          <i class="bi bi-heart-fill fs-3"></i>
                                        </button>
                                        <button v-else @click="addWishlist" class="d-flex align-items-center justify-content-center p-0 border-0 rounded">
                                          <i class="bi bi-heart fs-3"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="share-this py-4">
                            <!--<h4 class="fs-3 fw-semibold text-dark mb-4">Share this:</h4>
                            <ul class="list-unstyled d-flex align-items-center gap-3 mb-4">
                                <li>
                                    <a href="#" target="_blank" class="facebook">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="twitter">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="linkedin">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="pinterest">
                                        <i class="bi bi-pinterest"></i>
                                    </a>
                                </li>
                            </ul>-->
                            <p class="fs-4 text-dark fw-normal pre-wrap">
                                {{ data?.description }}
                            </p>
                        </div>

                        <a href="#questionSection" class="bg-light rounded d-flex gap-3 p-4">
                            <i class="bi bi-info-circle mt-1 fs-3"></i>
                            <div>
                                <h3 class="fw-semibold text-dark">Ask An Expert</h3>
                                <p class="m-0">Schedule a free virtual appointment!
                                </p>
                            </div>
                        </a>
                        <div class="accordion accordion-flush my-5" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed fw-semibold text-dark fs-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Features & Benefits
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div v-html="data?.features"/>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed fw-semibold text-dark fs-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Specifications & Details
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li class="text-dark d-flex gap-2" v-for="(item, i) in data?.attributes"
                                                :key="`feature-${i}`">
                                                <span class="fw-semibold">
                                                    {{ item?.option?.name }}:
                                                </span>
                                                <div>
                                                    <span v-for="(tag, j) in item.tags" :key="`tag-${j}`">
                                                        {{ tag }}<span v-if='j < item.tags.length - 1'>, </span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed  text-dark fw-semibold fs-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Warranty
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                      <div v-html="data?.warranty"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="img-text__container mt-5" v-html="data?.details"/>
             <ProductReviewQuestion :product="data" id="questionSection"/>

        </div>
    </section>
</template>
<style lang="scss" scoped>
i {
    line-height: 0;
}

.product-title {
    text-align: left;
}

.compare-at-pricing-new {
    width: 100%;
}

.or-new {
    position: relative;
    width: 10%;
}

.or-new::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 1px;
    height: 100%;
    background-color: #000;
}

.or-new span {
    .or-new {
        &::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 50%;
            background-color: #000;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 50%;
            background-color: #000;
        }
    }

    .or-new span {
        background-color: #fff;
        font-size: 20px;
        padding: 10px 0;
        color: #000;
    }

    .interest-new {
        width: 45%;
    }

    .interest-new img {
        width: 85px;
        height: auto;
    }

    .share-this ul li a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: #fff;
        font-size: 18px;
        transition: all ease-in-out 0.3s;
    }

    .share-this ul li a:hover {
        transform: translateY(-5px);
    }

    .share-this .facebook {
        background-color: #425DAB;
    }

    .share-this .twitter {
        background-color: #1DA1F2;
    }

    .share-this .linkedin {
        background-color: #0877B5;
    }

    .share-this .pinterest {
        background-color: #BD1C1C;
    }

    .img-text__container img {
        width: 100%;
        height: auto;
    }

    .user-profile {
        min-width: 60px;
        height: 60px;
        border-radius: 999px;
        background-color: #9b91dc;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-letter {
        font-size: 28px;
        font-weight: 600;
        color: #fff;
    }

    .review-submit,
    .question-submit {
        padding: 8px 50px;
    }

    .review-question-tab .nav-link {
        color: #000;
        text-transform: uppercase;
        border-radius: 0;
        padding-inline: 0;
        border-bottom: 1px solid transparent;
    }

    .review-question-tab .nav-link.active {
        background: transparent !important;
        border-color: black;
    }

    .question-items__item-answer {
        margin: 30px 0 0 30px;
        padding: 30px 0 30px 30px;
        position: relative;
    }

    .question-items__item-answer::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: rgb(131, 131, 137);
    }

    .featured-collection h2 {
        margin: 50px 0 30px 0;
    }

    .img-text__container {
        h2 {
            text-align: left;
        }

        p {
            color: #6b6d76;
        }
    }

    .accordion-button:focus {
        border-color: unset !important;
    }
}

.pre-wrap {
    white-space: pre-wrap;
}

.image-slider-scroll {
    max-height: 500px;
    overflow-y: scroll;
}

.selected-image {
    border: 2px solid var(--gk-info);
    border-radius: 10px;
}
.not-selected-image{
  border: 2px solid var(--gk-dark);
  border-radius: 10px;
}


.qr-divider{
  width: 6px;
  height: 100%;
  background: linear-gradient(276deg, black, transparent, black, transparent, black);
  min-height: 100px;
}
</style>