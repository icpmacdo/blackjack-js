**Blackjack.js**

Let's try describing what needs to happen in the `startGame` method.

1. Show a welcome message to the player
2. Take bets
3. Deal hands to the player and dealer
4. Play out the hands until there is no more action
5. Pay out the winner
6. Repeat 2-5

Now what we need to do is translate these requirements into code. You can see
that our code matches our description fairly closely. My rule of thumb is that
if any steps would require more than 5-10 lines of code it should be in its own
method. This has two major benefits:

1. The code is more readable.
2. We break down a big problem into multiple smaller problems.

#### Follow Along

Now we implement our new methods one by one. Let's start with the `keepPlaying`
method. As before try to describe what should happen and then write it
out in code.