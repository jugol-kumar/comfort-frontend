<script setup>
    import CustomerUser from "@/components/CustomerUser.vue";
    import { useAuthStore } from "@/stores/useAuthStore";
    import useAxios from "@/composables/useAxios.js";
    import {ref} from "vue";
    import {useRouter} from "vue-router";
    const user = useAuthStore();

    const editData = ref({
      id:user.user.id,
      name:user.user.full_name,
      email:user.user.email,
      phone:user.user.phone
    })

    const {sendRequest, loading, error} = useAxios();
    const handelUpdateProfile =async () => {
      const data = await sendRequest({
        url:"/api/customer/profile-update",
        method:"POST",
        data:editData.value,
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
                <h3>Edit Profile</h3>
            </div>
            <div class="profile-info">
                <form @submit.prevent="handelUpdateProfile">
                    <div class="mb-2">
                        <label for="name">Name</label>
                        <input type="text" v-model="editData.name" :readonly="isReadonly" :disabled="isDisabled">
                    </div>
                    <div class="mb-2">
                        <label for="email">Email</label>
                        <input type="email" v-model="editData.email"  :readonly="isReadonly" :disabled="isDisabled">
                    </div>
                    <div class="mb-2">
                        <label for="phone">Phone</label>
                        <input type="text" v-model="editData.phone"  :readonly="isReadonly" :disabled="isDisabled">
                    </div>
<!--                    <button v-if="isDisabled && isReadonly" class="primary-button mt-4" @click="isDisabled = !isDisabled, isReadonly = !isReadonly">Edit Profile</button>-->
                    <button type="submit" v-if="!isDisabled && !isReadonly" class="primary-button mt-4">Update Profile</button>
                </form>
            </div>
        </div>
    </Section>
</template>