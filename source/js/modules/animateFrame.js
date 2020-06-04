export default class AnimateFrame {
  constructor(drawFrame, fpsInterval = (1000 / 60), animateDuration = 0) {
    this.drawFrame = drawFrame;
    this.fpsInterval = fpsInterval;
    this.animateDuration = animateDuration;

    this.requestFrame = this.requestFrame.bind(this);
    this.startAnimateFrame = this.startAnimateFrame.bind(this);
    this.stopAnimateFrame = this.stopAnimateFrame.bind(this);
  }

  requestFrame() {
    this.requestId = requestAnimationFrame(this.requestFrame);
    const currentTime = Date.now();
    const elapsed = currentTime - this.prevDrawTime;

    if (elapsed > this.fpsInterval) {
      this.prevDrawTime = currentTime - (elapsed % this.fpsInterval);
      this.drawFrame(this.animateDuration, currentTime - this.runStartTime);
    }

    if (this.animateDuration && currentTime - this.runStartTime >= this.animateDuration) {
      cancelAnimationFrame(this.requestId);
    }
  }

  startAnimateFrame() {
    this.runStartTime = this.prevDrawTime = Date.now();
    requestAnimationFrame(this.requestFrame);
  }

  stopAnimateFrame() {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
