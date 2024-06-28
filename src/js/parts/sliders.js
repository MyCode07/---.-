import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');

        new Swiper(slider, {
            modules: [Autoplay],
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true
            },
            breakpoints: {
                300: {
                    spaceBetween: 10
                },
                769: {
                    spaceBetween: 20
                }
            }
        })
    })
}