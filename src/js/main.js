import './vendor';
import './helpers';
import Swiper, { Navigation } from 'swiper';
// import IMask from 'imask';
// import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import './components/tabs';
import './components/collapse';
import './components/popup';

ieFix();
vhFix();
// actualYear();
scrollToAnchor.init();

header.init();
header.scrollHeader()
// lazyLoading.init();

// SWIPERJS INIT
Swiper.use([Navigation]);
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
