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
    constructor(name, timeToBake) {
        this._name = name;
        this._timeToBake = timeToBake;
    }

    get timeToBake () {
        return this._timeToBake;
    }
}

class ChocoCake extends Cake {
    constructor(name, timeToBake) {
        super('Chocolatey Goodness', 20);
    }
}

class PeanutCake extends Cake {
    constructor(name, timeToBake) {
        super('Nuts Bout You', 30);
    }
}

class CheeseCake extends Cake {
    constructor(name, timeToBake) {
        super('So Very Cheesy', 35);
    }
}

class Oven {
    constructor(cakeList) {
        this.cakeList = cakeList;
    }

    bake(time) {
        for (let i = 0; i < this.cakeList.length; i++) {
            for (let j = 5; j < time; j+=5) {
                if (j === this.cakeList[i].timeToBake) {
                    console.log(`${this.cakeList[i]._name}, menit ke ${j}: done, time to eat cake!`);
                } else if (j === this.cakeList[i].timeToBake - 5) {
                    console.log(`${this.cakeList[i]._name}, menit ke ${j}: almost done`);
                } else if (j > this.cakeList[i].timeToBake) {
                    console.log(`${this.cakeList[i]._name}, menit ke ${j}: cake burnt!!!`);
                } else {
                    console.log(`${this.cakeList[i]._name}, menit ke ${j}: not done yet`);
                }
            }
        }
    }
}

let cake = new Cake();
let choco = new ChocoCake();
let peanut = new PeanutCake();
let cheese = new CheeseCake();

let cakeList = [];
cakeList.push(choco);
cakeList.push(peanut);
cakeList.push(cheese);

let oven = new Oven(cakeList);

console.log(oven);
oven.bake(40);
// choco.bake();
