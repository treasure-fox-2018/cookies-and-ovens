// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
// Your code here

class Oven {
  constructor(cake) {
    this._initialTime = 5;
    this._cakeState = 'raw';
    this._cake = cake;
  }
  bake(){
    while (this._cakeState !== 'burnt') {
      if (this._initialTime === this._cake._bakeTime) {
        this._cakeState = 'baked'
      }else if (this._initialTime > this._cake._bakeTime) {
        this._cakeState = 'burnt'
      }
      console.log(`${this._cake._cakeFlavour} cake, minute: ${this._initialTime}, cake state: ${this._cakeState}`);
      this._initialTime += 5
    }
  }
}
class ChocolateCake{
  constructor() {
    this._cakeFlavour = 'Chocolate';
    this._bakeTime = 20;
  }
}
class NutCake{
  constructor() {
    this._cakeFlavour = 'Nut';
    this._bakeTime = 30;
  }
}
class CheeseCake{
  constructor() {
    this._cakeFlavour = 'Cheese';
    this._bakeTime = 35;
  }
}

let kue = new ChocolateCake()
let panggang = new Oven(kue);
panggang.bake()
let kueKacang = new NutCake()
let masak = new Oven(kueKacang);
masak.bake()
let kueKeju = new CheeseCake()
let panggangKeju = new Oven(kueKeju)
panggangKeju.bake()
