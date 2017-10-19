**Deck.js**

For the `createCards` method I made an array of all the suits and values. Then use
a nested loop to create all combinations of suits and values.

For representing cards I've decided to use an object. I think strings would be
too inflexible. What if we want to add more properties, for example the card's
numeric value? On the other hand I don't think a `Card` class is necessary
because I don't see a card needing any methods, it's just data.

I also added the `shuffle` method. You can try to read the code but honestly I just
copied it from the first result on google. Normally I would have just downloaded
a third party library but I didn't want to get into that for this tutorial. In
general you should never copy/paste code, but I do recommend using third party
libraries liberally (Don't reinvent the wheel!).

#### Follow Along
Next let's finish the `draw` method.

#### References
[How can I shuffle an array?](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)