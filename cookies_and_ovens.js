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

class Cookie {
  constructor(cookieName, time) {
    this.cookieName = cookieName
    this.timeBakeing = time
  }
}

class ChocolateChip extends Cookie {
  constructor(cookieName, time) {
    super(cookieName, time)
  }
}

class PeanutButter extends Cookie {
  constructor(cookieName, time) {
    super(cookieName, time)
  }
}

class CheeseChip extends Cookie {
  constructor(cookieName, time) {
    super(cookieName, time)
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
        break;
    }
  }
}

function reset_board() {
  console.log("\x1B[2J")
}

class Oven {
  static bake(cookie, timeOven) {
    let statusCookie = ['raw', 'half baked', 'baked', 'roasted']
    for (let i = 5; i <= timeOven; i += 5) {
      if (i >= 5 && i < cookie.timeBakeing-5) {
        console.log(`${cookie.cookieName}, minute to ${i} : ${statusCookie[0]}`)
        // sleep(1000)
      } else if (i >= cookie.timeBakeing-5 && i < cookie.timeBakeing) {
        console.log(`${cookie.cookieName}, minute to ${i} : ${statusCookie[1]}`)
        // sleep(1000)
      } else if (i === cookie.timeBakeing) {
        console.log(`${cookie.cookieName}, minute to ${i} : ${statusCookie[2]}`)
        // sleep(1000)
      } else if (i > cookie.timeBakeing) {
        console.log(`${cookie.cookieName}, minute to ${i} : ${statusCookie[3]}`)
      }
      sleep(1000)
      reset_board()
      if (i === cookie.timeBakeing && timeOven <= cookie.timeBakeing) {
        return `Your ${cookie.cookieName} is ${statusCookie[2]}`
      } else if (i > cookie.timeBakeing){
        return `Your ${cookie.cookieName} is ${statusCookie[3]}`
      } else if (i < cookie.timeBakeing-5 && i >= timeOven) {
        return `Your ${cookie.cookieName} is ${statusCookie[0]}`
      } else if(i <= cookie.timeBakeing-5 && i >= timeOven){
        return `Your ${cookie.cookieName} is ${statusCookie[1]}`
      }
    }
  }
}

let chocolateChip = new Cookie('chocolateChip', 20)
let peanutButter = new Cookie('peanutButter', 30)
let cheeseChip = new Cookie('cheeseChip', 35)

// let argv = process.argv


console.log(Oven.bake(chocolateChip, 15))
// console.log(Oven.bake(peanutButter, 30))
// console.log(Oven.bake(cheeseChip, 40))