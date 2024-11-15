<template>
    <!-- Service -->
    <section>
        <div class="str home-acces-main">
            <div class="container">
                <div class="row">
                    <!-- BACKGROUND SHAPE -->
                    <div class="wedd-shap">
                        <span class="abo-shap-1"></span>
                        <span class="abo-shap-4"></span>
                    </div>
                    <!-- END BACKGROUND SHAPE -->

                    <div class="home-tit">
                        <p>Quick Access</p>
                        <h2><span>Our Services</span></h2>
                        <span class="leaf1"></span>
                        <span class="tit-ani-"></span>
                    </div>
                    <div class="home-acces">
                        <ul class="hom-qui-acc-sli" ref="carousel">
                            <li>
                                <div class="wow fadeInUp hacc hacc1" data-wow-delay="0.1s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/user.png" alt="" loading="lazy">
                                        <h4>Browse Profiles</h4>
                                        <p>1200+ Profiles</p>
                                        <a href="all-profiles.html">View more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wow fadeInUp hacc hacc2" data-wow-delay="0.2s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/gate.png" alt="" loading="lazy">
                                        <h4>Wedding</h4>
                                        <p>1200+ Profiles</p>
                                        <a href="wedding-video.html">View more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wow fadeInUp hacc hacc3" data-wow-delay="0.3s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/couple.png" alt="" loading="lazy">
                                        <h4>All Services</h4>
                                        <p>1200+ Profiles</p>
                                        <a href="services.html">View more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wow fadeInUp hacc hacc4" data-wow-delay="0.4s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/hall.png" alt="" loading="lazy">
                                        <h4>Join Now</h4>
                                        <p>Start for free</p>
                                        <a href="plans.html">Get started</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wow fadeInUp hacc hacc3" data-wow-delay="0.3s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/photo-camera.png" alt="" loading="lazy">
                                        <h4>Photo gallery</h4>
                                        <p>1200+ Profiles</p>
                                        <a href="photo-gallery.html">View more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="wow fadeInUp hacc hacc4" data-wow-delay="0.4s">
                                    <div class="con">
                                        <img src="../../assets/images/icon/cake.png" alt="" loading="lazy">
                                        <h4>Blog & Articles</h4>
                                        <p>Start for free</p>
                                        <a href="blog.html">Get started</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END -->
</template>
<script>
export default {
    name: 'ServiceCarousel',
    data() {
        return {
            isSlickInitialized: false,
            isCarouselVisible: true,
        };
    },
    mounted() {
        this.initCarousel();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
        if (this.isSlickInitialized) {
            $(this.$refs.carousel).slick('unslick');
        }
    },
    methods: {
        handleResize() {
            if (window.innerWidth < 990 && this.isSlickInitialized) {
                this.isCarouselVisible = false;
                $(this.$refs.carousel).slick('unslick');
                this.isSlickInitialized = false;
            } else if (window.innerWidth >= 990 && !this.isSlickInitialized) {
                this.isCarouselVisible = true;
                this.initCarousel();
            }
        },
        initCarousel() {
            $(this.$refs.carousel).slick({
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });
            this.isSlickInitialized = true;
        }
    }
};
</script>