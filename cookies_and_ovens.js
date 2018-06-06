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
    constructor(name, cookTime) {
        this.name = name;
        this.cookTime = cookTime;
    }
}
class Chocolate extends Cookie{
    constructor(name, cookTime) {
        super(name, cookTime)
    }
}
class Peanut extends Cookie {
    constructor(name, cookTime) {
        super(name, cookTime)
    }
}
class Cheese extends Cookie {
    constructor(name, cookTime) {
        super(name, cookTime)
    }
}
class Oven {
    static startCook(cookie, timeToCook) {

        let status = ['mentah', 'setengah Matang', 'Matang', 'Gosong']

        for (let i = 5; i <= timeToCook; i += 5) {
            if (i < cookie.cookTime - 5) {
                console.log(`${cookie.name} menit ke ${i} : ${status[0]}`)
            } else if (i == cookie.cookTime - 5) {
                console.log(`${cookie.name} menit ke ${i} : ${status[1]}`)
            } else if (i == cookie.cookTime) {
                console.log(`${cookie.name} menit ke ${i} : ${status[2]}`)
            } else {
                console.log(`${cookie.name} menit ke ${i} : ${status[3]}`)
            }
        }
    }
}

let chocolate = new Chocolate('ChocoCookies', 20);
let cheese = new Cheese('Cheeseookies', 30);
let peanut = new Peanut('PeanutCookies', 35);


Oven.startCook(chocolate, 20);
Oven.startCook(cheese, 30);
Oven.startCook(peanut, 35);
