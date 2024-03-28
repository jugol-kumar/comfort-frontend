<script setup>
import CustomerUser from "@/components/CustomerUser.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import useAxios from "@/composables/useAxios.js";
import {ref} from "vue";
import {useRouter} from "vue-router";
const user = useAuthStore();

const editPass = ref({
  id:user.user.id,
  current_pass:null,
  confirm_pass:null,
  new_pass:null,
})

const {sendRequest, loading, error} = useAxios();
const handelUpdateProfile = async () => {
  // error.value = []
  const data = await sendRequest({
    url:"/api/customer/update-password",
    method:"POST",
    data:editPass.value,
  })
  if(data?.data){
    $toast.success("Profile Updated...")
    await user.logout();
    await useRouter().push({name: 'home'})
  }
}

</script>

<template>
    <Section class="customer-section">
        <div class="container">
          <CustomerUser/>
            <div class="order-head">
                <RouterLink to="/dashboard">
                    <i class="bi bi-arrow-left"></i>
                </RouterLink>
                <h3>Update Password</h3>
            </div>
            <div class="profile-info">
              <p class="text-danger">{{ error?.response?.data?.message }}</p>
                <form @submit.prevent="handelUpdateProfile">
                    <div class="mb-2">
                        <label for="current_password">
                          <span class="text-danger me-1">*</span>Current Password</label>
                        <input type="password" v-model="editPass.current_pass">
                      <small class="text-danger" v-if="error?.response?.data?.errors.current_pass">{{ error?.response?.data?.errors.current_pass[0]}}</small>
                    </div>
                    <div class="mb-2">
                        <label for="new_password"><span class="text-danger me-1">*</span>New Password</label>
                        <input type="password" v-model="editPass.new_pass">
                        <small class="text-danger" v-if="error?.response?.data?.errors.new_pass">{{ error?.response?.data?.errors.new_pass[0]}}</small>

                    </div>
                    <div class="mb-2">
                        <label for="confirmed_password"><span class="text-danger me-1">*</span>Confirmed Password</label>
                        <input type="password" v-model="editPass.confirm_pass">
                        <small class="text-danger" v-if="error?.response?.data?.errors.confirm_pass">{{ error?.response?.data?.errors.confirm_pass[0]}}</small>
                    </div>
                    <button class="primary-button mt-4">Update Password</button>
                </form>
            </div>
        </div>
    </Section>
</template>