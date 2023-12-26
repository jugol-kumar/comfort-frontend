<template>
    <!-- Page header -->
    <section>
        <div class="container-fluid">
            <div class="row">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/files/GiftsOfComfortAndJoy-DesktopBanner_HOLIDAY_2023_1_2588x771.jpg?v=1703010563" class="d-block w-100" alt="..." />
                        </RouterLink>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/files/Gravis_Save_500_Desktop_Homepage_Banner_2023_83c52d95-9199-4a2c-b2e6-fd76495c96e3_1348x400.png?v=1698875670" class="d-block w-100" alt="..." />
                        </RouterLink>
                        
                    </div>
                    <div class="carousel-item">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/files/Qi_XE_Pro_Save_500_Desktop_Banner_HOLIDAY_2023_1_1348x400.png?v=1699299403" class="d-block w-100" alt="..." />
                        </RouterLink>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-8">
            <h2 class="pb-5 pt-8">SHOP OUR HOLIDAY SPECIALS</h2>
            <div class="row">

                <!-- <SingleProductCardVue v-for="item in data" :key="`product-${item.id}`" :info="item"/> -->
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <!-- Buttom -->
                <div v-if="loading" class="col-xl-12 col-lg-12 col-md-12 col-12 text-center mt-4">
                    <a href="#" class="btn btn-primary">
                        <div class="spinner-border spinner-border-sm me-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        Load More
                    </a>
                </div>            
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div class="row align-items-center img-text-wrapper">
                <div class="col-lg-8 col-12">
                    <div class="img-text-wrapper__img">
                        <img src="https://relaxtheback.com/cdn/shop/files/HMSC_Freedom_Chair_Grey_Float_Desk_HOLIDAY_envir_c-t2_1298x731.jpg?v=1699911277" alt="" />
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="img-text-wrapper__text">
                        <h2>SAVE 20% ON ALL HUMANSCALE CHAIRS, DESKS AND ACCESSORIES</h2>
                        <p class="pb-4">Pamper yourself and your loved ones with ergonomic comfort.</p>
                        <RouterLink to="" class="primary-button">SHOP ALL HUMANSCALE</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <h2  class="pb-5 pt-8">IMPROVE YOUR WORK PERFORMANCE</h2>
            <div class="promo-container">
                <RouterLink to="" class="promo-container__content promo-container__content--one">
                    <img src="https://relaxtheback.com/cdn/shop/files/Via-ONDA_Man-Setup_Lifestyle_envir_c-j_1826x1283.jpg?v=1697751187" alt="">
                    <div class="promo-container__content__text">
                        <h2>Ergonomic Office Furniture</h2>
                        <p>Increase your productivity with a workspace designed to improve both your movement and your</p>
                    </div>
                </RouterLink>
                <RouterLink to="" class="promo-container__content  promo-container__content--two">
                    <img src="https://relaxtheback.com/cdn/shop/files/LifeformChairs_GENERIC_HomePage-1348x400_2_1699x504.jpg?v=1668534873" alt="">
                    <div class="promo-container__content__text promo-container__content__text--left">
                        <h2>ERGONOMIC CHAIRS</h2>
                        <p>Ergonomic office chairs provide better comfort, better posture, & improved health.</p>
                    </div>
                </RouterLink>
                <RouterLink to="" class="promo-container__content  promo-container__content--three">
                    <img src="https://relaxtheback.com/cdn/shop/files/TranscendDesk-Save400_ManStanding_1200x628_RDA_2023_964x504.jpg?v=1675284598" alt="">
                    <div class="promo-container__content__text  promo-container__content__text--left">
                        <h2>Sit & Stand Desks</h2>
                        <p>A standing desk promotes increased circulation and mental alertness.</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-8">
            <div class="row">
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Office</RouterLink>
            </div>
        </div>
    </section>
    <!-- <section>
        <div class="container-fluid">
            <h2  class="pb-5 pt-8">LIVE A WELL-BALANCED LIFE</h2>
            <div class=" row promo-container">
                <div class="col-lg-8">
                    <RouterLink to="" class="promo-container__content">
                        <img src="https://relaxtheback.com/cdn/shop/files/2HT_SuperNovo_ZGMan_envir_c-t_1746x983.jpg?v=1678917060" alt="">
                        <div class="promo-container__content__text">
                            <h2>Ergonomic Office Furniture</h2>
                            <p>Increase your productivity with a workspace designed to improve both your movement and your</p>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex flex-column gap-4">
                        <div>
                            <RouterLink to="" class="promo-container__content">
                                <img src="https://relaxtheback.com/cdn/shop/files/mastercare_inversiontable_model_fall15__0280_fpo_600_599x599.webp?v=1677727625" alt="">
                                <div class="promo-container__content__text promo-container__content__text--left">
                                    <h2>ERGONOMIC CHAIRS</h2>
                                    <p>Ergonomic office chairs provide better comfort, better posture, & improved health.</p>
                                </div>
                            </RouterLink>
                        </div>
                        <div>
                            <RouterLink to="" class="promo-container__content">
                                <img src="https://relaxtheback.com/cdn/shop/files/theracane_ecbe9798-5a2b-4d4e-bbaf-9415e89c7091_914x686.png?v=1670405137" alt="">
                                <div class="promo-container__content__text  promo-container__content__text--left">
                                    <h2>Sit & Stand Desks</h2>
                                    <p>A standing desk promotes increased circulation and mental alertness.</p>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </section> -->
    <section>
        <!-- Product Section -->
    </section>
    <section>
        <div class="container-fluid">
            <div class="new-arrivals pt-8">
                <RouterLink to="" class="new-arrivals__content">
                    <img src="https://relaxtheback.com/cdn/shop/files/SuperNovo-2.0_GRAY_Hero_Model_2560x1440_cf0f2f8e-9461-47ac-ba3a-6ba603575df5_2558x1439.jpg?v=1698830594" alt="">
                    <div class="new-arrivals__content__text">
                        <h2>SHOP NEW ARRIVALS</h2>
                        <p>This season give the gift of wellness. A gift that offers relief, recovery, or relaxation for you or someone you care about.</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid mt-4">
            <div class="row">
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
            </div>
            <div class="text-center py-5">
                    <RouterLink to="" class="primary-button">Shop All New Arrivals</RouterLink>
                </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <h2 class="pb-5 pt-8">IMPROVE YOUR MENTAL & PHYSICAL HEALTH WITH A BETTER NIGHTS SLEEP</h2>
        </div>
    </section>
    <section>
        <!-- Product Section -->
    </section>
    <section>
        <div class="container-fluid">
            <div class="row appointment-section">
                <div class="col-lg-6 col-12">
                    <div class="appointment-section__left">
                        <span to="" class="play-button">
                            <i class="bi bi-play-fill"></i>
                        </span>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="appointment-section__right">
                        <h2>Schedule A Virtual Appointment Today</h2>
                        <p>Experience custom, real-time demonstrations of a curated assortment of premium wellness solutions, from <i class="fw-bold">anywhere</i> that you are.</p>
                        <div class="d-flex align-items-center gap-3 py-3">
                            <RouterLink to="" class="primary-button">Book Now</RouterLink>
                            <RouterLink to="" class="primary-button">Learn More</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-5 blog-section">
            <h2 class="pb-5 pt-8">LEARN HOW TO LIVE A HEALTHIER LIFESTYLE</h2>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card shadow-sm  h-100 mb-5 md-lg-0">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/articles/Heart_Health_Tips_Lifestyle_and_Diet_896x500_crop_center.jpg?v=1678256383" class="card-img-top" alt="...">
                        </RouterLink>
                        <div class="card-body text-center">
                            <RouterLink to="" class="card-title">HEART HEALTH TIPS: LIFESTYLE AND DIET</RouterLink>
                            <p class="card-text">The heart is the center of the cardiovascular system, providing nourishment and oxygen to the entire body while removing toxins and waste. A healthy heart lifestyle means a healthy body and mind, and taking care of your cardiovascular system can...</p>
                            <RouterLink to="" class="d-flex align-items-center gap-1 justify-content-center text-dark d-inline-block mt-2">
                                Read Now <i class="fe fe-chevron-right"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card shadow-sm h-100 mb-5 md-lg-0">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/articles/EveryBody_Deserves_a_Massage_Week_896x500_crop_center.jpg?v=1663307448" class="card-img-top" alt="...">
                        </RouterLink>
                        <div class="card-body text-center">
                            <RouterLink to="" class="card-title">EVERYBODY DESERVES A MASSAGE WEEK</RouterLink>
                            <p class="card-text">From July 17-23, we’re celebrating EveryBody Deserves a Massage Week. This national week of massage awareness was founded in 1995 by the Associated Bodywork and Massage Professionals (ABMP) as a way to educate and inspire patients about the benefits of...</p>
                            <RouterLink to="" class="d-flex align-items-center gap-1 justify-content-center text-dark d-inline-block mt-2">
                                Read Now <i class="fe fe-chevron-right"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card shadow-sm h-100 mb-5 md-lg-0">
                        <RouterLink to="">
                            <img src="https://relaxtheback.com/cdn/shop/articles/Healthy_Lifestyle_Changes_to_Make_in_the_New_Year_896x500_crop_center.jpg?v=1678941674" class="card-img-top" alt="...">
                        </RouterLink>
                        <div class="card-body text-center">
                            <RouterLink class="card-title" to="">7 SUMMER SELF-CARE TIPS FOR THE BEST WELLNESS ROUTINE</RouterLink>
                            <p class="card-text">As the days get longer and warmer, most of us find ourselves in need of a seasonal change to help us make the most of the sunshine. With busy summer schedules, it’s important to take time for our personal well-being,...</p>
                            <RouterLink to="" class="d-flex align-items-center gap-1 justify-content-center text-dark d-inline-block mt-2">
                                Read Now <i class="fe fe-chevron-right"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center py-5">
                <router-link to="" class="d-flex align-items-center justify-content-center gap-2 fs-3 text-dark">
                        See More<i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-8">
            <div class="row banner">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex flex-column mb-5 mb-lg-0">
                        <div class="banner-icon">
                            <i class="bi bi-truck"></i>
                        </div>
                        <div class="text-center">
                            <h4 class="text-capitalize">FREE SHIPPING</h4>
                            <p>When you spend over $300</p>
                            <p>(Select products excluded)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex flex-column mb-5 mb-lg-0">
                        <div class="banner-icon">
                            <i class="bi bi-phone-vibrate"></i>
                        </div>
                        <div class="text-center">
                            <h4 class="text-capitalize">Give Us a Call</h4>
                            <a href="tel:">+1 (800) 222-5728</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <RouterLink to="" class="d-flex flex-column mb-5 mb-lg-0">
                        <div class="banner-icon">
                            <i class="bi bi-shop-window"></i>
                        </div>
                        <div class="text-center">
                            <h4 class="text-capitalize">Locations</h4>
                            <p>Find a store near you</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import SingleProductCardVue from "@/components/SingleProductCard.vue";
    import useAxios from "@/composables/useAxios"
    const { loading, error, sendRequest } = useAxios();
    const data = ref(null);

    onMounted(async () => {
      const res = await sendRequest({
        method: 'get',
        url: '/api/product-with-variations',
      });
      data.value = res.data
    });
