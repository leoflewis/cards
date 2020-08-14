class Card {
    constructor(suit,value){
        this.suit = suit
        this.value = value
    }
}
export class Deck {
    constructor(){
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.deck = new Array();
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < values.length; j++){
                var card = new Card(suits[i], values[j])
                this.deck.push(card);
            }
        }
        return this.deck;
    }
    
} 

export function shuffle(deck){
    for(var i = 0; i < 100; i++){
        var loc1 = Math.floor((Math.random() * 52));
        var loc2 = Math.floor((Math.random() * 52));
        var temp = deck[loc1];
        deck[loc1] = deck[loc2];
        deck[loc2] = temp;
    }
    return deck;
}
