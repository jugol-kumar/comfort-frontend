<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
    full_name: '',
    username: '',
    email: '',
    password: ''
});

const register = async () => {
    try{
        await axios.post('/register', {
            full_name: form.value.full_name,
            username: form.value.username,
            email: form.value.email,
            password: form.value.password
        });
        router.push('/');
    }catch(error){
        console.error('Registration error:', error.response ? error.response.data : error.message);
        alert('Registration failed. Please check the console for details.');
    }
}
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Registration</h3>
                    <div class="form__content">
                        <form @submit.prevent="register">
                            <input type="text" class="primary-border-1" placeholder="Full Name" v-model="form.full_name">
                            <input type="email" class="primary-border-1"  placeholder="Email" v-model="form.email">
                            <input type="password" class="primary-border-1"  placeholder="Password" v-model="form.password">
                            <input type="password" class="primary-border-1"  placeholder="Confirm Password" v-model="form.password">
                            <button type="submit" class="primary-button mt-3">Sign up</button>
                        </form>
                        <div class="d-flex align-items-center gap-2 py-3">
                            <span>Already have Account?</span>
                            <RouterLink to="/login" class="primary-color">Login</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>