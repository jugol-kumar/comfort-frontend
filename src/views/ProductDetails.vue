<script setup>
import SingleProductCard from '@/components/SingleProductCard.vue'
import ProductReviewQuestion from '@/components/ProductReviewQuestion.vue'
import QuantityCounter from '@/components/QuantityCounter.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<template>
    <!-- Content -->
    <section class="pb-8">
        <div class="container-fluid">

            <!-- Breadcrumb -->
            <Breadcrumb />

            <div class="row">
                <div class="col-md-6 col-12">
                    <div>
                        <img src="https://relaxtheback.com/cdn/shop/products/Cozzia_QiPro_Black_Right-Turning1-Display_WEB_clip-j_1024x1024.jpg?v=1663732636" alt="" class="w-100 h-auto" />
                    </div>
                    <div class="p-3">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/S-A0qLTxf-U?si=JulyLlKcLWHaOG2G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="product-detail">
                        <h2 class="product-title">Mid Back Ultimate Executive Office Chair</h2>
                        <p class="fs-4 mb-2 text-secondary">by <RouterLink to="" class="fw-semibold text-dark">Cozzia</RouterLink></p>
                        <div class="product-review d-flex align-items-center gap-2">
                            <div class="fs-3 text-info d-flex align-items-center gap-1">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i> 
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i>
                            </div>
                            <span class="fs-4 text-secondary">1 Review</span>
                        </div>
                        <div class="d-flex align-items-center gap-3 secondary-button text-white my-3">
                            <i class="bi bi-box-seam text-dark fs-3"></i>
                            <p class=" text-capitalize fw-semibold">This product qualifies for free shipping.</p>
                        </div>
                        <div class="primary-button w-100 text-center mb-3">Save $500.00</div>
                        <div class="pricing-new p-4 rounded border border-secondary d-flex align-items-center justify-content-between">
                            <div class="compare-at-pricing-new text-center">
                                <p class="m-0 fs-4 fw-semibold text-dark">ONE TIME PAYMENT</p>
                                <h2 class="m-0 fs-2 fw-semibold text-dark">$7,999.00</h2>
                                <strike class="text-danger fw-normal fs-3">$8,499.00</strike>
                            </div>
                            <div class="or-new d-flex align-items-center justify-content-center h-100">
                                <span>OR</span>
                            </div>
                            <div class="interest-new d-flex align-items-center gap-2">
                                <div>
                                    <img src="https://pdpone.syfpos.com/cs/groups/public/documents/et_imagetype/etimg063608.png">
                                </div>
                                <div class="text-uppercase text-dark fw-semibold fs-5 text-center">
                                    Interest-free. $167/mo with 48-month financing.&nbsp;
                                    <RouterLink to="" class="text-danger fw-semibold">Learn How</RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="product-form-action mt-4">
                            <div class="quantity-selector">
                                <label for="quantity-selector-input" class="fs-3 text-dark fw-semibold">Quantity</label>
                                <div class="d-flex align-items-center gap-3 py-3">
                                    <div>
                                        <!-- QuantityCounter -->
                                        <QuantityCounter />
                                    </div>
                                    <div class="w-100">
                                        <RouterLink to="" class="secondary-button text-dark fw-medium fs-3 w-100 d-inline-block text-center">ADD TO CART</RouterLink>
                                    </div>
                                    <div>
                                        <button class="d-flex align-items-center justify-content-center p-0 border-0 rounded">
                                            <i class="bi bi-heart fs-3"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="share-this py-4">
                            <h4 class="fs-3 fw-semibold text-dark mb-4">Share this:</h4>
                            <ul class="list-unstyled d-flex align-items-center gap-3 mb-4">
                                <li>
                                    <a href="#" target="_blank" class="facebook">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="twitter">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="linkedin">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" class="pinterest">
                                        <i class="bi bi-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                            <p class="fs-4  fw-normal text-secondary">Inside the Qi XE Pro Massage Chair, every experience is personal. An onboard assistant tracks usage patterns and preferences, integrating seamlessly with your digital life. Everything is tuned to your liking, from cueing up your favorite music to creating your own customized massage.
                            <br><br>
                            Equipped with Dual Lumbar Massage, Tri-Zone Heat Therapy, and 4D Vario Motion Intelligent Rollers, experience a life-changing massage all in the comfort of your home or office. The smart massage rollers built into this recliner chair track the natural shape of your spine and allow for full-body tension relief. The Chair Doctor program built into this AI massage chair allows each massage session to be customized to your current tension and stress. Experience immediate chiropractic pain relief through any of the 24 detailed massage programs.
                            <br><br>
                            Use the smart quick action controls to conveniently enter a relax and stretch program, adjust the heat, or regulate your chair's reclining adjustments. The smart dial allows you to easily turn the chair on/off and alter the strength of the back massage on the go by simply rotating the dial for greater depth or for a milder massage. Similarly, use the convenient Alexa voice control through the multiple-language tablet to command your recliner.
                            </p>
                        </div>
                        <div class="bg-light rounded d-flex gap-3 p-4">
                            <i class="bi bi-info-circle mt-1 fs-3"></i>
                            <div>
                                <h3 class="fs-4 fw-semibold text-dark mb-1">Ask An Expert</h3>
                                <p class="m-0 fs-4">Schedule a free virtual appointment! <RouterLink to="">Learn More</RouterLink></p>
                            </div>
                        </div>
                        <div class="accordion accordion-flush my-5" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed fw-semibold text-dark fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Features & Benefits
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="d-flex flex-column gap-3">
                                        <li class="text-secondary"><span class="fw-semibold text-dark">L-Track Massage-</span> The Qi XE™ Pro massage ​chair uses a 54-inch-long massage roller track that follows the natural shape of the spine. The L shaped track allows for massage starting at the back of the head, neck, and shoulders, traveling down the spine contouring underneath the glues to target and release these important muscle groups.</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Chair Doctor-</span> One of the most important massage advancements to date, the Chair Doctor program, uses AI technology to create a massage based on your current tension and stress. Using the hand-held biometric scanner, GSR control sensors are utilized to send biofeedback information to sense your tension areas.</li>
                                        <li class="text-secondary"><span  class="text-dark fw-semibold">Dual Lumbar Massage-</span> Dual air compression chambers are strategically placed in the left and right sides of the lower back to target and release stiffness.</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Immediate Pain Relief-</span> The Cozzia Qi XE™ Pro holds you in place, bends you backward slowly but firmly, which takes pressure off the discs in your spine proving a similar effect to a spinal adjustment at a chiropractor’s office.</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Tri-Zone Heat Therapy-</span> Heated care targets the lower back, buttock, knees, and calves.</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed fw-semibold text-dark fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Specifications & Details
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul class="d-flex flex-column gap-3">
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Upright:</span>62.2"L x 33.1"W x 47.6"H</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Fully Relined::</span>77.2"L x 33.1"W x 41.3"H</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Power Voltage:</span>110 -120V</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Rated Frequency::</span>60Hz</li>
                                        <li class="text-secondary"><span class="text-dark fw-semibold">Weight Capacity:</span>320 Lbs.</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed  text-dark fw-semibold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Warranty
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>5 Year In-Home Warranty</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="img-text__container mt-5">
                <div class="row align-items-center my-4">
                    <div class="col-md-6 col-12">
                        <img src="https://relaxtheback.com/cdn/shop/files/2022-layout-tablet-screen-cz-716-1536x1052_1390x953.jpg?v=1693951500" alt="CHAIR DOCTOR™ POWERED BY AI" />
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="img-text__container-content">
                            <h2>CHAIR DOCTOR™ POWERED BY AI</h2>
                            <p class="my-4">One of the most important massage advancements to date, the Chair Doctor™ program, uses AI technology to create a massage based on your current tension and stress. Using the hand-held biometric scanner, GSR control sensors are utilized to send biofeedback information to sense your tension areas. PPG technology can read your heart rate to analyze your stress levels. The Chair Doctor™ also measures your SP02 blood oxygen levels. The program uses all of this data to provide a unique massage just for you.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center my-4">
                    <div class="col-md-6 col-12">
                        <div class="img-text__container-content">
                            <h2>IMMEDIATE PAIN RELIEF</h2>
                            <p class="my-4">Compressed spinal discs are a leading cause of back pain. If you suffer from this, the Qi XE Pro offers four different stretch options. The Cozzia Qi XE Pro holds you in place, bends you backward slowly but firmly, which takes pressure off the discs in your spine proving a similar effect to a spinal adjustment at a chiropractor’s office.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <img src="https://relaxtheback.com/cdn/shop/files/DSC9272__v_-i_720x480.png?v=1693950326" alt="IMMEDIATE PAIN RELIEF" />
                    </div>
                </div>
                <div class="row align-items-center my-4">
                    <div class="col-md-6 col-12">
                        <img src="https://relaxtheback.com/cdn/shop/files/2022-layout-quick-dial-cz-716-1536x1052_1390x953.jpg?v=1693950335" alt="CHAIR DOCTOR™ POWERED BY AI" />
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="img-text__container-content">
                            <h2>CHAIR DOCTOR™ POWERED BY AI</h2>
                            <p class="my-4">Use the quick action controls to get into a relax and stretch program straight away, adjust the heat, or control the recline adjustments of your chair. The smart dial allows you to power on and off the chair quickly and adjusts the back massage intensity on the fly by simply turning the dial right for more depth or left for a gentler massage.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center my-4">
                    <div class="col-md-6 col-12">
                        <div class="img-text__container-content">
                            <h2>4D VARIOMOTION™ INTELLIGENT ROLLERS</h2>
                            <p class="my-4">Bringing your massage therapist home, the most advanced 4D rollers glide with a wider massage area than ever before. 4D VarioMotion™ rollers deliver a more accurate massage than any other massage chair. Fast sensing technology elevates the massage by targeting therapy to problem areas and quickly relieve tight back muscles. Pinpointing key muscle groups along the spine, Smart Acupunctural Point Detection targets 36 Acupuncture points for optimal spinal relief.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <img src="https://relaxtheback.com/cdn/shop/files/2022-vario-motion-cz-716-2_1079x608.jpg?v=1693950979" alt="4D VARIOMOTION™ INTELLIGENT ROLLERS" />
                    </div>
                </div>
            </div>
            
            <!-- Product Review & Question -->
            <ProductReviewQuestion />

            <!-- Featured Collection -->
            <div class="featured-collection mt-6">
                <h2 class="text-center text-uppercase fs-3 fw-semibold my-5">YOU MAY ALSO LIKE</h2>
                <div class="row">
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                    <SingleProductCard />
                </div>
                <div class="my-5 text-center">
                    <RouterLink to="/" class="py-2 px-4 bg-info text-uppercase text-white d-inline-block">View More</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    
</script>
<style lang="scss" scoped>
i {
    line-height: 0;
}
.product-title {
    text-align: left;
}
.compare-at-pricing-new {
    width: 45%;
}
.or-new {
    position: relative;
    width: 10%;
}
.or-new {
    &::before {
        content: '';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 50%;
        background-color: #000;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 50%;
        background-color: #000;
    }
}

.or-new span{
    background-color: #fff;
    font-size: 20px;
    padding: 10px 0;
    color: #000;
}

.interest-new {
    width: 45%;
}
.interest-new img{
    width: 85px;
    height: auto;
}
.share-this ul li a{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #fff;
    font-size: 18px;
    transition: all ease-in-out 0.3s;
}
.share-this ul li a:hover {
    transform: translateY(-5px);
}
.share-this .facebook {
    background-color: #425DAB;
}
.share-this .twitter {
    background-color: #1DA1F2;
}
.share-this .linkedin {
    background-color: #0877B5;
}
.share-this .pinterest {
    background-color: #BD1C1C;
}
.img-text__container img{
    width: 100%;
    height: auto;
}
.img-text__container {
    h2 {
        text-align: left;
    }
    p {
        color: #6b6d76;
    }
}
.accordion-button:focus {
    border-color:unset !important;
}
</style>
