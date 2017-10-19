**Blackjack.js**

First let's describe what we want to happen in the `takeBets` method:

1. Show the player how much they have in their bankroll.
2. Ask the player how much they want to bet.
3. Reduce the player's bankroll by the bet amount.
4. Save the bet amount so you can pay out later.

None of these things look like they should be handled by another object. They're
also simple enough to code directly without creating any new methods.

We use the builtin `readlines` library to get the user input. We also used backticks
for string interpolation. See references for usage.

#### Follow Along

Next let's try to implement `dealHands`.

#### References

[Template literals (backtick strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Node.js v8.7.0 Documentation: readline](https://nodejs.org/api/readline.html)