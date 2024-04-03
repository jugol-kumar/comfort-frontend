<script setup>
import { ref, onMounted } from "vue"
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router'
const authStore = useAuthStore();


const router = useRouter()


const loginData = ref({
    email: null,
    password: null,
    remember_me:false,
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
                    <div class="form__content">
                        <form @submit.prevent="handelLogin">
                            <div class="d-flex flex-column">
                                <input type="email" :class="{'is-invalid' : authStore.error}" placeholder="Email" v-model="loginData.email" :disabled="authStore.loading">
                                <small class="text-danger">{{ authStore.error?.response?.data?.message }}</small>
                            </div>
                            <input type="password" placeholder="Password" v-model="loginData.password" :disabled="authStore.loading">

                            
                            <div class="d-flex align-items-center justify-content-between">
                                <label for="remember_me" class="d-flex align-items-center gap-1" role="button">
                                    <input type="checkbox" id="remember_me" name="remember_me" v-model="loginData.remember_me">
                                    <span>Remember Me</span>
                                </label>
                                <RouterLink to="/" class="text-info">Forgot your password?</RouterLink>
                            </div>
                            
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