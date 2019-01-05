export class Dice {

    // properties that are private to this class
    private _max: number;
    private _min: number;
    private _rand: number;

    // function that created objects of this class
     constructor(max: number, min: number) {
         this._max = max;
         this._min = 1;
         this._rand = this.roll();
    }

     // access function that allows us to read the private property max/min
    get max(): number {
        return this._max;
     }
    get min(): number {
        return this._min;
    }
    // access function that allows us to update the private property min

    get rand(): number {
      return this._rand;
    }

    //  a method that generates a random number between min and max
    roll() {
        return this._rand = Math.floor(Math.random() * this._max)  + this._min;
    }
}
