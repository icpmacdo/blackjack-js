module.exports = class Player {
  constructor() {
    this.bankroll = 1000;
    this.hand = [];
  }

  handValue() {
    let handSum = 0;

    const cardValues = this.hand.map(card => card.numValue);
    cardValues.sort();

    for (let cardValue of cardValues) {
      if (cardValue == 11 || handSum + cardValue > 21) {
        handSum += 1;
      } else {
        handSum += cardValue;
      }
    }

    return handSum;
  }
};