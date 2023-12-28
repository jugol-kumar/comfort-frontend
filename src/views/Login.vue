<script setup>
</script>

<template>
    <section>
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-center">
                <div class="form mt-8">
                    <h3>Login</h3>
                    <div class="form__content">
                        <form>
                            <input type="email" placeholder="Email" v-model="email">
                            <input type="password" placeholder="Password" v-model="password">
                            <button type="submit" class="primary-button mt-3">Sign in</button>
                        </form>
                        <div class="d-flex align-items-center gap-2 py-3">
                            <span>New Customer?</span>
                            <RouterLink to="/register" class="text-dark">Create Account</RouterLink>
                            <RouterLink to="/" class="text-info">Forgot your password?</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>