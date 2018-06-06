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

class Cake {

    constructor(name, cakeBaked) {
        this._name = name
        this._cakeBaked = cakeBaked
        this._cookingTime = 0
        this._status = 'mentah'
        this._startCooking = true;

    }

    cooking() {
      this._cookingTime += 5

        if (this._cookingTime <= 10) {
            this._status = 'mentah'
        } else if(this._cookingTime < this._cakeBaked ) {
            this._status = 'hampir matang'
        } else if(this._cookingTime == this._cakeBaked) {
            this._status = 'matang'
        } else {
            this._status = 'gosong'
            this._startCooking = false;
        }
    }
}

class Chocholate extends Cake {
    constructor(name, cakeBaked) {
        super(name, cakeBaked)
    }
}

class Peanut extends Cake {
  constructor(name, cakeBaked) {
      super(name, cakeBaked)
  }
}

class Cheese extends Cake {
  constructor(name, cakeBaked) {
      super(name, cakeBaked)
  }
}


var cake = new Chocholate("Kue Cokelat", 25)
console.log("----Memasak Kue Cokelat----")
do{
  cake.cooking()
  console.log(`${cake._name}, menit ke ${cake._cookingTime} : ${cake._status}`)
} while (cake._startCooking != false)

var cake = new Peanut("Kue Kacang", 30)
console.log("----Memasak Kue Kacang----")
do{
  cake.cooking()
  console.log(`${cake._name}, menit ke ${cake._cookingTime} : ${cake._status}`)
} while (cake._startCooking != false)

var cake = new Cheese("Kue Keju", 35)
console.log("----Memasak Kue Keju----")
do{
  cake.cooking()
  console.log(`${cake._name}, menit ke ${cake._cookingTime} : ${cake._status}`)
} while (cake._startCooking != false)
