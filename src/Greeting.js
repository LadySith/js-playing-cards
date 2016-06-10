/**
 * js-playing-cards
 *
 * Copyright © 2016 Daryl Lukas. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

"use strict";
class Greeting {

    constructor(name) {
        this.name = name || 'Guest';
    }

    hello() {
        return `Welcome, ${this.name}!`;
    }

}

module.exports  = Greeting;
