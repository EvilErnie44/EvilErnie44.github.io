"use strict";
/*
////////
///////

This Example produces the years of service a space marine devoted to the emperor.
I would like to know how to use this template to construct an object.


interface spaceMarineOptions {
       name: string;
       registered: number;
       death?: number;
       service: () => number;
   }

   function createMarine(options: spaceMarineOptions) {
     let name = options.name;
     let registered = options.registered;
     let death = options.death;

     if(death) service:{
        return death - registered;
      } else {
        return "this marine is still alive"
      }

   }
*/
/*
~Working Version  of barrys example.
interface Person {
       name: string;
       age?: number;
       kids: number;
       birthYear: number;
       deathYear: number;
       calcPets: () => number;
       makeYounger: (years: number) => void;
       greet: (msg: string) => string;
       msg?: string;
   }

   var p: Person = {
       name: 'John',
       age: 40,
       kids: 4,
       birth
       calcPets: function () {
           return this.kids * 2;
       },
       makeYounger: function (years: number) {
           return this.age -= years;
       },
       greet: function (msg: string) {
           return msg + ', ' + this.name;
       }
       death: function ()
   };
*/
var spaceMarine = /** @class */ (function () {
    function spaceMarine(theName, enlist, yearOfDeath, service) {
        this.name = theName;
        this.enlist = enlist;
        this.death = yearOfDeath;
        this.service = this.death - this.enlist;
    }
    spaceMarine.prototype.timerServFunc = function (name, service, enlist, death) {
        console.log("The loyal " + this.name + " registered with the Imperium on " + this.enlist + "ad");
        if (this.death) {
            console.log("He served the Emperor " + this.service + " years.");
        }
        else {
            console.log("He continues to server the emperor.");
        }
    };
    return spaceMarine;
}());
//class deathGaurd extends spaceMarine {
//}
//p.calcPets(numberofpets)
//p.makeYounger(numberofyears)
//p.greet(greeting)
/*

on load events to pass in the data for person instantiation.
Use the same shape as barry, pass in the ID names for the input fields.

Interface to specify input types and output type

Class to instance Person
List elements like calcexample.
Fire function to create the person, but validate before this takes actually is processed.
Convert data types ect.


window.onload = function () {
    var personConstruction = new person('name','age','output');
};

interface iMakeFunction {
    name: string;
    age: nmumber;
}

class person {
private name : HTMLInputElement;
private age : HTMLInputElement;
private output : HTMLSpanElement;

  constructor(nameId: string, ageId: number, outputId: string) {
      this.x = <HTMLInputElement>document.getElementById(xId);
      this.y = <HTMLInputElement>document.getElementById(yId);
      this.output = <HTMLSpanElement>document.getElementById(outputId);
      this.updateView();
    }

    updateView() {
      var btn = <HTMLInputElement>document.getElementById('makeperson');
      btn.addEventListener('click',
          event => {
              var result = this.personName(parseInt(this.x.value), parseInt(this.y.value));
              this.output.innerHTML = result.toString();
          });
    }

    personName: iMakeFunction = function (name,age) {
    return x + y;
    }

}


*/
//# sourceMappingURL=person.js.map