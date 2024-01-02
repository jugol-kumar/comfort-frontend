<script>
    export default {
        data() {
            return {
                isDisabled: true,
                isReadonly: true
            }
        }
    }
</script>

<template>
    <Section class="customer-section">
        <div class="container">
            <div class="dashboard-user mb-5">
                <div class="dashboard-user__icon">
                    <i class="bi bi-person"></i>
                </div>
                <div>
                    <p>Hello,</p>
                    <h3 class="text-capitalize">Tushar Imran</h3>
                </div>
            </div>
            <div class="order-head">
                <RouterLink to="/dashboard">
                    <i class="bi bi-arrow-left"></i>
                </RouterLink>
                <h3>Edit Profile</h3>
            </div>
            <div class="profile-info">
                <form @submit.prevent="">
                    <div class="mb-2">
                        <label for="name">Name</label>
                        <input type="text" value="Customer" :readonly="isReadonly" :disabled="isDisabled">
                    </div>
                    <div class="mb-2">
                        <label for="email">Email</label>
                        <input type="email" value="customer@gmail.com"  :readonly="isReadonly" :disabled="isDisabled">
                    </div>
                    <div class="mb-2">
                        <label for="phone">Phone</label>
                        <input type="text" value="++7657473"  :readonly="isReadonly" :disabled="isDisabled">
                    </div>
                    <button v-if="isDisabled && isReadonly" class="primary-button mt-4" @click="isDisabled = !isDisabled, isReadonly = !isReadonly">Edit Profile</button>
                    <button v-if="!isDisabled && !isReadonly" class="primary-button mt-4">Update Profile</button>
                </form>
            </div>
        </div>
    </Section>
</template>