<script setup>
import SingleProductCard from '@/components/SingleProductCard.vue'
import { onMounted, ref, watch } from 'vue'
import useAxios from "@/composables/useAxios"
import {useCartStore} from "@/stores/useCartStore"
const cartStore = useCartStore();

import { useRoute } from 'vue-router'

const { params } = useRoute();

const { loading, error, sendRequest } = useAxios();
const data = ref(null);


const selectVarient = ref([]);
const getThambImage = ref(null)

const setThambImage = (image) =>{
    getThambImage.value = {
        id:image.id,
        img:image.image
    }
}

const buyQty = ref(1)
const varientPrice = ref(0)
const selectVarientProduct = ref({});
watch([selectVarient,buyQty], ([item, qty]) => {
    varientPrice.value = 10 * qty
    const title = item.map(item => item.selectVariant).join('/')+"/";
    const selectVarient = data?.value?.stocks?.filter(item => {
        if(item.varient === title ){
            return item;
        }
    })[0]
    selectVarientProduct.value = {...selectVarient, totalPrice:selectVarient.price * qty}
}, {deep:true})


const qtyUp = () => {
    if(buyQty.value < 10){
        buyQty.value++
    }
}

const qtyDown = () => {
    if(buyQty.value > 1){
        buyQty.value--
    }
}


onMounted(async () => {
    const res = await sendRequest({
        method: 'get',
        url: `/api/product/${params.id}`,
    });

    selectVarient.value = res.data.attributes
    data.value = res.data
    getThambImage.value = {
        id:res.data?.images[0]?.id,
        img:res.data?.images[0]?.image
    }

    document.title = "The title property sets or returns the title of the document."
});



const addToCart =()=>{
    cartStore.addToCart({data, selectSku:{...selectVarientProduct.value, selectQty:buyQty.value}})
}




</script>

