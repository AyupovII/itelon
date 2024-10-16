import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';

Swiper.use([Navigation, Pagination,]);
export const swiperController = () => {
    const swiper = new Swiper('.main-slider', {
        modules: [Navigation, Pagination],
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        // autoHeight: true,
        pagination: {
            el: '.main-slider__swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
        
    });
}