module.exports = class Deck {
  constructor() {
    this.cards = this.createCards();
  }

  createCards() {
    const cards = [];

    const suits = ['C', 'D', 'H', 'S'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
      for (let value of values) {
        cards.push({suit, value});
      }
    }

    return cards;
  }

  draw(n) {
    const drawnCards = this.cards.slice(-n);
    this.cards = this.cards.slice(0, -n);
    return drawnCards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
};