<template>
  <section>
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-center">
        <div class="form mt-8">
          <h3>Forgot Password</h3>
          <div class="form__content">
            <form @submit.prevent="forgotNow">
              <!-- Username -->
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email"
                       v-model="email"
                       :disabled="loading" id="email"
                       class="form-control" name="email" placeholder="Enter Email address"
                       required>
                <div class="text-danger" v-if="error?.response.data?.errors?.email" v-text="error?.response.data?.errors?.email[0]"></div>
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
import {ref} from "vue";
import useAxios from "@/composables/useAxios.js";

const {sendRequest, loading, error} = useAxios();

const email = ref(null)
const forgotNow = async () => {
  error.value = null;
  const data = await sendRequest({
    url: "/api/forgot-password",
    method: "POST",
    data: {email: email.value}
  })
  loading.value = false;
  $toast.info(data.data)
}

</script>
