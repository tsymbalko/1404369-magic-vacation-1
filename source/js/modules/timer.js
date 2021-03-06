import AnimateFrame from './animateFrame';
import {GAME_TIMER_DURATION} from './constants';

class Timer {
  constructor(duration) {
    this.duration = duration;
    this.init = this.init.bind(this);
    this.getTimerValue = this.getTimerValue.bind(this);
    this.startAnimateTimer = this.startAnimateTimer.bind(this);
    this.stopAnimateTimer = this.stopAnimateTimer.bind(this);
  }

  init() {
    this.timer = document.querySelector(`.game__counter`);
    this.animateFrame = new AnimateFrame(this.getTimerValue, 1000 / 24, this.duration);
  }

  getTimerValue(duration, time) {
    let millisecond = duration - time;
    let minutes = Math.trunc(millisecond / 60000);
    let seconds = Math.trunc((millisecond % 60000) / 1000);
    this.timer.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  startAnimateTimer() {
    this.animateFrame.startAnimateFrame();
  }

  stopAnimateTimer() {
    this.animateFrame.stopAnimateFrame();
    this.getTimerValue(this.duration, 0);
  }
}

const timer = new Timer(GAME_TIMER_DURATION);

export default timer;
