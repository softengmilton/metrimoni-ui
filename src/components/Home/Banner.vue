<template>
    <!-- BANNER SLIDER -->
    <section>
        <div class="hom-ban-sli">
            <div>
                <ul class="ban-sli" ref="slider">
                    <li v-for="(banner, index) in banners" :key="index">
                        <div class="image">
                            <img :src="banner.src" :alt="banner.alt" loading="lazy">
                        </div>
                    </li>
                </ul>
                <!-- Navigation buttons -->
                <!-- <button type="button" class="slick-prev slick-arrow" aria-label="Previous" role="button">
                    Previous
                </button>
                <button type="button" class="slick-next slick-arrow" aria-label="Next" role="button">
                    Next
                </button> -->
            </div>
        </div>
    </section>
    <!-- END -->
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Banner1 from '../../assets/images/social/banner1.jpg';
import Banner2 from '../../assets/images/social/banner2.jpg';

const slider = ref();

const banners = [
    { src: Banner1, alt: 'Banner 1' },
    { src: Banner2, alt: 'Banner 2' },
];






const mount = () => {
    slicker();
}


onMounted(mount);

const slicker = () => {
    if (slider.value) {
        $(slider.value).slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: false,
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });
    }
}
onBeforeUnmount(() => {
    if (slider.value) {
        $(slider.value).slick('unslick');
    }
});
</script>

<style scoped>
.hom-ban-sli .slick-prev,
.hom-ban-sli .slick-next {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.hom-ban-sli .slick-prev {
    z-index: 99;
    left: 10px;
}

.hom-ban-sli .slick-next {
    z-index: 99;
    right: 10px;
}

.hom-ban-sli .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.hom-ban-sli .slick-slide {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {

    .hom-ban-sli .slick-slide img {
        width: 100%;
        height: auto;
    }

    .hom-ban-sli .slick-prev,
    .hom-ban-sli .slick-next {
        display: none;
    }
}

@media (max-width: 480px) {

    .hom-ban-sli .slick-slide img {
        width: 100%;
        height: auto;
    }

    .hom-ban-sli .slick-prev,
    .hom-ban-sli .slick-next {
        display: none;
    }
}
</style>
