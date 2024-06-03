<script setup>


  import {onMounted, ref} from "vue";
  import useAxios from "@/composables/useAxios.js";
  import {useRoute} from "vue-router";

  const route = useRoute();
  const props = defineProps({
    product:Object
  })

  const createForm = ref({
    rating:undefined,
    title:undefined,
    review:undefined,
    name:undefined,
    email:undefined
  })


  const createQuestion = ref({
    question:undefined,
    name:undefined,
    email:undefined
  })

  const allReviews = ref([])

  const {sendRequest, loading, error} = useAxios();
  const handelSubmit = async () => {
    error.value = null;
    const response = await sendRequest({
      url:"/api/review",
      data: {...createForm.value, product_id: props.product?.id},
      method:"POST"
    })
    if(response?.data){
      createForm.value = {}
      $toast.success('Thanks for your review.')
      await getAllReviews()
    }else{
      $toast.error('Have an error...')
    }
  }


  const getAllReviews = async () => {
    const response = await sendRequest(`/api/review/${route.params?.id}`);
    allReviews.value = response.data
  }


  const allQuestions = ref([])

  // question section
  const handelSubmitQuestion = async () => {
    error.value = null;
    const response = await sendRequest({
      url:"/api/question",
      data: {...createQuestion.value, product_id: props.product?.id},
      method:"POST"
    })

    if(response?.data){
      createQuestion.value = {}
      $toast.success('Thanks for Submit Question.')
      await getAllQuestions()
    }else{
      $toast.error('Have an error...')
    }
  }


  const getAllQuestions = async () => {
    const response = await sendRequest(`/api/question/${route.params?.id}`);
    allQuestions.value = response.data
  }


  onMounted(async () => {
    await getAllReviews()
    await getAllQuestions()
  })

</script>

<template>
    <!-- Product Review Head -->
    <div class="product-review border-top border-bottom pb-7">
        <div class="product-review__head py-4">
            <div class="d-flex align-items-center justify-content-center gap-1">
                <span class="star-rating text-secondary fs-2 fw-semibold">{{ allReviews?.average }}.0</span>
                <span class="stars text-dark fs-3">
                  <i class="bi" :class=" allReviews.average < star ? 'bi-star' : 'bi-star-fill'" v-for="star in 5"></i>
                </span>
                <span class="fs-4 text-dark">{{ allReviews?.reviews?.length }} Reviews</span>
            </div>
        </div>
        <!-- Product Review & Question -->
        <div>
            <ul class="nav nav-pills mb-3 border-bottom d-flex align-items-center gap-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Reviews</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Questions</button>
                </li>
            </ul>
        </div>
        <div class="mt-5">
            <div class="review-question-tab">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <div class="product-review__form">
                                    <form @submit.prevent="handelSubmit">
                                        <h2 class="fw-normal text-uppercase fs-3">WRITE A REVIEW</h2>
                                        <p class="text-secondary fs-4">
