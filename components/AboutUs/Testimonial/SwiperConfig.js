import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperConfig = {
  navigation: true,
  modules: [Pagination, Navigation, Autoplay],
  spaceBetween: 80,
  loop: true,
  speed: 1000,
  slidesPerView: 'auto',
  className: 'mySwiper',
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  style: {
    height: '35rem',
    padding: '3rem 1rem 5rem 1rem',
    '--swiper-navigation-color': '#009444',
    '--swiper-pagination-color': '#009444',
  },
  navigation: false,
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
  },
};

export default swiperConfig;
