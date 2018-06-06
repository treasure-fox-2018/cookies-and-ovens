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
  constructor(name, cookingTime, actualTime) {
    this._name = name
    this._cookingTime = cookingTime
    this._actualTime = actualTime
  }

  get name() {
    return this._name
  }

  get cookingTime() {
    return this._cookingTime
  }

  get actualTime() {
    return this._actualTime
  }

  panggangOven() {
    let cookingPhase = Math.round(this.cookingTime/4)
    for (let i = 0; i <= this._actualTime; i++) {
      if (i % 10 === 0) {
        if (i <= (cookingPhase*1)) {
          console.log(`Kue ${this._name}, menit ke ${(cookingPhase*1)} : mentah`)
        } else if (i <= (cookingPhase*2)) {
          console.log(`Kue ${this._name}, menit ke ${(cookingPhase*2)} : mentah`)
        } else if (i <= (cookingPhase*3)) {
          console.log(`Kue ${this._name}, menit ke ${(cookingPhase*3)} : hampir matang`)
        } else if (i <= (cookingPhase*4)) {
          console.log(`Kue ${this._name}, menit ke ${(cookingPhase*4)} : matang`)
        } else if (i > this._cookingTime) {
          console.log(`Kue ${this._name}, menit ke ${i} : gosong`)
        }
      }
    }
    if (this._actualTime > cookingPhase*1) {
      return `Kue ${this._name} : gosong`
    } else if (this._actualTime === cookingPhase*1) {
      return `Kue ${this._name} : matang`
    } else if (this._actualTime === cookingPhase*2) {
      return `Kue ${this._name} : hampir matang`
    } else if (this._actualTime < cookingPhase*2) {
      return `Kue ${this._name} : mentah`
    }
  }
}

class Coklat extends Cookies {
  constructor(name, actualTime) {
    super(name, actualTime)
    this._name = name
    this._cookingTime = 20
    this._actualTime = actualTime
  }
}

class Kacang extends Cookies {
  constructor(name, actualTime) {
    super(name, actualTime)
    this._name = name
    this._cookingTime = 30
    this._actualTime = actualTime
  }
}

class Keju extends Cookies {
  constructor(name, actualTime) {
    super(name, actualTime)
    this._name = name
    this._cookingTime = 35
    this._actualTime = actualTime
  }
}

let coklat = new Coklat('coklat', 60)
console.log(coklat.panggangOven())