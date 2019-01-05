import { Dice } from "./dicemodel";

export class Display {

  
    public max: number;
    public min: number;
    public rand: number;

   
    constructor(options: Dice) {
        debugger;
        this.max = options.max;
        this.min = options.min;
        this.rand = options.rand;
    }

    update() {
     document.getElementById("randomOutput").innerText = this.rand.toString();
    if (this.min !== undefined) {document.getElementById("minNum").innerText = this.min.toString(); }
    if (this.max !== undefined) {document.getElementById("maxNum").innerText = this.max.toString(); }
    }
}
