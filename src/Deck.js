/**
 * js-playing-cards
 *
 * Copyright © 2016 Daryl Lukas. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

"use strict";

var Card =  require('./Card');

class Deck {
    constructor() {
        this.suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        this.ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
        this.deck = [];
        let suit, rank, card;
        for(suit = 0; suit < this.suits.length; suit++) {
            for(rank = 0; rank < this.ranks.length; rank++) {
                card =   new Card(this.suits[suit], this.ranks[rank]);
                this.deck.push(card);

            }
        }
        this.dealtCards = 0;
    }

    shuffle() {
        let currentIndex, tempCard, randomIndex;
        for(currentIndex = this.deck.length - 1; currentIndex > 0; currentIndex--) {
            randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            tempCard = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = tempCard;
        }
        this.dealtCards = 0;
    }

    deal() {
        if(this.dealtCards == this.deck.length) {
            throw "No more cards to deal";
        } else {
            this.dealtCards++;
            return this.deck[this.dealtCards - 1]
        }
    }
}

module.exports = Deck;
