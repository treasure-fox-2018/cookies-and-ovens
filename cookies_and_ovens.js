// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cookies {
  constructor() {
    this._cookTime = 0;
  }

  get cookingTime(){
    return this._cookTime;
  }

  cookTime(){
    for (var i = 0; i <= this._cookTime+5; i+=5) {
      if (i < 15 && i >= 5) {
        console.log(`${this._name}, menit ke ${i} : mentah`);
      }else if (i >= 15 && i < this._cookTime) {
        console.log(`${this._name}, menit ke ${i} : hampir matang`);
      }else if (i === this._cookTime) {
        console.log(`${this._name}, menit ke ${i} : matang`);
      }else if(i > this._cookTime){
        console.log(`${this._name}, menit ke ${i} : hangus`);
      }
    }
  }
}

class KueCoklat extends Cookies {
  constructor() {
    super();
    this._name = 'Kue Coklat'
    this._cookTime = 20;
  }
}

class KueKacang extends Cookies {
  constructor() {
    super()
    this._name = 'Kue Kacang'
    this._cookTime = 30;
  }
}

class KueKeju extends Cookies {
  constructor() {
    super()
    this._name = 'Kue Keju'
    this._cookTime = 35;
  }
}

let cokelat = new KueCoklat()
let kacang = new KueKacang()
let keju = new KueKeju()

cokelat.cookTime();
kacang.cookTime();
keju.cookTime();
