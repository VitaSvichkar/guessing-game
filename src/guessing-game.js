class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.cur = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.cur = Math.ceil((this.min + this.max) / 2);
  }

  guess() {
    return this.cur;
  }

  lower() {
    this.max = this.cur;
    this.cur = Math.ceil((this.min + this.max) / 2);
  }

  greater() {
    this.min = this.cur;
    this.cur = Math.ceil((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
