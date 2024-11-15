<template>
    <!-- Review -->
    <section>
        <div class="hom-cus-revi">
            <div class="container">
                <div class="row">
                    <div class="home-tit">
                        <p>trusted brand</p>
                        <h2><span>Trust by <b class="num">1500</b>+ Couples</span></h2>
                        <span class="leaf1"></span>
                        <span class="tit-ani-"></span>
                    </div>
                    <div class="slid-inn cus-revi">
                        <ul class="slider3">
                            <li>
                                <div class="cus-revi-box">
                                    <div class="revi-im">
                                        <img src="../../assets/images/user/1.jpg" alt="" loading="lazy">
                                        <i class="cir-com cir-1"></i>
                                        <i class="cir-com cir-2"></i>
                                        <i class="cir-com cir-3"></i>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    <h5>Jack danial</h5>
                                    <span>New york</span>
                                </div>
                            </li>
                            <li>
                                <div class="cus-revi-box">
                                    <div class="revi-im">
                                        <img src="../../assets/images/user/2.jpg" alt="" loading="lazy">
                                        <i class="cir-com cir-1"></i>
                                        <i class="cir-com cir-2"></i>
                                        <i class="cir-com cir-3"></i>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    <h5>Jack danial</h5>
                                    <span>New york</span>
                                </div>
                            </li>
                            <li>
                                <div class="cus-revi-box">
                                    <div class="revi-im">
                                        <img src="../../assets/images/user/3.jpg" alt="" loading="lazy">
                                        <i class="cir-com cir-1"></i>
                                        <i class="cir-com cir-2"></i>
                                        <i class="cir-com cir-3"></i>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    <h5>Jack danial</h5>
                                    <span>New york</span>
                                </div>
                            </li>
                            <li>
                                <div class="cus-revi-box">
                                    <div class="revi-im">
                                        <img src="../../assets/images/user/5.jpg" alt="" loading="lazy">
                                        <i class="cir-com cir-1"></i>
                                        <i class="cir-com cir-2"></i>
                                        <i class="cir-com cir-3"></i>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    <h5>Jack danial</h5>
                                    <span>New york</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="cta-full-wid">
                        <a href="#!" class="cta-dark">More customer reviews</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END -->
</template>
<script setup>
import { onMounted } from 'vue';










onMounted(() => {
    initSlick();
});

function initSlick() {
    $('.slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        infinite: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
</script>