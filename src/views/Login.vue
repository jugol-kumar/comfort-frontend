<script setup>

import {ref, onMounted} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
    email: '',
    password: ''
});

const login = async () => {
    try{
        await axios.post('', {
            email : form.value.email,
            password : form.value.password,
        });
        router.push('/');
    }catch(error){
        if(error.response){
            alert('Login Failed'+ error.response.data.message)
        }else if(error.request){
            alert('Login Failed. please try later');
        }else {
            alert('An unexpected error occurred. Please try again later.');
        }
    }
}
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Login</h3>
                    <div class="form__content">
                        <form @submit.prevent="login" >
                            <input type="email" placeholder="Email" v-model="form.email">
                            <input type="password" placeholder="Password" v-model="form.password">
                            <div class="d-flex align-items-center justify-content-between">
                                <label for="remember_me" class="d-flex align-items-center gap-1" role="button">
                                    <input type="checkbox" id="remember_me" name="remember_me" v-model="remember_me">
                                    <span>Remember Me</span>
                                </label>
                                <RouterLink to="/" class="text-info">Forgot your password?</RouterLink>
                            </div>
                            <button class="primary-button mt-2">Sign in</button>
                        </form>
                        <div class="d-flex align-items-center gap-2 py-3">
                            <span>New Customer?</span>
                            <RouterLink to="/register" class="text-dark">Create Account</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>