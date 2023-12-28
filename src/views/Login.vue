<script setup>
import { ref } from "vue"
import { useAuthStore } from '@/stores/useAuthStore';


const authStore = useAuthStore();
const loginData = ref({
    email: "mail@mail.com",
    password: "12345678"
})



const handelLogin = async () => {
    const response = await authStore.login(loginData.value)
    console.log(response)
}


</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Login</h3>
                    <div class="form__content">
                        <form @submit.prevent="handelLogin">
                            <div class="d-flex flex-column">
                                <input type="email" :class="{'is-invalid' : authStore.error}" placeholder="Email" v-model="loginData.email" :disabled="loading">
                                <small class="text-danger">{{ authStore.error?.response?.data?.message }}</small>
                            </div>
                            <input type="password" placeholder="Password" v-model="loginData.password" :disabled="loading">

                            <button v-if="authStore.loading" type="submit" class="primary-button mt-3" :disabled="loading">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </button>
                            <button v-else type="submit" class="primary-button mt-3" :disabled="loading">Sign in</button>

                        </form>
                        <div class="d-flex align-items-center gap-2 py-3">
                            <span>New Customer?</span>
                            <RouterLink  to="/register" class="text-dark">Create Account</RouterLink>
                            <RouterLink to="/" class="text-info">Forgot your password?</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .spinner-border{
        font-size: 11px;
        width: 20px;
        height: 20px;
    }
</style>