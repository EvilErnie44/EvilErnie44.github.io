window.onload = function () {
    var calc = new addCalculator('X','Y','Output');
};

interface ICalcFunction {
    (x:number,y:number): number;
}

class addCalculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;


    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        var btn = <HTMLInputElement>document.getElementById('Add');
        btn.addEventListener('click',
            event => {
                var result = this.add(parseInt(this.x.value), parseInt(this.y.value));
                this.output.innerHTML = result.toString();
            });
    }

    add: ICalcFunction = function (x,y) {
    return x + y;
    }

}
