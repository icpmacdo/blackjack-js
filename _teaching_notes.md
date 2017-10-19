**Blackjack.js**

Let's list what needs to happen in `playOutHands`:

1. If either player or dealer has 21, the round ends immediately
2. Otherwise we show the player and dealer hands, which one card hidden for the dealer
3. We ask the player whether they want to hit or stand
4. If player hits we draw them a new card
5. 2-4 happens until player stands or busts (has more than 21)
6. If player stands, dealer draws 0 or more cards until he has at least 17

There's quite a lot going on there, but if you look at the code closely you'll
see that we were able to match our written requirements almost line for line.

Another big change is that I've added a `Player` class and refactored some of our
old methods. Before I said that only keeping track of the player's bankroll
didn't justify creating a new class. But now a player also has a hand, and now
we would like a method that returns the numeric value of a player's hand. So it's
starting to feel like the `Blackjack` class is doing too many player related
things.

#### Follow Along
We'll need to implement our two new methods: `handValue` and `printHands`. Let's
start with `handValue` in the `Player` class which should give us the numeric
sum value of a player's hand. Think carefully about this because we have to
account for the possibility of one or more Aces. Aces can have a value of 1 or
11, whichever gives the highest hand value under 22.