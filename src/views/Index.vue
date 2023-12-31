<template>
    <!-- Page header -->
    <section>
        <div class="container-fluid">
            <div class="row">
                <div id="carouselExampleDark" class="carousel slide">
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
            <h2 class="py-5">SHOP OUR HOLIDAY SPECIALS</h2>
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
            <div class="row promo-container">
                <div class="col-lg-8 col-12  mb-3 mb-lg-0">
                    <RouterLink to="" class="promo-container__content promo-container__content--one">
                        <div class="promo-container__content__text">
                            <h2>Ergonomic Office Furniture</h2>
                            <p>Increase your productivity with a workspace designed to improve both your movement and your</p>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="row align-items-center flex-column gap-3" style="padding-inline:12px;">
                        <RouterLink to="" class="promo-container__content  promo-container__content--two">
                            <div class="promo-container__content__text promo-container__content__text--left">
                                <h2>ERGONOMIC CHAIRS</h2>
                                <p>Ergonomic office chairs provide better comfort, better posture, & improved health.</p>
                            </div>
                        </RouterLink>
                        <RouterLink to="" class="promo-container__content  promo-container__content--three">
                            <div class="promo-container__content__text  promo-container__content__text--left">
                                <h2>Sit & Stand Desks</h2>
                                <p>A standing desk promotes increased circulation and mental alertness.</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-5">
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
    <section>
        <div class="container-fluid">
            <h2  class="py-5">LIVE A WELL-BALANCED LIFE</h2>
            <div class="row promo-container  promo-container--shop-massage">
                <div class="col-lg-8 col-12  mb-3 mb-lg-0">
                    <RouterLink to="" class="promo-container__content promo-container__content--one">
                        <div class="promo-container__content__text">
                            <h2>Massage</h2>
                            <p>This season give the gift of wellness. A gift that offers relief, recover, or relaxation for you or someone you care about. </p>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="row align-items-center flex-column gap-3"  style="padding-inline:12px;">
                        <RouterLink to="" class="promo-container__content  promo-container__content--two">
                            <div class="promo-container__content__text promo-container__content__text--left">
                                <h2>Inversion Tables</h2>
                                <p>By shifting the body’s gravity, pressure eases off the back while also providing traction for the spine.</p>
                            </div>
                        </RouterLink>
                        <RouterLink to="" class="promo-container__content  promo-container__content--three">
                            <div class="promo-container__content__text  promo-container__content__text--left">
                                <h2>Handheld Massagers</h2>
                                <p>Treat yourself to a high-grade massage whenever you need it.</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-5">
            <div class="row">
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Massage</RouterLink>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div class="new-arrivals">
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
            <h2 class="py-5">IMPROVE YOUR MENTAL & PHYSICAL HEALTH WITH A BETTER NIGHTS SLEEP</h2>
            <div class="row promo-container  promo-container--shop-sleep">
                <div class="col-lg-8 col-12 mb-3 mb-lg-0">
                    <RouterLink to="" class="promo-container__content promo-container__content--one">
                        <div class="promo-container__content__text">
                            <h2>Sleep</h2>
                            <p>Recover overnight with restorative sleep on a mattress and pillows fit for your body and sleep position.</p>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="row align-items-center flex-column gap-3"  style="padding-inline:12px;">
                        <RouterLink to="" class="promo-container__content  promo-container__content--two">
                            <div class="promo-container__content__text promo-container__content__text--left">
                                <h2>SHOP MATTRESSES</h2>
                                <p>Shop a wide selection of ergonomic mattresses and orthopedic beds.</p>
                            </div>
                        </RouterLink>
                        <RouterLink to="" class="promo-container__content  promo-container__content--three">
                            <div class="promo-container__content__text  promo-container__content__text--left">
                                <h2>ERGONOMIC PILLOWS</h2>
                                <p>Sleep better than ever with our ergonomic pillows.</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-5">
            <div class="row">
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
                <SingleProductCardVue />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Sleep</RouterLink>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid">
            <div class="row appointment-section">
                <div class="col-lg-6 col-12 position-relative">
                    <div class="appointment-section__left" role="button" @click="isVideo = !isVideo">
                        <span to="" class="play-button">
                            <i class="bi bi-play-fill"></i>
                        </span>
                    </div>
                    <div v-if="isVideo" class="appointment-section__video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S-A0qLTxf-U?si=JulyLlKcLWHaOG2G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
            <h2 class="py-5">LEARN HOW TO LIVE A HEALTHIER LIFESTYLE</h2>
            <div class="row">
                <SingleBlogCard />
                <SingleBlogCard />
                <SingleBlogCard />
            </div>
            <div class="text-center py-5">
                <router-link to="" class="read-more d-inline-flex align-items-center justify-content-center gap-2 fs-3" style="">
                        See More<i class="bi bi-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </section>
    <section>
        <div class="container-fluid py-8" style="background: #f5f5f5;">
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
    import SingleBlogCard from "@/components/SingleBlogCard.vue";
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
