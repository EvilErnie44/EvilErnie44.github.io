"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dice = /** @class */ (function () {
    // function that created objects of this class
    function Dice(max, min) {
        this._max = max;
        this._min = 1;
        this._rand = this.roll();
    }
    Object.defineProperty(Dice.prototype, "max", {
        // access function that allows us to read the private property max/min
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dice.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dice.prototype, "rand", {
        // access function that allows us to update the private property min
        get: function () {
            return this._rand;
        },
        enumerable: true,
        configurable: true
    });
    //  a method that generates a random number between min and max
    Dice.prototype.roll = function () {
        return this._rand = Math.floor(Math.random() * this._max) + this._min;
    };
    return Dice;
}());
exports.Dice = Dice;
//# sourceMappingURL=dicemodel.js.map