<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">
            <nav aria-label="breadcrumb" class="my-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/" class="fs-3">Home</RouterLink>
                    </li>
                    <li class="breadcrumb-item active fs-3" aria-current="page">{{ data?.title }}</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-1 image-slider-scroll">
                    <templatel v-for="(img, i) in data?.images" :key="`image-${i}`">
                        <img :src="`${$API_URL}/storage/uploads/${img.image}`"
                        alt="" class="w-100" 
                        @click="setThambImage(img)"
                        :class="getThambImage.id === img.id ? 'selected-image' : ''">
                    </templatel>
                </div>

                <div class="col-md-5 col-12">
                    <div>
                        <img :src="`${$API_URL}/storage/uploads/${getThambImage?.img}`"
                        alt="" 
                        class="w-100 h-auto">
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="product-detail">
                        <h1 class="product-title text-capitalize">{{ data?.title }} - {{ selectVarientProduct.varient?.replace(/\//g, '-').slice(0, -1)  }}</h1>
                        <p class="fs-3 text-secondary">by <RouterLink to="" class="fw-semibold text-dark text-capitalize">{{
                            data?.category?.name }}</RouterLink>
                        </p>
                        <div class="product-review d-flex align-items-center gap-1">
                            <div class="fs-3 text-dark">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <span class="fs-4">1 Review</span>
                        </div>
                        <div class="text-center bg-danger p-3 rounded text-white fw-semibold fs-3 mb-4">
                            {{ data?.showPrice }}
                        </div>
                        <div
                            class="pricing-new p-4 rounded border border-secondary d-flex align-items-center justify-content-between">
                            <div class="compare-at-pricing-new text-center">
                                <p class="m-0 fs-3 fw-semibold text-dark">ONE TIME PAYMENT</p>
                                <h2 class="m-0 fs-2 fw-semibold text-dark">{{ selectVarientProduct.totalPrice }} ৳</h2>
                                <!-- <s class="text-danger fw-normal fs-3">$8,499.00</s> -->
                            </div>
                            <div class="or-new d-flex align-items-center justify-content-center h-100">
                                <span>OR</span>
                            </div>
                            <div class="interest-new d-flex align-items-center gap-2">
                                <div>
                                    <img
                                        src="https://pdpone.syfpos.com/cs/groups/public/documents/et_imagetype/etimg063608.png">
                                </div>
                                <div class="text-uppercase text-dark fw-semibold fs-5 text-center">
                                    Interest-free. $167/mo with 48-month financing.&nbsp;
                                    <RouterLink to="" class="text-danger fw-semibold">Learn How</RouterLink>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center gap-3 bg-light p-3 rounded my-4">
                            <i class="bi bi-box-seam text-dark fs-3"></i>
                            <p class="fs-3 fw-semibold text-dark m-0">This product qualifies for free shipping.</p>
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
                                <label for="quantity-selector-input" class="fs-3 text-dark fw-semibold">
                                    Quantity
                                </label>
                                <small>(Available: {{ selectVarientProduct.qty }})</small>
                                <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-info" @click="qtyDown">-</button>
                                        <input class="form-control founded-0" min="1" v-model="buyQty">
                                        <button class="btn btn-info" @click="qtyUp">+</button>
                                    </div>
                                    <div>
                                        <button class="bg-light border-0 p-3 text-uppercase text-dark fs-3" @click="addToCart">ADD TOCART</button>
                                    </div>
                                    <div>
                                        <button
                                            class="d-flex align-items-center justify-content-center p-0 border-0 rounded">
                                            <i class="bi bi-heart fs-3"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="share-this py-4">
                            <h4 class="fs-3 fw-semibold text-dark">Share this:</h4>
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
                            </ul>
                            <p class="fs-4 text-dark fw-normal pre-wrap">
                                {{data?.description}}
                            </p>
                        </div>
                        <div class="bg-light rounded d-flex gap-3 p-4">
                            <i class="bi bi-info-circle mt-2 fs-3"></i>
                            <div>
                                <h3 class="fs-3 fw-semibold text-dark">Ask An Expert</h3>
                                <p class="m-0 fs-3">Schedule a free virtual appointment! <RouterLink to="">Learn More
                                    </RouterLink>
                                </p>
                            </div>
                        </div>
                        <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed fw-semibold text-dark" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Features & Benefits
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li class="text-dark"><span class="fw-semibold">L-Track Massage-</span> The Qi
                                                XE™ Pro massage ​chair uses a 54-inch-long massage roller track that follows
                                                the natural shape of the spine. The L shaped track allows for massage
                                                starting at the back of the head, neck, and shoulders, traveling down the
                                                spine contouring underneath the glues to target and release these important
                                                muscle groups.</li>
                                            <li class="text-dark"><span class="fw-semibold">Chair Doctor-</span> One of the
                                                most important massage advancements to date, the Chair Doctor program, uses
                                                AI technology to create a massage based on your current tension and stress.
                                                Using the hand-held biometric scanner, GSR control sensors are utilized to
                                                send biofeedback information to sense your tension areas.</li>
                                            <li class="text-dark"><span class="fw-semibold">Dual Lumbar Massage-</span> Dual
                                                air compression chambers are strategically placed in the left and right
                                                sides of the lower back to target and release stiffness.</li>
                                            <li class="text-dark"><span class="fw-semibold">Immediate Pain Relief-</span>
                                                The Cozzia Qi XE™ Pro holds you in place, bends you backward slowly but
                                                firmly, which takes pressure off the discs in your spine proving a similar
                                                effect to a spinal adjustment at a chiropractor’s office.</li>
                                            <li class="text-dark"><span class="fw-semibold">Tri-Zone Heat Therapy-</span>
                                                Heated care targets the lower back, buttock, knees, and calves.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed fw-semibold text-dark" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Specifications & Details
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li class="text-dark d-flex gap-2" v-for="(item , i) in data?.attributes" :key="`feature-${i}`">
                                                <span class="fw-semibold">
                                                    {{ item?.option?.name }}:
                                                </span>
                                                <div>
                                                    <span v-for="(tag, j) in item.tags" :key="`tag-${j}`">
                                                        {{  tag }}<span v-if='j < item.tags.length - 1'>, </span> 
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed  text-dark fw-semibold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Warranty
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>5 Year In-Home Warranty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="img-text__container mt-5" v-html="data?.details">
            </div>
            <!-- Product Review Head -->
            <div class="product-review border-top">
                <div class="product-review__head py-4">
                    <div class="d-flex align-items-center justify-content-center gap-1">
                        <span class="star-rating text-secondary fs-2 fw-semibold">5.0</span>
                        <span class="stars text-dark fs-3">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </span>
                        <span class="fs-4 text-dark">2 Reviews</span>
                    </div>
                </div>
                <!-- <div class="d-flex align-items-center justify-content-end gap-3">
                    <button class="d-flex align-items-center gap-2 py-1 px-2 border">
                        <i class="bi bi-pencil"></i>Write A Review
                    </button>
                    <button class="d-flex align-items-center gap-2 py-1 px-2 border">
                        <i class="bi bi-chat-left-text"></i>Ask A Question  
                    </button>
                </div> -->
                <!-- Product Review & Question -->
                <div class="row mt-5">
                    <!-- Review Form -->
                    <div class="col-md-6 col-12">
                        <div class="product-review__form">
                            <form>
                                <h2 class="fw-normal text-uppercase fs-3">WRITE A REVIEW</h2>
                                <p class="text-secondary fs-4"><span class="text-danger me-1">*</span>Indicates a required
                                    field</p>
                                <div class="d-flex flex-column my-4">
                                    <label class="text-secondary fs-4"><span class="text-danger">*</span>Score:</label>
                                    <span>
                                        Stars....
                                    </span>
                                </div>
                                <div class="d-flex flex-column my-4">
                                    <label for="review_title" class="mb-2"><span
                                            class="text-danger me-1">*</span>Title:</label>
                                    <input type="text" name="review_title" class="p-1">
                                </div>
                                <div class="d-flex flex-column my-4">
                                    <label for="review_content" class="mb-2"><span
                                            class="text-danger me-1">*</span>Review:</label>
                                    <textarea type="text" name="review_title" class="p-1"
                                        spellcheck="false"></textarea>
                                </div>
                                <div class="d-flex gap-5 my-4">
                                    <div class="d-flex flex-column w-100">
                                        <label for="user_name" class="mb-2"><span class="text-danger me-1">*</span>Your
                                            Name:</label>
                                        <input type="text" name="user_name" class="p-1">
                                    </div>
                                    <div class="d-flex flex-column w-100">
                                        <label for="user_email" class="mb-2"><span
                                                class="text-danger me-1">*</span>Email:</label>
                                        <input type="email" name="user_email" class="p-1">
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button class="review-submit text-uppercase fw-normal bg-info border-0 text-white"
                                        type="submit">Post</button>
                                </div>
                            </form>
                        </div>
                        <!-- Question Form -->
                        <div class="product-question__form mt-5">
                            <form>
                                <h2 class="fw-normal text-uppercase fs-3">ASK A QUESTION</h2>
                                <p class="text-secondary fs-4"><span class="text-danger me-1">*</span>Indicates a required
                                    field</p>
                                <div class="d-flex flex-column my-4">
                                    <label for="question_content" class="mb-2"><span
                                            class="text-danger me-1">*</span>Question:</label>
                                    <textarea type="text" name="question_content" class="p-1"
                                        spellcheck="false"></textarea>
                                </div>
                                <div class="d-flex gap-5 my-4">
                                    <div class="d-flex flex-column w-100">
                                        <label for="user_name" class="mb-2"><span class="text-danger me-1">*</span>Your
                                            Name:</label>
                                        <input type="text" name="user_name" class="p-1">
                                    </div>
                                    <div class="d-flex flex-column w-100">
                                        <label for="user_email" class="mb-2"><span
                                                class="text-danger me-1">*</span>Email:</label>
                                        <input type="email" name="user_email" class="p-1">
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button class="question-submit text-uppercase fw-normal bg-info border-0 text-white"
                                        type="submit">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="review-question-tab">
                            <ul class="nav nav-pills mb-3 border-bottom d-flex align-items-center gap-3" id="pills-tab"
                                role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Reviews</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Questions</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabindex="0">
                                    <div class="review">
                                        <h3 class="text-secondary mb-5">2 Reviews</h3>
                                        <div class="review-items d-flex flex-column gap-5">
                                            <div class="review-items__item">
                                                <div class="review-items__item-head d-flex justify-content-between">
                                                    <div class="d-flex gap-3">
                                                        <span class="user-profile" style="background:rgb(146, 117, 249);">
                                                            <span class="user-letter">P</span>
                                                        </span>
                                                        <div>
                                                            <h3 class="fs-4 fw-semibold text-dark m-0">Porfie M.</h3>
                                                            <span class="text-dark">
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p class="m-0">04/12/23</p>
                                                </div>
                                                <div class="review-items__item-content">
                                                    <h3>Love my Cozzia Qi XE PRO</h3>
                                                    <p>We have had this chair for about a month, and I am so happy with my
                                                        purchase. The chair doctor program really does give you a custom
                                                        massage based</p>
                                                </div>
                                                <div class="review-items__item-footer d-flex align-items-center gap-3">
                                                    <p class="m-0">Was This Review Helpful?</p>
                                                    <div class="d-flex gap-3">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-up"></i>
                                                            </button>
                                                            <span>
                                                                10
                                                            </span>
                                                        </div>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-down"></i>
                                                            </button>
                                                            <span>
                                                                1
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-items__item">
                                                <div class="review-items__item-head d-flex justify-content-between">
                                                    <div class="d-flex gap-3">
                                                        <span class="user-profile" style="background:rgb(249, 117, 240);">
                                                            <span class="user-letter">P</span>
                                                        </span>
                                                        <div>
                                                            <h3 class="fs-4 fw-semibold text-dark m-0">Porfie M.</h3>
                                                            <span class="text-dark">
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                                <i class="bi bi-star-fill"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p class="m-0">04/12/23</p>
                                                </div>
                                                <div class="review-items__item-content">
                                                    <h3>Love my Cozzia Qi XE PRO</h3>
                                                    <p>We have had this chair for about a month, and I am so happy with my
                                                        purchase. The chair doctor program really does give you a custom
                                                        massage based on the information it gathers after it scans your
                                                        back. The variety of the massage options, and types of massage has
                                                        something sure to please everyone. This also gives you heat in the
                                                        lower back, lumba</p>
                                                </div>
                                                <div class="review-items__item-footer d-flex align-items-center gap-3">
                                                    <p class="m-0">Was This Review Helpful?</p>
                                                    <div class="d-flex gap-3">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-up"></i>
                                                            </button>
                                                            <span>
                                                                10
                                                            </span>
                                                        </div>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-down"></i>
                                                            </button>
                                                            <span>
                                                                1
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab" tabindex="0">
                                    <div class="question-items d-flex flex-column gap-5">
                                        <div class="question-items__item">
                                            <div class="question-items__item-head d-flex justify-content-between">
                                                <div class="d-flex gap-3">
                                                    <span class="user-profile" style="background:rgb(146, 117, 249);">
                                                        <span class="user-letter">P</span>
                                                    </span>
                                                    <div>
                                                        <h3 class="fs-4 fw-semibold text-dark m-0">Porfie M.</h3>
                                                        <p><span>Q:</span>I need to know if you will ship to Kolkata India
                                                            for me</p>
                                                    </div>
                                                </div>
                                                <p class="m-0">04/12/23</p>
                                            </div>
                                            <div class="question-items__item-answer">
                                                <div class="question-items__item-head d-flex justify-content-between">
                                                    <div class="d-flex gap-3">
                                                        <span class="user-profile" style="background:rgb(131, 131, 137);">
                                                            <span class="user-letter"><i
                                                                    class="bi bi-shop-window"></i></span>
                                                        </span>
                                                        <div>
                                                            <h3 class="fs-4 fw-semibold text-dark m-0 text-uppercase">
                                                                Comfort Wings</h3>
                                                            <p><span>A:</span>Hello,</p>
                                                            <p class="m-0">Thank you for contacting Comfort Wings.
                                                                Unfortunately, we can only ship within the United States at
                                                                this time. I apologize for any inconvenience this may have
                                                                caused. Please let us know if we can assist with anything
                                                                else!</p>
                                                        </div>
                                                    </div>
                                                    <p class="m-0">04/12/23</p>
                                                </div>
                                                <div
                                                    class="review-items__item-footer d-flex align-items-center justify-content-end gap-3">
                                                    <p class="m-0">Was This Answer Helpful?</p>
                                                    <div class="d-flex gap-3">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-up"></i>
                                                            </button>
                                                            <span>
                                                                10
                                                            </span>
                                                        </div>
                                                        <div class="d-flex align-items-center gap-1">
                                                            <button
                                                                class="d-flex align-items-center justify-content-center p-0 m-0 bg-transparent border-0">
                                                                <i class="bi bi-hand-thumbs-down"></i>
                                                            </button>
                                                            <span>
                                                                1
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Product Review & Question -->
            <ProductReviewQuestion />

            <!-- Featured Collection -->
            <div class="featured-collection mt-6">
                <h2 class="text-center text-uppercase fs-3 fw-semibold my-5">YOU MAY ALSO LIKE</h2>
                <div class="row">
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                </div>
                <div class="my-5 text-center">
                    <RouterLink to="/" class="py-2 px-4 bg-info text-uppercase text-white d-inline-block">View More
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    
</script>
<style scoped>
i {
    line-height: 0;
}

.compare-at-pricing-new {
    width: 45%;
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
.pre-wrap{
    white-space: pre-wrap;
}
.image-slider-scroll{
    max-height:500px;
    overflow-y:scroll;
}
.selected-image{
    border: 2px solid var(--gk-info);
    border-radius: 10px;
}
</style>
