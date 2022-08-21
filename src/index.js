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
});
