**Blackjack.js**

Let's think about what needs to happen in `dealHands`:

1. We need to create cards
2. We need to draw cards and deal cards randomly
3. We need to store the cards as player and dealer hands

One way we could do this is to add methods to the `Blackjack` class like `createCards`,
`shuffleCards`, `dealCards`. But our `Blackjack` class is getting long and all
these methods are related to cards so it seems like a good place to create a new
`Deck` class.

Assuming we have a `Deck` class, now what needs to happen is:

1. Create a `Deck` object and  shuffle it
2. In `dealHands` draw cards from the deck and...
3. Assign the cards to `this.playerHand` and `this.dealerHand`

#### Follow Along
We need to complete the methods that have been setup in the `Deck` class. Let's
start with `createCards`. Think about how you want cards to be represented. A
string? An object? A class?