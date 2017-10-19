**Deck.js**

For the `draw` method we need to:

1. get the last `n` cards
2. set `this.cards` to everything but the last `n` cards
3. return the last `n` cards

We do this using array slicing which is very flexible and useful.
Check the references below for more details.

#### Follow Along

Next let's get back to the `Blackjack` class and work on the `playOutHands`
method. This is probably the most complex method in this tutorial, so it would
be good to carefully consider the list of steps this method will take. I
consider `playOutHands` to be done when there are no more actions to take and
no more cards to be drawn. If you want a refresher on the rules of blackjack
check the link below. Finally, we won't be implementing special actions like
*double down*, *split*, or *insurance*, but I encourage you to give it a shot
at the end of this tutorial.


#### References

[How to play blackjack](http://www.bicyclecards.com/how-to-play/blackjack/)

[MDN web docs: Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)