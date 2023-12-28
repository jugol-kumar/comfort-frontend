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
                            <div class="d-flex align-items-center justify-content-between">
                                <label for="remember_me" class="d-flex align-items-center gap-1" role="button">
                                    <input type="checkbox" id="remember_me" name="remember_me" v-model="remember_me">
                                    <span>Remember Me</span>
                                </label>
                                <RouterLink to="/" class="text-info">Forgot your password?</RouterLink>
                            </div>
                            <button type="submit" class="primary-button mt-2">Sign in</button>
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