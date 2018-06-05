// Answer These Questions:
//
// - What are essential classes?
// cookies
// - What attributes will each class have?
// baking time
// - What interface will each class provide?
//
// - How will the classes interact with each other?

// - Which classes will inherit from others, if any?
// chocolate cookies, cheese cookies, peanut cookies, all extends cookies.
//
//
// Your code here

class Cookie {
  constructor(crunchiness, diameter, thickness) {
    this._crunchiness = crunchiness;
    this._diameter = diameter;
    this._thickness = thickness
    this._doneness = "Raw";
    this._name = null;
  }

  set setDoneneess(string) {
    this._doneness = string;
  }

  get getDoneneess() {
    return this._doneness;
  }

  get name() {
    return this._name;
  }

  get crunchiness() {
    return this._crunchiness;
  }

  get diameter() {
    return this._diameter;
  }

  get thickness() {
    return this._thickness;
  }

  flipCookie() {
    console.log("WUSHHH");
  }

}

class ChocolateCookie extends Cookie {
  constructor(crunchiness, diameter, thickness) {
    super(crunchiness, diameter, thickness);
    this._timeForDone = 20;
    this._name = "Chocolate Cookie";
  }

  get timeForDone() {
    return this._timeForDone;
  }
}

class PeanutCookie extends Cookie {
  constructor(crunchiness, diameter, thickness) {
    super(crunchiness, diameter, thickness);
    this._timeForDone = 30;
    this._name = "Peanut Cookie";
  }

  get timeForDone() {
    return this._timeForDone;
  }
}

class CheeseCookie extends Cookie {
  constructor(crunchiness, diameter, thickness) {
    super(crunchiness, diameter, thickness);
    this._name = "Cheese Cookie";
    this._timeForDone = 35;
  }

  get timeForDone() {
    return this._timeForDone;
  }
}

class Oven {
  constructor() {
    this._numberOfCookies = 0;
    this._arrOfCookies = [];
    this._timer = null;
  }

  addCookie(cookie) {
    this._numberOfCookies ++;
    this._arrOfCookies.push(cookie)
  }

  setTimer(int) {
    this._timer += int;
  }

  startOven() {
    let time = this._timer;
    let arrCookies = this._arrOfCookies;
    if (time === null) {
      console.log("Set timer first!");
    } else {

      for (let j = 0; j <= time; j += 5) {
        console.log("Status Report, Current Time: " + j);
        for (let i = 0; i < arrCookies.length; i++) {
          if (j < arrCookies[i].timeForDone) {
            arrCookies[i].setDoneneess = "Raw"
            console.log(arrCookies[i].name + ": " + arrCookies[i].getDoneneess);
          } else if (j > arrCookies[i].timeForDone + 10) {
            arrCookies[i].setDoneneess = "Burnt"
            console.log(arrCookies[i].name + ": " + arrCookies[i].getDoneneess);
          } else if (j >= arrCookies[i].timeForDone) {
            arrCookies[i].setDoneneess = "Done"
            console.log(arrCookies[i].name + ": " + arrCookies[i].getDoneneess);
          }
        }
        sleep(1000)
        clearScreen();
      }
      console.log("FINSIHED");

      let allDoneBoolean = true;
      for (let i = 0; i < arrCookies.length; i++) {
        if (arrCookies[i].getDoneneess !== "Done") {
          allDoneBoolean = false;
        }
        console.log(arrCookies[i].name + ": " + arrCookies[i].getDoneneess);
      }

      if (allDoneBoolean) {
        console.log("Hmmm Nice! All your cookies are perfectly cooked!");
      } else {
        console.log("Too bad, not all your cookies are perfectly cooked, lets cook again shall we?");
      }

    }

    function sleep (milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
          break;
        }
      }
    }

    function clearScreen () {
      // Un-comment this line if you have trouble with console.clear();
      // return process.stdout.write('\033c');
      console.clear();
    }
  }

  get numberOfCookies() {
    return this._numberOfCookies;
  }

  get arrOfCookies() {
    return this._arrOfCookies;
  }

  get timer() {
    return this._timer;
  }

}

let bensChocolateCookie = new ChocolateCookie("mild crunchy", 7, "thin");
// console.log(bensChocolateCookie);

let mikesCheeseCookie = new CheeseCookie("very crunchy", 9, "thick");
// console.log(mikesCheeseCookie);

let lucysPeanutCookie = new PeanutCookie("light crunchy", 1, "ultra thick")
// console.log(lucysPeanutCookie);

// lucysPeanutCookie.flipCookie()

let robsOven = new Oven();

robsOven.addCookie(bensChocolateCookie);
robsOven.addCookie(mikesCheeseCookie);
robsOven.addCookie(lucysPeanutCookie);

// console.log(robsOven.arrOfCookies);

robsOven.setTimer(60)

robsOven.startOven();
