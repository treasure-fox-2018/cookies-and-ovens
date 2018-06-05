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

function sleep(milliseconds) {

    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }

}

class ChocolateCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class PeanutCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class CheeseCookie {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class Oven {
    static start(cookie, time) {

        let status = ['raw', 'half baked', 'perfect', 'overcooked']

        for (let i = 5; i <= time; i += 5) {

            if (i < cookie.time - 5) {

                console.log(`${cookie.name} menit ke ${i} : ${status[0]}`)

            } else if (i == cookie.time - 5) {

                console.log(`${cookie.name} menit ke ${i} : ${status[1]}`)

            } else if (i == cookie.time) {
                console.log(`${cookie.name} menit ke ${i} : ${status[2]}`)

            } else {
                console.log(`${cookie.name} menit ke ${i} : ${status[3]}`)

            }
            sleep(1000)

        }
    }
}

let chocolateCookie = new ChocolateCookie('ChocoCookies', 20);
let cheeseCookie = new CheeseCookie('Cheeseookies', 25);
let peanutCookie = new PeanutCookie('PeanutCookies', 15);



Oven.start(chocolateCookie, 35);
Oven.start(cheeseCookie, 30);
Oven.start(peanutCookie, 15);
Oven.start();