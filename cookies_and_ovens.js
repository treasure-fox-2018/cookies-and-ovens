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
  constructor(name){
    this.name = name;
    this.bakingStatus = 'raw';
  }
}

class ChocolateChipCookie extends Cookie{
  constructor(name){
    super(name);
    this.cookTime = 20;
  }
}

class PeanutButterCookie extends Cookie{
  constructor(name){
    super(name);
    this.cookTime = 25;
    // console.log(`An oven has been created`)
  }
}
class CoconutCookie extends Cookie{
  constructor(name){
    super(name);
    this.cookTime = 30;
  }
}

class Oven{
  constructor(){
    this.tray = [];
  }
  insertCookie(cookie){
    this.tray.push(cookie)
  }
  bake(time){
    let currentTime = 0;
    while(currentTime < time){
      for(let z = 0; z < this.tray.length; z++){
        let currentCookie = this.tray[z]
        if(currentCookie.cookTime === currentTime){
          currentCookie.bakingStatus = 'cooked'
        }else if(currentCookie.cookTime - 5 === currentTime){
          currentCookie.bakingStatus = 'almost cooked'
        }else if(currentCookie.cookTime + 5 === currentTime){
          currentCookie.bakingStatus = 'burnt'
        }
        console.log(`${currentCookie.name}, minute ${currentTime} is : ${currentCookie.bakingStatus}`)
      }
      console.log(`....................................................`)
      currentTime += 5; 
    }
    console.log(`Your Cookies are done, enjoy them while they're nice and hot, best served with a glass or milk :)`)
  }
}
let oven = new Oven();
let chocolateChipCookie = new ChocolateChipCookie("Chocolate Chip Cookie");
let coconutCookie = new CoconutCookie("Coconut Cookie");
let peanutButtercookie = new PeanutButterCookie("Peanut Butter Cookie");
oven.insertCookie(peanutButtercookie);
oven.insertCookie(coconutCookie);
oven.insertCookie(chocolateChipCookie);
oven.bake(30)


