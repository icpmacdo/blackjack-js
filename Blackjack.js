const readline = require('readline');
const Deck = require('./Deck');

module.exports = class Blackjack {
  constructor() {
    this.playerBankroll = 1000;
    this.betAmount = 0;

    this.deck = new Deck();
    this.deck.shuffle();

    this.playerHand = [];
    this.dealerHand = [];

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
    this.playerHand = this.deck.draw(2);
    this.dealerHand = this.deck.draw(2);
  }

  playOutHands() {

  }

  makePayouts() {

  }
};