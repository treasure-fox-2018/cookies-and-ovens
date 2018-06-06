"use strict"

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



class Kue{
    constructor(name,time){
        this.name=name
        this.time=time
    }
}

class KueKacang extends Kue{
    constructor(name,time){
        super(name,time)
    }
}

class KueCoklat extends Kue{
    constructor(name,time){
        super(name,time)
    }
}

class KueKeju extends Kue{
    constructor(name,time){
        super(name,time)

    }
}

class Oven{
    constructor(proses){
        this.proses=proses
        this.loyang=[]
    }

    addCookies(kue){
        this.loyang.push(kue)
    }


    bake(time){
        let startTime = 5
        for(var i=startTime; i<time; i+=5){
            if(i < this.proses.time-5){
                console.log(`${this.proses.name}, menit ke ${i}: mentah`)
            }else if(i === this.proses.time-5){
                console.log(`${this.proses.name}, menit ke ${i}: hampir`)
            }else if(i === this.proses.time){
                console.log(`${this.proses.name}, menit ke ${i}: matang`)
            }else{
                console.log(`${this.proses.name}, menit ke ${i}, hangus`)
            }
            } 
        }
    }


let chocolateCake = new KueCoklat('Kue Coklat',20)
// let nutCake = new KueKacang('Kue Kacang',30)
// let cheeseCake = new KueKeju('Kue Keju',35)
let cook = new Oven(chocolateCake)
cook.bake(30)

