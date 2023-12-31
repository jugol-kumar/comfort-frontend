<script>
export default {
    data() {
        return {
            newAddress: false,
            actionToggle: false,
        }
    }
}
</script>

<template>
    <section class="customer-section">
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
            <div class="address">
                <div class="order-head justify-content-between mb-4">
                    <div class="d-flex align-items-center gap-2">
                        <RouterLink to="/dashboard">
                            <i class="bi bi-arrow-left"></i>
                        </RouterLink>
                        <h3>Address Book</h3>
                    </div>
                    <button  class="primary-button" @click="newAddress = true">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-plus text-white"></i>
                            Add New Address
                        </div>
                    </button>
                </div>
                <div class="checkout__shipping-add bg-transparent p-0">
                    <div class="d-flex flex-wrap created-address">
                        <div class="col-md-6 col-12 p-3">
                            <!-- Home Address -->
                            <label for="add-1" class="w-100 p-5">
                                <div class="action">
                                    <button class="action-toggler" @click="actionToggle = !actionToggle">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <div class="action-toggle" v-show="actionToggle">
                                        <button>
                                            <i class="bi bi-pencil-square"></i> Edit
                                        </button>
                                        <button>
                                            <i class="bi bi-trash"></i>Delete
                                        </button>
                                    </div>
                                </div>
                                <h3>Home Address</h3>
                                <div>
                                    <p class="mb-2">Dhaka, merul badda , dit road, tolarbag , #4 road, 2012</p>
                                    <p>home@mail.com</p>
                                    <p class="mb-2">01200000000</p>
                                    <p>Area: Dhaka & Delivery Charge: 50$</p>
                                </div>
                            </label>
                        </div>
                        <div class="col-md-6 col-12 p-3">
                            <!-- Office Address -->
                            <label  for="add-2" class="w-100 p-5">
                                <div class="action">
                                    <button class="action-toggler" @click="actionToggle = !actionToggle">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <div class="action-toggle" v-show="actionToggle">
                                        <button>
                                            <i class="bi bi-pencil-square"></i> Edit
                                        </button>
                                        <button>
                                            <i class="bi bi-trash"></i>Delete
                                        </button>
                                    </div>
                                </div>
                                <h3>Office Address</h3>
                                <div>
                                    <p class="mb-2">Dhaka, merul badda , dit road, tolarbag , #4 road, 2012</p>
                                    <p>office@mail.com</p>
                                    <p class="mb-2">01200000000</p>
                                    <p>Area: Dhaka & Delivery Charge: 90$</p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div v-if="newAddress"  class="checkout__shipping-add-wrapper">
                        
                        <div class="checkout__shipping-add-wrapper-new">
                            <button class="close" @click="newAddress = !newAddress">
                                <i class="bi bi-x-lg"></i>
                            </button>
                            <h3>New Address</h3>
                            <form @submit.prevent="">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" v-model="full_name">
                                    <label for="floatingInput">Full Name</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Address" v-model="address">
                                    <label for="floatingInput">Address</label>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected disabled>Add New City</option>
                                        <option value="1">Dhaka</option>
                                        <option value="2">Rajshahi</option>
                                        <option value="3">Pabna</option>
                                    </select>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="State" v-model="state">
                                        <label for="floatingInput">State</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="ZIP Code" v-model="zip_code">
                                        <label for="floatingInput">ZIP Code</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Phone Number" v-model="phone_number">
                                        <label for="floatingInput">Phone Number</label>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-end gap-3">
                                    <button class="primary-button" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>