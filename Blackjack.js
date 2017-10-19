const readline = require('readline');
const Deck = require('./Deck');
const Player = require('./Player');

module.exports = class Blackjack {
  constructor() {
    this.betAmount = 0;

    this.deck = new Deck();
    this.deck.shuffle();

    this.player = new Player();
    this.dealer = new Player();

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
    return this.player.bankroll > 0
  }

  takeBets() {
    console.log(`Available bankroll: ${this.player.bankroll}`);
    this.input.question('How much would you like to bet?\n', answer => {
      this.player.bankroll -= parseInt(answer);
      this.betAmount = parseInt(answer);
    });
  }

  dealHands() {
    this.player.hand = this.deck.draw(2);
    this.dealer.hand = this.deck.draw(2);
  }

  playOutHands() {
    const blackjack = this.dealer.handValue() == 21 || this.player.handValue() == 21;

    if (!blackjack) {
      let liveHand = true;
      while (this.player.handValue() < 22 && liveHand) {
        this.printHands({hideDealerCard: true});
        this.input.question('Enter H for hit or S for stay.\n', action => {
          if (action == 'H') {
            this.player.hand += this.deck.draw(1);
          } else if (action == 'S') {
            while (this.dealer.handValue() < 17) {
              this.dealer.hand += this.deck.draw(1);
            }
            liveHand = false;
          }
        });
      }
    }
  }

  printHands(opts={}) {
    const dealerHand = this.dealer.hand.map(card => card.str);
    if (opts.hideDealerCard) {
      dealerHand[0] = '(hidden)';
    }
    const playerHand = this.dealer.hand.map(card => card.str);

    console.log(`Dealer has: ${dealerHand.join(' ')}`);
    console.log(`Player has: ${playerHand.join(' ')}`);
  }

  makePayouts() {

  }
};