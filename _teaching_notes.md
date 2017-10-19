**Blackjack.js**

There's 3 different payout scenarios, player either wins, loses, or ties.

We need to:
1. Show the final hands for both player and dealer (revealing the hidden card)
2. Get the numeric hand values of both player and dealer
3. Determine player wins, losses, or ties
4. Increase player's bankroll by the appropriate amount

We can reuse the `printHands` method for step 1, and we can reuse the
`handValue` method for step 2.

To determining the winner we say that if the dealer has more than 21 or we have
more than the dealer but less than 22 then we win. Else if we have the same
value we push (it's a tie). Else the dealer wins.

Finally since we in the `takeBets` step we already decreased the player's
bankroll by the bet amount, if the player loses then nothing happens. If it's a
push we give the initial bet back. If player wins, we give their initial bet
back *plus* the same amount on top.

##### Follow along

With that we've completed one full round of blackjack. There is one small thing
we still need to cover though. This is something that I forgot about when we
first started writing the `startGame` method. When one round is over we need to
setup for the next round. Try adding a method called `cleanup` which "resets"
player hands, bet amounts, etc.