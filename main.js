import {Deck, shuffle} from "./deck.mjs";


let myDeck = new Deck();
console.log(myDeck);
myDeck = shuffle(myDeck);
console.log(myDeck);