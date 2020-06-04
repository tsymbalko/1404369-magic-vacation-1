import AnimateFrame from './animateFrame';
import {PRIZES_SETTING_VALUE} from './constants';

class AnimatePrizesValue {
  constructor() {
    this.frames = [];
    this.indexActivePrize = null;
    this.init = this.init.bind(this);
    this.animateValue = this.animateValue.bind(this);
    this.startAnimatePrizesValues = this.startAnimatePrizesValues.bind(this);
    this.stopAnimatePrizesValues = this.stopAnimatePrizesValues.bind(this);
  }

  init() {
    this.prizesValues = PRIZES_SETTING_VALUE;
    this.prizesValuesNode = document.querySelectorAll(`.prizes__value`);
    this.prizesValuesNode.forEach(() => {
      let frame = new AnimateFrame(this.animateValue, 1000 / 12, 0);
      this.frames.push(frame);
    });
  }

  animateValue() {
    const currentValue = this.prizesValues[this.indexActivePrize].currentValue;
    const finalValue = this.prizesValues[this.indexActivePrize].finalValue;

    this.prizesValuesNode[this.indexActivePrize].textContent = `${currentValue}`;

    if (currentValue === finalValue) {
      this.frames[this.indexActivePrize].stopAnimateFrame();
      return;
    }

    if (currentValue + (Math.ceil(currentValue / 2)) < finalValue) {
      this.prizesValues[this.indexActivePrize].currentValue = currentValue + Math.ceil(currentValue / 2);
    }

    if (currentValue + (Math.ceil(currentValue / 2)) >= finalValue) {
      this.prizesValues[this.indexActivePrize].currentValue = finalValue;
    }
  }

  startAnimatePrizesValues() {
    this.frames.forEach((frame, index) => {
      setTimeout(() => {
        this.indexActivePrize = index;
        this.frames[index].startAnimateFrame();
      }, PRIZES_SETTING_VALUE[index].duration);
    });
  }

  stopAnimatePrizesValues() {
    this.frames.forEach((frame) => {
      frame.stopAnimateFrame();
    });
  }
}

const animatePrizesValue = new AnimatePrizesValue();

export default animatePrizesValue;
