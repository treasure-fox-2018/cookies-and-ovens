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
  constructor (nameCake, times) {
    this._nameCake = nameCake
    this._timesCooking = times
  }

  get namesCake () {
    return this._nameCake
  }

  get time() {
    return this._timesCooking
  }
}

class Coklat extends Cookies {
  constructor () {
    super('Choco Cake', 20)
  }
}

class Kacang extends Cookies {
  constructor () {
    super ('Peanuts Cake', 30)
  }

}

class Keju extends Cookies {
  constructor () {
    super ('Cheese Cake', 35)
  }
}

class Oven {
  constructor (listCakes) {
    this._myCake = listCakes
  }

  baking(timeOven) {
    let listCake = this._myCake

    for (let i = 0; i <= timeOven; i+=5) {
      if (i === listCake._timesCooking) {
        console.log(`${listCake._nameCake} menit ke - ${i} : Kue sudah matang`)
      } else if (i === listCake._timesCooking - 5) {
        console.log(`${listCake._nameCake} menit ke - ${i} : Kue setengah matang`)
      } else if (i > listCake._timesCooking) {
        console.log(`${listCake._nameCake} menit ke - ${i} : Kue gosong`)
      } else {
        console.log(`${listCake._nameCake} menit ke - ${i} : Kue belum matang`)
      }
    }
  }
}


const cakeCoklat = new Coklat()
const cakePeanut = new Kacang()
const cakeCheese = new Keju()

console.log('         ====> Kue Coklat <====         ')
const ovenCoklat = new Oven (cakeCoklat)
ovenCoklat.baking(25)
console.log(ovenCoklat)

console.log('         ====> Kue Kacang <====         ')
const ovenPeanut = new Oven (cakePeanut)
ovenPeanut.baking(30)
console.log(ovenPeanut)

console.log('         ====> Kue Keju <====         ')
const ovenCheese = new Oven (cakeCheese)
ovenCheese.baking(35)
console.log(ovenCheese)