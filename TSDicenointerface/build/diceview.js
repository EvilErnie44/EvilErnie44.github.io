"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Display = /** @class */ (function () {
    // use a viewModel to construct a Display object
    function Display(options) {
        debugger;
        this.max = options.max;
        this.min = options.min;
        this.rand = options.rand;
    }
    // method that updates the DOM with viewModel values
    Display.prototype.update = function () {
        document.getElementById("randomOutput").innerText = this.rand.toString();
        if (this.min !== undefined) {
            document.getElementById("minNum").innerText = this.min.toString();
        }
        if (this.max !== undefined) {
            document.getElementById("maxNum").innerText = this.max.toString();
        }
    };
    return Display;
}());
exports.Display = Display;
//# sourceMappingURL=diceview.js.map