</script>


<style lang="scss" scoped>
.img-text-wrapper {
    &__img {
        img {
            width: 100%;
            height: auto;
        }
    }
    &__text {
        text-align: center;
        padding-left: 26px;
        h2 {
            font-size: 28px;
            margin-bottom: 20px;
        }
    }
}

.promo-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    &__content {
    position: relative;
    display: inline-block;
    &--one {
        grid-column: 3 / 1;
        grid-row: 1;
    }
    &--two {
        grid-column: 3;
        grid-row: 1;
    }
    &--three {
        grid-column: 3;
        grid-row: 2;
    }
    &--left {
        h2 {
            font-size: 26px;
        }
    }
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }
    img {
        width: 100%;
        min-height: 300px;
        object-fit: cover;
    }
    &__text {
        position: absolute;
        left: 20px;
        bottom: 20px;
        max-width: 60%;
        &--left {
            h2 {
                font-size: 28px !important;
                
            }
        }
        h2 {
            color: #fff;
            text-align: left;
            font-size: 38px;
            font-weight: 500;
        }
        p {
            color: #fff;
            font-size: 18px;
            font-weight: 500;
        }
    }
}
}

.new-arrivals {
    &__content {
        position: relative;
        display: inline-block;
        min-height: 80vh;
        max-height: 80vh;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.2);
        }
        img {
            width: 100%;
            min-height: 100%;
            object-fit: cover;
        }
        &__text {
            position: absolute;
            left: 30px;
            bottom: 30px;
            max-width: 60%;
            h2 {
                color: #fff;
                text-align: left;
                font-size: 38px;
                font-weight: 500;
            }
            p {
                color: #fff;
                font-size: 18px;
                font-weight: 500;
            }
        }
    }
}

.appointment-section {
    background: #DDDDDD;
    &__left {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-image: url('https://relaxtheback.com/cdn/shop/files/HP_Virtual_Appointment_2_900x375.png?v=1684185934');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .play-button {
            width: 70px;
            height: 70px;
            background-color: #fff;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                font-size: 44px;
                color: #000;
            }
        }
    }
    &__right {
        padding: 100px 40px;
        h2 {
            font-size: 28px;
            text-align: left;
            margin: 10px 0;
            text-transform: capitalize;
            font-weight: 500;
        }
        p {
            margin: 16px 0;
        }
    }
}

.blog-section {
    .card-title {
        color: #243766 !important;
        font-size: 22px !important;
        margin-bottom: 16px;
    }
    .card-text {
        font-size: 16px;
        margin: 16px 0;
    }
}

.banner {
    &-icon {
        font-size: 48px;
        text-align: center;
        color: #243766;
    }
    h4,p,a {
        color: #243766;
    }
}
</style>