<!--                                          <span class="text-danger me-1">*</span>Indicates a required field-->
                                        </p>

                                        <p class="text-danger" v-if="error?.response?.data?.message"> * {{  error?.response?.data?.message }}</p>

                                        <div class="d-flex flex-column align-items-start">
                                            <label class="text-secondary fs-4"><span class="text-danger">*</span>Score:</label>
                                            <div class="rate">
                                              <input v-model="createForm.rating" type="radio" id="star5" class="rate" name="rating" value="5"/>
                                              <label for="star5" title="text">5 stars</label>
                                              <input v-model="createForm.rating" type="radio" id="star4" class="rate" name="rating" value="4"/>
                                              <label for="star4" title="text">4 stars</label>
                                              <input v-model="createForm.rating" type="radio" id="star3" class="rate" name="rating" value="3"/>
                                              <label for="star3" title="text">3 stars</label>
                                              <input v-model="createForm.rating" type="radio" id="star2" class="rate" name="rating" value="2">
                                              <label for="star2" title="text">2 stars</label>
                                              <input v-model="createForm.rating" type="radio" id="star1" class="rate" name="rating" value="1"/>
                                              <label for="star1" title="text">1 star</label>
                                            </div>
                                          <span class="text-danger" v-if=" error?.response?.data?.errors?.rating">{{ error?.response?.data?.errors.rating[0] }}</span>
                                        </div>
                                        <div class="d-flex flex-column my-4">
                                            <label for="review_title" class="mb-2"><span class="text-danger me-1">*</span>Title:</label>
                                            <input  type="text" :disabled="loading" name="review_title" v-model="createForm.title"  class="p-1">
                                            <span class="text-danger" v-if=" error?.response?.data?.errors?.title">{{ error?.response?.data?.errors.title[0] }}</span>
                                        </div>
                                        <div class="d-flex flex-column my-4">
                                            <label for="review_content" class="mb-2"><span class="text-danger me-1">*</span>Review:</label>
                                            <textarea type="text" :disabled="loading" name="review_title" v-model="createForm.review" class="p-1" spellcheck="false"></textarea>
                                            <span class="text-danger" v-if=" error?.response?.data?.errors?.review">{{ error?.response?.data?.errors.review[0] }}</span>
                                        </div>
                                        <div class="d-flex gap-5 my-4 flex-column flex-md-row">
                                            <div class="d-flex flex-column w-100">
                                                <label for="user_name" class="mb-2"><span class="text-danger me-1">*</span>Your Name:</label>
                                                <input type="text" :disabled="loading" name="user_name" v-model="createForm.name" class="p-1">
                                                <span class="text-danger" v-if=" error?.response?.data?.errors?.name">{{ error?.response?.data?.errors.name[0] }}</span>
                                            </div>
                                            <div class="d-flex flex-column w-100">
                                                <label for="user_email" class="mb-2"><span class="text-danger me-1">*</span>Email:</label>
                                                <input type="email" :disabled="loading" name="user_email" v-model="createForm.email" class="p-1">
                                                <span class="text-danger" v-if=" error?.response?.data?.errors?.email">{{ error?.response?.data?.errors.email[0] }}</span>
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button :disabled="loading" class="review-submit text-uppercase fw-normal bg-info border-0 text-white" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                            <div class="review">
                                <h3 class="text-secondary mb-5">{{ allReviews?.reviews?.length }} Reviews</h3>
                                <div class="review-items d-flex flex-column gap-5" v-if="allReviews?.reviews?.length">
                                    <div class="review-items__item" v-for="(item, i) in allReviews?.reviews" :key="`single-review-${i}`">
                                        <div class="review-items__item-head d-flex justify-content-between">
                                            <div class="d-flex gap-3">
                                                <span class="user-profile">
                                                  <img :src="`https://ui-avatars.com/api/?background=random&rounded=true&color=fff&name=${item.name}`" alt="">
                                                </span>
                                                <div>
                                                    <h3 class="fs-4 fw-semibold text-dark m-0">{{ item.name }}</h3>
                                                    <span class="text-info">
                                                        <i class="bi" :class=" item.rating < star ? 'bi-star' : 'bi-star-fill'" v-for="star in 5"></i>
                                                    </span>
                                                    <div class="review-items__item-content">
                                                        <h3 class="text-capitalize fs-4 fw-medium">{{ item?.title }}</h3>
                                                        <p class="text-secondary">
                                                          {{ item?.review }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            
                                        <div class="review-items__item-footer d-flex align-items-center justify-content-end gap-3">
                                              <p class="m-0">{{ item.created_at }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <!-- Question Form -->
                                <div class="product-question__form">
                                    <form @submit.prevent="handelSubmitQuestion">
                                        <h2 class="fw-normal text-uppercase fs-3">ASK A QUESTION</h2>
<!--                                        <p class="text-secondary fs-4"><span class="text-danger me-1">*</span>Indicates a required field</p>-->
                                        <div class="d-flex flex-column my-4">
                                            <label for="question_content" class="mb-2">
                                              <span class="text-danger me-1">*</span>Question:</label>
                                            <textarea type="text" :disabled="loading" v-model="createQuestion.question"  class="p-1" spellcheck="false"></textarea>
                                        </div>
                                        <div class="d-flex gap-5 my-4 flex-column flex-md-row">
                                            <div class="d-flex flex-column w-100">
                                                  <label for="user_name" class="mb-2">
                                                  <span class="text-danger me-1">*</span>Your Name:</label>
                                                  <input type="text" :disabled="loading" v-model="createQuestion.name"  class="p-1">
                                            </div>
                                            <div class="d-flex flex-column w-100">
                                                <label for="user_email" class="mb-2"><span class="text-danger me-1">*</span>Email:</label>
                                                <input type="email" :disabled="loading" v-model="createQuestion.email" class="p-1">
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button class="question-submit text-uppercase fw-normal bg-info border-0 text-white" type="submit">Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <h3 class="text-secondary mb-5">{{allQuestions.length}} Question</h3>
                                <div class="question-items d-flex flex-column gap-5" v-if="allQuestions.length">
                                  <div class="question-items__item" v-for="item in allQuestions" :key="`question-item-${item.id}`">
                                      <div class="question-items__item-head d-flex justify-content-between">
                                          <div class="d-flex gap-3">
                                              <span class="user-profile">
                                                <img :src="`https://ui-avatars.com/api/?background=random&rounded=true&color=fff&name=${item.name}`" alt="">
                                              </span>
                                              <div>
                                                  <h3 class="fs-4 fw-semibold text-dark m-0">{{ item?.name }}</h3>
                                                  <p><span>Q:</span>{{ item?.question }}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="question-items__item-answer" v-if="item.answer">
                                          <div class="question-items__item-head d-flex justify-content-between">
                                              <div class="d-flex gap-3">
                                                  <span class="user-profile" style="background:rgb(131, 131, 137);">
                                                      <span class="user-letter">
                                                        <i class="bi bi-shop-window"></i></span>
                                                  </span>
                                                  <div>
                                                      <h3 class="fs-4 fw-semibold text-dark m-0 text-uppercase">Comfort Wings</h3>
                                                      <p><span>A:</span>Hello,</p>
                                                      <p class="m-0 text-secondary">
                                                        {{ item?.answer }}
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>

                                          <div class="review-items__item-footer d-flex align-items-center justify-content-end gap-3">
                                              <p class="m-0">{{ item?.created_at }}</p>
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
</template>

<style scoped>

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
.review-submit,.question-submit {
    padding: 8px 50px;
}
.nav-link {
    color: #000;
    text-transform: uppercase;
    border-radius: 0;
    padding-inline: 0;
    border-bottom: 1px solid transparent;
}
.nav-link.active {
    background: transparent !important;
    border-color: black;
    color: #000;
}
.question-items__item-answer {
    margin: 30px 0 0 30px;
    padding: 30px 0 30px 30px;
    position: relative;
}
.question-items__item-answer::after {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: rgb(131, 131, 137);
}









.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position:absolute;
  display: none;
}
.rate:not(:checked) > label {
  float:right;
  width:1em;
  overflow:hidden;
  white-space:nowrap;
  cursor:pointer;
  font-size:30px;
  color:#ccc;
}
.rated:not(:checked) > label {
  float:right;
  width:1em;
  overflow:hidden;
  white-space:nowrap;
  cursor:pointer;
  font-size:30px;
  color:#ccc;
}
.rate:not(:checked) > label:before {
  content: '★ ';
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
.star-rating-complete{
  color: #c59b08;
}
.rating-container .form-control:hover, .rating-container .form-control:focus{
  background: #fff;
  border: 1px solid #ced4da;
}
.rating-container textarea:focus, .rating-container input:focus {
  color: #000;
}
.rated {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rated:not(:checked) > input {
  position:absolute;
  display: none;
}
.rated:not(:checked) > label {
  float:right;
  width:1em;
  overflow:hidden;
  white-space:nowrap;
  cursor:pointer;
  font-size:30px;
  color:#ffc700;
}
.rated:not(:checked) > label:before {
  content: '★ ';
}
.rated > input:checked ~ label {
  color: #ffc700;
}
.rated:not(:checked) > label:hover,
.rated:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rated > input:checked + label:hover,
.rated > input:checked + label:hover ~ label,
.rated > input:checked ~ label:hover,
.rated > input:checked ~ label:hover ~ label,
.rated > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
</style>