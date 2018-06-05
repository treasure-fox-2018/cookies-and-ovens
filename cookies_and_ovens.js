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
  constructor (cookiesName, timeCook) {
    this._cookiesName = cookiesName;
    this._timeCook = timeCook;
  }

  get cookiesName() {
    return this._cookiesName;
  }
  get timeCook() {
    return this._timeCook;
  }  
}

class Oven {
  constructor (cookies) {
    this._cookies = cookies;
  }

  sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  runOven (ovenRunTime) {
    let ovenTime = 5;
    while (ovenTime <= ovenRunTime) {
      if (ovenTime <= this._cookies.timeCook - 10) {
        console.log(`${this._cookies.cookiesName}, menit ke ${ovenTime} : mentah`);
      }
      if (ovenTime === this._cookies.timeCook - 5) {
        console.log(`${this._cookies.cookiesName}, menit ke ${ovenTime} : hampir matang`);
      }
      if (ovenTime === this._cookies.timeCook ) {
        console.log(`${this._cookies.cookiesName}, menit ke ${ovenTime} : matang`);
      }
      if (ovenTime > this._cookies.timeCook) {
        console.log(`${this._cookies.cookiesName}, menit ke ${ovenTime} : hangus`);
      }
      ovenTime += 5;
      this.sleep(1000); //sleep 1 s
    }
  }
}

let objCookies = {
  kueCoklat : new Cookies('Kue Cokelat',20),
  kueKacang : new Cookies('Kue Kacang',30),
  kueKeju : new Cookies('Kue Keju',35)
}

for (let cookies in objCookies) {
  let oven = new Oven (objCookies[cookies]);
  oven.runOven(40); //run oven for 40 minutes
  console.log("")
}

