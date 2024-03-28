<script setup>
import { onMounted, ref } from "vue"
import useAxios from "@/composables/useAxios"
const { loading, error, sendRequest } = useAxios();
import { useAuthStore } from "@/stores/useAuthStore";
import CustomerUser from "@/components/CustomerUser.vue";

const newAddress = ref(false)
const actionToggle = ref(false)
const authStore = useAuthStore();


const addressFrom = ref({
  title:null,
  email:null,
  phone: null,
  address: null,
  area: null,
  state: null,
  zip_code: null,
})


const saveAddress = async () => {
  const data = await sendRequest({
    method: 'post',
    data: {user_id: authStore?.user?.id, ...addressFrom.value},
    url: "/api/save-new-address",
  })

  if(data !== undefined){
    await getMyAddresses()
    newAddress.value = false;
    $toast.success('Address Added')
  }
}


const areas = ref(null)
const orderAreas = ref(null)

const getMyAddresses = async () => {
  const token = await authStore.getToken();
  const data = await sendRequest({
    method: 'get',
    url: "/api/address",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  areas.value = data?.data?.addresses
}

onMounted(async () => {
  await getMyAddresses();
  const getAreas = await sendRequest({
    method: 'get',
    url: "/api/all-areas"
  })
  orderAreas.value = getAreas?.data
})
</script>

<template>
  <section class="customer-section bg-white">
    <div class="container">
      <CustomerUser/>
      <div class="address">
        <div class="order-head justify-content-between mb-4">
          <div class="d-flex align-items-center gap-2">
            <RouterLink to="/dashboard">
              <i class="bi bi-arrow-left"></i>
            </RouterLink>
            <h3>Address Book</h3>
          </div>
          <button  class="primary-button" @click="newAddress = true">
            <div class="d-flex align-items-center">
              <i class="bi bi-plus text-white"></i>
              Add New Address
            </div>
          </button>
        </div>
        <div class="checkout__shipping-add bg-transparent p-0">
          <div class="d-flex flex-wrap created-address">
            <div class="col-md-6 col-12 p-3" v-for="address in areas" :key="`area-${address.id}`">
              <!-- Home Address -->
              <label for="add-1" class="w-100 p-5">
                <h3>{{ address?.title }}</h3>
                <div>
                  <p class="mb-2">{{ address?.address }}</p>
                  <p>{{ address?.email }}</p>
                  <p class="mb-2">{{ address?.phone }}</p>
                  <p>Area: {{ address?.order_area?.area_name }} & Delivery Charge: {{
                      address?.order_area?.delivery_charge }} $</p>
                </div>
              </label>
            </div>
          </div>
          <div v-if="newAddress"  class="checkout__shipping-add-wrapper">
            <div class="checkout__shipping-add-wrapper-new">
              <button class="close" @click="newAddress = !newAddress">
                <i class="bi bi-x-lg"></i>
              </button>
              <div class="mb-5">
                <h3 class="p-0 m-0">New Address</h3>
                <small class="text-danger" v-if="error?.response?.data?.message">{{ error?.response?.data?.message }}</small>
              </div>


              <form @submit.prevent="saveAddress">
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Full Name"
                         v-model="addressFrom.title">
                  <label for="floatingInput">Full Name</label>
                  <small class="text-danger" v-if="error?.response?.data?.errors?.title">{{ error?.response?.data?.errors?.title[0] }}</small>
                </div>

                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Address"
                         v-model="addressFrom.address">
                  <label for="floatingInput">Address</label>
                  <small class="text-danger" v-if="error?.response?.data?.errors?.address">{{ error?.response?.data?.errors?.address[0] }}</small>
                </div>

                <div class="form-floating">
                  <input type="email" class="form-control" id="floatingInput" placeholder="email"
                         v-model="addressFrom.email">
                  <label for="floatingInput">Email</label>
                  <small class="text-danger" v-if="error?.response?.data?.errors?.email">{{ error?.response?.data?.errors?.email[0] }}</small>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <select v-model="addressFrom.area" class="form-select"
                          aria-label="Default select example">
                    <option value="null" selected disabled>Add New City</option>
                    <option  v-for="area in orderAreas" :key="`single-i-${area.id}`" :value="area.id">{{ area?.area_name }}</option>
                  </select>
                  <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="State"
                           v-model="addressFrom.state">
                    <label for="floatingInput">State</label>
                  </div>
                  <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput"
                           placeholder="ZIP Code" v-model="addressFrom.zip_code">
                    <label for="floatingInput">ZIP Code</label>
                  </div>
                </div>
                <small class="text-danger" v-if="error?.response?.data?.errors?.area">{{ error?.response?.data?.errors?.area[0] }}</small>
                <div>
                  <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput"
                           placeholder="Phone Number" v-model="addressFrom.phone">
                    <label for="floatingInput">Phone Number</label>
                    <small class="text-danger" v-if="error?.response?.data?.errors?.phone">{{ error?.response?.data?.errors?.phone[0] }}</small>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-3">
                  <button class="primary-button" type="submit">Save</button>
                  <button class="secondary-button" @click="newAddress = !newAddress">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>