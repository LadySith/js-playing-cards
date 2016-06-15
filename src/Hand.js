/**
 * js-playing-cards
 *
 * Copyright © 2016 Daryl Lukas. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

"use strict";

class Hand {
    constructor() {
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    getCard(card) {
        let index = this.hand.indexOf(card);

        if(index > -1) {
            return this.hand[index];
        } else {
            throw 'No such card in hand';
        }
    }

    removeCard(card) {
        let index = this.hand.indexOf(card);

        if(index > -1) {
            this.hand.splice(index, 1);
            return true;
        } else {
            throw 'No such card in hand'
        }
    }

    toString() {
        return this.hand.toString();
    }
}

module.exports = Hand;
