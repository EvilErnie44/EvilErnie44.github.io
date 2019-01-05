"use strict";
window.onload = function () {
    var calc = new addCalculator('X', 'Y', 'Output');
};
var addCalculator = /** @class */ (function () {
    function addCalculator(xId, yId, outputId) {
        this.add = function (x, y) {
            return x + y;
        };
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        this.wireEvents();
    }
    addCalculator.prototype.wireEvents = function () {
        var _this = this;
        var btn = document.getElementById('Add');
        btn.addEventListener('click', function (event) {
            var result = _this.add(parseInt(_this.x.value), parseInt(_this.y.value));
            _this.output.innerHTML = result.toString();
        });
    };
    return addCalculator;
}());
//# sourceMappingURL=calculator.js.map