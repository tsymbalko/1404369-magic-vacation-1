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
import AccentTypographyBuild from './modules/animateText';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 800, `active-text`, `transform`);
const animationTopScreenTextLine2 = new AccentTypographyBuild(`.intro__date`, 500, `active-text`, `transform`);

window.onload = () => {
  document.body.classList.add(`page--loaded`);
  animationTopScreenTextLine.runAnimation();
  setTimeout(() => {
    animationTopScreenTextLine2.runAnimation();
  }, 1000);
};

document.querySelector(`.js-last-rule`).addEventListener(`animationend`, () => {
  document.querySelector(`.rules__link`).classList.add(`rules__link--active`);
});

