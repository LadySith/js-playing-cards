/**
 * js-playing-cards
 *
 * Copyright © 2016 Daryl Lukas. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Deck from '../src/Deck';
import Hand from '../src/Hand';

describe('Deck', () => {
    describe('deck.deal()', () => {
        it('should return a Card, 2 of Clubs', () => {
            var deck = new Deck();
            var card = deck.deal();
            expect(card.toString()).to.be.equal('2 of Clubs');
        });
    });

    describe('deck.shuffle()', () => {
       it('should return a Card, NOT 2 of Clubs', () => {
           var deck = new Deck();
           deck.shuffle();
           var card = deck.deal();
           expect(card.toString()).not.to.be.equal('2 of Clubs');
       });
    });
});

describe('Card', () => {
    describe('card.getRank()', () => {
        it('should return 2', () => {
            var deck = new Deck();
            var card = deck.deal();
            expect(card.getRank()).to.be.equal('2');
        });
    });

    describe('card.getSuit()', () => {
        it('should return clubs', () => {
            var deck = new Deck();
            var card = deck.deal();
            expect(card.getSuit()).to.be.equal('clubs');
        });
    });
});

describe('Hand', () => {
   describe('hand.addCard()', () => {
      it('should return two Cards, 2 of Clubs,3 of Clubs', () => {
          const deck = new Deck();
          const card1 = deck.deal();
          const card2 = deck.deal();
          const hand = new Hand();
          hand.addCard(card1);
          hand.addCard(card2);
          expect(hand.toString()).to.be.equal('2 of Clubs,3 of Clubs');
      });
   });

    describe('hand.removeCard()', () => {
        it('should return one Cards, 3 of Clubs', () => {
            const deck = new Deck();
            const card1 = deck.deal();
            const card2 = deck.deal();
            const hand = new Hand();
            hand.addCard(card1);
            hand.addCard(card2);
            hand.removeCard(card1);
            expect(hand.toString()).to.be.equal('3 of Clubs');
        });
    });

});
