import './styles/reset.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles/global.scss';

window.$ = require('jquery');
window.slick = require('slick-carousel');

$(document).ready(function () {
    $('#donation-slider').slick({
        autoplay: true,
        prevArrow: '#donation-slider-prev',
        nextArrow: '#donation-slider-next',
        fade: true,
    });
    $('#reports-slider').slick({
        autoplay: true,
        prevArrow: '#reports-slider-prev',
        nextArrow: '#reports-slider-next',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#partners-slider').slick({
        autoplay: true,
        prevArrow: '#partners-slider-prev',
        nextArrow: '#partners-slider-next',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
