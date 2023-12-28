<script setup></script>

<template>
    <div class="product-filter">
        <h3 class="py-2 border-bottom fw-semibold">Filters</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Price
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="product-filter__price">
                            <div class="d-flex gap-2 align-items-center">
                                <label for="min">$</label>
                                <input type="number" name="min" v-model="min" placeholder="From">
                            </div>
                            <div class="d-flex gap-2 align-items-center">
                                <label for="max">$</label>
                                <input type="number" name="max" v-model="max" placeholder="To">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Brand
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body pe-0">
                    <ul class="product-filter__brand">
                        <li>
                            <label for="andrew_leblanc">
                                <input type="checkbox" name="andrew_leblanc" id="andrew_leblanc" v-model="andrew_leblanc">
                                <span>Andrew Leblanc</span>
                            </label>
                        </li>
                        <li>
                            <label for="cozzia">
                                <input type="checkbox" name="cozzia" id="cozzia"  v-model="cozzia">
                                <span>Cozzia</span>
                            </label>
                        </li>
                        <li>
                            <label for="flexsteel">
                                <input type="checkbox" name="flexsteel" id="flexsteel"  v-model="flexsteel">
                                <span>Flexsteel</span>
                            </label>
                        </li>
                        <li>
                            <label for="golden_technologies">
                                <input type="checkbox" name="golden_technologies" id="golden_technologies"  v-model="golden_technologies">
                                <span>Golden Technologies</span>
                            </label>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Product Type
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body pe-0">
                    <ul class="product-filter__brand">
                        <li>
                            <label for="accessories">
                                <input type="checkbox" name="accessories" id="accessories" v-model="andrew_leblanc">
                                <span>Accessories</span>
                            </label>
                        </li>
                        <li>
                            <label for="back_cover">
                                <input type="checkbox" name="back_cover" id="back_cover"  v-model="back_cover">
                                <span>Back Cover</span>
                            </label>
                        </li>
                        <li>
                            <label for="lift_chair">
                                <input type="checkbox" name="lift_chair" id="lift_chair" v-model="lift_chair">
                                <span>Lift Chair</span>
                            </label>
                        </li>
                        <li>
                            <label for="zero_gravity_chairs">
                                <input type="checkbox" name="zero_gravity_chairs" id="zero_gravity_chairs"  v-model="zero_gravity_chairs">
                                <span>Zero Gravity Chairs</span>
                            </label>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>