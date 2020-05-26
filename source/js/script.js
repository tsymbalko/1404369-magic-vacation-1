// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import prepareText from './modules/animateText';
import animateTitle from './modules/animateTitle';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
animateTitle();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationTexts = [
  {
    selector: `.intro__title`,
    delay: 600
  },
  {
    selector: `.intro__date`,
    delay: 1600
  },
  {
    selector: `.slider__item-title`
  },
  {
    selector: `.prizes__title`,
    delay: 600
  },
  {
    selector: `.rules__title`
  },
  {
    selector: `.game__title`
  }
];

animationTexts.forEach(({selector, timer, delay}) => {
  prepareText(selector, timer, delay);
});

window.onload = () => {
  document.body.classList.add(`page--loaded`);
};

document.querySelector(`.js-last-rule`).addEventListener(`animationend`, () => {
  document.querySelector(`.rules__link`).classList.add(`rules__link--active`);
});
