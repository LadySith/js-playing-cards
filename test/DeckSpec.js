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

describe('Deck', () => {

    describe('deck.deal()', () => {

        it('should return a Card, 2 of Clubs', () => {
            const deck = new Deck();
            const card = deck.deal();
            expect(card.toString()).to.be.equal('2 of Clubs');
        });

    });

});
