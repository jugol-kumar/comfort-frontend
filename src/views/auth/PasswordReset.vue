<script>
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
                <h3>Update Password</h3>
            </div>
            <div class="profile-info">
                <form>
                    <div class="mb-2">
                        <label for="current_password"><span class="text-danger me-1">*</span>Current Password</label>
                        <input type="text">
                    </div>
                    <div class="mb-2">
                        <label for="new_password"><span class="text-danger me-1">*</span>New Password</label>
                        <input type="text">
                    </div>
                    <div class="mb-2">
                        <label for="confirmed_password"><span class="text-danger me-1">*</span>Confirmed Password</label>
                        <input type="text">
                    </div>
                    <button class="primary-button mt-4">Update Password</button>
                </form>
            </div>
        </div>
    </Section>
</template>