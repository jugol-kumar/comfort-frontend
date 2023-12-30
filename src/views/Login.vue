<script setup>
import { ref, onMounted } from "vue"
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router'
const authStore = useAuthStore();


const router = useRouter()


const loginData = ref({
    email: "mail@mail.com",
    password: "12345678"
})



authStore.error = null;
const handelLogin = async () => {
    authStore.error = null;
    await authStore.login(loginData.value)
    router.push({name:"dashboard"})
}

// onMounted(() =>{
//   if(!authStore.isLoggedIn){
//     router.push({name:"dashboard"})
//   }
// })
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Login</h3>

                    <router-link :to="{ name: 'dashboard'}">
                        User
                    </router-link>

                    <div class="form__content">
                        <form @submit.prevent="handelLogin">
                            <div class="d-flex flex-column">
                                <input type="email" :class="{'is-invalid' : authStore.error}" placeholder="Email" v-model="loginData.email" :disabled="authStore.loading">
                                <small class="text-danger">{{ authStore.error?.response?.data?.message }}</small>
                            </div>
                            <input type="password" placeholder="Password" v-model="loginData.password" :disabled="authStore.loading">

                            <button v-if="authStore.loading" type="submit" class="primary-button mt-3" :disabled="authStore.loading">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </button>
                            <button v-else type="submit" class="primary-button mt-3" :disabled="authStore.loading">Sign in</button>

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