import './vendor';
import './helpers';
// import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
// import {actualYear} from './modules/actualYear';
import header from './components/header';
// import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import './components/tabs';
import './components/collapse';
import Swiper, { Navigation } from 'swiper';
import IMask from 'imask';


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

/// IMASK INIT
var items = document.getElementsByClassName('phone-mask');

Array.prototype.forEach.call(items, function(element) {
  var phoneMask = new IMask(element, {
    mask: '+{7}(000)000-00-00',
    placeholder: {
      show: 'always'
    }
  });
});