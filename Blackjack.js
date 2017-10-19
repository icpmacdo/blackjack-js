module.exports = class Blackjack {
  constructor() {
    this.playerBankroll = 1000;
  }

  startGame() {
    console.log('Welcome to blackjack!\n');

    while (this.keepPlaying()) {
      this.takeBets();
      this.dealHands();
      this.playOutHands();
      this.makePayouts();
    }

    console.log('Thanks for playing!');
  }

  keepPlaying() {
    return this.playerBankroll > 0
  }

  takeBets() {

  }

  dealHands() {

  }

  playOutHands() {

  }

  makePayouts() {

  }
};