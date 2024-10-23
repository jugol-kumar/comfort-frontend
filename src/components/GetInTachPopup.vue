<template>
  <div v-if="showPopup" class="main w-100 h-100 position-fixed top-0 start-0">
    <div class="w-50 h-10rem wrapper bg-red">
      <div class="card position-relative main-getintach">
        <button @click="acceptCookies" class="position-absolute close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x"
               viewBox="0 0 16 16">
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
        <div class="card-body">
          <h2 class="text-uppercase text-start">get in touch</h2>

          <TransitionGroup name="fade">
            <p v-if="res" @click="res = false" class="alert alert-success mt-2">Successfully Sent......</p>
            <p v-if="error" @click="error = false" class="alert alert-danger mt-2">
              {{ error?.response?.data?.message }}
            </p>
          </TransitionGroup>
          <div class="mt-4">
            <form @submit.prevent="handelSubmit">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name *</label>
                <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small class="text-danger" v-if="error?.response?.data?.errors?.name">{{ error?.response?.data?.errors?.name[0] }}</small>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email *</label>
                <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small class="text-danger" v-if="error?.response?.data?.errors?.email">{{ error?.response?.data?.errors?.email[0] }}</small>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Phone Number *</label>
                <input type="text" v-model="phone" class="form-control" id="exampleInputPassword1">
                <small class="text-danger" v-if="error?.response?.data?.errors?.phone">{{ error?.response?.data?.errors?.phone[0] }}</small>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message *</label>
                <textarea v-model="message" class="form-control" rows="5" id="exampleInputPassword1"></textarea>
                <small class="text-danger" v-if="error?.response?.data?.errors?.message">{{ error?.response?.data?.errors?.message[0] }}</small>
              </div>

              <button type="submit" :disabled="isDisabled" class="btn btn-primary">
                <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <span v-else>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import {computed, onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
const showPopup = ref(false)
const {sendRequest, loading, error} = useAxios()

const checkCookie = () => {
  const cookieAccepted = $cookies.get('getInTach');
  if (!cookieAccepted) {
    showPopup.value = true;
  } else {
    const lastVisit = new Date($cookies.get('getInTachVisit'));
    const today = new Date();
    const timeDifference = today - lastVisit;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    if (daysDifference >= 1) {
      showPopup.value = true;
    }
  }
}

const acceptCookies = () => {
  const today = new Date();
  const expiryDate = new Date(today);
  expiryDate.setDate(today.getDate() + 1);
  $cookies.set('getInTach', true, expiryDate);
  $cookies.set('getInTachVisit', today, expiryDate);
  showPopup.value = false;
}

const name = ref(null)
const email = ref(null)
const phone = ref(null)
const message = ref(null)

const res = ref(false)
const handelSubmit = async () => {
  const response = await sendRequest({
    url: '/api/get-in-tech',
    method: 'POST',
    data: {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }
  })

  if (response.data) {

    name.value = null
    email.value = null
    phone.value = null
    message.value = null

    res.value = true

    await acceptCookies();

  }
}

const isDisabled = computed(()=> !name.value || !email.value || !phone.value || !message.value)




onMounted(() => checkCookie())

</script>

<style scoped>
.main {
  background: rgba(124, 111, 111, 0.49);
  z-index: 11;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
}

.main-getintach {
  top: 15%;
}

.main .wrapper {
  width: 60%;
}

.close-btn {
  right: -15px;
  top: -10px;
  background: inherit;
  color: black;
  padding: 10px 10px;
  box-shadow: 0px 1px 18px 1px #dbd8d8;
  border-radius: 15px;
}


.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>