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
"use strict"

class Oven {
  constructor() {
    this.time = 0
    this.foods = []
  }

  insertFood(food) {
    this.foods.push(food)
  }

  bakeFood(time) {
    for (let i = 1; i <= time; i++) {
      for (let j = 0; j < this.foods.length; j++) {
        let food = this.foods[j]
        let bakeTime = i
        
        food.bake(bakeTime)
        if(bakeTime % 5 === 0) { 
          console.log(`Menit ${bakeTime}: Kue ${food.name} ${food.status}`)
        }
      }
    }
  }
}

class Cookie {
  constructor(time) {
    this.name = "cookie"
    this.time = time
    this.status = "mentah"
  }

  bake(bakeTime) {
    if (bakeTime === this.time) {
      this.status = "matang"
    } else if (bakeTime > this.time) {
      this.status = "hangus"
    } else if (bakeTime >= this.time - 5) {
      this.status = "hampir matang"
    }
  }
}

class ChocolateCookie extends Cookie {
  constructor(time) {
    super(time)
    this.name = "cokelat"
  }
}

class PeanutCookie extends Cookie {
  constructor(time) {
    super(time)
    this.name = "kacang"
  }
}

class CheeseCookie extends Cookie {
  constructor(time) {
    super(time)
    this.name = "keju"
  }
}

let oven = new Oven()
let chocoCookie = new ChocolateCookie(20)
let peanutCookie = new PeanutCookie(30)
let cheeseCookie = new CheeseCookie(35)


oven.insertFood(chocoCookie)
oven.insertFood(peanutCookie)
oven.insertFood(cheeseCookie)
// console.log(oven)
console.log(`Oven is cooking`)
oven.bakeFood(30)