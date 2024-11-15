// composables/serviceCarosual.js
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

export function serviceCarosual() {
  const isSlickInitialized = ref(false);
  const isCarouselVisible = ref(true);
  const carouselRef = ref(null);

  const initCarousel = () => {
    $(carouselRef.value).slick({
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
    isSlickInitialized.value = true;
  };

  const handleResize = () => {
    if (window.innerWidth < 990 && isSlickInitialized.value) {
      isCarouselVisible.value = false;
      $(carouselRef.value).slick('unslick');
      isSlickInitialized.value = false;
    } else if (window.innerWidth >= 990 && !isSlickInitialized.value) {
      isCarouselVisible.value = true;
      initCarousel();
    }
  };

  onMounted(() => {
    initCarousel();
    window.addEventListener('resize', handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    if (isSlickInitialized.value) {
      $(carouselRef.value).slick('unslick');
    }
  });

  // Watch window resize if needed (optional)
  watch(() => window.innerWidth, handleResize);

  return {
    carouselRef,
    isSlickInitialized,
    isCarouselVisible,
  };
}
