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
  constructor(nameCookies, cookingTime) {
    this._nameCookies = nameCookies;
    this._cookingTime = cookingTime;
  }
  
  get nameCookies () {
    return this._nameCookies
  }

  get cookingTime () {
    return this._cookingTime
  }
}

class Oven {
  constructor (detailProcess) {
    this._cookiesDetail = detailProcess
  }

  bake (timeForCooker) {
    var time = 0;
    var indexCake = 0;
    
    console.log(`It's time to ${this._cookiesDetail._nameCookies}!!`)
    console.log("------------------------------------------------------------");
    while (time <= timeForCooker) {
      if (time % 5 === 0 && time > 0 && time <= this._cookiesDetail._cookingTime - 10) {
        console.log(`${this._cookiesDetail._nameCookies}, menit ke ${time} : mentah`)
        indexCake++
      }
      else if (time % 5 === 0 && time > this._cookiesDetail._cookingTime - 10 &&time <= this._cookiesDetail._cookingTime - 5) {
        console.log(`${this._cookiesDetail._nameCookies}, menit ke ${time} : setengah mateng bro`)
        indexCake++;
      }
      else if (time % 5 === 0 && time === this._cookiesDetail._cookingTime) {
        console.log(`${this._cookiesDetail._nameCookies}, menit ke ${time} : mateng cuy`)
        indexCake++;
      }
      else if (time % 5 === 0 && time > this._cookiesDetail._cookingTime){
        console.log(`${this._cookiesDetail._nameCookies}, menit ke ${time} : bro angus kali`)
      }

      time++;
    }
    console.log("DONE, LET'S EAT!")
  }

}

var nutCake = new Cookies ('Kue Kacang', 30);
var chocolateCake = new Cookies ('Kue Coklat', 20);
var cheeseCake = new Cookies ('Kue Keju', 35);

var arrCook = [nutCake, chocolateCake, cheeseCake];

for (var i = 0; i <= arrCook.length - 1; i++) {
  var ovenTime = new Oven (arrCook[i]);
  console.log(ovenTime.bake(35))
}

