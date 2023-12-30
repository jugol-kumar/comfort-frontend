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
                <h3>Edit Profile</h3>
            </div>
            <div class="profile-info">
                <form>
                    <div class="mb-2">
                        <label for="name">Name</label>
                        <input type="text" value="Customer" readonly disabled>
                    </div>
                    <div class="mb-2">
                        <label for="email">Email</label>
                        <input type="email" value="customer@gmail.com" readonly disabled>
                    </div>
                    <div class="mb-2">
                        <label for="phone">Phone</label>
                        <input type="text" value="++7657473" readonly disabled>
                    </div>
                    <button class="primary-button mt-4">Edit Profile</button>
                </form>
            </div>
        </div>
    </Section>
</template>