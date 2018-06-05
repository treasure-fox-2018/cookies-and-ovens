// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
// Your code here
class Cake {
    constructor (name, bakingTime) {
        this.name = name
        this.bakingTime = bakingTime
        this.currentTime = 0
        this.status = 'mentah'
    }
}
class ChocolateCake extends Cake {
    constructor (name, bakingTime) {
        super (name, bakingTime)
    }
}

class PeanutCake extends Cake {
    constructor (name, bakingTime) {
        super (name, bakingTime)
    }
}

class CheeseCake extends Cake {
    constructor (name, bakingTime) {
        super (name, bakingTime)
    }
} 

class Oven {
    constructor () {

    }

    static baking (minutes) {

        let chocolateCake = new ChocolateCake ('Kue coklat', 20)
        let peanutCake = new PeanutCake ('Kue Kacang', 30)
        let cheeseCake = new CheeseCake ('Kue Keju', 35)
       
        for(let x=1; x<=minutes; x++) {

            chocolateCake.currentTime += 1
            peanutCake.currentTime += 1
            cheeseCake.currentTime += 1

            if(chocolateCake.currentTime === chocolateCake.bakingTime -5) {
                chocolateCake.status = 'hampir matang'
            }else if(chocolateCake.currentTime === chocolateCake.bakingTime) {
                chocolateCake.status = 'matang'
            }else if(chocolateCake.currentTime === chocolateCake.bakingTime +5) {
                chocolateCake.status = 'hangus'
            }

            if(peanutCake.currentTime === peanutCake.bakingTime -5) {
                peanutCake.status = 'hampir matang'
            }else if(peanutCake.currentTime === peanutCake.bakingTime) {
                peanutCake.status = 'matang'
            }else if(peanutCake.currentTime === peanutCake.bakingTime +5) {
                peanutCake.status = 'hangus'
            }

            if(cheeseCake.currentTime === cheeseCake.bakingTime -5) {
                cheeseCake.status = 'hampir matang'
            }else if(cheeseCake.currentTime === cheeseCake.bakingTime) {
                cheeseCake.status = 'matang'
            }else if(cheeseCake.currentTime === cheeseCake.bakingTime +5) {
                cheeseCake.status = 'hangus'
            }

            if(x%5 === 0) {
                console.log(`Menit ke ${x} status :`)
                console.log(`${chocolateCake.name} : ${chocolateCake.status}`)
                console.log(`${peanutCake.name} : ${peanutCake.status}`)
                console.log(`${cheeseCake.name} : ${cheeseCake.status}`)
                console.log(` `)
            }
       }     
    }
}

let bakeLength = 40
Oven.baking(bakeLength)

