'use strict'

class Cake {
    constructor(name, minutes, status) {
        this.name = name
        this.bakeTime = minutes
        this.nowBaking = 0
        this.status = status
    }

    bake() {
        for(let i = 1; i <= this.bakeTime; i+=5) {
            this.nowBaking += 5;
            if((this.nowBaking + 5) == this.bakeTime) {
                this.status = 'hampir matang';
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking < this.bakeTime) {
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking == this.bakeTime) {
                this.status = 'matang'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            } else if(this.nowBaking > this.bakeTime){
                this.status = 'hangus'
                console.log(`${this.name}, menit ke ${this.nowBaking} : ${this.status}`)
            }
        }
    }
}

class ChocolateCake extends Cake {
    constructor(name, minutes, status) {
        super(name, minutes, status)

    }   
}

class PeanutCake extends Cake {
    constructor(name, minutes, status) {
        super(name, minutes, status)

    }
}

class CheeseCake extends Cake {
    constructor(name, minutes, status) {
        super(name, minutes, status)
        
    }
}

var chocolate = new ChocolateCake('Chocolate Cake', 20, 'mentah');
var peanut = new PeanutCake('Peanut Cake', 30, 'mentah');
var cheese = new CheeseCake('Chese Cake', 35, 'mentah');

chocolate.bake();
console.log(`----------------------`);
peanut.bake();
console.log(`----------------------`);
cheese.bake();
console.log(`----------------------`);
