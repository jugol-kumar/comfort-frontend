<template>
  <section>
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-center">
        <div class="form mt-8">
          <h3>Forgot Password</h3>
          <div class="form__content">
            <form @submit.prevent="forgotNow">
              <div>
                <label for="email" class="form-label">Change Password</label>
                <input type="password"
                       v-model="password"
                       :disabled="loading" id="email"
                       class="form-control" name="email" placeholder="Password..."
                       required>
                <div class="text-danger" v-if="error?.response?.data?.errors?.password" v-text="error?.response?.data?.errors?.password[0]"></div>
            </div>
            <div class="mb-3">
              <input type="password"
                     v-model="confirmation_password"
                     :disabled="loading" id="email"
                     class="form-control" name="email" placeholder="Confirmation Password"
                     required>
              <div class="text-danger" v-if="error?.response?.data?.errors?.confirmation_password" v-text="error?.response?.data?.errors?.confirmation_password[0]"></div>
            </div>

          <div>
                <!-- Button -->
                <div class="d-grid mb-2">

                  <button v-if="loading" type="submit" class="primary-button mt-3" :disabled="loading">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>

                  <button type="submit" class="btn primary-button" v-else>Forgot Now</button>
                </div>
                <span class="mt-2">Want to try for login?
                  <RouterLink to="login" class="ms-1 text-primary">Login</RouterLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import useAxios from "@/composables/useAxios.js";

const route = useRoute();
const router = useRouter();
const { sendRequest, loading, error } = useAxios()

const password = ref(null)
const confirmation_password = ref(null)
const forgotNow= async () =>{
  const response = await sendRequest({
    url:"/api/save-new-password",
    method:"POST",
    data: {
      email: route.query?.email,
      password: password.value,
      confirm_password:confirmation_password.value
    }
  })

  if(response.data){
    $toast.info("New Password Setup Successfully Done...")
    await router.push({name:"login"})
  }
}

onMounted(()=>{
  if(!route.query?.email) router.push({name:'home'})
})

</script>
