<script setup>
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Registration</h3>
                    <div class="form__content">
                        <form>
                            <input type="text" placeholder="First Name" v-model="first_name">
                            <input type="text" placeholder="Last Name" v-model="last_name">
                            <input type="email" placeholder="Email" v-model="email">
                            <input type="password" placeholder="Password" v-model="password">
                            <button type="submit" class="primary-button mt-3">Sign up</button>
                        </form>
                        <div class="d-flex align-items-center gap-2 py-3">
                            <span>Already have Account?</span>
                            <RouterLink to="/login" class="text-info">Login</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>