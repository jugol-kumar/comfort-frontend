<template>
    <!-- Page header -->
    <section class="py-3">
        <div class="container">
            <div class="row h-100">
                <div class="w-20 d-none d-lg-block">
                    <div class="dropDown position-relative">
                        <ul class="d-flex flex-column bg-white rounded shadow h-100 border vh-25 vh-lg-45 overflow-y-scroll">
                            <li class="dropDownLink" v-for="link in links" :key="link.id">
                                <RouterLink to="/" class="navLink">
                                  <span class="navIcon" v-html="link.icon"></span>
                                  {{ link.label }}
                                </RouterLink>
                                <div v-if="link.sublinks" class="dropDownHoverItems">
                                    <ul class="navItems rounded shadow border">
                                        <li v-for="item in link.sublinks">
                                            <RouterLink to="/" class="navLink navLink--Sub">
                                              <span class="navIcon" v-if="item.icon" v-html="item.icon"></span>
                                              {{ item.label }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul> 
                    </div>
                </div>
                <div class="w-100 w-lg-80">
                    <div id="carouselExampleDark" class="carousel slide vh-25 vh-lg-45">
                        <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner h-100">
                          <div class="carousel-item active h-100" data-bs-interval="10000">
                              <RouterLink to="" class="h-100">
                                  <img src="@/assets/images/carousel/1101.png" class="d-block rounded w-100 h-100" alt="..." />
                              </RouterLink>
                          </div>
                          <div class="carousel-item h-100" data-bs-interval="2000">
                              <RouterLink to="">
                                  <img src="@/assets/images/carousel/1100.png" class="d-block w-100 rounded h-100" alt="..." />
                              </RouterLink>

                          </div>
                          <div class="carousel-item h-100">
                              <RouterLink to="">
                                  <img src="https://relaxtheback.com/cdn/shop/files/Qi_XE_Pro_Save_500_Desktop_Banner_HOLIDAY_2023_1_1348x400.png?v=1699299403" class="d-block w-100 h-100 rounded" alt="..." />
                              </RouterLink>
                          </div>
                        </div>
                        <button class="carousel-control-prev primary-bg top-50 rounded-5" style="width: 40px;height: 40px; transform: translateY(-50%); left: 10px;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next primary-bg top-50 rounded-5" style="width: 40px;height: 40px; transform: translateY(-50%); right: 10px;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <h2 class="py-5">SHOP OUR HOLIDAY SPECIALS</h2>
            <div class="row row-cols-2 row-cols-lg-5">
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />
              <SingleProductCard />

<!--                <SingleProduct v-for="item in data" :key="`product-${item.id}`" :info="item"/>-->
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
    
<!--    <section>-->
<!--        <div class="container">-->
<!--            <div class="row align-items-center img-text-wrapper">-->
<!--                <div class="col-lg-8 col-12">-->
<!--                    <div class="img-text-wrapper__img">-->
<!--                        <img src="https://relaxtheback.com/cdn/shop/files/HMSC_Freedom_Chair_Grey_Float_Desk_HOLIDAY_envir_c-t2_1298x731.jpg?v=1699911277" alt="" />-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-4 col-12">-->
<!--                    <div class="img-text-wrapper__text">-->
<!--                        <h2>SAVE 20% ON ALL HUMANSCALE CHAIRS, DESKS AND ACCESSORIES</h2>-->
<!--                        <p class="pb-4">Pamper yourself and your loved ones with ergonomic comfort.</p>-->
<!--                        <RouterLink to="" class="primary-button">SHOP ALL HUMANSCALE</RouterLink>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <section>
        <div class="container">
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
        <div class="container py-5">
            <div class="row row-cols-2 row-cols-lg-4 row-cols-xl-5">
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Office</RouterLink>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
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
        <div class="container py-5">
            <div class="row row-cols-2 row-cols-lg-5">
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Massage</RouterLink>
            </div>
        </div>
    </section>
<!--    <section>-->
<!--        <div class="container">-->
<!--            <div class="new-arrivals">-->
<!--                <RouterLink to="" class="new-arrivals__content">-->
<!--                    <img src="https://relaxtheback.com/cdn/shop/files/SuperNovo-2.0_GRAY_Hero_Model_2560x1440_cf0f2f8e-9461-47ac-ba3a-6ba603575df5_2558x1439.jpg?v=1698830594" alt="">-->
<!--                    <div class="new-arrivals__content__text">-->
<!--                        <h2>SHOP NEW ARRIVALS</h2>-->
<!--                        <p>This season give the gift of wellness. A gift that offers relief, recovery, or relaxation for you or someone you care about.</p>-->
<!--                    </div>-->
<!--                </RouterLink>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <section>
        <div class="container">
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
        <div class="container py-5">
            <div class="row row-cols-2 row-cols-lg-5">
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
                <SingleProductCard />
            </div>
            <div class="text-center py-5">
                <RouterLink to="" class="primary-button">Shop Sleep</RouterLink>
            </div>
        </div>
    </section>
<!--    <section>-->
<!--        <div class="container">-->
<!--            <div class="row appointment-section">-->
<!--                <div class="col-lg-6 col-12 position-relative">-->
<!--                    <div class="appointment-section__left" role="button" @click="isVideo = !isVideo">-->
<!--                        <span to="" class="play-button">-->
<!--                            <i class="bi bi-play-fill"></i>-->
<!--                        </span>-->
<!--                    </div>-->
<!--                    <div v-if="isVideo" class="appointment-section__video">-->
<!--                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S-A0qLTxf-U?si=JulyLlKcLWHaOG2G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col-lg-6 col-12">-->
<!--                    <div class="appointment-section__right">-->
<!--                        <h2>Schedule A Virtual Appointment Today</h2>-->
<!--                        <p>Experience custom, real-time demonstrations of a curated assortment of premium wellness solutions, from <i class="fw-bold">anywhere</i> that you are.</p>-->
<!--                        <div class="d-flex align-items-center gap-3 py-3">-->
<!--                            <RouterLink to="" class="primary-button">Book Now</RouterLink>-->
<!--                            <RouterLink to="" class="primary-button">Learn More</RouterLink>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
    <section>
        <div class="container p-4 rounded-3 mb-3 primary-bg">
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
    import SingleProductCard from "@/components/SingleProductCard.vue";
    import useAxios from "@/composables/useAxios"
    import {demoLinks} from '@/navlinks'



    const links = demoLinks;

    const { loading, error, sendRequest } = useAxios();
    const data = ref(null);

    onMounted(async () => {
    const res = await sendRequest({
        method: 'get',
        url: '/api/product-with-variations',
    });
    data.value = res.data
    })


</script>
