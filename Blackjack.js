const readline = require('readline');

module.exports = class Blackjack {
  constructor() {
    this.playerBankroll = 1000;
    this.betAmount = 0;

    this.input = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
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
    console.log(`Available bankroll: ${this.playerBankroll}`);
    this.input.question('How much would you like to bet?\n', answer => {
      this.playerBankroll -= parseInt(answer);
      this.betAmount = parseInt(answer);
    });
  }

  dealHands() {

  }

  playOutHands() {

  }

  makePayouts() {

  }
};