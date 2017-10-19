**Deck.js**

Before we can get a hand's value we should be able to get a single card's value.
So I've added a `numValue` property to each card. Note that an Ace always has
numValue of 11.

**Player.js**

Now we can write out `handValue`. Here is my strategy for solving the problem
with evaluating Aces:

1. First sum all non-Ace card values
2. Then try to add 11 for each Ace, but if we go over 21 we only add 1 instead
3. Return the sum

This time it's a little harder to see this is what we're doing but read the code
carefully and try to follow its logic.

#### Follow Along
Next let's go back to `Blackjack.py` and finish the `printHands` method. This
time the tricky part is accounting for the dealer's hidden card.